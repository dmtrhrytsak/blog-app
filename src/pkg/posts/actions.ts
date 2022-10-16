import { useAppDispatch } from '../redux/hooks';
import { fetchPosts, addPost, updatePost, deletePost } from './thunks';
import type { Post, PostWithoutId } from './types';

export const usePostActions = () => {
  const dispatch = useAppDispatch();

  return {
    fetchPosts: () => dispatch(fetchPosts()).unwrap(),
    addPost: (post: PostWithoutId) => dispatch(addPost(post)).unwrap(),
    updatePost: (post: Post) => dispatch(updatePost(post)).unwrap(),
    deletePost: (id: number) => dispatch(deletePost(id)).unwrap(),
  };
};
