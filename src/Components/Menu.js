import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { GoogleLogout } from 'react-google-login';

import styled from 'styled-components';

import { ISLOGGEDIN_QUERY, LOCAL_LOG_OUT } from '../Apollo/sharedQueries';
import { MapIcon, FlagIcon, FavoriteListIcon, FairsListIcon, ArrowRightIcon } from './Icons';
import { Avatar } from './commons';
import AppConfig from '../config.json';

const googleClientId = AppConfig.GOOGLE_CLIENT_ID;

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

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover .dropdown-content {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 7px;
  right: 0;
`;

const UserAvatar = styled(Avatar)``;

const DropdownItem = styled(SideMenuItem)``;

const HeaderMenu = props => {
  const { data: { isLoggedIn } } = useQuery(ISLOGGEDIN_QUERY);
  const localLogoutMutation = useMutation(LOCAL_LOG_OUT);
  const { redirectFn } = props;

  const signOutGoogle = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(auth2.disconnect().then(localLogoutMutation));
    }
  };

  return (
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
        {isLoggedIn ? (
          <Dropdown>
            <UserAvatar url="" size={40} />
            <DropdownContent className="dropdown-content">
              <DropdownItem>
                <SideMenuTitle>View My Profile</SideMenuTitle>
              </DropdownItem>
              <DropdownItem>
                <GoogleLogout
                  clientId={googleClientId}
                  render={() => <SideMenuTitle onClick={signOutGoogle}>Sign out</SideMenuTitle>}
                  onLogoutSuccess={() => console.log('Successfully signed out')}
                />
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
        ) : (
          <SideMenuTitle onClick={() => redirectFn('/auth')}>Sign in</SideMenuTitle>
        )}
      </MenuItem>
    </>
  );
};

const BarMenu = props => {
  const { data: { isLoggedIn } } = useQuery(ISLOGGEDIN_QUERY);
  const [isScroll, setScroll] = useState(window.scrollY > 30);
  const { redirectFn } = props;
  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    // Component did mount
    window.addEventListener('scroll', handleScroll);

    // Component will unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SideMenuContainer>
      <MenuTop isScroll={isScroll}>
        <ArrowWrapper onClick={props.toggleMenu}>
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
        {isLoggedIn ? (
          <>
            <Avatar url="" />
            <MeTitle>Me</MeTitle>
          </>
        ) : (
          <SideMenuTitle onClick={() => redirectFn('/auth')}>Sign in</SideMenuTitle>
        )}
      </SideMenuItem>
    </SideMenuContainer>
  );
};

export { HeaderMenu, BarMenu, MenuButton };
