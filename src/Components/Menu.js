import React from 'react';
import styled from 'styled-components';

import { MapIcon, FlagIcon, FavoriteListIcon, FairsListIcon, ArrowRightIcon } from './Icons';
import { Avatar } from './commons';

const SideMenuContainer = styled.div`
  height: 100vh;
  background-color: #fafafa;
`;

const MenuTop = styled.div`
  transition: height 0.3s ease-in-out;
  height: ${props => (props.isScroll ? '50px' : '77px')};
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 3px 10px 3px 10px;
`;

const ArrowWrapper = styled.div`
  cursor: pointer;
  transition: 0.3s;
  &:hover path {
    fill: ${props => props.theme.blueColor};
  }
`;

const MenuItem = styled.div`
  display: flex;
  padding: 3px;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: 0.1s;
  border-radius: 3px;
  &:hover {
    color: ${props => props.theme.blueColor};
  }
  &:hover path {
    fill: ${props => props.theme.blueColor};
  }
`;

const SideMenuItem = styled.div`
  display: flex;
  position: relative;
  with: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
  margin-bottom: 3px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 3px;
  color: ${props => props.theme.primaryColor};
  &:hover {
    background-color: ${props => props.theme.primaryColor};
    color: white;
  }
  &:hover path {
    fill: white;
  }
`;

const SideMenuIcon = styled.div`
  padding: 5px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const SideMenuTitle = styled.div`
  padding: 5px;
  width: 100%;
  margin-left: 3px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const MeTitle = styled(SideMenuTitle)`
  height: 50px;
`;

const MenuButton = styled.button`
  appearance: none;
  padding: 10px;
  text-align: center;
  font-weight: 800;
  border: 0;
  cursor: pointer;
  font-size: 20px;
  color: white;
  z-index: 2;
  background-color: transparent;
`;

const HeaderMenu = () => (
  <>
    <MenuItem>
      <SideMenuIcon>
        <FlagIcon />
      </SideMenuIcon>
      <SideMenuTitle>Featured</SideMenuTitle>
    </MenuItem>
    <MenuItem>
      <SideMenuIcon>
        <FairsListIcon />
      </SideMenuIcon>
      <SideMenuTitle>Fairs</SideMenuTitle>
    </MenuItem>
    <MenuItem>
      <SideMenuIcon>
        <FavoriteListIcon />
      </SideMenuIcon>
      <SideMenuTitle>Favorites</SideMenuTitle>
    </MenuItem>
    <MenuItem>
      <SideMenuIcon>
        <MapIcon />
      </SideMenuIcon>
      <SideMenuTitle>Map</SideMenuTitle>
    </MenuItem>
    <MenuItem>
      <Avatar url="" size={40} />
    </MenuItem>
  </>
);

class BarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isScroll: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollHeight = window.scrollY;

    if (scrollHeight > 30) {
      this.setState({
        isScroll: true
      });
    } else {
      this.setState({
        isScroll: false
      });
    }
  }

  render() {
    const { isScroll } = this.state;
    const { toggleMenu } = this.props;

    return (
      <SideMenuContainer>
        <MenuTop isScroll={isScroll}>
          <ArrowWrapper onClick={toggleMenu}>
            <ArrowRightIcon />
          </ArrowWrapper>
        </MenuTop>
        <SideMenuItem>
          <SideMenuIcon>
            <FlagIcon />
          </SideMenuIcon>
          <SideMenuTitle>Featured</SideMenuTitle>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuIcon>
            <FairsListIcon />
          </SideMenuIcon>
          <SideMenuTitle>Fairs</SideMenuTitle>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuIcon>
            <FavoriteListIcon />
          </SideMenuIcon>
          <SideMenuTitle>Favorites</SideMenuTitle>
        </SideMenuItem>
        <SideMenuItem>
          <SideMenuIcon>
            <MapIcon />
          </SideMenuIcon>
          <SideMenuTitle>Map</SideMenuTitle>
        </SideMenuItem>
        <SideMenuItem>
          <Avatar url="" />
          <MeTitle>Me</MeTitle>
        </SideMenuItem>
      </SideMenuContainer>
    );
  }
}

export { HeaderMenu, BarMenu, MenuButton };
