import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const propTypes = exact({
  type: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
});

const defaultProps = {
  type: 'text',
  required: true,
  name: '',
  placeholder: '',
  className: ''
};

const Container = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.greyColor};
  font-size: 20px;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 8px;
  padding-left: 5px;
  font-weight: 500;
  transition: border-bottom 0.1s linear;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.greyColor};
    font-weight: 250;
  }
`;

const Input = ({ placeholder, type, required, value, name, onChange, className }) => (
  <Container
    className={className}
    type={type}
    required={required}
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export { Input };
