import { getEditorDescription } from "t-basilio-sdk";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import useEditors from "../../core/hooks/useEditors";
import Profile from "../components/Profile";

export default function EditorList() {
  const { editorsList, loading, fetchAllEditors } = useEditors();

  useEffect(() => {
    fetchAllEditors();
  }, [fetchAllEditors]);

  if (!editorsList.length)
    return (
      <EditorListWrapper>
        <Skeleton height={82} />
        <Skeleton height={82} />
        <Skeleton height={82} />
      </EditorListWrapper>
    );

  return (
    <EditorListWrapper>
      {editorsList.map((editor) => {
        return (
          <Profile
            key={editor.id}
            editorId={editor.id}
            name={editor.name}
            description={getEditorDescription(new Date(editor.createdAt))}
            avatarUrl={editor.avatarUrls.small}
          />
        );
      })}
      { loading ? 'buscando informações' : null }
    </EditorListWrapper>
  );
}

const EditorListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
