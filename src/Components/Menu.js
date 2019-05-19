import React from 'react';
import styled from 'styled-components';

import { Avatar } from './commons';

const SideMenuContainer = styled.div`
  height: 100vh;
  background-color: #fafafa;
`;

const MenuItem = styled.div`
  padding: 3px 10px 3px 10px;
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
  &:hover {
    background-color: ${props => props.theme.primaryColor};
    color: white
  }
`;

const SideMenuAvatar = styled(Avatar)`
  border-radius: 4px;
  padding: 1px;
  width: 40px;
  height: 40px;
`;

const SideMenuTitle = styled.div`
  padding: 5px;
  width: 100%;
  margin-left: 5px;
  height: 40px;
  display: flex;
  align-items: center;
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
    <MenuItem>Featured</MenuItem>
    <MenuItem>Fairs</MenuItem>
    <MenuItem>Favorites</MenuItem>
    <MenuItem>Map</MenuItem>
    <MenuItem>Me</MenuItem>
  </>
);

const BarMenu = () => (
  <SideMenuContainer>
    <SideMenuItem>
      <SideMenuAvatar url="" />
      <SideMenuTitle>Featured</SideMenuTitle>
    </SideMenuItem>
    <SideMenuItem>
      <SideMenuAvatar url="" />
      <SideMenuTitle>Fairs</SideMenuTitle>
    </SideMenuItem>
    <SideMenuItem>
      <SideMenuAvatar url="" />
      <SideMenuTitle>Favorites</SideMenuTitle>
    </SideMenuItem>
    <SideMenuItem>
      <SideMenuAvatar url="" />
      <SideMenuTitle>Map</SideMenuTitle>
    </SideMenuItem>
    <SideMenuItem>
      <Avatar url="" />
      <SideMenuTitle>Me</SideMenuTitle>
    </SideMenuItem>
  </SideMenuContainer>
);

export { HeaderMenu, BarMenu, MenuButton };
