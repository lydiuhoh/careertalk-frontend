import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import styled from 'styled-components';

import withRouteComponent from './withRouteComponent';
import { Container, Button, BaseCard } from '../Components/commons';
import AppConfig from '../config.json';

const googleClientId = process.env.NODE_ENV === 'production' ? process.env.GOOGLE_CLIENT_ID : AppConfig.GOOGLE_CLIENT_ID;

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding: 15px 0;
`;

const AuthCard = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  padding: 30px 70px;
  height: 300px;
`;

const DefaultLoginButton = styled(Button)`
  font-size: 14px;
  width: 180px;
  margin-top: 10px;
  border-radius: 2px;
  font-weight: 450;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.54);
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
`;

// ---------------------------------------------------------------------------- //
const GOOGLE_SIGN_IN = gql`
  mutation userLogin($tokenId: String!, $googleId: String!) {
    userLogin(tokenId: $tokenId, googleId: $googleId)
  }
`;

const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

const LOCAL_LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

const ISLOGGEDIN_QUERY = gql`
  {
    isLoggedIn @client
  }
`;
// ---------------------------------------------------------------------------- //

const Home = props => {
  const { data: { isLoggedIn } } = useQuery(ISLOGGEDIN_QUERY);
  const googleSiginMutation = useMutation(GOOGLE_SIGN_IN);
  const localLoginMutation = useMutation(LOCAL_LOG_IN);
  const localLogoutMutation = useMutation(LOCAL_LOG_OUT);
  const [homeText, setHomeText] = useState('Welcome! Please sign in.');

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
        setHomeText('Great! You are now logged in.');
      } catch (error) {
        // TODO: Error handling
        console.error(error.message);
      }
    }
  };

  const signOutGoogle = () => {
    localLogoutMutation();
    setHomeText('Successfully signed out!');
  };

  return (
    <HomeContainer isSideBar={props.isSideBar}>
      <AuthCard>
        <Title>{homeText}</Title>

        {isLoggedIn ? (
          <GoogleLogout
            clientId={googleClientId}
            buttonText="Sign out"
            onLogoutSuccess={() => signOutGoogle()}
          />
        ) : (
          <GoogleLogin
            clientId={googleClientId}
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        )}

        <DefaultLoginButton value="Sign in with default" onClick={() => console.log('click')} />
      </AuthCard>
    </HomeContainer>
  );
};

export default withRouteComponent(Home);
