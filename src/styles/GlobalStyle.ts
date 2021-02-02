import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

body, html {
  height: 100vh;
}

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    background-color: #E5E5E5;
  }

  input,button, select {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
