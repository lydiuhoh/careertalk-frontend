import React from 'react';

import EmployerListPresenter from './EmployerListPresenter';
import withRouteComponent from '../withRouteComponent';

const Employers = ({ match: { params: { fairId } } }) => {
  // TODO: Get Employers by fairId
  console.log(`Fair Id: ${fairId}`);
  return (
    <EmployerListPresenter />
  );
};

export default withRouteComponent(Employers);
