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
  GridEight,
  Button,
  Form,
  Input,
  Divider,
  Loading,
  LoadingSpinner
} from '../../Components/commons';

class TestPage extends React.Component {
  state = {
    name: ''
  };

  onSubmit = () => {
    console.log(`Submit with name: ${this.state.name}`);
  };

  onInputChange = async event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container isSideBar={this.props.isSideBar}>
        <Title>Heart Buttons</Title>
        <HeartButtonGroups />

        <Divider />

        <Title>Filter Buttons</Title>
        <FilterButtonGroups />

        <Divider />

        <Title>Button</Title>
        <ButtonGroups />

        <Divider />

        <Title>Form & Input</Title>
        <FormInputGroups
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
          name={this.state.name}
        />

        <Divider />

        <Title>Spinner</Title>
        <SpinnerGroups />

        <Divider />

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

// -------------------- Icon Buttons example ------------------------------------------------- //

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

// -------------------- Button with Grid example ------------------------------------------- //

const ButtonGridExample = styled(GridSeven)`
  grid-auto-rows: 50px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  place-items: center center;
`;

const ExtendedButton = styled(Button)`
  background-color: #f1c40f;
`;

const ButtonGroups = () => (
  <ButtonGridExample>
    <Button value="Test Button" onClick={() => console.log('Button click!')} />
    <ExtendedButton onClick={() => alert('Hey!!')} /> {/*  eslint-disable-line */}
    <Button value="Disabled" disabled />
  </ButtonGridExample>
);

// -------------------- Form & Input example ----------------------------------------------- //

const FormInputGridExample = styled(GridEight)`
  grid-template-columns: 100%;
  grid-template-rows: 50px;
  grid-auto-rows: 50px;
  place-items: center center;
`;

const FormSubmitButton = styled(Button)`
  width: 100px;
`;

const FormInputGroups = props => (
  <TemplateContainer>
    <Form submitFn={props.onSubmit}>
      <FormInputGridExample>
        <Input
          placeholder="Name"
          type="text"
          onChange={props.onInputChange}
          value={props.name}
          name="name"
        />
        <FormSubmitButton onClick={null} value="Submit" />
      </FormInputGridExample>
    </Form>
  </TemplateContainer>
);

// -------------------- Spinner example ----------------------------------------------- //

const SpinnerGroups = () => (
  <ButtonGridExample>
    <div>
      <Loading />
    </div>
    <div>
      <LoadingSpinner />
    </div>
  </ButtonGridExample>
);

// -------------------- Grid Template example ----------------------------------------------- //

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

// ------------------------------------------------------------------------------------------ //

export default withRouteComponent(TestPage);
