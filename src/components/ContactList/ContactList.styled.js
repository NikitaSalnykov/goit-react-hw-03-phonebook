import styled from 'styled-components';

export const List = styled.ul`
max-width: 500px;
padding: 0;

& li {
  display:flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  background-color: #dadbe3;
  padding: 15px 15px ;
  &:nth-child(even) {
  background-color: transparent;
}
  & div {
  display:flex;
  flex-wrap: wrap;
  & p+p {
  margin-left: 5px;
  }
}
}
`