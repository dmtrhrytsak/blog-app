import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.palette.common.black};
`;

const HeaderLogo = styled(Logo)`
  margin-bottom: ${({ theme }) => theme.utils.rem('4px')};

  text-align: center;
`;

const HeaderNav = styled.nav``;

const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.utils.rem('16px')};
`;

const HeaderNavListItem = styled.li``;

const HeaderNavLink = styled(Link)`
  color: ${({ theme }) => theme.palette.common.white};
`;

export const S = {
  Header,
  HeaderLogo,
  HeaderNav,
  HeaderNavList,
  HeaderNavListItem,
  HeaderNavLink,
};
