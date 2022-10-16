import styled from 'styled-components';

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h2.letterSpacing};
`;

export const S = {
  H2,
};
