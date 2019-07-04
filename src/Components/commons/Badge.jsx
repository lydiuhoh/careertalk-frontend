import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import { fadeIn, onActive } from './styles';

const propTypes = exact({
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
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

const Badge = ({ value, type, onClick }) => (
  <BadgeContainer type={type} onClick={onClick}>
    <BadgeText>{value}</BadgeText>
  </BadgeContainer>
);

Badge.propTypes = propTypes;

export { Badge };
