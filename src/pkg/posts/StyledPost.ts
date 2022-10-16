import styled from 'styled-components';

import { H4 } from '../ui/Typography/H4';
import { Body2 } from '../ui/Typography/Body2';

const Post = styled.div`
  padding: ${({ theme }) => theme.utils.rem('16px')};
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.palette.common.white};
`;

const PostTitle = styled(H4)``;

const PostBody = styled(Body2)`
  margin-bottom: ${({ theme }) => theme.utils.rem('8px')};
`;

const PostActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.utils.rem('8px')};
`;

export const S = {
  Post,
  PostTitle,
  PostBody,
  PostActions,
};
