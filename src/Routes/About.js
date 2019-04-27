import React from 'react';
import withRouteComponent from './withRouteComponent';
import { Container } from '../Components/commons';

const About = (props) => (
  <Container isSideBar={props.isSideBar}>
    <h1>About</h1>
  </Container>
);

export default withRouteComponent(About);
