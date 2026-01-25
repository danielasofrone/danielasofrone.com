import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const prefersReducedMotion = () =>
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const easeInOutQuart = (t) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;


const smoothScrollTo = (targetY, duration = 900) => {
  const startY = window.scrollY || window.pageYOffset;
  const diff = targetY - startY;
  const startTime = performance.now();

  const step = (now) => {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(t);

    window.scrollTo(0, startY + diff * eased);

    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');

    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const NAV_OFFSET = 110;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

      if (prefersReducedMotion()) {
        window.scrollTo(0, y);
      } else {
        smoothScrollTo(y, 1500); 
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [hash]);

  return null;
}
