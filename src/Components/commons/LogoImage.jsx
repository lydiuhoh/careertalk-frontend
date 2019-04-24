import React from 'react';
import styled from 'styled-components';

import { fadeIn } from './styles';

const LogoContainer = styled.img`
  animation: 1s ${fadeIn} ease-out;
  border-radius: 3px;
  border: 0.9px solid ${props => props.theme.greyColor};
`;

function addDefaultSrc(ev) {
  ev.target.src = require('../../images/no_company_img.png');
}

const LogoImage = () => (
  <LogoContainer
    src="https://logo.clearbit.com/www.google.com"
    onError={addDefaultSrc}
  />
);

export { LogoImage };
