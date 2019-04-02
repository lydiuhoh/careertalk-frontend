import React from 'react';
import withRouteComponent from '../utils/withRouteComponent';

class Home extends React.Component {
  render() {
    return <h1>Home</h1>;
  }
}

export default withRouteComponent(Home);
