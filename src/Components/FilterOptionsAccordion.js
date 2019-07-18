import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';

import { FilterBadge, Button } from './commons';
import FilterFields from '../lib/fields.json';

const FilterOptionsAccordion = ({ applyFilter }) => {
  /** Default state of Component */
  const [hiringOptions, setHirings] = useState(FilterFields.hiring_types);
  const [majorOptions, setMajors] = useState(FilterFields.majors);
  const [degreeOptions, setDegrees] = useState(FilterFields.degree);
  const [visaOption, setVisa] = useState(false);
  const [pendingFilter, setPendingFilter] = useState(false);
  const [filterOptions, setFilter] = useState({
    hiring: new Map(),
    major: new Map(),
    degree: new Map()
  });

  /** Add to filterOptions and filter selected option from list */
  const selectFilter = ({ field, type }) => {
    const filterFunc = options => options.filter(opt => opt.label !== field.label);
    const filterOptFunc = options => {
      options[type].set(field.label, field.name);
      return options;
    };

    if (type === 'hiring') {
      setHirings(filterFunc);
      setFilter(filterOptFunc);
    } else if (type === 'major') {
      setMajors(filterFunc);
      setFilter(filterOptFunc);
    } else if (type === 'degree') {
      setDegrees(filterFunc);
      setFilter(filterOptFunc);
    }
  };

  /** Remove filterOptions and update the option list */
  const removeFilter = ({ key, type }) => {
    const newOption = {
      label: key,
      name: filterOptions[type].get(key)
    };
    const filterOptFunc = options => {
      if (options[type].has(key)) {
        options[type].delete(key);
      }
      // Map is not immutable so hacky way of updating the component
      return Object.assign({}, options);
    };

    if (type === 'hiring') {
      setHirings([...hiringOptions, newOption]);
      setFilter(filterOptFunc);
    } else if (type === 'major') {
      setMajors([...majorOptions, newOption]);
      setFilter(filterOptFunc);
    } else if (type === 'degree') {
      setDegrees([...degreeOptions, newOption]);
      setFilter(filterOptFunc);
    }
  };

  /** Set visa option */
  const toggleVisa = () => {
    setVisa(!visaOption);
  };

  /** Show Apply button */
  useEffect(() => {
    setPendingFilter(true);
  }, [filterOptions, visaOption]);

  return (
    <Accordion allowMultipleExpanded allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Filter Options</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <FilterByContainer
            filterOptions={filterOptions}
            removeFilter={removeFilter}
            visaOption={visaOption}
            toggleVisa={toggleVisa}
          />
        </AccordionItemPanel>
        <AccordionItemPanel>
          <FilterItem>
            <FilterTitle>Hiring Types:</FilterTitle>
            {hiringOptions.map(field => (
              <FilterBadge
                value={field.name}
                key={field.label}
                type="hiring"
                onClick={() => selectFilter({ field, type: 'hiring' })}
              />
            ))}
          </FilterItem>
          <FilterItem>
            <FilterTitle>Majors:</FilterTitle>
            {majorOptions.map(field => (
              <FilterBadge
                value={field.name}
                key={field.label}
                type="major"
                onClick={() => selectFilter({ field, type: 'major' })}
              />
            ))}
          </FilterItem>
          <FilterItem>
            <FilterTitle>Degree:</FilterTitle>
            {degreeOptions.map(field => (
              <FilterBadge
                value={field.name}
                key={field.label}
                type="degree"
                onClick={() => selectFilter({ field, type: 'degree' })}
              />
            ))}
          </FilterItem>
          <FilterItem>
            <FilterTitle>Sponsorship Needed?</FilterTitle>
            <input type="checkbox" checked={visaOption} onChange={toggleVisa} />
          </FilterItem>
          {pendingFilter && (
            <ApplyWrapper>
              <ApplyButton
                value="Apply"
                onClick={() => applyFilter({ filterOptions, visaOption })}
              />
            </ApplyWrapper>
          )}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

const FilterByContainer = ({ filterOptions, visaOption, toggleVisa, removeFilter }) => {
  const { hiring, degree, major } = filterOptions;

  return (
    <FilterItem>
      <FilterTitle>Filtering:</FilterTitle>
      {[...hiring.keys()].map(key => (
        <FilterBadge
          value={hiring.get(key)}
          key={key}
          type="hiring"
          showIcon
          onClick={() => removeFilter({ key, type: 'hiring' })}
        />
      ))}
      {[...major.keys()].map(key => (
        <FilterBadge
          value={major.get(key)}
          key={key}
          type="major"
          showIcon
          onClick={() => removeFilter({ key, type: 'major' })}
        />
      ))}
      {[...degree.keys()].map(key => (
        <FilterBadge
          value={degree.get(key)}
          key={key}
          type="degree"
          showIcon
          onClick={() => removeFilter({ key, type: 'degree' })}
        />
      ))}
      {visaOption && (
        <FilterBadge value="Visa Sponsored" type="visa" showIcon onClick={toggleVisa} />
      )}
    </FilterItem>
  );
};

const FilterItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FilterTitle = styled.h1`
  font-size: 18px;
  padding: 5px 7px;
`;

const ApplyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ApplyButton = styled(Button)`
  width: 88px;
  background-color: ${props => props.theme.primaryColor};
  padding: 5px 0;
  font-size: 13px;
`;

export default FilterOptionsAccordion;
