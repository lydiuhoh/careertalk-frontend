import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import AppPresenter from './AppPresenter';

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <AppPresenter />
  </ThemeProvider>
);

export default AppContainer;
