import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  background-color: #0d1d2d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  & svg {
    fill: white;
  }
  margin-bottom: 30px;
  padding: 10px;
`;

const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.yellowColor};
  font-size: 25px;
  font-weight: 300;
  margin-left: 10px;
  padding: 3px;
  letter-spacing: 0.7px;
`;

const SubTitle = styled.h3`
  color: ${props => props.theme.yellowColor};
  font-size: 15px;
  font-weight: 300;
  margin-left: 40px;
  padding: 3px;
  letter-spacing: 0.7px;
`;

const TitleField = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImage = styled.img`
  width: 55px;
`;

const MenuItem = styled.div`
  padding: 3px 10px 3px 10px;
`;

const Menu = () => (
  <>
    <MenuItem>Featured</MenuItem>
    <MenuItem>Fairs</MenuItem>
    <MenuItem>Favorites</MenuItem>
    <MenuItem>Map</MenuItem>
    <MenuItem>Me</MenuItem>
  </>
);

const Header = () => (
  <Container>
    <HeaderColumn>
      <LogoImage src={require('../../images/logo_transparent.png')} />
      <TitleField>
        <Title>CareerTalk</Title>
        <SubTitle>Ignite your career</SubTitle>
      </TitleField>
    </HeaderColumn>
    <HeaderColumn>
      <Menu />
    </HeaderColumn>
  </Container>
);

export default Header;
