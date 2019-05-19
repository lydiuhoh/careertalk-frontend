import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import { fadeIn } from './styles';

const propTypes = exact({
  url: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
});

const LogoContainer = styled.img`
  animation: 1s ${fadeIn} ease-out;
  border-radius: 3px;
  border: 0.9px solid #dfe6e9;
  padding: 1px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const AvatarContainer = styled(LogoContainer)`
  border-radius: 40px;
  border: none;
`;

function addDefaultSrc(ev) {
  ev.target.src = require('../../images/no_company_img.png');
}

function addDefaultUser(ev) {
  ev.target.src = require('../../images/no_avatar.jpg');
}

const getLogoSize = (size) => {
  switch (size) {
    case 'sm':
      return 64;
    case 'lg':
    default:
      return 128;
  }
};

const LogoImage = ({ url, size = 'lg', className }) => (
  <LogoContainer
    src={`https://logo.clearbit.com/${url}?size=${getLogoSize(size)}`}
    onError={addDefaultSrc}
    className={className}
    size={getLogoSize(size)}
  />
);

const Avatar = ({ url, size = 50, className }) => (
  <AvatarContainer
    src={url}
    onError={addDefaultUser}
    className={className}
    size={size}
  />
);

LogoImage.propTypes = propTypes;

export { LogoImage, Avatar };
