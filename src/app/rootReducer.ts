import { combineReducers } from '@reduxjs/toolkit';

import { postsReducer } from '../pkg/posts/postsSlice';
import { commentsReducer } from '../pkg/comments/commentsSlice';

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});
