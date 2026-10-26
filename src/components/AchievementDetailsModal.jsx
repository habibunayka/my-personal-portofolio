import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import AssetImage from './AssetImage';

export default function AchievementDetailsModal({ achievement, opener, onClosed }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const backdropDownRef = useRef(false);
  const [closing, setClosing] = useState(false);
  const titleId = useId();
  const requestClose = () => setClosing(true);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const returnFocus = opener.current || document.activeElement;
    const body = document.body;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const keys = ['position', 'top', 'left', 'width', 'overflow', 'paddingRight'];
    const previous = Object.fromEntries(keys.map(key => [key, body.style[key]]));
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbar}px`;
    Object.assign(body.style, { position: 'fixed', top: `-${scrollY}px`, left: `-${scrollX}px`, width: '100%', overflow: 'hidden' });
    dialog.showModal();
    closeRef.current.focus({ preventScroll: true });

    return () => {
      dialog.close();
      Object.assign(body.style, previous);
      const html = document.documentElement;
      const behavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(scrollX, scrollY);
      if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
      html.style.scrollBehavior = behavior;
    };
  }, [opener]);

  useEffect(() => {
    if (!closing) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timeout = window.setTimeout(onClosed, media.matches ? 0 : 220);
    const onPreference = () => { if (media.matches) onClosed(); };
    media.addEventListener('change', onPreference);
    return () => { clearTimeout(timeout); media.removeEventListener('change', onPreference); };
  }, [closing, onClosed]);

  const outside = event => {
    const rect = dialogRef.current.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  };
  const trapFocus = event => {
    if (event.key !== 'Tab') return;
    const elements = [...dialogRef.current.querySelectorAll('button, a[href], [tabindex="0"]')]
      .filter(element => !element.disabled && element.getClientRects().length);
    const first = elements[0];
    const last = elements[elements.length - 1];
    if (!elements.includes(document.activeElement)) { event.preventDefault(); (event.shiftKey ? last : first).focus(); }
    else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  return createPortal(<dialog ref={dialogRef} className="project-modal" data-closing={closing}
    aria-modal="true" aria-labelledby={titleId}
    onCancel={event => { event.preventDefault(); requestClose(); }}
    onKeyDown={trapFocus}
    onPointerDown={event => { backdropDownRef.current = event.target === event.currentTarget && outside(event); }}
    onClick={event => {
      if (backdropDownRef.current && event.target === event.currentTarget && outside(event)) requestClose();
      backdropDownRef.current = false;
    }}
    onAnimationEnd={event => {
      if (closing && event.target === event.currentTarget && event.animationName === 'project-modal-out') onClosed();
    }}>
    <div className="project-modal-header">
      <h2 id={titleId}>{achievement.title}</h2>
      <button ref={closeRef} type="button" className="project-modal-close" aria-label="Close achievement details" onClick={requestClose}>
        <X size={23} aria-hidden="true" />
      </button>
    </div>
    <div className="project-modal-content" tabIndex={0} aria-label="Achievement documentation">
      {achievement.image && <AssetImage src={achievement.image} alt={achievement.title} className="project-modal-media" hideUnavailable />}
    </div>
  </dialog>, document.body);
}
