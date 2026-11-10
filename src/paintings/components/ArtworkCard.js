import React from 'react';
import {Link} from 'react-router-dom';
export function ArtworkCard({artwork, preserveAspectRatio = false}) {
  return (
    <Link
      to={`/paintings/artwork/${artwork.id}`}
      className={`group block ${
        preserveAspectRatio ? 'break-inside-avoid mb-8' : ''
      }`}
    >
      <div
        className={`${
          preserveAspectRatio ? '' : 'aspect-[3/4]'
        } overflow-hidden bg-neutral-100 mb-3`}
      >
        <img
          loading="lazy"
          src={artwork.image}
          alt={artwork.title}
          className={`w-full transition-transform duration-300 group-hover:scale-[1.02] ${
            preserveAspectRatio
              ? 'h-auto object-contain'
              : 'h-full object-cover'
          }`}
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-sm text-neutral-900">{artwork.title}</h3>
        <p className="text-xs text-neutral-400">
          {artwork.dimensions.width} × {artwork.dimensions.height}{' '}
          {artwork.dimensions.unit}
        </p>
      </div>
    </Link>
  );
}
