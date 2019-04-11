import styled from 'styled-components';

const TestBox = styled.div`
  :nth-child(even) {
    background-color: #3498db;
  }
  :nth-child(odd) {
    background-color: #34495e;
  }
`;

export { TestBox };
