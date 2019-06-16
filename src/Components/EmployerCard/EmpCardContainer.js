/* eslint react/no-unused-prop-types: "off" */

import React, { useState } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import EmpCardPresenter from './EmpCardPresenter';

const propTypes = exact({
  careerfair_id: PropTypes.number,
  degree_requirements: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  employer: PropTypes.shape({
    company_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  hiring_majors: PropTypes.arrayOf(PropTypes.string).isRequired,
  hiring_types: PropTypes.arrayOf(PropTypes.string).isRequired,
  tables: PropTypes.arrayOf(PropTypes.number),
  visa_support: PropTypes.string.isRequired,
  size: PropTypes.string,
  featured: PropTypes.bool,
  isLiked: PropTypes.bool,
  __typename: PropTypes.string,
});

const EmpCardContainer = props => {
  const [isLikedS, setIsLiked] = useState(props.isLiked);
  const { employer, hiring_majors, hiring_types, visa_support, size, featured } = props;

  const toggleLike = () => {
    if (isLikedS) {
      console.log('Unlike!!');
      setIsLiked(!isLikedS);
    } else {
      console.log('Like this!!');
      setIsLiked(!isLikedS);
    }
  };

  const onCardClick = (event) => {
    const { target: { nodeName } } = event;

    if (nodeName !== 'svg' && nodeName !== 'path') {
      console.log(`Clicked ${employer.name}`);
      // TODO: Open Employer Detail Modal
    }
  };

  return (
    <EmpCardPresenter
      employer={employer}
      isLiked={isLikedS}
      toggleLike={toggleLike}
      onCardClick={onCardClick}
      hiringMajors={hiring_majors}
      hiringTypes={hiring_types}
      visaSupport={visa_support}
      size={size}
      featured={featured}
    />
  );
};

EmpCardContainer.propTypes = propTypes;

export default EmpCardContainer;
