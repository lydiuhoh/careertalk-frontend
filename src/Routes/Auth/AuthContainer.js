import React from 'react';
import { useMutation } from 'react-apollo-hooks';

import AuthPresenter from './AuthPresenter';
import { GOOGLE_SIGN_IN, LOCAL_LOG_IN } from './AuthQueries';

const Auth = () => {
  const googleSiginMutation = useMutation(GOOGLE_SIGN_IN);
  const localLoginMutation = useMutation(LOCAL_LOG_IN);

  const responseGoogle = async res => {
    const { tokenId, googleId } = res;

    if (tokenId && googleId) {
      try {
        const { data: { userLogin: token } } = await googleSiginMutation({
          variables: {
            tokenId,
            googleId
          }
        });
        localLoginMutation({ variables: { token } });
      } catch (error) {
        // TODO: Error handling
        console.error(error.message);
      }
    }
  };

  return <AuthPresenter responseGoogle={responseGoogle} />;
};

export default Auth;
