import { createAsyncThunk } from '@reduxjs/toolkit';

import type {
  AddPostRequest,
  AddPostResponse,
  UpdatePostRequest,
  UpdatePostResponse,
  DeletePostRequest,
  DeletePostResponse,
  FetchPostsRequest,
  FetchPostsResponse,
} from './types';
import { postsAPI } from './postsAPI';

export const fetchPosts = createAsyncThunk<
  FetchPostsResponse,
  FetchPostsRequest
>('posts/fetchPosts', async (_undefined, { rejectWithValue }) => {
  try {
    const data = await postsAPI.fetchPosts();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const addPost = createAsyncThunk<AddPostResponse, AddPostRequest>(
  'posts/addPost',
  async (post, { rejectWithValue }) => {
    try {
      const data = await postsAPI.addPost(post);
      return { id: data.id, ...post };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const updatePost = createAsyncThunk<
  UpdatePostResponse,
  UpdatePostRequest
>('posts/updatePost', async (post, { rejectWithValue }) => {
  try {
    await postsAPI.updatePost(post.id, post);
    return post;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const deletePost = createAsyncThunk<
  DeletePostResponse,
  DeletePostRequest
>('posts/deletePost', async (postId, { rejectWithValue }) => {
  try {
    await postsAPI.deletePost(postId);
    return { postId };
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
