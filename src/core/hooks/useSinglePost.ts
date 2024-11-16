import { useCallback, useState } from "react";
import { Post, PostService } from "t-basilio-sdk";
import info from "../../core/utils/info";

export default function useSinglePost() {
  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);

  const publishPost = useCallback(async function (postId: number) {
    await PostService.publishExistingPost(postId);
    info({
      title: "Post publicado",
      description: "Você publicou o post com sucesso",
    });
  }, []);

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
