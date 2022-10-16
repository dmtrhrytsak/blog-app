import styled from 'styled-components';

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
`;

export const S = {
  H3,
};
