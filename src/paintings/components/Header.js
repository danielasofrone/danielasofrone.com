import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Menu} from '../components/Icons';
import {useState, useEffect, useRef} from 'react';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const isActive = path => location.pathname === path;
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Mobile: Burger Menu (Left) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo (Left on Desktop, Center on Mobile) */}
          <Link
            to="/paintings"
            className="text-2xl font-serif md:mr-auto absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0"
          >
            Daniela Sofrone
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/paintings"
              className={`text-sm transition-colors ${
                isActive('/paintings')
                  ? 'text-neutral-900'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/paintings/gallery"
              className={`text-sm transition-colors ${
                isActive('/paintings/gallery')
                  ? 'text-neutral-900'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Paintings
            </Link>
            <Link
              to="/paintings/about"
              className={`text-sm transition-colors ${
                isActive('/paintings/about')
                  ? 'text-neutral-900'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              About
            </Link>
          </nav>

          <div className="md:hidden w-10" aria-hidden="true" />
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden pt-4 pb-2 flex flex-col gap-3"
            ref={menuRef}
          >
            <Link
              to="/paintings"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm py-2 ${
                isActive('/paintings') ? 'text-neutral-900' : 'text-neutral-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/paintings/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm py-2 ${
                isActive('/paintings/gallery')
                  ? 'text-neutral-900'
                  : 'text-neutral-600'
              }`}
            >
              Paintings
            </Link>
            <Link
              to="/paintings/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm py-2 ${
                isActive('/paintings/about')
                  ? 'text-neutral-900'
                  : 'text-neutral-600'
              }`}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
