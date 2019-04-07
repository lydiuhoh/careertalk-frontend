import React from 'react';
import withRouteComponent from '../withRouteComponent';
import { Container } from '../../Components/commons';

class About extends React.Component {
  render() {
    return (
      <Container isSideBar={this.props.isSideBar}>
        <h1>About</h1>
      </Container>
    );
  }
}

export default withRouteComponent(About);
