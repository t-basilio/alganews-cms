import styled from "styled-components";
import withBoundary from "../../core/hoc/withBoundary";
import MarkDownEditor from "../components/MarkdownEditor/MarkdownEditor";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import { PostService, Post } from "t-basilio-sdk";
import Loading from "../components/Loading";
import info from "../../core/utils/info";
import confirm from "../../core/utils/confirm";
import { modal } from "../../core/utils/modal";

interface PostPreviewProps {
  postId: number;
}

function PostPreview(props: PostPreviewProps) {

  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);

  async function publishPost() {
    await PostService.publishExistingPost(props.postId);
    info({
      title: "Post publicado",
      description: "Você publicou o post com sucesso",
    });
  }

  function reopenModal() {
    modal({
      children: <PostPreview postId={props.postId} />,
    });
  }

  useEffect(() => {
    setLoading(true);
    PostService.getExistingPost(props.postId)
      .then(setPost)
      .finally(() => setLoading(false));
  }, [props.postId]);

  if (loading) return <Loading show />;

  if (!post) return null;

  return (
    <PostPreviewWrapper>
      <PostPreviewHeading>
        <PostPreviewTitle>{post.title}</PostPreviewTitle>
        <PostPreviewActions>
          <Button
            option="danger"
            label={"Publicar"}
            disabled={post.published}
            onClick={() => {
              confirm({
                title: "Publicar o post?",
                onConfirm: publishPost,
                onCancel: reopenModal,
              });
            }}
          />
          <Button
            option="primary"
            label={"Editar"}
            disabled={post.published}
            onClick={() => window.location.pathname = `/posts/editar/${props.postId}`}
          />
        </PostPreviewActions>
      </PostPreviewHeading>

      <PostPreviewImage src={post.imageUrls.medium} />

      <PostPreviewContent>
        <MarkDownEditor readOnly={true} value={post.body} />
      </PostPreviewContent>
    </PostPreviewWrapper>
  );
}

const PostPreviewWrapper = styled.div`
  background-color: #f3f8fa;
  padding: 24px;
  border: 1px solid #ccc;
  width: 655px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
`;

const PostPreviewHeading = styled.header`
  display: flex;
  justify-content: space-between;
`;

const PostPreviewTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const PostPreviewActions = styled.div`
  display: flex;
  gap: 8px;
`;

const PostPreviewImage = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
`;

const PostPreviewContent = styled.div``;

export default withBoundary(PostPreview);
