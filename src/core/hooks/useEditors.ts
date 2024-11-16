import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import * as EditorActions from "../store/Editor.slice";

export default function useEditors() {
  const dispatch = useAppDispatch();

  const loading = useSelector((state: RootState) => state.editor.fetching);
  const editorsList = useSelector(
    (state: RootState) => state.editor.editorsList
  );

  const fetchAllEditors = useCallback(
    async function () {
      dispatch(EditorActions.fetchAllEditors());
    },
    [dispatch]
  );

  return {
    loading,
    editorsList,
    fetchAllEditors,
  };
}
