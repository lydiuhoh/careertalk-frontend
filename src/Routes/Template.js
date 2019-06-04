/* eslint no-unused-vars: "off" */

import React, { useState } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import ReactModal from 'react-modal';

import withRouteComponent from './withRouteComponent';
import {
  Container,
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
  LoadingSpinner,
  LoadingLogo,
  BaseCard,
  LogoImage,
  Avatar
} from '../Components/commons';
import useInput from '../Hooks/useInput';
import FairCard from '../Components/FairCard';
import EmployerCard from '../Components/EmployerCard';

const FairObj = {
  organization_id: 1,
  name: 'D-1 UIC Computer Science Career Fair',
  address: '725 West Roosevelt Road',
  num_of_employers: 102,
  date: '2018/09/18',
  start_time: '12:00 PM',
  end_time: '4:00 PM',
  location: 'UIC Forum'
};

const EmployerObj = {
  careerfair_id: 1,
  degree_requirements: ['BS', 'MS'],
  hiring_majors: ['CS'],
  hiring_types: ['INT', 'FT'],
  tables: [1, 2],
  visa_support: 'yes',
  employer: {
    company_url: 'actico.com',
    industry: 'Information Technology and Services',
    description:
      'ACTICO is a leading international provider of software solutions and technologies for decision management.',
    found_year: null,
    hq_city: null,
    id: 10,
    logo_url: 'default_employer.png',
    name: 'ACTICO'
  }
};

const Template = props => {
  return (
    <Container isSideBar={props.isSideBar}>
      <Title>Modal</Title>
      <ModalExample />

      <Title>Employer Card</Title>
      <EmployerGroups />

      <Divider />

      <Title>Fair Card</Title>
      <TemplateContainer>
        <FairCard fair={FairObj} />
      </TemplateContainer>

      <Divider />

      <Title>Button</Title>
      <ButtonGroups />

      <Divider />

      <Title>Form & Input</Title>
      <FormInputGroups />

      <Divider />

      <Title>Loader</Title>
      <LoaderGroups />

      <Divider />

      <Title>Card</Title>
      <CardGroups />

      <Divider />

      <Title>Graphql Query</Title>
      <GQLQuery />

      <Divider />

      <Title>Grid Templates</Title>
      <GridGroups />
    </Container>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '500px',
    transform: 'translate(-50%, -50%)'
  }
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalExample = () => {
  const [modal, showModal] = useState(false);

  const toggleModal = () => {
    if (modal) {
      showModal(false);
    } else {
      showModal(true);
    }
  };

  return (
    <TemplateContainer>
      <button type="button" onClick={toggleModal}>
        Trigger Modal
      </button>
      <ReactModal
        style={customStyles}
        isOpen={modal}
        contentLabel="Minimal Modal Example"
        ariaHideApp={false}
      >
        <ModalContainer>
          <h1>Content</h1>
          <button type="button" onClick={toggleModal}>
            Close Modal
          </button>
        </ModalContainer>
      </ReactModal>
    </TemplateContainer>
  );
};

const EmployerGrid = styled(GridSix)`
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

const EmployerGridSmall = styled(GridSeven)`
  margin-top: 15px;
  grid-auto-rows: minmax(80px, auto);
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

const EmployerGroups = () => {
  return (
    <GridContainer>
      <EmployerGridSmall>
        <EmployerCard {...EmployerObj} size="sm" />
        <EmployerCard {...EmployerObj} size="sm" featured isLiked />
      </EmployerGridSmall>
    </GridContainer>
  );
};

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

const FormInputGroups = () => {
  // React Hooks example
  const templateValue = useInput('');
  const onSubmit = () => {
    console.log(`Submit name: ${templateValue.value}`);
  };

  return (
    <TemplateContainer>
      <Form submitFn={onSubmit}>
        <FormInputGridExample>
          <Input placeholder="Name" value={templateValue.value} onChange={templateValue.onChange} />
          <FormSubmitButton onClick={null} value="Submit" />
        </FormInputGridExample>
      </Form>
    </TemplateContainer>
  );
};

// -------------------- Spinner example ----------------------------------------------- //

const LoaderGroups = () => (
  <ButtonGridExample>
    <div>
      <Loading />
    </div>
    <div>
      <LoadingLogo />
    </div>
    <div>
      <LoadingSpinner />
    </div>
  </ButtonGridExample>
);

// -------------------- Card example ----------------------------------------------- //

const CardGroups = () => (
  <GridContainer>
    <GridSix>
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard>Hello</BaseCard>
    </GridSix>
  </GridContainer>
);

// -------------------- GraphQL Query example ----------------------------------------------- //

const FAIRS = gql`
  {
    getFair {
      name
      address
      city
      zipcode
    }
  }
`;

const GQLQuery = () => {
  // const { data: { getFair: fairs }, loading } = useQuery(FAIRS);

  return (
    <TemplateContainer>
      {/* {!loading ? (
        <div style={{ margin: '30px 0' }}>
          <SubTitle>Name: {`${fairs[0].name}`}</SubTitle>
          <SubTitle>Address: {`${fairs[0].address}`}</SubTitle>
          <SubTitle>City: {`${fairs[0].city}`}</SubTitle>
          <SubTitle>Zipcode: {`${fairs[0].zipcode}`}</SubTitle>
        </div>
      ) : (
        <LoadingSpinner />
      )} */}
      <Title>Currently commented</Title>
    </TemplateContainer>
  );
};

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

export default withRouteComponent(Template);
