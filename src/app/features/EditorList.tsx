import styled from "styled-components";
import Profile from "../components/Profile";
import { useEffect } from "react";
import PostService from "../../sdk/services/Post.service";

export default function EditorList() {
  useEffect(() => {
    const post = PostService.getAllPosts({
      size: 20,
      page: 2,
      sort: ["id", "desc"]
    });
    console.log(post);
  }, []);

  return (
    <EditorListWrapper>
      <Profile
        editorId={1}
        name="Eduardo Lima"
        description="editor há 8 anos"
      />
      <Profile
        editorId={2}
        name="Alex Teixeira"
        description="editor há 3 anos"
      />
      <Profile
        editorId={3}
        name="Camila Vasconcellos"
        description="editor há 6 anos"
      />
      <Profile
        editorId={4}
        name="Gabriel Freitas"
        description="editor há 2 meses"
      />
      <Profile
        editorId={5}
        name="João Frango"
        description="editor há 2 meses"
      />
    </EditorListWrapper>
  );
}

const EditorListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
