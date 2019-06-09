import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import { ISLOGGEDIN_QUERY } from '../../Apollo/sharedQueries';
import { EMPLOYERS } from './EmployerListQueries';
import EmployerListPresenter from './EmployerListPresenter';
import withRouteComponent from '../withRouteComponent';

const Employers = ({ match: { params: { fairId } } }) => {
  const { data: { isLoggedIn } } = useQuery(ISLOGGEDIN_QUERY);
  const {
    data: { getEmployerList: employers },
    loading,
    error
  } = useQuery(EMPLOYERS, {
    variables: { fairId, isUser: isLoggedIn },
    context: { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
  });

  return <EmployerListPresenter loading={loading} employers={employers} error={error} />;
};

export default withRouteComponent(Employers);
