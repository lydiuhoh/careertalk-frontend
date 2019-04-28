import React from 'react';
import styled from 'styled-components';

import { BaseCard, LogoImage } from './commons';

const Container = styled.div`
  width: 350px;
`;

const BaseFairCard = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const NumOfEmployers = styled.div`
  padding: 5px 0;
  span {
    font-weight: 550;
    color: #3f7c55;
  }
`;

const FairDetailInfoBox = styled.div`
  text-align: left;
  padding: 10px 0;
`;

const FairNameText = styled.h1`
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
`;

const FairInfoText = styled.h1`
  color: #48638c;
  font-size: 13;
  padding: 5px 0;
  font-weight: 600;
`;

const FairCard = ({ fair }) => {
  const fairDate = new Date(fair.date).toDateString();
  const timeString = `${fair.start_time} - ${fair.end_time}`;
  const dateString = `${fairDate} ${timeString}`;

  return (
    <Container>
      <BaseFairCard>
        <LogoImage url="www.uic.edu" />
        <NumOfEmployers><span>{fair.num_of_employers}</span> Employers</NumOfEmployers>
        <FairDetailInfoBox>
          <FairNameText>{fair.name}</FairNameText>
          <FairInfoText>{dateString}</FairInfoText>
          <FairInfoText>{fair.location}</FairInfoText>
        </FairDetailInfoBox>
      </BaseFairCard>
    </Container>
  );
};

export default FairCard;
