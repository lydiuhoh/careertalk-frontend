import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 50px;
`;

const FooterItem = styled.h6`
  font-size: 16px;
  font-weight: 300;
  padding: 3px 15px 3px 15px;
`;

const Footer = () => (
  <Container>
    <Link to="/">
      <FooterItem>Home</FooterItem>
    </Link>
    <h3>|</h3>
    <Link to="/about">
      <FooterItem>About CareerTalk</FooterItem>
    </Link>
    <h3>|</h3>
    <Link to="/get-involved">
      <FooterItem>Get Involved</FooterItem>
    </Link>
  </Container>
);

export default Footer;
