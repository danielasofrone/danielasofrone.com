import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage/Homepage';
import ArticlePage from './pages/ArticlePage';
import ScrollToHash from './components/ScrollToHash';
import GlobalStyle from './styles/GlobalStyle';

const PaintingsLayout = lazy(() => import('./paintings/PaintingsLayout'));
const PaintingsHome = lazy(() =>
  import('./paintings/pages/HomePage').then(module => ({
    default: module.HomePage,
  }))
);
const GalleryPage = lazy(() =>
  import('./paintings/pages/GalleryPage').then(module => ({
    default: module.GalleryPage,
  }))
);
const ArtworkDetailPage = lazy(() =>
  import('./paintings/pages/ArtworkDetailPage').then(module => ({
    default: module.ArtworkDetailPage,
  }))
);
const PaintingsAbout = lazy(() =>
  import('./paintings/pages/AboutPage').then(module => ({
    default: module.AboutPage,
  }))
);

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToHash />
        <Suspense fallback={<p role="status">Loading…</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/paintings" element={<PaintingsLayout />}>
              <Route index element={<PaintingsHome />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="artwork/:id" element={<ArtworkDetailPage />} />
              <Route path="about" element={<PaintingsAbout />} />
              <Route
                path="*"
                element={
                  <p>
                    Page not found. <a href="/paintings">Return to paintings</a>
                  </p>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
