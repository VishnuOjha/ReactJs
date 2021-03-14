import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { theme } from './theme/theme';
import GlobalStyles from './theme/global';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
