import { Link, Outlet, useLocation } from 'react-router-dom';
import { navigation } from '../data/site';
import { useEffect, useRef, useState } from 'react';

export default function RootLayout() {
  const headerRef = useRef(null);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    let previousY = window.scrollY;
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      const canHide = window.matchMedia('(min-width: 1024px)').matches;
      const interacting = header.matches(':hover, :focus-within');
      if (Math.abs(y - previousY) > 6 || y < 120) {
        header.dataset.hidden = String(canHide && !interacting && y > 120 && y > previousY);
        previousY = y;
      }
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(location.hash.slice(1) || 'home');
      if (!location.hash || location.hash === '#home') window.scrollTo({ top: 0, behavior: 'instant' });
      else target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
      headerRef.current.dataset.hidden = 'false';
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);

  return (
    <div className="min-h-screen bg-canvas text-primary">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header ref={headerRef} className="site-header pointer-events-none fixed left-0 right-0 z-50">
        <nav aria-label="Primary navigation" data-open={menuOpen} className="site-nav pointer-events-auto mx-auto rounded-full bg-white/80 shadow-soft backdrop-blur">
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <div id="primary-navigation-links" className="nav-links flex items-center">
            {navigation.map(item => {
              const to = item.to.startsWith('#') ? `/${item.to}` : item.to;
              const active = location.pathname === '/' && (item.to === '/' ? !location.hash : location.hash === item.to);
              return <Link key={item.to} to={to} aria-current={active ? 'location' : undefined}
                className="nav-link font-kumbh transition-colors hover:text-ink"
                onClick={() => {
                  setMenuOpen(false);
                  headerRef.current.dataset.hidden = 'false';
                  // Also works when selecting the current hash a second time.
                  document.getElementById(item.to.slice(1) || 'home')?.scrollIntoView({ behavior: 'smooth' });
                }}>{item.label}</Link>;
            })}
          </div>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1} className="relative min-h-[100svh] w-full bg-canvas">
        <Outlet />
      </main>
    </div>
  );
}
