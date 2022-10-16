import styled from 'styled-components';

const H5 = styled.h5`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  line-height: ${({ theme }) => theme.typography.h5.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h5.letterSpacing};
`;

export const S = {
  H5,
};
