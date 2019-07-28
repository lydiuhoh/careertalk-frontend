import React from 'react';
import styled from 'styled-components';

import withRouteComponent from '../withRouteComponent';
import { Container, LoadingLogo, Badge } from '../../Components/commons';
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
  applyFilter,
  isSideBar,
  onFilterExpanded,
  isFilterExpanded,
  degreeFilter,
  hiringFilter,
  majorFilter,
  visaFilter,
  error
}) => {
  return (
    <EmployerListContainer isSideBar={isSideBar}>
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
          applyFilter={applyFilter}
          onFilterExpanded={onFilterExpanded}
          isFilterExpanded={isFilterExpanded}
          degreeFilter={degreeFilter}
          hiringFilter={hiringFilter}
          majorFilter={majorFilter}
          visaFilter={visaFilter}
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

const EmployerListContent = ({
  fair,
  employers,
  toggleModal,
  toggleLike,
  applyFilter,
  onFilterExpanded,
  isFilterExpanded,
  degreeFilter,
  hiringFilter,
  majorFilter,
  visaFilter,
}) => (
  <>
    <FairTitle>{fair.name}</FairTitle>
    <FilterOptionsContainer>
      <FilterOptionsAccordion applyFilter={applyFilter} onFilterExpanded={onFilterExpanded} />
    </FilterOptionsContainer>
    {!isFilterExpanded
      && (hiringFilter.length || majorFilter.length || degreeFilter.length || visaFilter) && (
        <FilterDiv>
          <FilterTitle>Filter By: </FilterTitle>
          {hiringFilter.map(key => (
            <Badge value={key} key={key} type="hiring" />
          ))}
          {majorFilter.map(key => (
            <Badge value={key} key={key} type="major" />
          ))}
          {degreeFilter.map(key => (
            <Badge value={key} key={key} type="degree" />
          ))}
          {visaFilter && <Badge value="Visa Sponsored" type="visa" />}
        </FilterDiv>
    )}
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
  padding: 13px 0;
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

const FilterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
`;
// TODO: This part is not needed but commented for future floating box
// position: sticky;
// top: 50px;
// z-index: 999;
// background-color: #fafafa;
// box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px ${props => props.theme.greyColor};

const FilterTitle = styled.h1`
  font-size: 18px;
  padding: 5px 7px;
`;

export default withRouteComponent(EmployerListPresenter);
