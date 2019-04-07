import React from 'react';
import withRouteComponent from '../withRouteComponent';
import { Container } from '../../Components/commons';

class Home extends React.Component {
  render() {
    return (
      <Container isSideBar={this.props.isSideBar}>
        <h1>Home</h1>
      </Container>
    );
  }
}

export default withRouteComponent(Home);
