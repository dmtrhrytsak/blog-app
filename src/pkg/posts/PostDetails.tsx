import { Link } from 'react-router-dom';

import { S } from './StyledPostDetails';
import { Button } from '../ui/Button/Button';
import { useAppSelector } from '../redux/hooks';
import { selectPostById } from './selectors';
import { usePostIdParam } from './params';
import { makeEditRoute } from '../../app/routes';

export const PostDetails = ({ className }: { className?: string }) => {
  const { postId } = usePostIdParam();
  const post = useAppSelector((state) => selectPostById(state, postId));

  if (!post) {
    return null;
  }

  return (
    <S.PostDetails className={className}>
      <S.PostDeatailsTitle>{post.title}</S.PostDeatailsTitle>
      <S.PostDetailsBody>{post.body}</S.PostDetailsBody>

      <Link to={makeEditRoute(postId)}>
        <Button>Edit</Button>
      </Link>
    </S.PostDetails>
  );
};
