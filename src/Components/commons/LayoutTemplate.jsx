import styled from 'styled-components';

// Grid with fraction of size 1 : 2 : 1 : 2
const GridOne = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 5px;
  grid-template-columns: 1fr 2fr 1fr 2fr;
`;

// Grid with repeat 5 of same size
const GridTwo = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 5px;
  grid-template-columns: repeat(5, 1fr);
`;

// Grid with repeat 3 of same size + others with double size
const GridThree = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr) 2fr;
`;

// Grid with minimum size 300px to 2fr and repeat 3
const GridFour = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 5px;
  grid-template-columns: minmax(300px, 2fr) repeat(3, 1fr);
`;

// Grid with Min content (as little as possible) & Max content (as much as possible)
const GridFive = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 5px;
  grid-template-columns: min-content repeat(3, 1fr);
`;

// Responsive grid with auto-fit
const GridSix = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
`;

// Responsive grid with auto-fill
const GridSeven = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
`;

// Grid with size 100px (column)
// grid-auto-flow is "row" by default
const GridEight = styled.div`
  display: grid;
  grid-template-columns: 100px;
  grid-template-rows: 100px;
  grid-gap: 5px;
  grid-auto-rows: 100px;
`;

export { GridOne, GridTwo, GridThree, GridFour, GridFive, GridSix, GridSeven, GridEight };
