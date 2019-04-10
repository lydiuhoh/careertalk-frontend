import React from 'react';
import styled from 'styled-components';

import withRouteComponent from '../withRouteComponent';
import { Container, HeartButton, FilterButton } from '../../Components/commons';

class TestPage extends React.Component {
  render() {
    return (
      <Container isSideBar={this.props.isSideBar}>
        <h1>Heart Buttons</h1>
        <HeartButtonGroups />
        <h1>Filter Buttons</h1>
        <FilterButtonGroups />
      </Container>
    );
  }
}

const TemplateContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const HeartButtonGroups = () => (
  <TemplateContainer>
    <HeartButton isLiked size="sm" />
    <HeartButton disabled />
    <HeartButton isLiked size="md" />
    <HeartButton size="md" disabled />
    <HeartButton isLiked size="lg" />
    <HeartButton size="lg" />
  </TemplateContainer>
);

const FilterButtonGroups = () => (
  <TemplateContainer>
    <FilterButton isFilter />
    <FilterButton />
    <FilterButton disabled />
  </TemplateContainer>
);

export default withRouteComponent(TestPage);
