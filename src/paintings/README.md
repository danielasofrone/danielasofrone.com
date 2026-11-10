# Art District gallery

Integrated from the local Art District project as native React routes. The gallery
is intentionally unlisted in the main portfolio navigation and is shared by direct URL:

- `/paintings`: original gallery landing page
- `/paintings/gallery`: all 12 paintings
- `/paintings/artwork/:id`: artwork images and dimensions
- `/paintings/about`: artist statement

The artwork data lives in `data/artworks.js`; images are bundled from `assets/`.
`gallery.css` contains the original compiled Tailwind design, scoped beneath
`.paintings-site` so the gallery reset and utilities do not affect the portfolio.
All gallery pages load on demand using the site's existing React Router and React
versions. The two SVG icons are implemented locally to avoid another dependency.

As with the existing `/articles/:slug` pages, hosting must serve `index.html`
for application routes that do not correspond to a static file.
