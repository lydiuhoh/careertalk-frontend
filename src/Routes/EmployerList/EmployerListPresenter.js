import React from 'react';
import styled from 'styled-components';

import withRouteComponent from '../withRouteComponent';
import { Container, LoadingLogo, GridSeven } from '../../Components/commons';
import EmployerCard from '../../Components/EmployerCard';
import { ErrorBox } from '../ErrorFallback';

const EmployerListContainer = styled(Container)``;

const LoadingWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const EmployerListGrid = styled(GridSeven)`
  margin-top: 15px;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

const EmployerListPresenter = ({ loading, employers, error }) => {
  return (
    <EmployerListContainer>
      {error && <ErrorBox message={error.message} />}
      {loading && (
        <LoadingWrapper>
          <LoadingLogo />
        </LoadingWrapper>
      )}
      {!loading && !error && <EmployerListContent employers={employers} />}
    </EmployerListContainer>
  );
};

const EmployerListContent = ({ employers }) => (
  <EmployerListGrid>
    {employers.map(emp => <EmployerCard key={emp.employer.id} {...emp} />)}
  </EmployerListGrid>
);

export default withRouteComponent(EmployerListPresenter);
