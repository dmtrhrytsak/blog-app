import { S } from './StyledPostPage';

export const PostPage = () => {
  return (
    <S.PostPage>
      <S.PostPagePostDetails />
      <S.PostPageComments />
      <S.PostPageAddCommentForm />
    </S.PostPage>
  );
};
