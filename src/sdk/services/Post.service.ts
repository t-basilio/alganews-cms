import { Post } from "../@types";
import generateQueryString from "../utils/generateQueryString";
import Service from "./Service";

class PostService extends Service {
  static getAllPosts(search: Post.Query) {
    const queryString = generateQueryString(search)
    return this.Http.get<Post.Paginated>("/posts".concat(queryString)).then(this.getData);
  }

  static getExistingPost(id: number) {
    return this.Http.get<Post.Paginated>(`/posts/${id}`).then(this.getData);
  }

  static insertNewPost(post: Post.Input) {
    return this.Http.post<Post.Detailed>("/posts", post).then(this.getData);
  }
}

export default PostService;
