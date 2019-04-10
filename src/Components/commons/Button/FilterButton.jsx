import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import { Filter as SolidFilter } from 'styled-icons/fa-solid/Filter';

import { onActive, fadeIn } from '../styles';
import { getSize } from '../utils';

const propTypes = exact({
  size: PropTypes.string,
  isFilter: PropTypes.bool,
  disabled: PropTypes.bool,
});

const defaultProps = {
  size: 'sm',
  isFilter: false,
  disabled: false,
};

const FilterFill = styled(SolidFilter)`
  color: ${props => props.theme.greenColor};
  animation: 1s ${fadeIn} ease-out;
  margin: 3px;
  ${onActive};
`;

const FilterEmpty = styled(SolidFilter)`
  color: ${props => props.theme.greyColor};
  margin: 3px;
  ${onActive};
`;

const FilterButton = props => (props.isFilter ? (
  <FilterFill size={getSize(props.size)} disabled={props.disabled} />
) : (
  <FilterEmpty size={getSize(props.size)} disabled={props.disabled} />
));

FilterButton.propTypes = propTypes;
FilterButton.defaultProps = defaultProps;

export { FilterButton };
