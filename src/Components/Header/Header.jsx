import React from 'react';
import styled from 'styled-components';
import { HeaderMenu, MenuButton } from '../Menu';

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

const Header = props => (
  <Container>
    <HeaderColumn>
      <LogoImage src={require('../../images/logo_transparent.png')} />
      <TitleField>
        <Title>CareerTalk</Title>
        <SubTitle>Ignite your career</SubTitle>
      </TitleField>
    </HeaderColumn>
    <HeaderColumn>
      {props.isSideBar ? (
        <MenuButton onClick={props.toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </MenuButton>
      ) : (
        <HeaderMenu />
      )}
    </HeaderColumn>
  </Container>
);

export default Header;
