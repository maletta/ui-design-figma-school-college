import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0%;
  }
  
  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-ultra.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-ultra.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-black.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-black.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-bold.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-medium.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-book.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-book.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-light.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-thin.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-thin.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

`;

export default GlobalStyles;
