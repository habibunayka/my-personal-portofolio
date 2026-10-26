import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { tooltipGeometry } from '../utils/tooltipGeometry';

// Position the portal shell independently of the line/body entrance animations.
// Refs + one RAF per frame keep pointer movement out of React render state.
export default function CursorTooltip({ children, content, label, className = '', popupClassName = '', interactive = false, ...props }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const layerRef = useRef(null);
  const shellRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const modeRef = useRef('hover');
  const pointRef = useRef({ x: 0, y: 0 });
  const anchorRatioRef = useRef({ x: .5, y: .5 });
  const frameRef = useRef(0);
  const positionRef = useRef(null);
  const pointerDownRef = useRef(false);

  const schedule = () => {
    if (frameRef.current) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0;
      positionRef.current?.();
    });
  };
  const show = (mode, event) => {
    modeRef.current = mode;
    if (mode === 'hover') pointRef.current = { x: event.clientX, y: event.clientY };
    setOpen(true);
    schedule();
  };
  const toggle = event => {
    if (open && modeRef.current === 'pinned') setOpen(false);
    else {
      const trigger = triggerRef.current;
      const art = trigger.querySelector('.hero-decoration-art, .hero-profile-card, img') || trigger;
      const rect = art.getBoundingClientRect();
      anchorRatioRef.current = event?.detail > 0
        ? { x: (event.clientX - rect.left) / (rect.width || 1), y: (event.clientY - rect.top) / (rect.height || 1) }
        : { x: .5, y: .5 };
      show('pinned');
    }
  };

  useLayoutEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const layer = layerRef.current;
    const shell = shellRef.current;
    const first = firstRef.current;
    const second = secondRef.current;
    let side;
    const position = () => {
      const vv = window.visualViewport;
      const viewport = { left: vv?.offsetLeft || 0, top: vv?.offsetTop || 0,
        width: vv?.width || document.documentElement.clientWidth, height: vv?.height || window.innerHeight };
      let anchor = pointRef.current;
      if (modeRef.current !== 'hover') {
        const art = trigger.querySelector('.hero-decoration-art, .hero-profile-card, img') || trigger;
        const rect = art.getBoundingClientRect();
        if (rect.bottom < viewport.top || rect.top > viewport.top + viewport.height) {
          setOpen(false);
          return;
        }
        const ratio = modeRef.current === 'pinned' ? anchorRatioRef.current : { x: .5, y: .5 };
        anchor = { x: rect.left + rect.width * ratio.x, y: rect.top + rect.height * ratio.y };
      }
      layer.style.setProperty('--tooltip-max-width', `${Math.max(1, viewport.width - 24)}px`);
      layer.style.setProperty('--tooltip-max-height', `${Math.max(1, viewport.height - 24)}px`);
      const result = tooltipGeometry(anchor, { width: shell.offsetWidth, height: shell.offsetHeight }, viewport, side);
      side = result.side;
      shell.style.transform = `translate3d(${result.x}px, ${result.y}px, 0)`;
      first.setAttribute('d', result.first);
      second.setAttribute('d', result.second);
      layer.dataset.side = side;
      layer.dataset.mode = modeRef.current;
      layer.dataset.positioned = 'true';
    };
    positionRef.current = position;
    position(); // Layout effect runs before the very first visible frame.
    const onViewportChange = event => {
      if (event.target instanceof Node && shell.contains(event.target)) return;
      if (modeRef.current === 'hover') {
        const { x, y } = pointRef.current;
        if (!trigger.contains(document.elementFromPoint(x, y))) {
          setOpen(false);
          return;
        }
      }
      schedule();
    };
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        if (shell.contains(document.activeElement)) trigger.focus({ preventScroll: true });
        setOpen(false);
      }
      // A pinned interactive annotation can be reached without changing DOM layout.
      if (interactive && event.key === 'Tab' && !event.shiftKey && document.activeElement === trigger) {
        const button = shell.querySelector('button');
        if (button) { event.preventDefault(); button.focus(); }
      } else if (interactive && event.key === 'Tab' && event.shiftKey && shell.contains(document.activeElement)) {
        event.preventDefault(); trigger.focus({ preventScroll: true });
      }
    };
    const onOutside = event => {
      if (!trigger.contains(event.target) && !shell.contains(event.target)) setOpen(false);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(shell);
    window.addEventListener('resize', onViewportChange);
    window.addEventListener('scroll', onViewportChange, true);
    window.visualViewport?.addEventListener('resize', onViewportChange);
    window.visualViewport?.addEventListener('scroll', onViewportChange);
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('focusin', onOutside);
    document.addEventListener('keydown', onKeyDown);
    // Only one annotation remains active when moving between objects.
    const onOther = event => { if (event.detail !== id) setOpen(false); };
    document.addEventListener('portfolio-tooltip-open', onOther);
    document.dispatchEvent(new CustomEvent('portfolio-tooltip-open', { detail: id }));
    return () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
      positionRef.current = null;
      observer.disconnect();
      window.removeEventListener('resize', onViewportChange);
      window.removeEventListener('scroll', onViewportChange, true);
      window.visualViewport?.removeEventListener('resize', onViewportChange);
      window.visualViewport?.removeEventListener('scroll', onViewportChange);
      document.removeEventListener('pointerdown', onOutside);
      document.removeEventListener('focusin', onOutside);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('portfolio-tooltip-open', onOther);
    };
  }, [open, id, interactive]);

  // Also cancel a queued initial pointer update if unmounted before opening.
  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  return <>
    <div {...props} ref={triggerRef} className={`${className}${open ? ' is-annotated' : ''}`}
      role="button" tabIndex={0} aria-label={label} aria-expanded={open}
      aria-describedby={open && !interactive ? id : undefined}
      aria-controls={open ? id : undefined} aria-haspopup={interactive ? 'dialog' : undefined}
      onPointerEnter={event => {
        if (event.pointerType !== 'touch' && window.matchMedia('(any-hover: hover)').matches) show('hover', event);
      }}
      onPointerMove={event => {
        if (modeRef.current !== 'hover' || event.pointerType === 'touch') return;
        pointRef.current = { x: event.clientX, y: event.clientY };
        schedule();
      }}
      onPointerLeave={() => { if (modeRef.current === 'hover') setOpen(false); pointerDownRef.current = false; }}
      onPointerDown={() => { pointerDownRef.current = true; }}
      onPointerUp={() => { pointerDownRef.current = false; }}
      onPointerCancel={() => { pointerDownRef.current = false; setOpen(false); }}
      onFocus={() => {
        if (pointerDownRef.current) return;
        const trigger = triggerRef.current;
        const art = trigger.querySelector('.hero-decoration-art, .hero-profile-card, img') || trigger;
        art.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
        show('focus');
      }}
      onBlur={event => {
        if (!(event.relatedTarget instanceof Node) || !layerRef.current?.contains(event.relatedTarget)) setOpen(false);
      }}
      onClick={toggle}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); }
      }}>
      {children}
    </div>
    {open && createPortal(<div ref={layerRef} className="cursor-tooltip-layer">
      <svg className="cursor-tooltip-connector" aria-hidden="true">
        <path ref={firstRef} className="connector-first" pathLength="1" />
        <path ref={secondRef} className="connector-second" pathLength="1" />
      </svg>
      <div ref={shellRef} className="cursor-tooltip-position">
        <div id={id} className={`hero-annotation-popup ${popupClassName}`}
          role={interactive ? 'dialog' : 'tooltip'} aria-label={interactive ? label : undefined}>
          {content}
        </div>
      </div>
    </div>, document.body)}
  </>;
}
