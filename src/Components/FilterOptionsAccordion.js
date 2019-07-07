import React from 'react';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';

import { FilterBadge } from './commons';
import Fields from '../lib/fields.json';

const FilterOptionsAccordion = () => {
  return (
    <Accordion allowMultipleExpanded allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Filter Options</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <FilterByContainer />
        </AccordionItemPanel>
        <AccordionItemPanel>
          <FilterItem>
            <FilterTitle>Hiring Types:</FilterTitle>
            {Fields.hiring_types.map(field => (
              <FilterBadge value={field.name} key={field.label} type="hiring" />
            ))}
          </FilterItem>
          <FilterItem>
            <FilterTitle>Majors:</FilterTitle>
            {Fields.majors.map(field => (
              <FilterBadge value={field.name} key={field.label} type="major" />
            ))}
          </FilterItem>
          <FilterItem>
            <FilterTitle>Degree:</FilterTitle>
            {Fields.degree.map(field => (
              <FilterBadge value={field.name} key={field.label} type="degree" />
            ))}
          </FilterItem>
          <FilterItem>
            <FilterTitle>Sponsorship Needed?</FilterTitle>
            <input type="checkbox" name="isGoing" onChange={() => console.log('checked!')} />
          </FilterItem>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

const FilterByContainer = () => {
  return (
    <FilterItem>
      <FilterTitle>Filtering:</FilterTitle>
      <FilterBadge value="Internship" type="hiring" showIcon />
      <FilterBadge value="Computer Science" type="major" showIcon />
      <FilterBadge value="BS" type="degree" showIcon />
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

export default FilterOptionsAccordion;
