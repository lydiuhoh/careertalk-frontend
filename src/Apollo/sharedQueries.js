import { gql } from 'apollo-boost';

export const ISLOGGEDIN_QUERY = gql`
  {
    isLoggedIn @client
  }
`;
