import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { toast } from 'react-toastify';

import { ISLOGGEDIN_QUERY } from '../../Apollo/sharedQueries';
import { EMPLOYERS, TOGGLE_LIKE, EMPLOYERS_LOCAL } from './EmployerListQueries';
import EmployerListPresenter from './EmployerListPresenter';
import withRouteComponent from '../withRouteComponent';

const Employers = ({ match: { params: { fairId } }, isSideBar }) => {
  /** show modal state */
  const [modalS, showModal] = useState(false);
  /** selected company state */
  const [selectedCompany, setCompanySelection] = useState(null);
  /** employer list state to be shown in the grid */
  const [employerListState, setEmployerList] = useState(null);
  /** is filter option expanded state */
  const [isFilterExpanded, setFilterExpanded] = useState(false);
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
      } = await toggleLikeMutation({
        variables: { fairId, employerId },
        context: { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      });
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

  // --------------------------- Filter ---------------------------------- //
  /** Initialize filter options */
  const [filterS, setFilter] = useState(false);
  const [degreeFilterS, setDegreeFilter] = useState([]);
  const [hiringFilterS, setHiringFilter] = useState([]);
  const [majorFilterS, setMajorFilter] = useState([]);
  const [visaFilterS, setVisaFilter] = useState(false);

  /** Apply filter clicked and change the filter state */
  const applyFilter = ({ filterOptions, visaOption }) => {
    const { degree, hiring, major } = filterOptions;

    setDegreeFilter([...degree.keys()]);
    setHiringFilter([...hiring.keys()]);
    setMajorFilter([...major.keys()]);
    setVisaFilter(visaOption);
    setFilter(true);
  };

  /** Query employer list from cache with filter options */
  const { data, loading: cacheLoading } = useQuery(EMPLOYERS_LOCAL, {
    skip: !filterS,
    fetchPolicy: 'cache-and-network',
    variables: {
      fairId,
      isUser: isLoggedIn,
      hiringFilter: hiringFilterS,
      degreeFilter: degreeFilterS,
      majorFilter: majorFilterS,
      visaFilter: visaFilterS
    }
  });

  /** Update the employer list state with filtered result */
  useEffect(() => {
    if (data && data.getEmployerListCache) {
      const { getEmployerListCache } = data;
      setEmployerList(getEmployerListCache);
    }
  }, [cacheLoading]);

  const onFilterExpanded = ({ option }) => {
    if (option.length) {
      setFilterExpanded(true);
    } else {
      setFilterExpanded(false);
    }
  };

  // --------------------------------------------------------------------- //

  return (
    <EmployerListPresenter
      isSideBar={isSideBar}
      loading={loading}
      showModal={modalS}
      toggleModal={toggleModal}
      toggleLike={toggleLike}
      employerList={employerListState}
      selectedCompany={selectedCompany}
      applyFilter={applyFilter}
      onFilterExpanded={onFilterExpanded}
      isFilterExpanded={isFilterExpanded}
      degreeFilter={degreeFilterS}
      hiringFilter={hiringFilterS}
      majorFilter={majorFilterS}
      visaFilter={visaFilterS}
      error={error}
    />
  );
};

export default withRouteComponent(Employers);
