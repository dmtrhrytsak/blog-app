import styled from 'styled-components';

import { H4 } from '../ui/Typography/H4';

const Comments = styled.section``;

const CommentsHeading = styled(H4)`
  margin-bottom: ${({ theme }) => theme.utils.rem('12px')};
`;

export const S = {
  Comments,
  CommentsHeading,
};
