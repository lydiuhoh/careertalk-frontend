import React from 'react';
import withRouteComponent from './withRouteComponent';
import { Container } from '../Components/commons';

const Home = props => (
  <Container isSideBar={props.isSideBar}>
    <h1>Home</h1>
  </Container>
);

export default withRouteComponent(Home);
