import { useCallback, useState } from "react";
import { User, UserService } from "t-basilio-sdk";
import useAuth from "./useAuth";

export default function useUser() {
  const [detailedUser, setDetailedUser] = useState<User.Detailed>();
  const { user } = useAuth();

  const fetchUser = useCallback(async function () {
    if (user)
      await UserService.getDetailedUser(user.id).then(setDetailedUser);
  }, [user]);

  return {
    detailedUser,
    fetchUser,
  };
}
