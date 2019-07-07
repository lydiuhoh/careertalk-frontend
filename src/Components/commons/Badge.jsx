import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import { fadeIn, onActive, onHoverEffect } from './styles';

const propTypes = exact({
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  showIcon: PropTypes.bool,
});

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-tiems: center;
  align-self: baseline;
  border-radius: 30px;
  min-width: 40px;
  background-color: ${props => {
    switch (props.type) {
      case 'hiring':
        return props.theme.hiringTypeColor;
      case 'major':
        return props.theme.majorTypeColor;
      case 'degree':
        return props.theme.degreeTypeColor;
      case 'visa':
      default:
        return props.theme.sponsorColor;
    }
  }};
  padding: 5px 7px;
  color: white;
  font-size: 13px;
  animation: 1s ${fadeIn} ease-out;
  margin: 3px;
  ${props => props.type === 'button' && onActive};
`;

const BadgeText = styled.p`
  font-size: 11px;
`;

const Badge = ({ value, type, showIcon = false, onClick }) => (
  <BadgeContainer type={type} onClick={onClick}>
    {showIcon && <CrossIcon />}
    <BadgeText>{value}</BadgeText>
  </BadgeContainer>
);

const FilterBadgeContainer = styled(BadgeContainer)`
  ${onActive};
  ${onHoverEffect};
`;

const CrossIcon = styled.div`
  :after {
    display: inline-block;
    content: '\00d7';
    margin-right: 3px;
  }
`;

const FilterBadge = ({ value, type, showIcon = false, onClick }) => (
  <FilterBadgeContainer type={type} onClick={onClick}>
    {showIcon && <CrossIcon />}
    <BadgeText>{value}</BadgeText>
  </FilterBadgeContainer>
);

Badge.propTypes = propTypes;
FilterBadge.propTypes = propTypes;

export { Badge, FilterBadge };
