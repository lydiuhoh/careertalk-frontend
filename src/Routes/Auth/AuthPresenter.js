import React from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

import { Container, Card, Button } from '../../Components/commons';
import AppConfig from '../../config.json';

const googleClientId = AppConfig.GOOGLE_CLIENT_ID;

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fafafa;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding: 15px 3px;
`;

const AuthCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 50px 70px;
  background-color: white;
`;

const DefaultLoginButton = styled(Button)`
  font-size: 14px;
  width: 180px;
  border-radius: 2px;
  font-weight: 450;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.54);
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
`;

const Text = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  margin: 10px;
`;

const LogoImage = styled.img`
  width: 75px;
`;

const ImageBox = styled.div`
  padding: 35px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const StoreImage = styled.img`
  height: 70px;
  padding: 5px;
  cursor: pointer;
`;

export default ({ responseGoogle }) => {
  return (
    <HomeContainer>
      <AuthCard>
        <LogoImage src={require('../../images/logo_transparent.png')} />
        <Title>Welcome! Please sign in</Title>
        <GoogleLogin
          clientId={googleClientId}
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
        <Text>OR</Text>
        <DefaultLoginButton value="Sign in with default" onClick={() => console.log('click')} />
      </AuthCard>
      <ImageBox>
        <StoreImage
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.careertalk', '_blank')}
          src="https://raw.githubusercontent.com/junlee91/instagram-clone/master/frontend/src/images/PlayStore.png"
        />
        <StoreImage
          onClick={() => window.open(
            'https://itunes.apple.com/us/app/careertalk-find-your-jobs/id1435448112',
            '_blank'
          )}
          src="https://raw.githubusercontent.com/junlee91/instagram-clone/master/frontend/src/images/AppStore.png"
        />
      </ImageBox>
    </HomeContainer>
  );
};
