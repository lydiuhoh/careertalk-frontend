import React from 'react';
import styled from 'styled-components';

import { BaseCard, LogoImage, HeartButton, Badge } from '../commons';
import { NoteIcon } from '../Icons';

const Card = styled(BaseCard)`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100px;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  padding: 15px;
`;

const ImageBox = styled(LogoImage)``;

const LogoAndContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 7px;
`;

const CompanyTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.blueColor};
  span {
    font-size: 12px;
    color: ${props => props.theme.yellowColor};
  }
  margin: 0 3px;
`;

const DetailContent = styled.div`
  padding: 5px 0;
`;

const DetailInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 50px;
`;

const NoteWrapper = styled.div`
  & svg {
    fill: ${props => (props.visible ? '#7f8c8d' : 'none')};
  }
`;

const HeartButtonExt = styled(HeartButton)``;

export default ({
  employer,
  isLiked,
  isNoted,
  toggleLike,
  onCardClick,
  hiringMajors,
  hiringTypes,
  visaSupport,
  size,
  featured
}) => {
  const positions = hiringTypes.join(', ');
  const majors = hiringMajors.join(', ');
  let employerName = employer.name;

  if (employer.name.length > 30) {
    employerName = `${employer.name.slice(0, 30)}...`;
  }

  return (
    <Card size={size} onClick={onCardClick}>
      <LogoAndContent>
        <ImageBox url={employer.company_url} size="sm" />
        <Content>
          <CompanyTitle>
            {employerName} {featured && <span>Featured</span>}
          </CompanyTitle>
          {/* {size !== 'sm' && (
            <>
              <p>Chicago, IL</p>
              <DescriptionTitle>{employer.industry}</DescriptionTitle>
              <DescriptionTitleEllipsis
                text={employer.description}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </>
          )} */}
          <DetailContent>
            <DetailInfoContainer>
              <Badge value={positions} type="hiring" />
              <Badge value={majors} type="major" />
              {visaSupport === 'yes' && (
                <Badge value={size === 'sm' ? 'F1' : 'Visa Sponsored'} type="visa" />
              )}
            </DetailInfoContainer>
          </DetailContent>
        </Content>
      </LogoAndContent>
      <CardActions>
        <NoteWrapper visible={isNoted}>
          <NoteIcon />
        </NoteWrapper>
        <HeartButtonExt isLiked={isLiked} onClick={toggleLike} />
      </CardActions>
    </Card>
  );
};
