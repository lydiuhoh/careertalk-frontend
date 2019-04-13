import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import { onActive, shadowBox } from '../styles';

const propTypes = exact({
  /** The title of the button */
  value: PropTypes.string,
  /** A function fired when non-disabled */
  onClick: PropTypes.func,
  /** Disables the button */
  disabled: PropTypes.bool,
  /** Button classname */
  className: PropTypes.string,
});

const defaultProps = {
  value: 'Button',
  onClick: null,
  disabled: false,
  className: '',
};

const Container = styled.input`
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 15px 0;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
  ${onActive}
  ${shadowBox}
`;

// NOTE: className must be declared to identify the extended styled component
const Button = ({ value, onClick, disabled, className }) => (
  <Container
    value={value}
    onClick={onClick}
    disabled={disabled}
    className={className}
    type="submit"
  />
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export { Button };
