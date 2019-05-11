import React from 'react';
import { ThemeProvider } from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';

import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';
import Router from './Router';

const ISLOGGEDIN_QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const { data: { isLoggedIn } } = useQuery(ISLOGGEDIN_QUERY);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
};
