import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';

import AuthPresenter from './AuthPresenter';
import { GOOGLE_SIGN_IN, LOCAL_LOG_IN } from './AuthQueries';

const Auth = props => {
  const [loading, setLoading] = useState(false);
  const googleSiginMutation = useMutation(GOOGLE_SIGN_IN);
  const localLoginMutation = useMutation(LOCAL_LOG_IN);

  const redirectToHome = () => {
    const { history: { push } } = props;

    push('/');
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

  return <AuthPresenter loading={loading} responseGoogle={responseGoogle} />;
};

export default Auth;
