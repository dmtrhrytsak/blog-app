import { useAppDispatch } from '../redux/hooks';
import { fetchComments, addComment } from './thunks';
import type { CommentWithoutId } from './types';

export const useCommentsActions = () => {
  const dispatch = useAppDispatch();

  return {
    fetchComments: () => dispatch(fetchComments()).unwrap(),
    addComment: (comment: CommentWithoutId) =>
      dispatch(addComment(comment)).unwrap(),
  };
};
