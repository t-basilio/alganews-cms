import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./Post.slice";
import { useDispatch } from "react-redux";
import { editorReducer } from "./Editor.slice";
import authReducer from "./Auth.slice";

const store = configureStore({
  reducer: {
    post: postReducer,
    editor: editorReducer,
    auth: authReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
