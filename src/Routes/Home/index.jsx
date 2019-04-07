import React from 'react';
import withRouteComponent from '../withRouteComponent';

class Home extends React.Component {
  render() {
    const { BaseContainer } = this.props;

    return (
      <BaseContainer>
        <h1>Home</h1>
      </BaseContainer>
    );
  }
}

export default withRouteComponent(Home);
