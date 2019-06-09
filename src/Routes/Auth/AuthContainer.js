import React, { useState } from 'react';
import { useQuery, useMutation, useApolloClient } from 'react-apollo-hooks';

import AuthPresenter from './AuthPresenter';
import { GOOGLE_SIGN_IN, LOCAL_LOG_IN } from './AuthQueries';
import { ISLOGGEDIN_QUERY, LOCAL_LOG_OUT } from '../../Apollo/sharedQueries';

const Auth = props => {
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);
  const googleSiginMutation = useMutation(GOOGLE_SIGN_IN);
  const localLoginMutation = useMutation(LOCAL_LOG_IN);
  const localLogoutMutation = useMutation(LOCAL_LOG_OUT);
  const { data: { isLoggedIn } } = useQuery(ISLOGGEDIN_QUERY);

  const redirectToHome = () => {
    const { history: { push } } = props;
    push('/');
  };

  const signoutGoogle = () => {
    localLogoutMutation();
    client.resetStore();
    redirectToHome();
  };

  const responseGoogle = async res => {
    const { tokenId, googleId } = res;

    if (tokenId && googleId) {
      try {
        setLoading(true);
        const { data: { userLogin: token } } = await googleSiginMutation({
          variables: {
            tokenId,
            googleId
          }
        });
        localLoginMutation({ variables: { token } });
        setLoading(false);
        redirectToHome();
      } catch (error) {
        // TODO: Error handling
        console.error(error.message);
      }
    }
  };

  return (
    <AuthPresenter
      loading={loading}
      isLoggedIn={isLoggedIn}
      responseGoogle={responseGoogle}
      signoutGoogle={signoutGoogle}
    />
  );
};

export default Auth;
