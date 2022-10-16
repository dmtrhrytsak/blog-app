import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.utils.rem('16px')};

  ${({ theme }) => theme.breakpoints.sm} {
    max-width: ${({ theme }) => theme.screens.sm};
    padding: 0 ${({ theme }) => theme.utils.rem('32px')};
  }

  ${({ theme }) => theme.breakpoints.lg} {
    max-width: ${({ theme }) => theme.screens.lg};
    padding: 0 ${({ theme }) => theme.utils.rem('64px')};
  }

  ${({ theme }) => theme.breakpoints.xl} {
    max-width: ${({ theme }) => theme.screens.xl};
    padding: 0 ${({ theme }) => theme.utils.rem('80px')};
  }

  ${({ theme }) => theme.breakpoints.xxl} {
    max-width: ${({ theme }) => theme.screens.xxl};
    padding: 0 ${({ theme }) => theme.utils.rem('96px')};
  }
`;

export const S = {
  Container,
};
