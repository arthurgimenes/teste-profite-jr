import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  border: none;
  font-family: Arial, Helvetica, sans-serif;

  li{
    list-style: none
  }
  button{
    background: none;
    cursor: pointer;
  }
}
`;
