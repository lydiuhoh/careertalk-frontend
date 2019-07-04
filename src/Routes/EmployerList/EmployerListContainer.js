import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { toast } from 'react-toastify';

import { ISLOGGEDIN_QUERY } from '../../Apollo/sharedQueries';
import { EMPLOYERS, TOGGLE_LIKE } from './EmployerListQueries';
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
  const toggleLikeMutation = useMutation(TOGGLE_LIKE);

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
      employerList={employerList}
      selectedCompany={selectedCompany}
      error={error}
    />
  );
};

export default withRouteComponent(Employers);
