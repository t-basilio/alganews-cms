import Service from "t-basilio-sdk/dist/Service";
import AuthService from "./Authorization.service";
import axios from "axios";

const { REACT_APP_API_BASE_URL } = process.env;

if (REACT_APP_API_BASE_URL) Service.setBaseUrl(REACT_APP_API_BASE_URL);

Service.setRequestInterceptors(async (request) => {
  const accessToken = AuthService.getAccessToken();

  //inject access token on request
  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return request;
});

// for multiple requests
let isRefreshing: boolean = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

Service.setResponseInterceptors(
  (response) => response,
  async (error) => {
    // retrieve request info
    const prevRequest = error?.config;

    // if it has authentication error and it didn't retry
    if (error?.response?.status === 401 && !prevRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            prevRequest.headers["Authorization"] = "Bearer " + token;
            return axios(prevRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      prevRequest._retry = true;
      isRefreshing = true;

      // retrieve code verifier and refresh token
      const storage = {
        codeVerifier: AuthService.getCodeVerifier(),
        refreshToken: AuthService.getRefreshToken(),
      };

      const { codeVerifier, refreshToken } = storage;

      // if not exists, It can't be able to renew token
      if (!refreshToken || !codeVerifier) {
        AuthService.imperativelySendToLogout();
        return;
      }

      try {
        // renew tokens
        const tokens = await AuthService.getNewToken({
          codeVerifier,
          refreshToken,
        });

        // save tokens for new requests
        AuthService.setAccessToken(tokens.access_token);
        AuthService.setRefreshToken(tokens.refresh_token);

        processQueue(null, tokens.access_token);
        
        // return new axios call with this request
        return axios({
          ...prevRequest,
          headers: {
            ...prevRequest.headers,
            Authorization: `Bearer ${tokens.access_token}`,
          },
          _retry: true,
        });
      } catch (err) {
        processQueue(err, null);
        throw err;
      } finally {
        isRefreshing = false;
      }
    }

    throw error;
  }
);
