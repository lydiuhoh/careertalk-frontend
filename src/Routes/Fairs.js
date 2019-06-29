import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';

import withRouteComponent from './withRouteComponent';
import { Container, LoadingLogo } from '../Components/commons';
import FairCard from '../Components/FairCard';
import { ErrorBox } from './ErrorFallback';

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

const FairsContainer = styled(Container)`
  padding: 15px 50px;
`;

const Wrapper = styled.div``;

const LoadingWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const FairListGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
  align-items: center;
`;

const Fairs = props => {
  const {
    data: { getFair: fairs },
    loading,
    error
  } = useQuery(FAIRS);

  const redirect = id => {
    const { history: { push } } = props;

    push(`/fair/${id}/employers`);
  };


  return (
    <FairsContainer isSideBar={props.isSideBar}>
      {error && <ErrorBox message={error.message} /> }
      <Wrapper>
        {loading && (
          <LoadingWrapper>
            <LoadingLogo />
          </LoadingWrapper>
        )}
        {!loading && !error && <FairList fairs={fairs} redirect={redirect} />}
      </Wrapper>
    </FairsContainer>
  );
};

const FairList = ({ fairs, redirect }) => (
  <FairListGrid>
    {fairs.map((fair, index) => (
      <FairCard fair={fair} key={index} onClick={() => redirect(fair.id)} />
    ))}
  </FairListGrid>
);

export default withRouteComponent(Fairs);
