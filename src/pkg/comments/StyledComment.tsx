import styled from 'styled-components';
import { Body2 } from '../ui/Typography/Body2';

const Comment = styled.div`
  padding: ${({ theme }) => theme.utils.rem('24px')};
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.palette.common.white};
`;

const CommentBody = styled(Body2)`
  margin-bottom: ${({ theme }) => theme.utils.rem('4px')};
`;

export const S = {
  Comment,
  CommentBody,
};
