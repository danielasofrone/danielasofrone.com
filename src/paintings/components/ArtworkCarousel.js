import React, {useRef, useState} from 'react';
import './artworkCarousel.css';

export default function ArtworkCarousel({artwork}) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const images = [
    {src: artwork.image, description: 'painting'},
    {src: artwork.secondaryImage, description: 'alternate view'},
    {src: artwork.roomImage, description: 'furnished room preview'},
  ].filter(image => image.src);
  const multiple = images.length > 1;
  const move = direction =>
    setActive(index => (index + direction + images.length) % images.length);

  return (
    <section
      className="artwork-carousel"
      aria-label={`${artwork.title} images`}
      aria-roledescription={multiple ? 'carousel' : undefined}
      onKeyDown={event => {
        if (!multiple) return;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          move(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
    >
      <div
        className="artwork-carousel-frame"
        onTouchStart={event => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={event => {
          if (multiple && touchStart.current !== null) {
            const distance =
              event.changedTouches[0].clientX - touchStart.current;
            if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
          }
          touchStart.current = null;
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
      >
        <img
          src={images[active].src}
          alt={`${artwork.title} — ${images[active].description}`}
        />
      </div>
      {multiple && (
        <div className="artwork-carousel-controls">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous image"
          >
            ←
          </button>
          <div className="artwork-carousel-dots" aria-label="Choose image">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show image ${index + 1} of ${images.length}`}
                aria-current={active === index ? 'true' : undefined}
                onClick={() => setActive(index)}
              >
                <span />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => move(1)} aria-label="Next image">
            →
          </button>
        </div>
      )}
      {multiple && (
        <p className="artwork-carousel-count" aria-live="polite">
          {active + 1} / {images.length}
        </p>
      )}
    </section>
  );
}
