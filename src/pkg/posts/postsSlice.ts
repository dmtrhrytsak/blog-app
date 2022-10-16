import { createSlice } from '@reduxjs/toolkit';

import type { PostsState } from './types';
import { postsAdapter } from './postsAdapter';
import { fetchPosts, deletePost, addPost, updatePost } from './thunks';

const initialState = postsAdapter.getInitialState<PostsState>({
  loading: false,
  error: null,
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      postsAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Failed to fetch posts';
    });
    builder.addCase(addPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      postsAdapter.addOne(state, action.payload);
      state.loading = false;
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Failed to add post';
    });
    builder.addCase(updatePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      postsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
      state.loading = false;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Failed to update post';
    });
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      postsAdapter.removeOne(state, action.payload.postId);
      state.loading = false;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Failed to delete post';
    });
  },
});

export const postsReducer = postsSlice.reducer;
