import styled from 'styled-components';

import { H5 } from '../Typography/H5';

const Logo = styled.div``;

const LogoText = styled(H5)`
  color: ${({ theme }) => theme.palette.common.white};

  cursor: default;
`;
export const S = {
  Logo,
  LogoText,
};
