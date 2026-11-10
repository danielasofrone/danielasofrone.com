import React from 'react';
import {ArtworkCard} from '../components/ArtworkCard';
import {artworks} from '../data/artworks';
import {Link} from 'react-router-dom';
import heroImage from '../assets/hero-water-ingestion-test.png';
export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src={heroImage}
          alt="Water Ingestion Test displayed above a sofa"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Text content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
            <div className="max-w-xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                I paint thoughts and feelings.
              </h1>
              <p className="text-white/90 text-base md:text-lg max-w-md">
                My paintings explore emotions, inner conflicts, relationships,
                and the thoughts that are often difficult to put into words.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="px-4 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-neutral-900">
            Selected Paintings
          </h2>
          <Link
            to="/paintings/gallery"
            className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors whitespace-nowrap"
          >
            <span>View all paintings</span>
            <span>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {artworks.slice(0, 18).map(artwork => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>
    </div>
  );
}
