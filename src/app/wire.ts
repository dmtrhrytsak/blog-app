import { store } from './store';
import { fetchPosts } from '../pkg/posts/thunks';
import { fetchComments } from '../pkg/comments/thunks';

export function wire() {
  store.dispatch(fetchPosts());
  store.dispatch(fetchComments());
}
