import React from 'react';
import styled from 'styled-components';

import withRouteComponent from '../withRouteComponent';
import { Container, LoadingLogo } from '../../Components/commons';
import EmployerCard from '../../Components/EmployerCard';
import { ErrorBox } from '../ErrorFallback';

const EmployerListContainer = styled(Container)``;

const LoadingWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const EmployerListPresenter = ({ loading, employerList, error }) => {
  return (
    <EmployerListContainer>
      {error && <ErrorBox message={error.message} />}
      {loading && (
        <LoadingWrapper>
          <LoadingLogo />
        </LoadingWrapper>
      )}
      {!loading && !error && (
        <EmployerListContent fair={employerList.fair} employers={employerList.companies} />
      )}
    </EmployerListContainer>
  );
};

const EmployerListContent = ({ fair, employers }) => (
  <>
    <FairTitle>{fair.name}</FairTitle>
    <EmployerListGrid>
      {employers.map(employer => <EmployerCard key={employer.id} {...employer} />)}
    </EmployerListGrid>
  </>
);

const FairTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const EmployerListGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export default withRouteComponent(EmployerListPresenter);
