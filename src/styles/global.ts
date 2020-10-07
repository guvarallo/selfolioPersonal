import { createGlobalStyle } from 'styled-components';
import { colors } from '../source/data';

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

  body.light-mode {
    background: ${colors.background};
    color: #000;
    transition: background 0.3s ease;
  }

  body.dark-mode {
    background: ${colors.first};
    color: ${colors.background};
    transition: background 0.3s ease;
  }

  button {
    float: right;
    width: 100%;
    margin-top: 20px;
    margin-right: 20px;
    outline: none;
  }

  button:focus {
    outline: 0;
  }

  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }
`;
