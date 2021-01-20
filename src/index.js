import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import {ParallaxProvider} from 'react-scroll-parallax';
import HomePage from '../src/components/HomePage/Homepage';

ReactDOM.render(
  <ParallaxProvider>
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  </ParallaxProvider>,
  document.getElementById('root')
);
