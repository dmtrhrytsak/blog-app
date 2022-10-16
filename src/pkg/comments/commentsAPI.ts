import { API_URL } from '../../app/constants';
import { httpClient } from '../http/httpClient';
import {
  AddCommentRequest,
  AddCommentResponse,
  FetchCommentsResponse,
} from './types';

const baseUrl = `${API_URL}/comments`;

const fetchComments = () => httpClient.get<FetchCommentsResponse>(baseUrl);

const addComment = (comment: AddCommentRequest) =>
  httpClient.post<AddCommentRequest, AddCommentResponse>(baseUrl, comment);

export const commentsAPI = {
  fetchComments,
  addComment,
};
