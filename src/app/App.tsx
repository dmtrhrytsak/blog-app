import { PropsWithChildren } from 'react';

import { S } from './StyledApp';
import { Container } from '../pkg/ui/Layout/Container';
import { Logo } from '../pkg/ui/Logo/Logo';
import { Header } from '../pkg/ui/Layout/Header';
import { Footer } from '../pkg/ui/Layout/Footer';
import { getHomeRoute, getPostsRoute } from './routes';

export const App = ({ children }: PropsWithChildren) => {
  return (
    <S.App>
      <S.AppHeader>
        <Container>
          <Header.Logo>
            <Logo.Text>bloggy</Logo.Text>
          </Header.Logo>

          <Header.Nav>
            <Header.NavList>
              <Header.NavListItem>
                <Header.NavLink to={getHomeRoute()}>Home</Header.NavLink>
              </Header.NavListItem>

              <Header.NavListItem>
                <Header.NavLink to={getPostsRoute()}>Posts</Header.NavLink>
              </Header.NavListItem>
            </Header.NavList>
          </Header.Nav>
        </Container>
      </S.AppHeader>

      <S.AppContent>
        <Container>{children}</Container>
      </S.AppContent>

      <S.AppFooter>
        <Container>
          <Footer.Logo>
            <Logo.Text>bloggy</Logo.Text>
          </Footer.Logo>
        </Container>
      </S.AppFooter>
    </S.App>
  );
};
