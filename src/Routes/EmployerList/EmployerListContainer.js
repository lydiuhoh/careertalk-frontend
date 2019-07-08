import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { toast } from 'react-toastify';

import { ISLOGGEDIN_QUERY } from '../../Apollo/sharedQueries';
import { EMPLOYERS, TOGGLE_LIKE, EMPLOYERS_LOCAL } from './EmployerListQueries';
import EmployerListPresenter from './EmployerListPresenter';
import withRouteComponent from '../withRouteComponent';

const Employers = ({ match: { params: { fairId } } }) => {
  /** show modal state */
  const [modalS, showModal] = useState(false);
  /** selected company state */
  const [selectedCompany, setCompanySelection] = useState(null);
  /** employer list state to be shown in the grid */
  const [employerListState, setEmployerList] = useState(null);
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
  const toggleLikeMutation = useMutation(TOGGLE_LIKE);

  // Temporary query data from cache
  useQuery(EMPLOYERS_LOCAL, {
    skip: employerListState === null,
    variables: { fairId, isUser: isLoggedIn }
  });

  /** update the employerList state after downloading */
  useEffect(() => {
    if (!loading && employerList) {
      setEmployerList(employerList);
    }
  }, [loading]);

  /**
   * Method for showing popup modal
   * @param {Object} selected - selected employer object
   */
  const toggleModal = ({ selected }) => {
    if (modalS) {
      showModal(false);
    } else {
      showModal(true);
    }
    /** set clicked company info to state */
    setCompanySelection(selected);
  };

  const toggleLike = async (props) => {
    const { fair: { id: fairId } } = employerList;
    const { employerId, name } = props;

    try {
      const {
        data: {
          likeEmployer: { message, status }
        },
      } = await toggleLikeMutation({ variables: { fairId, employerId } });
      if (status) {
        toast.success(`${message} ${name}`);
        return true;
      }
    } catch (error) {
      toast.error(`Failed to like an employer ${name}. Please try again.`);
      console.error(error.message);
      return false;
    }
    return false;
  };

  return (
    <EmployerListPresenter
      loading={loading}
      showModal={modalS}
      toggleModal={toggleModal}
      toggleLike={toggleLike}
      employerList={employerListState}
      selectedCompany={selectedCompany}
      error={error}
    />
  );
};

export default withRouteComponent(Employers);
