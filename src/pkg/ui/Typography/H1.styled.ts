import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
`;

export const S = {
  H1,
};
