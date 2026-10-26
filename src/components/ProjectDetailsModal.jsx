import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink } from 'lucide-react';
import AssetImage from './AssetImage';

export default function ProjectDetailsModal({ project, opener, onClosed }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const backdropDownRef = useRef(false);
  const [closing, setClosing] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const overview = project.overview || project.description || project.subtitle;
  const technologies = project.stacks || project.tags || [];
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
    dialog.showModal(); // Native top layer makes the page behind the dialog inert.
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
    // Backup if an animation is cancelled, unsupported, or the tab is backgrounded.
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

  return createPortal(<dialog ref={dialogRef} className="project-modal" data-closing={closing} data-project-id={project.id}
    aria-modal="true" aria-labelledby={titleId} aria-describedby={overview ? descriptionId : undefined}
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
      <h2 id={titleId}>{project.title}</h2>
      <button ref={closeRef} type="button" className="project-modal-close" aria-label="Close project details" onClick={requestClose}>
        <X size={23} aria-hidden="true" />
      </button>
    </div>
    <div className="project-modal-content" tabIndex={0} aria-label="Project information">
      {project.image && <AssetImage src={project.image} alt={project.title} className="project-modal-media" hideUnavailable />}
      {overview && <section><h3>Overview</h3><p id={descriptionId}>{overview}</p></section>}
      {project.features?.length > 0 && <section><h3>Key features</h3><ul>{project.features.map((feature, index) => <li key={index}>{feature}</li>)}</ul></section>}
      {technologies.length > 0 && <section><h3>Technologies used</h3><ul className="project-modal-stacks">
        {technologies.map((stack, index) => <li key={index}>{stack}</li>)}
      </ul></section>}
      {(project.role || project.contributions?.length > 0) && <section><h3>My role and contributions</h3>
        {project.role && <p>{project.role}</p>}
        {project.contributions?.length > 0 && <ul>{project.contributions.map((item, index) => <li key={index}>{item}</li>)}</ul>}
      </section>}
      {project.year && <section><h3>Year</h3><p>{project.year}</p></section>}
      {project.links?.length > 0 && <section><h3>Project links</h3><div className="project-modal-links">
        {project.links.filter(link => /^https?:\/\//i.test(link.url)).map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<ExternalLink size={16} aria-hidden="true" /></a>)}
      </div></section>}
    </div>
  </dialog>, document.body);
}
