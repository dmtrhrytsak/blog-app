import { createAsyncThunk } from '@reduxjs/toolkit';

import type {
  AddCommentRequest,
  AddCommentResponse,
  FetchCommentsRequest,
  FetchCommentsResponse,
} from './types';

import { commentsAPI } from './commentsAPI';

export const fetchComments = createAsyncThunk<
  FetchCommentsResponse,
  FetchCommentsRequest
>('comments/fetchComments', async (_undefined, { rejectWithValue }) => {
  try {
    const data = await commentsAPI.fetchComments();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const addComment = createAsyncThunk<
  AddCommentResponse,
  AddCommentRequest
>('comments/addComment', async (comment, { rejectWithValue }) => {
  try {
    const data = await commentsAPI.addComment(comment);
    return { ...comment, id: data.id };
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
