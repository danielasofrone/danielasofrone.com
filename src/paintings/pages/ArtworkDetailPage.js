import React from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
import {ArrowLeft} from '../components/Icons';
import {artworks} from '../data/artworks';
import ArtworkCarousel from '../components/ArtworkCarousel';
export function ArtworkDetailPage() {
  const {id} = useParams();
  const navigate = useNavigate();
  const artwork = artworks.find(a => a.id === id);
  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-600 mb-4">Artwork not found</p>
          <Link to="/paintings" className="text-sm underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-6 max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/paintings/gallery')}
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <ArtworkCarousel key={artwork.id} artwork={artwork} />

          {/* Artwork Details */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h1 className="font-serif text-3xl md:text-4xl mb-6">
                {artwork.title}
              </h1>

              <div className="mb-8 pb-8 border-b border-neutral-200">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Dimensions</p>
                  <p className="text-sm">
                    {artwork.dimensions.width} × {artwork.dimensions.height}{' '}
                    {artwork.dimensions.unit}
                  </p>
                </div>
              </div>

              {artwork.description && (
                <div>
                  <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-3">
                    About this work
                  </h2>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
