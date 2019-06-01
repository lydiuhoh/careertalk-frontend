import React from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

import { Container, Card, Loading } from '../../Components/commons';
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
  min-width: 300px;
  min-height: 300px;
  background-color: white;
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

const LoadingDiv = styled.div`
  padding: 10px 0;
  margin: 5px 0;
`;

export default ({ responseGoogle, loading, showGoogle }) => {
  return (
    <HomeContainer>
      <AuthCard>
        <LogoImage src={require('../../images/logo_transparent.png')} />
        <Title>Welcome!</Title>
        {loading ? (
          <LoadingDiv>
            <Loading />
          </LoadingDiv>
        ) : (
          <>
            {showGoogle && (
              <GoogleLogin
                clientId={googleClientId}
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            )}
          </>
        )}
      </AuthCard>
      <ImageBox>
        <StoreImage
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.careertalk', '_blank')
          }
          src="https://raw.githubusercontent.com/junlee91/instagram-clone/master/frontend/src/images/PlayStore.png"
        />
        <StoreImage
          onClick={() => window.open(
            'https://itunes.apple.com/us/app/careertalk-find-your-jobs/id1435448112',
            '_blank'
          )
          }
          src="https://raw.githubusercontent.com/junlee91/instagram-clone/master/frontend/src/images/AppStore.png"
        />
      </ImageBox>
    </HomeContainer>
  );
};
