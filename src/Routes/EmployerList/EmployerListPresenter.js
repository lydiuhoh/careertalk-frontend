import React from 'react';
import styled from 'styled-components';

import withRouteComponent from '../withRouteComponent';
import { Container, LoadingLogo } from '../../Components/commons';
import EmployerCard from '../../Components/EmployerCard';
import EmployerModal from '../../Components/EmployerModal';
import FilterOptionsAccordion from '../../Components/FilterOptionsAccordion';
import { ErrorBox } from '../ErrorFallback';

const EmployerListPresenter = ({
  loading,
  selectedCompany,
  showModal,
  toggleModal,
  toggleLike,
  employerList,
  error
}) => {
  return (
    <EmployerListContainer>
      {error && <ErrorBox message={error.message} />}
      {loading && (
        <LoadingWrapper>
          <LoadingLogo />
        </LoadingWrapper>
      )}
      {!loading && !error && employerList && (
        <EmployerListContent
          fair={employerList.fair}
          toggleModal={toggleModal}
          toggleLike={toggleLike}
          employers={employerList.companies}
        />
      )}
      {showModal && (
        <EmployerModal
          selectedCompany={selectedCompany}
          selectedFair={employerList.fair}
          modal={showModal}
          toggleModal={toggleModal}
        />
      )}
    </EmployerListContainer>
  );
};

const EmployerListContent = ({ fair, employers, toggleModal, toggleLike }) => (
  <>
    <FairTitle>{fair.name}</FairTitle>
    <FilterOptionsContainer>
      <FilterOptionsAccordion />
    </FilterOptionsContainer>
    <EmployerListGrid>
      {employers.map(employer => (
        <EmployerCard
          key={employer.id}
          toggleModal={toggleModal}
          toggleLike={toggleLike}
          {...employer}
        />
      ))}
    </EmployerListGrid>
  </>
);


const EmployerListContainer = styled(Container)``;

const FilterOptionsContainer = styled.div`
  padding-top: 13px;
`;

const LoadingWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const FairTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const EmployerListGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export default withRouteComponent(EmployerListPresenter);
