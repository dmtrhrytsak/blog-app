import { createSlice } from '@reduxjs/toolkit';

import type { CommentsState } from './types';
import { commentsAdapter } from './commentsAdapter';
import { fetchComments, addComment } from './thunks';

const initialState = commentsAdapter.getInitialState<CommentsState>({
  loading: false,
  error: null,
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      commentsAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Failed to fetch comments';
    });
    builder.addCase(addComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      commentsAdapter.addOne(state, action.payload);
      state.loading = false;
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Failed to add comment';
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
