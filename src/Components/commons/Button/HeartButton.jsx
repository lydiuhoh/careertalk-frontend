import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import { Heart as FeatherHeart } from 'styled-icons/feather/Heart';
import { Heart as SolidHeart } from 'styled-icons/boxicons-solid/Heart';

import { onActive, fadeIn } from '../styles';
import { getSize } from '../utils';

const propTypes = exact({
  size: PropTypes.string,
  isLiked: PropTypes.bool,
  disabled: PropTypes.bool,
});

const defaultProps = {
  size: 'sm',
  isLiked: false,
  disabled: false,
};

const HeartFill = styled(SolidHeart)`
  color: ${props => props.theme.heartButtonColor};
  animation: 1s ${fadeIn} ease-out;
  ${onActive};
`;

const HeartEmpty = styled(FeatherHeart)`
  color: ${props => props.theme.greyColor};
  ${onActive};
`;

const HeartButton = props => (props.isLiked ? (
  <HeartFill size={getSize(props.size)} disabled={props.disabled} />
) : (
  <HeartEmpty size={getSize(props.size)} disabled={props.disabled} />
));

HeartButton.propTypes = propTypes;
HeartButton.defaultProps = defaultProps;

export { HeartButton };
