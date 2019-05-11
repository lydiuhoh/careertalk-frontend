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

  return (
    <Wrapper isSideBar={props.isSideBar}>
      {loading ? <LoadingLogo /> : <FairList fairs={fairs} />}
    </Wrapper>
  );
};

const FairList = ({ fairs }) => (
  <>
    {fairs.map((fair, index) => (
      <FairCard fair={fair} key={index} onClick={() => console.log(fair)} />
    ))}
  </>
);

export default withRouteComponent(Fairs);
