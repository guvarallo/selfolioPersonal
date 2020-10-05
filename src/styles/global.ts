import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    z-index: 1;
  }

  #root {
    margin: 0 auto;
  }

  button {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
  }

  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }
`;
