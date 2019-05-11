import React from 'react';

import withRouteComponent from './withRouteComponent';
import { Container } from '../Components/commons';

const Fairs = (props) => (
  <Container isSideBar={props.isSideBar}>
    <h1>Fairs</h1>
  </Container>
);

export default withRouteComponent(Fairs);
