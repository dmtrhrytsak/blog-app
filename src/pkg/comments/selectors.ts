import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../redux/types';
import { commentsAdapter } from './commentsAdapter';

export const {
  selectAll: selectAllComments,
  selectById: selectCommentById,
  selectIds: selectCommentsIds,
} = commentsAdapter.getSelectors((state: RootState) => state.comments);

export const selectCommentsByPostId = createSelector(
  [selectAllComments, (_: RootState, postId: number) => postId],
  (comments, postId) => comments.filter((comment) => comment.postId === postId),
);
