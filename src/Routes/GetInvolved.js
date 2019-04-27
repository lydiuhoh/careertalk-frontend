import React from 'react';
import withRouteComponent from './withRouteComponent';
import { Container } from '../Components/commons';

const GetInvolved = (props) => (
  <Container isSideBar={props.isSideBar}>
    <h1>Get Involved</h1>
  </Container>
);

export default withRouteComponent(GetInvolved);
