import { PropsWithChildren } from 'react';

import { S } from './StyledComment';

const Comment = ({ children, ...props }: PropsWithChildren) => {
  return <S.Comment {...props}>{children}</S.Comment>;
};

const CommentBody = ({ children }: PropsWithChildren) => {
  return <S.CommentBody>{children}</S.CommentBody>;
};

Comment.Body = CommentBody;

export { Comment };
