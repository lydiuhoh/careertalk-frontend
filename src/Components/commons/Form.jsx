import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const propTypes = exact({
  submitFn: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
});

const defaultProps = {
  className: '',
};

const Form = ({ submitFn, className, children }) => (
  <form
    className={className}
    onSubmit={e => {
      e.preventDefault();
      submitFn();
    }}
  >
    {children}
  </form>
);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export { Form };
