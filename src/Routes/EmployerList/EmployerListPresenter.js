import React from 'react';
import styled from 'styled-components';

import withRouteComponent from '../withRouteComponent';
import { Container, LoadingLogo } from '../../Components/commons';

const EmployerListContainer = styled(Container)``;

const LoadingWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const EmployerListPresenter = ({ loading, employers }) => {
  console.log(employers);
  return (
    <EmployerListContainer>
      {loading ? (
        <LoadingWrapper>
          <LoadingLogo />
        </LoadingWrapper>
      ) : (
        <h1>Employers</h1>
      )}
    </EmployerListContainer>
  );
};

export default withRouteComponent(EmployerListPresenter);
