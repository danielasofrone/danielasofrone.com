import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/Homepage';
import ArticlePage from './pages/ArticlePage';
import ScrollToHash from './components/ScrollToHash';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
