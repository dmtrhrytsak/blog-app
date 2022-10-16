import styled from 'styled-components';

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
`;

export const S = {
  H4,
};
