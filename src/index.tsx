import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { App } from './app/App';
import { Routing } from './app/Routing';
import { wire } from './app/wire';
import { store } from './app/store';
import { GlobalStyle } from './app/GlobalStyle';
import { theme } from './app/theme';

import 'react-toastify/dist/ReactToastify.css';
import 'reset-css';

wire();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App>
          <GlobalStyle />
          <ToastContainer />
          <Routing />
        </App>
      </Router>
    </ThemeProvider>
  </Provider>,
);
