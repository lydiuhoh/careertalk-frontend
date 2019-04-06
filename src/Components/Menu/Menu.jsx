import React from 'react';
import styled from 'styled-components';

const MenuItem = styled.div`
  padding: 3px 10px 3px 10px;
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
  <>
    <MenuItem>Featured</MenuItem>
    <MenuItem>Fairs</MenuItem>
    <MenuItem>Favorites</MenuItem>
    <MenuItem>Map</MenuItem>
    <MenuItem>Me</MenuItem>
  </>
);


export { HeaderMenu, BarMenu, MenuButton };
