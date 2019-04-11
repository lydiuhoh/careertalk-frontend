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
});

const Content = styled.div`
  min-height: 80vh;
  max-width: ${props => (props.isSideBar ? '' : '1200px')};
  flex-flow: nowrap;
  padding-top: 100px;
  width: 100%;
  margin: 0 auto;
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
          <>
            <Helmet>
              <title>CareerTalk</title>
            </Helmet>
            <Sidebar
              sidebar={<BarMenu />}
              open={this.state.isMenuOpen}
              onSetOpen={this.toggleMenu}
              pullRight
              styles={{
                root: {
                  overflow: 'initial'
                },
                content: {
                  overflowY: 'initial'
                },
                sidebar: {
                  position: 'fixed',
                  backgroundColor: 'white',
                  width: '50%',
                  zIndex: '10'
                }
              }}
            >
              <Header isSideBar={this.props.isSideBar} toggleMenu={this.toggleMenu} />
              <Content isSideBar={this.props.isSideBar}>
                <WrappedComponent {...this.props} />
              </Content>
              <Footer />
            </Sidebar>
          </>
        );
      }
  }
);

export default withRouteComponent;
