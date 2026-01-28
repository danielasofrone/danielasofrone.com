import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
     overflow-x: hidden;
    max-width: 100%;
    
  }
  img {
  max-width: 100%;
}
outline: 1px solid rgba(255, 0, 0, 0.15);
`;

export default GlobalStyle;

