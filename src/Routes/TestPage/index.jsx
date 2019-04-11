import React from 'react';
import styled from 'styled-components';

import withRouteComponent from '../withRouteComponent';
import {
  Container,
  HeartButton,
  FilterButton,
  TestBox,
  GridOne,
  GridTwo,
  GridThree,
  GridFour,
  GridSix,
  GridSeven,
  GridEight
} from '../../Components/commons';

class TestPage extends React.Component {
  render() {
    return (
      <Container isSideBar={this.props.isSideBar}>
        <Title>Heart Buttons</Title>
        <HeartButtonGroups />
        <Title>Filter Buttons</Title>
        <FilterButtonGroups />
        <Title>Grid Templates</Title>
        <GridGroups />
      </Container>
    );
  }
}

// Give styles to <h1>
const Title = styled.h1`
  font-size: 20px;
  padding: 3px;
  font-weight: 600;
`;

// Extending styles
const SubTitle = styled(Title)`
  font-size: 15px;
  font-weight: 400;
`;

const TemplateContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px 0;
`;

const GridContainer = styled.div`
  padding: 5px 0;
  margin-bottom: 15px;
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

const GridGroups = () => (
  <>
    <SubTitle>1 : 2 : 1 : 2 (column)</SubTitle>
    <GridContainer>
      <GridOne>
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </GridOne>
    </GridContainer>

    <SubTitle>1 : 1 : 1 : 1 : 1</SubTitle>
    <GridContainer>
      <GridTwo>
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </GridTwo>
    </GridContainer>

    <SubTitle>1 : 1 : 1 : 2</SubTitle>
    <GridContainer>
      <GridThree>
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </GridThree>
    </GridContainer>

    <SubTitle>(Min 300px Max 2fr) : 1 : 1 : 1 </SubTitle>
    <GridContainer>
      <GridFour>
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </GridFour>
    </GridContainer>

    <SubTitle>Responsive grid with auto-fit & minmax (ghost grids not created)</SubTitle>
    <SubTitle>Take the content and expand to fill the empty spaces</SubTitle>
    <GridContainer>
      <GridSix>
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </GridSix>
    </GridContainer>

    <SubTitle>Responsive grid with auto-fill & minmax (ghost grids created)</SubTitle>
    <SubTitle>
      Fill the layout with as many cells as possible even though there is no content
    </SubTitle>
    <GridContainer>
      <GridSeven>
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </GridSeven>
    </GridContainer>

    <SubTitle>100px : 100px : 100px : 100px (row)</SubTitle>
    <GridContainer>
      <GridEight>
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </GridEight>
    </GridContainer>
  </>
);

export default withRouteComponent(TestPage);
