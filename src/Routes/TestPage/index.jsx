import React from 'react';
import withRouteComponent from '../withRouteComponent';
import { Container } from '../../Components/commons';

class TestPage extends React.Component {
  render() {
    return (
      <Container isSideBar={this.props.isSideBar}>
        <h1>TestPage</h1>
      </Container>
    );
  }
}

export default withRouteComponent(TestPage);
