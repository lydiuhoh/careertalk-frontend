import React, { useState } from 'react';
import { useQuery } from 'react-apollo-hooks';

import { ISLOGGEDIN_QUERY } from '../../Apollo/sharedQueries';
import { EMPLOYERS } from './EmployerListQueries';
import EmployerListPresenter from './EmployerListPresenter';
import withRouteComponent from '../withRouteComponent';

const Employers = ({ match: { params: { fairId } } }) => {
  /** show modal state */
  const [modalS, showModal] = useState(false);
  /** selected company state */
  const [selectedCompany, setCompanySelection] = useState(null);
  /** graphql queries */
  const { data: { isLoggedIn } } = useQuery(ISLOGGEDIN_QUERY);
  const {
    data: { getEmployerList: employerList },
    loading,
    error
  } = useQuery(EMPLOYERS, {
    variables: { fairId, isUser: isLoggedIn },
    context: { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
  });

  const toggleModal = ({ selected }) => {
    if (modalS) {
      showModal(false);
    } else {
      showModal(true);
    }
    /** set clicked company info to state */
    setCompanySelection(selected);
  };

  return (
    <EmployerListPresenter
      loading={loading}
      showModal={modalS}
      toggleModal={toggleModal}
      employerList={employerList}
      selectedCompany={selectedCompany}
      error={error}
    />
  );
};

export default withRouteComponent(Employers);
