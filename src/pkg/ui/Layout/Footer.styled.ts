import styled from 'styled-components';

import { Logo } from '../Logo/Logo';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.utils.rem('16px')};

  background-color: ${({ theme }) => theme.palette.common.black};
`;

const FooterLogo = styled(Logo)``;

export const S = {
  Footer,
  FooterLogo,
};
