import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./Post.slice";
import { useDispatch } from "react-redux";
import { editorReducer } from "./Editor.slice";

const store = configureStore({
  reducer: {
    post: postReducer,
    editor: editorReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
