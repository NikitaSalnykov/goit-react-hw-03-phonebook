
import styled from 'styled-components';

export const Form = styled.form`
  & div {
  display: flex;
  flex-direction: column;

  padding: 10px 20px;
  border: solid 1px black;
  max-width: 400px;
  }
`

export const Button = styled.button`
    width: 100px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    transition:  background-color 0.1s ease;
  &:hover {
    background-color: lightgrey;
    
  } &:active {
    background-color: lightblue;
    }
`


export const Input = styled.input`
    max-width: 300px;
    margin-bottom: 22px;
    margin-top: 5px;
    padding: 7px 10px;
    border: 1px solid black;
    background-color: transparent;
`