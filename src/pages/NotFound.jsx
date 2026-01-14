import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-start justify-center gap-6">
      <p className="text-xs uppercase tracking-[0.4em] text-muted">404</p>
      <h1 className="font-serif text-4xl text-ink sm:text-5xl">Page not found.</h1>
      <p className="max-w-xl text-lg text-muted">
        The page you are looking for does not exist or was moved.
      </p>
      <Link
        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-soft"
        to="/"
      >
        Back to home
      </Link>
    </div>
  )
}
