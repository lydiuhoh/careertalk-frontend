import React from 'react';
import Sidebar from 'react-sidebar';
import withSizes from 'react-sizes';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Components/Header';
import { BarMenu } from '../Components/Menu';
import ErrorFallback from './ErrorFallback';

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

const withRouteComponent = WrappedComponent => withRouter(withSizes(mapSizesToProps)(
  class RouteComponent extends React.Component {
      state = {
        isMenuOpen: false,
        hasError: false,
      };

      toggleMenu = () => {
        this.setState(state => {
          return {
            isMenuOpen: !state.isMenuOpen
          };
        });
      };

      redirectFn = path => {
        const { history: { push } = {} } = this.props;

        if (push && typeof push === 'function') {
          push(path);
        } else {
          window.location = path;
        }
      };

      componentWillReceiveProps = props => {
        const { isSideBar } = props;
        const { isMenuOpen } = this.state;

        if (!isSideBar && isMenuOpen) {
          this.toggleMenu();
        }
      };

      componentDidCatch = () => {
        this.setState({
          hasError: true
        });
      };

      render() {
        const { hasError } = this.state;

        return (
          <>
            <Sidebar
              sidebar={<BarMenu toggleMenu={this.toggleMenu} redirectFn={this.redirectFn} />}
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
                  width: '35%',
                  zIndex: '10'
                }
              }}
            >
              {hasError ? (
                <ErrorFallback />
              ) : (
                <>
                  <Header isSideBar={this.props.isSideBar} toggleMenu={this.toggleMenu} />
                  <Content isSideBar={this.props.isSideBar}>
                    <WrappedComponent {...this.props} />
                  </Content>
                </>
              )}
            </Sidebar>
          </>
        );
      }
  }
));

export default withRouteComponent;
