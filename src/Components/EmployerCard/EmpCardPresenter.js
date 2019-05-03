import React from 'react';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';

import { BaseCard, LogoImage, HeartButton, Badge } from '../commons';

const Card = styled(BaseCard)`
  display: flex;
  with: 100%;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  padding: ${props => (props.size === 'sm' ? '10px' : '15px')};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-left: 10px;
`;

const CompanyTitle = styled.h1`
  font-size: 23px;
  font-weight: bold;
  color: ${props => props.theme.blueColor};
  padding-bottom: 5px;
  span {
    font-size: 12px;
    color: ${props => props.theme.yellowColor};
  }
`;

const DescriptionTitle = styled.p`
  color: ${props => props.theme.greyColor};
  font-size: 12px;
  padding: 5px 0;
`;

const DescriptionTitleEllipsis = styled(LinesEllipsis)`
  color: ${props => props.theme.greyColor};
  font-size: 12px;
  padding: 5px 0;
`;

const DetailContent = styled.div`
  padding: 10px 0;
`;

const DetailInfoContainer = styled.div`
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

const DetailText = styled.p`
  padding: 1px 0;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.midnightBlueColor};
`;

const CardActions = styled.div``;

const HeartButtonExt = styled(HeartButton)``;

export default ({
  employer,
  isLiked,
  toggleLike,
  hiringMajors,
  hiringTypes,
  visaSupport,
  size,
  featured
}) => {
  const positions = hiringTypes.join(', ');
  const majors = hiringMajors.join(', ');

  return (
    <Card size={size}>
      <LogoImage url={employer.company_url} size="sm" />
      <Content onClick={() => console.log(`Clicked ${employer.name}`)}>
        <CompanyTitle>
          {employer.name} {featured && <span>Featured</span>}
        </CompanyTitle>
        {size !== 'sm' && (
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
        )}

        <DetailContent>
          <DetailInfoContainer>
            <DetailText>Hirings: </DetailText>
            <Badge value={positions} type="hiring" />
          </DetailInfoContainer>
          <DetailInfoContainer>
            <DetailText>Majors: </DetailText>
            <Badge value={majors} type="major" />
          </DetailInfoContainer>
          {visaSupport === 'yes' && (
            <DetailInfoContainer>
              <DetailText>Visa:</DetailText>
              <Badge value="Sponsored" type="visa" />
            </DetailInfoContainer>
          )}
        </DetailContent>
      </Content>
      <CardActions>
        <HeartButtonExt isLiked={isLiked} onClick={toggleLike} />
      </CardActions>
    </Card>
  );
};
