import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { gql, } from 'apollo-boost';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import styled from 'styled-components';

import withRouteComponent from './withRouteComponent';
import { Container, Button } from '../Components/commons';
import AppConfig from '../config.json';

const googleClientId = AppConfig.GOOGLE_CLIENT_ID;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  padding: 15px 0;
`;

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px;
`;

const TemplateButton = styled(Button)`
  width: 300px;
  margin: 30px 0;
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
      const { data: { userLogin: token } } = await googleSiginMutation({
        variables: {
          tokenId,
          googleId
        }
      });
      localLoginMutation({ variables: { token } });
      setHomeText('Great! You are now logged in.');
    } else {
      console.log('Google Sign in error');
    }
  };

  const signOutGoogle = () => {
    localLogoutMutation();
    setHomeText('Successfully signed out!');
  };

  return (
    <Container isSideBar={props.isSideBar}>
      <HomeContainer>
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

        <TemplateButton value="Templates" onClick={() => props.history.push('template')} />
      </HomeContainer>
    </Container>
  );
};

export default withRouteComponent(Home);
