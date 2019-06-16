import { gql } from 'apollo-boost';

export const ISLOGGEDIN_QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export const LOCAL_LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export const ME = gql`
  query me {
    me {
      personal_email
      profile_url
      full_name
    }
  }
`;
