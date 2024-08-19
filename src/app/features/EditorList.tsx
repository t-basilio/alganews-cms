import styled from "styled-components";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import getEditorDrescription from "../../sdk/utils/getEditorDescription";

export default function EditorList() {
  const [editors, setEditors] = useState<User.EditorSummary[]>([])

  useEffect(() => {
    UserService
      .getAllEditors()
      .then(setEditors);
  }, [])
  
  return (
    <EditorListWrapper>

      {
        editors.map((editor, i) => {
          return <Profile key={i}
            editorId={editor.id}
            name={editor.name}
            description= { getEditorDrescription(new Date(editor.createdAt))}
            avatarUrl={editor.avatarUrls.small}
          />
        })
      }
      
    </EditorListWrapper>
  );
}

const EditorListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
