import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
    --main-text-size: 1.6rem;
    --product-heading-text-size: 2rem;
    --main-heading-text-size: 3.2rem;
    --primary-blue-color: #2b2d42;
    --highlight-grey-color: #edf2f4;
    --button-hover-color: #E4212D;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.6rem;
  }
`
 
export default GlobalStyle;