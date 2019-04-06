import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from 'react-sidebar';
import withSizes from 'react-sizes';
import styled from 'styled-components';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { BarMenu } from '../Components/Menu';

const mapSizesToProps = ({ width }) => ({
  isSideBar: width < 700,
  isMobile: width < 480,
});

const Container = styled.div``;

const Content = styled.div`
  min-height: 80vh;
`;

const withRouteComponent = WrappedComponent => withSizes(mapSizesToProps)(
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
              sidebar={<BarMenu />}
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
              <Content>
                <WrappedComponent {...this.props} />
              </Content>
              <Footer />
            </Sidebar>
          </Container>
        );
      }
  }
);

export default withRouteComponent;
