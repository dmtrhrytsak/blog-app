import { httpClient } from '../http/httpClient';
import { API_URL } from '../../app/constants';
import type {
  AddPostRequest,
  AddPostResponse,
  DeletePostResponse,
  FetchPostsResponse,
} from './types';

const baseUrl = `${API_URL}/posts`;

const fetchPosts = () => httpClient.get<FetchPostsResponse>(baseUrl);

const addPost = (post: AddPostRequest) =>
  httpClient.post<AddPostRequest, AddPostResponse>(baseUrl, post);

const updatePost = (postId: number, post: AddPostRequest) =>
  httpClient.put<AddPostRequest, AddPostResponse>(`${baseUrl}/${postId}`, post);

const deletePost = (postId: number) =>
  httpClient.del<DeletePostResponse>(`${baseUrl}/${postId}`);

export const postsAPI = {
  fetchPosts,
  addPost,
  updatePost,
  deletePost,
};
