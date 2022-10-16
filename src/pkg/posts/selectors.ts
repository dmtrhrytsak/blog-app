import type { RootState } from '../redux/types';
import { postsAdapter } from './postsAdapter';

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: RootState) => state.posts);
