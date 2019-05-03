import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import { Heart as RegularHeart } from 'styled-icons/boxicons-regular/Heart';
import { Heart as SolidHeart } from 'styled-icons/boxicons-solid/Heart';

import { onActive, fadeIn } from '../styles';
import { getSize } from '../utils';

const propTypes = exact({
  size: PropTypes.string,
  isLiked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
});

const defaultProps = {
  size: 'sm',
  isLiked: false,
  disabled: false,
  onClick: null,
};

const HeartFill = styled(SolidHeart)`
  color: ${props => props.theme.heartButtonColor};
  animation: 1s ${fadeIn} ease-out;
  min-width: 30px;
  ${onActive};
`;

const HeartEmpty = styled(RegularHeart)`
  color: ${props => props.theme.greyColor};
  min-width: 30px;
  ${onActive};
`;

const HeartButton = ({ isLiked, size, disabled, onClick, className }) => (isLiked ? (
  <HeartFill size={getSize(size)} disabled={disabled} onClick={onClick} className={className} />
) : (
  <HeartEmpty size={getSize(size)} disabled={disabled} onClick={onClick} className={className} />
));

HeartButton.propTypes = propTypes;
HeartButton.defaultProps = defaultProps;

export { HeartButton };
