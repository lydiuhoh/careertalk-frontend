import styled from 'styled-components';

const Container = styled.div`
  padding: 0 ${props => (props.isSideBar ? '15px' : '55px')};
`;

export { Container };
