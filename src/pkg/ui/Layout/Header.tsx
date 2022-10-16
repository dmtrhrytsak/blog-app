import { PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';

import { S } from './Header.styled';

const Header = ({ children, ...props }: PropsWithChildren) => {
  return <S.Header {...props}>{children}</S.Header>;
};

export const HeaderLogo = ({ children }: PropsWithChildren) => {
  return <S.HeaderLogo>{children}</S.HeaderLogo>;
};

export const HeaderNav = ({ children }: PropsWithChildren) => {
  return <S.HeaderNav>{children}</S.HeaderNav>;
};

export const HeaderNavList = ({ children }: PropsWithChildren) => {
  return <S.HeaderNavList>{children}</S.HeaderNavList>;
};

export const HeaderNavListItem = ({ children }: PropsWithChildren) => {
  return <S.HeaderNavListItem>{children}</S.HeaderNavListItem>;
};

export const HeaderNavLink = ({
  children,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return <S.HeaderNavLink {...props}>{children}</S.HeaderNavLink>;
};

Header.Logo = HeaderLogo;
Header.Nav = HeaderNav;
Header.NavList = HeaderNavList;
Header.NavListItem = HeaderNavListItem;
Header.NavLink = HeaderNavLink;

export { Header };
