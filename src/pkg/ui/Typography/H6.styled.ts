import styled from 'styled-components';

const H6 = styled.h6`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  line-height: ${({ theme }) => theme.typography.h6.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h6.letterSpacing};
`;

export const S = {
  H6,
};
