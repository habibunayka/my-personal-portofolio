import { useLayoutEffect } from 'react';
import { animate } from 'animejs';

// One sequence owns the existing card and cursor. Layout stays at its final size;
// only transforms animate, and the cursor is counter-scaled to keep its artwork intact.
export default function useHeroCardOpening(cardRef, cursorRef) {
  useLayoutEffect(() => {
    const card = cardRef.current;
    const cursor = cursorRef.current;
    const profile = card?.closest('.hero-profile');
    if (!profile || !cursor) return;

    const content = [...card.querySelectorAll('.hero-profile-content')];
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const progress = { approach: 0, opening: 0, release: 0 };
    const animations = new Set();
    let observer;
    let disposed = false;
    let started = false;
    let finished = false;
    let geometry;

    const phase = value => { profile.dataset.cardPhase = value; };
    const render = () => {
      if (finished || !geometry) return;
      const { closedX, closedY, left, top, cursorWidth, cardWidth } = geometry;
      const sx = closedX + (1 - closedX) * progress.opening;
      const sy = closedY + (1 - closedY) * progress.opening;
      // Grab the upper-left handle, then keep moving past the card's left edge.
      const releaseX = -left - cardWidth - cursorWidth - 2;
      const releaseDistance = progress.release * (releaseX - (-left - 2));
      const finalX = (-left - 2) * progress.approach + releaseDistance;
      const finalY = (-top - 2) * progress.approach;
      card.style.transform = `scale(${sx}, ${sy})`;
      cursor.style.transform = `translate(${finalX}px, ${finalY}px) scale(${1 / sx}, ${1 / sy})`;
    };
    const measure = () => {
      const styles = getComputedStyle(card);
      geometry = {
        closedX: parseFloat(styles.getPropertyValue('--hero-closed-x')),
        closedY: parseFloat(styles.getPropertyValue('--hero-closed-y')),
        left: cursor.offsetLeft,
        top: cursor.offsetTop,
        cursorWidth: cursor.offsetWidth,
        cardWidth: card.offsetWidth,
      };
      render();
    };
    const finish = () => {
      finished = true;
      animations.forEach(animation => animation.cancel());
      animations.clear();
      observer?.disconnect();
      phase('open');
      profile.inert = false;
      card.style.removeProperty('transform');
      content.forEach(el => { el.style.removeProperty('opacity'); });
    };
    const run = async () => {
      if (disposed || started || finished) return;
      started = true;
      observer?.disconnect();
      const compact = window.matchMedia('(max-width: 639px)').matches;
      const play = (targets, options) => {
        const animation = animate(targets, options);
        animations.add(animation);
        return animation.then(() => { animations.delete(animation); });
      };
      const step = (values, duration) => play(progress, {
        ...values, duration, ease: 'inOutCubic', onUpdate: render,
      });
      try {
        phase('approaching');
        await step({ approach: 1 }, compact ? 520 : 680);
        if (disposed || finished) return;
        phase('opening');
        await step({ opening: 1 }, compact ? 640 : 820);
        if (disposed || finished) return;
        // The opening animation's completion promise is the reveal gate.
        // Nothing can show the contents while the card is still expanding.
        phase('revealing');
        const reveal = play(content, { opacity: [0, 1], duration: 260, ease: 'outQuad' });
        await step({ release: 1 }, compact ? 900 : 1100);
        await reveal;
        if (!disposed && !finished) finish();
      } catch {
        // Fail open if enhancement is interrupted or unavailable.
        if (!disposed) finish();
      }
    };

    phase('closed');
    profile.inert = true;
    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(card);
    // ResizeObserver also covers font loading and breakpoint-dependent dimensions.
    const onMotion = () => { if (motion.matches) finish(); };
    motion.addEventListener('change', onMotion);
    if (motion.matches || !('IntersectionObserver' in window)) {
      finish();
    } else {
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) run();
      }, { threshold: .25 });
      // Observe the reserved card area, which may start below the fold on mobile.
      observer.observe(profile);
    }

    return () => {
      disposed = true;
      animations.forEach(animation => animation.cancel());
      animations.clear();
      observer?.disconnect();
      resize.disconnect();
      motion.removeEventListener('change', onMotion);
      card.style.removeProperty('transform');
      cursor.style.removeProperty('transform');
      content.forEach(el => { el.style.removeProperty('opacity'); });
      profile.inert = false;
    };
  }, [cardRef, cursorRef]);
}
