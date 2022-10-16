import { Link } from 'react-router-dom';

import { S } from './StyledPost';
import { Button } from '../ui/Button/Button';
import { makePostRoute } from '../../app/routes';

type PostProps = {
  id: number;
  title: string;
  body: string;
  onDelete: (postId: number) => void;
};

export const Post = ({ id, title, body, onDelete, ...props }: PostProps) => {
  return (
    <S.Post {...props}>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostBody>{body}</S.PostBody>
      <S.PostActions>
        <Link to={makePostRoute(id)}>
          <Button>Read</Button>
        </Link>
        <Button variant='outline' onClick={() => onDelete(id)}>
          Delete
        </Button>
      </S.PostActions>
    </S.Post>
  );
};
