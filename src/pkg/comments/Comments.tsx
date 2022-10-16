import { Stack } from '@mui/material';

import { S } from './StyledComments';
import { Comment } from './Comment';
import { useAppSelector } from '../redux/hooks';
import { selectCommentsByPostId } from './selectors';
import { usePostIdParam } from '../posts/params';

export const Comments = ({ className }: { className?: string }) => {
  const { postId } = usePostIdParam();
  const comments = useAppSelector((state) =>
    selectCommentsByPostId(state, postId),
  );

  return (
    <S.Comments className={className}>
      <S.CommentsHeading>Comments</S.CommentsHeading>

      <Stack spacing={1}>
        {comments.map((comment) => (
          <Comment key={comment.id}>
            <Comment.Body>{comment.body}</Comment.Body>
          </Comment>
        ))}
      </Stack>
    </S.Comments>
  );
};
