import styled from 'styled-components';

export const Body2 = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
`;

export const S = {
  Body2,
};
