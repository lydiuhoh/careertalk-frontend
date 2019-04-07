import React from 'react';
import withRouteComponent from '../withRouteComponent';
import { BaseWebContainer } from '../../Components/commons';

class Home extends React.Component {
  render() {
    return (
      <BaseWebContainer>
        <h1>Home</h1>
      </BaseWebContainer>
    );
  }
}

export default withRouteComponent(Home);
