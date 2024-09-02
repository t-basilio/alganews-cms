import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styled from "styled-components";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import { UserService, User, getEditorDescription } from "t-basilio-sdk";

export default function EditorList() {
  const [editors, setEditors] = useState<User.EditorSummary[]>([]);

  useEffect(() => {
    UserService.getAllEditors().then(setEditors);
  }, []);

  if (!editors.length)
    return (
      <EditorListWrapper>
        <Skeleton height={82} />
        <Skeleton height={82} />
        <Skeleton height={82} />
      </EditorListWrapper>
    );

  return (
    <EditorListWrapper>
      {editors.map((editor) => {
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
    </EditorListWrapper>
  );
}

const EditorListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
