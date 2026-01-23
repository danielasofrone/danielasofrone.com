import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import HomePage from './components/HomePage/Homepage';
import ArticlePage from './pages/ArticlePage';
import ScrollToHash from './components/ScrollToHash';


function App() {
  return (
      <ParallaxProvider>
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
  );
}

export default App;
