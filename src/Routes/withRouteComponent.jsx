import React from 'react';
import RouteComponent from './routeComponent';

const withRouteComponent = WrappedComponent => class extends React.Component {
  render() {
    return (
      <RouteComponent>
        <WrappedComponent />
      </RouteComponent>
    );
  }
};

export default withRouteComponent;
