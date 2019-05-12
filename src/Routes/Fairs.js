import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';

import withRouteComponent from './withRouteComponent';
import { Container, LoadingLogo } from '../Components/commons';
import FairCard from '../Components/FairCard';

const FAIRS = gql`
  {
    getFair {
      id
      name
      address
      num_of_employers
      date
      start_time
      end_time
      location
    }
  }
`;

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Fairs = props => {
  const {
    data: { getFair: fairs },
    loading
  } = useQuery(FAIRS);

  const redirect = (id) => {
    const { history: { push } } = props;

    push(`/fair/${id}/employers`);
  };


  return (
    <Wrapper isSideBar={props.isSideBar}>
      {loading ? <LoadingLogo /> : <FairList fairs={fairs} redirect={redirect} />}
    </Wrapper>
  );
};

const FairList = ({ fairs, redirect }) => (
  <>
    {fairs.map((fair, index) => (
      <FairCard fair={fair} key={index} onClick={() => redirect(fair.id)} />
    ))}
  </>
);

export default withRouteComponent(Fairs);
