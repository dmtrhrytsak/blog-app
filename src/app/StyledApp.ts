import styled from 'styled-components';

import { Header } from '../pkg/ui/Layout/Header';
import { Content } from '../pkg/ui/Layout/Content';
import { Footer } from '../pkg/ui/Layout/Footer';

const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppHeader = styled(Header)`
  flex: 0 0 auto;
  height: ${({ theme }) => theme.sizes.header.height};
`;

const AppContent = styled(Content)`
  flex: 1 0 auto;
`;

const AppFooter = styled(Footer)`
  flex: 0 0 auto;
  height: ${({ theme }) => theme.sizes.footer.height};
`;

export const S = {
  App,
  AppHeader,
  AppContent,
  AppFooter,
};
