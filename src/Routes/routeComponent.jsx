import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from 'react-sidebar';
import withSizes from 'react-sizes';
import styled from 'styled-components';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

const mapSizesToProps = ({ width }) => ({
  isSideBar: width < 700
});

const Container = styled.div``;

const Content = styled.div`
  min-height: 80vh;
`;

class RouteComponent extends React.Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState(state => {
      return {
        isMenuOpen: !state.isMenuOpen
      };
    });
  };

  render() {
    return (
      <Container>
        <Helmet>
          <title>CareerTalk</title>
        </Helmet>
        <Sidebar
          sidebar={<b>sidebar content</b>}
          open={this.state.isMenuOpen}
          onSetOpen={this.toggleMenu}
          pullRight
          styles={{
            sidebar: {
              backgroundColor: 'white',
              width: '50%',
              zIndex: '10'
            }
          }}
        >
          <Header isSideBar={this.props.isSideBar} toggleMenu={this.toggleMenu} />
          <Content>{this.props.children}</Content>
          <Footer />
        </Sidebar>
      </Container>
    );
  }
}

export default withSizes(mapSizesToProps)(RouteComponent);
