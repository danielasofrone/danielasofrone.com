import React from 'react';
import {Link} from 'react-router-dom';
export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo/Brand */}
        <div className="mb-8">
          <Link to="/paintings" className="inline-block">
            <h2 className="font-serif text-2xl text-neutral-900">
              Daniela Sofrone
            </h2>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="space-y-3">
            <li>
              <Link
                to="/paintings/gallery"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Paintings
              </Link>
            </li>
            <li>
              <Link
                to="/paintings/about"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-xs text-neutral-400">© 2026 Daniela Sofrone</div>
      </div>
    </footer>
  );
}
