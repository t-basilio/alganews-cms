import { Post, PostService } from "t-basilio-sdk";
import { useCallback, useState } from "react";
import info from "../utils/info";

export default function useSinglePost(postId: number) {
  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);

  const publishPost = useCallback(async () => {
    await PostService.publishExistingPost(postId);
    info({
      title: "Post publicado",
      description: "Você publicou o post com sucesso",
    });
  }, [postId]);

  const fetchPost = useCallback((postId: number) => {
    setLoading(true);
    PostService.getExistingPost(postId)
      .then(setPost)
      .finally(() => setLoading(false));
  }, []);

  return {
    post,
    loading,
    publishPost,
    fetchPost,
  };
}
