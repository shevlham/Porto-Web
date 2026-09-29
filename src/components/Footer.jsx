import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const top = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  return (
    <footer className="on-dark bg-ink px-5 py-10 text-ivory md:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-tight">{profile.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-ivory/60">Informatics / AI / Automation</p>
        </div>
        <p className="font-mono text-xs text-ivory/60">© 2026 — Built with React.</p>
        <button onClick={top} aria-label="Back to top" className="flex h-11 w-11 items-center justify-center border border-ivory/40 transition-colors hover:bg-mustard hover:text-ink">
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  )
}
