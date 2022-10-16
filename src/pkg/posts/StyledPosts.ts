import styled from 'styled-components';

import { H3 } from '../ui/Typography/H3';
import { Post } from './Post';

const Posts = styled.section``;

const PostsHeading = styled(H3)`
  margin-bottom: ${({ theme }) => theme.utils.rem('12px')};
`;

const PostsPost = styled(Post)`
  height: 100%;
`;

export const S = {
  Posts,
  PostsHeading,
  PostsPost,
};
