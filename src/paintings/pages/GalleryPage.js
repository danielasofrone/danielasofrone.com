import React from 'react';
import {ArtworkCard} from '../components/ArtworkCard';
import {artworks} from '../data/artworks';
export function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="px-4 py-12 md:py-16 max-w-7xl mx-auto border-b border-neutral-200">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4">
          Paintings
        </h1>
        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
          Each painting begins with a thought, a feeling, or a question. Some
          reflect personal experiences; others explore emotions and situations
          that are difficult to explain in words.
        </p>
      </section>

      {/* Artworks Grid */}
      <section className="px-4 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="mb-6">
          <p className="text-sm text-neutral-500">
            {artworks.length} paintings
          </p>
        </div>
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 md:gap-8">
          {artworks.map(artwork => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              preserveAspectRatio
            />
          ))}
        </div>
      </section>
    </div>
  );
}
