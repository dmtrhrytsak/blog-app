import { useParams } from 'react-router-dom';

export const usePostIdParam = () => ({
  postId: Number(useParams<{ postId: string }>().postId),
});
