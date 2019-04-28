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
`;

export default () => (
  <Container>
    <ErrorContainer>
      <h1>
        Sorry something went wrong.
        <span role="img" aria-label="sad"> 😥 </span>
      </h1>
      <ErrorButton
        value="Go Back"
        onClick={() => {
          window.location = '/';
          window.location.reload(true); // hard reload
        }}
      />
    </ErrorContainer>
  </Container>
);
