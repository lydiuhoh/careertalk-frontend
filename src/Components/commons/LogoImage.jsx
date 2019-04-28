import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import { fadeIn } from './styles';

const propTypes = exact({
  url: PropTypes.string.isRequired,
});

const LogoContainer = styled.img`
  animation: 1s ${fadeIn} ease-out;
  border-radius: 3px;
  border: 0.9px solid #dfe6e9;
  padding: 5px;
`;

function addDefaultSrc(ev) {
  ev.target.src = require('../../images/no_company_img.png');
}

const LogoImage = ({ url }) => (
  <LogoContainer
    src={`https://logo.clearbit.com/${url}`}
    onError={addDefaultSrc}
  />
);

LogoImage.propTypes = propTypes;

export { LogoImage };
