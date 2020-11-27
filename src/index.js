import React from "react";
import ReactDOM from "react-dom";
import './i18n';
import HomePage from '../src/components/HomePage/Homepage';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <ParallaxProvider>
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
  </ParallaxProvider>,
  document.getElementById("root")
);
