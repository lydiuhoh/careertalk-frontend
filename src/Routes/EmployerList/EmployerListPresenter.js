import React from 'react';
import styled from 'styled-components';

import withRouteComponent from '../withRouteComponent';
import { Container, LoadingLogo } from '../../Components/commons';
import { ErrorBox } from '../ErrorFallback';

const EmployerListContainer = styled(Container)``;

const LoadingWrapper = styled.div`
  display: grid;
  justify-content: center;
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
  <h1>Showing {employers.length} employers</h1>
);

export default withRouteComponent(EmployerListPresenter);
