import React from 'react';
import styled from 'styled-components';

import { Container, Button } from '../Components/commons';

const ErrorContainer = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;

const ErrorButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor}
  color: ${props => props.theme.yellowColor};
  width: 200px;
  margin-top: 20px;
  font-weight: 600;
  align-self: center;
`;

const ServerErrorContainer = styled.div`
  display: flex;
  width: 100%;
  flex-start: left;
  flex-direction: column;
  color: ${props => props.theme.primaryColor};
`;

const ErrorTitle = styled.p`
  font-size: 55px;
  font-weight: bold;
  padding: 25px 0;
`;

const WellText = styled(ErrorTitle)`
  font-size: 40px;
  font-weight: 450;
`;

const HintText = styled(ErrorTitle)`
  font-size: 15px;
  font-weight: 450;
  padding: 10px 0;
`;

const ReactError = () => (
  <h1>
    Sorry something went wrong.
    <span role="img" aria-label="sad">
      😥
    </span>
  </h1>
);

const ServerError = () => (
  <ServerErrorContainer>
    <ErrorTitle>Shoot!</ErrorTitle>
    <WellText>Well, this is unexpected...</WellText>
    <HintText>Error code: 500</HintText>
    <HintText>
      An error has occurred and we're working to fix the problem! We'll be up and runing shortly
    </HintText>
    <HintText>
      Please report the error to our developers and thanks for your patience!
    </HintText>
    <ErrorButton
      value="Report Error"
      onClick={() => console.log('TODO: send email to developers')}
    />
  </ServerErrorContainer>
);

export const ErrorBox = ({ message }) => (
  <ErrorContainer>
    {message && message.startsWith('GraphQL error') ? (
      <ServerError />
    ) : (
      <>
        <ReactError />
        <ErrorButton
          value="Go Back"
          onClick={() => {
            window.location = '/';
            window.location.reload(true); // hard reload
          }}
        />
      </>
    )}
  </ErrorContainer>
);

export default () => (
  <Container>
    <ErrorBox />
  </Container>
);
