import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import './gallery.css';

export default function PaintingsLayout() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = 'Paintings | Daniela Sofrone';
    return () => {
      document.title = previousTitle;
    };
  }, [pathname]);

  return (
    <div className="paintings-site">
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <a href="https://danielasofrone.com">← Back to danielasofrone.com</a>
        </div>
        <Footer />
      </div>
    </div>
  );
}
