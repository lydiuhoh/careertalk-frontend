import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';

import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';
import Router from './Router';

export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Router />
        </>
      </ThemeProvider>
      <ToastContainer
        autoClose={2500}
        progressClassName={null}
        draggable
        pauseOnVisibilityChange={false}
        pauseOnHover={false}
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </>
  );
};
