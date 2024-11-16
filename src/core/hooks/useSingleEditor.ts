import { User, UserService } from "t-basilio-sdk";
import { useCallback, useState } from "react";

export default function useSingleEditor() {
  const [editor, setEditor] = useState<User.EditorDetailed>();

  const fetchEditor = useCallback(async function (editor: number) {
    UserService.getExistingEditor(editor).then(setEditor);
  }, []);

  return {
    fetchEditor,
    editor,
  };
}
