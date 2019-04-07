import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Heart as FeatherHeart } from 'styled-icons/feather/Heart';
import { Heart as SolidHeart } from 'styled-icons/boxicons-solid/Heart';

function getSize(size) {
  switch (size) {
    case 'sm':
      return '30';
    case 'md':
      return '40';
    case 'lg':
    default:
      return '50';
  }
}

const baseButton = css`
  &:active {
    transform: translateY(2px);
  }
  cursor: pointer;
`;

const HeartFill = styled(SolidHeart)`
  color: ${props => props.theme.heartButtonColor};
  ${baseButton};
`;

const HeartEmpty = styled(FeatherHeart)`
  color: ${props => props.theme.greyColor};
  ${baseButton};
`;


// Button Components //
const HeartButton = props => (props.isLiked ? (
  <HeartFill size={getSize(props.size)} />
) : (
  <HeartEmpty size={getSize(props.size)} />
));


// PropTypes //
HeartButton.propTypes = {
  size: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired
};

export { HeartButton };
