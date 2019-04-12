import React from 'react';
import styled from 'styled-components';
import { HeaderMenu, MenuButton } from '../Menu';

const Container = styled.header`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  & svg {
    fill: white;
  }
  padding: 10px;
  transition: height 0.3s ease-in-out;
  height: ${props => (props.isScroll ? '50px' : '77px')};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
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
  width: 45px;
`;

class Header extends React.Component {
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

    return (
      <Container isScroll={isScroll}>
        <HeaderColumn>
          <LogoImage src={require('../../images/logo_transparent.png')} />
          <TitleField>
            <Title>CareerTalk</Title>
            {!isScroll && <SubTitle>Ignite your career</SubTitle>}
          </TitleField>
        </HeaderColumn>
        <HeaderColumn>
          {this.props.isSideBar ? (
            <MenuButton onClick={this.props.toggleMenu}>
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
  }
}

export default Header;
