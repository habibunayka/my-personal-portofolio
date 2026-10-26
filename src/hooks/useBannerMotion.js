import { useEffect } from 'react';

// A single rAF per scroll frame, bounded by one repeated group. No new anime
// instance on every scroll, no accumulation, and no work off screen.
export default function useBannerMotion(trackRef, direction = -1) {
  useEffect(() => {
    const track = trackRef.current;
    const banner = track?.closest('.diagonal-banner');
    if (!track || !banner) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let frame = 0;
    let position = 0;
    let previousY = window.scrollY;
    let width = 1;
    const measure = () => { width = track.firstElementChild.getBoundingClientRect().width + 80; };
    const resize = new ResizeObserver(measure);
    resize.observe(track.firstElementChild);
    measure();
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; previousY = window.scrollY; });
    observer.observe(banner);
    const update = () => {
      const y = window.scrollY;
      const delta = y - previousY;
      previousY = y;
      if (visible && !media.matches) {
        position = ((position + delta * 0.3 * direction) % width + width) % width;
        track.style.transform = `translateX(${-width + position}px)`;
      }
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onMotion = () => { if (media.matches) track.style.transform = 'none'; previousY = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });
    media.addEventListener('change', onMotion);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); resize.disconnect(); window.removeEventListener('scroll', onScroll); media.removeEventListener('change', onMotion); };
  }, [trackRef, direction]);
}
