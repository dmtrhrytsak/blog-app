import { PropsWithChildren } from 'react';

import { S } from './Logo.styled';

const Logo = ({ children, ...props }: PropsWithChildren) => {
  return <S.Logo {...props}>{children}</S.Logo>;
};

const LogoText = ({ children }: PropsWithChildren) => {
  return <S.LogoText>{children}</S.LogoText>;
};

Logo.Text = LogoText;

export { Logo };
