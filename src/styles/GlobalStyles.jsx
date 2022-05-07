import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    text-align: center;
    font-family: "Helvetica", monospace;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    transition: all 0.5s linear;
  }
`;
export default GlobalStyles;
