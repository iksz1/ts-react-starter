import React from "react";
import { hot } from "react-hot-loader";
import { createGlobalStyle } from "styled-components";
import Calc from "./Calc";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: #313529;
    color: tan;
  }
`;

const App = () => (
  <>
    <Calc />
    <GlobalStyle />
  </>
);

export default hot(module)(App);
