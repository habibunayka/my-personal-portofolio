import { useEffect } from 'react';

// Content is visible until enhancement runs. One observer, one reveal per item.
// Individual translate keeps existing rotated artwork and hover transforms intact.
export default function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const items = [...root.querySelectorAll('[data-reveal]')];
    let observer;
    const showAll = () => items.forEach(el => {
      el.dataset.revealState = 'visible';
    });
    const setup = () => {
      observer?.disconnect();
      if (media.matches) return showAll();
      observer = new IntersectionObserver(entries => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          target.dataset.revealState = 'visible';
          observer.unobserve(target);
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
      items.forEach(el => {
        if (el.dataset.revealState === 'visible') return;
        el.dataset.revealState = 'pending';
        observer.observe(el);
      });
    };
    setup();
    media.addEventListener('change', setup);
    return () => {
      observer?.disconnect();
      media.removeEventListener('change', setup);
      items.forEach(el => { delete el.dataset.revealState; });
    };
  }, [rootRef]);
}
