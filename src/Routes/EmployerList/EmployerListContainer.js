import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import { EMPLOYERS } from './EmployerListQueries';
import EmployerListPresenter from './EmployerListPresenter';
import withRouteComponent from '../withRouteComponent';

const Employers = ({ match: { params: { fairId } } }) => {
  const {
    data: { getEmployerList: employers },
    loading
  } = useQuery(EMPLOYERS, { variables: { fairId, isUser: false } });

  return <EmployerListPresenter loading={loading} employers={employers} />;
};

export default withRouteComponent(Employers);
