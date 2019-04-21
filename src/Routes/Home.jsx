import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import withRouteComponent from './withRouteComponent';
import { Container } from '../Components/commons';
import AppConfig from '../config.json';

const googleClientId = AppConfig.GOOGLE_CLIENT_ID;

const responseGoogle = response => {
  console.log(response.tokenId);
};

const Home = props => (
  <Container isSideBar={props.isSideBar}>
    <h1>Home</h1>
    <GoogleLogin
      clientId={googleClientId}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
    <GoogleLogout
      clientId={googleClientId}
      buttonText="Logout"
      onLogoutSuccess={() => console.log('logged out!')}
    />
  </Container>
);

export default withRouteComponent(Home);
