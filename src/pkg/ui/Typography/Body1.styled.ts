import styled from 'styled-components';

export const Body1 = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body1.letterSpacing};
`;

export const S = {
  Body1,
};
