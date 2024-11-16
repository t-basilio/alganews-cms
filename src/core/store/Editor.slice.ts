import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { User, UserService } from "t-basilio-sdk";

interface EditorStoreState {
  fetching: boolean;
  editorsList: User.EditorSummary[];
}

const initialState: EditorStoreState = {
  editorsList: [],
  fetching: false,
};

export const fetchAllEditors = createAsyncThunk(
  "editor/fetchAllEditors",
  async function () {
    const editors = await UserService.getAllEditors();
    return editors;
  }
);

export const editorReducer = createReducer(initialState, (builder) => {
  const pending = isPending(fetchAllEditors);
  const rejected = isRejected(fetchAllEditors);
  const fulfilled = isFulfilled(fetchAllEditors);

  builder
    .addCase(fetchAllEditors.fulfilled, (state, action) => {
      state.editorsList = action.payload;
    })
    .addMatcher(pending, (state) => {
      state.fetching = true;
    })
    .addMatcher(rejected, (state) => {
      state.fetching = false;
    })
    .addMatcher(fulfilled, (state) => {
      state.fetching = false;
    });
});
