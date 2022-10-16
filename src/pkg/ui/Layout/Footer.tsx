import { PropsWithChildren } from 'react';

import { S } from './Footer.styled';

const Footer = ({ children, ...props }: PropsWithChildren) => {
  return <S.Footer {...props}>{children}</S.Footer>;
};

const FooterLogo = ({ children }: PropsWithChildren) => {
  return <S.FooterLogo>{children}</S.FooterLogo>;
};

Footer.Logo = FooterLogo;

export { Footer };
