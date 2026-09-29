import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Placeholder from './Placeholder'

export default function ProjectCard({ project: p, index, onOpen }) {
  const open = () => onOpen(p)
  const big = index === 0
  return (
    <motion.article
      className={p.className}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        role="button" tabIndex={0} data-cursor="VIEW"
        onClick={open}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), open())}
        aria-label={`Open project: ${p.title.join(' ')}`}
        className="group block"
      >
        <div className="mb-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
          <span>Project {p.no}</span><span>{p.type}</span>
        </div>

        <div data-cursor="OPEN ↗" className={`relative overflow-hidden ${p.aspect}`}>
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-105">
            <Placeholder tone={p.tone} big={p.no} src={p.image} label="Screenshot — replace" alt={`${p.title.join(' ')} preview`} />
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <h3 className={`font-display font-bold uppercase leading-[0.92] tracking-tight transition-transform duration-500 group-hover:translate-x-3 ${big ? 'text-[clamp(2rem,5vw,4.5rem)]' : 'text-[clamp(1.75rem,3.4vw,3rem)]'}`}>
            {p.title.map((t) => <span key={t} className="block">{t}</span>)}
          </h3>
          <ArrowUpRight className="mt-1 shrink-0 -translate-x-2 translate-y-2 opacity-30 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" size={big ? 44 : 32} />
        </div>

        <p className="mt-4 max-w-md text-ink/80">{p.short}</p>

        <dl className="mt-4 grid grid-cols-2 gap-4 font-mono text-[11px] uppercase tracking-wider opacity-55 transition-opacity duration-500 group-hover:opacity-100">
          <div><dt className="text-ink/50">Tech</dt><dd>{p.tech.join(' / ')}</dd></div>
          {p.status && <div><dt className="text-ink/50">Status</dt><dd>{p.status}</dd></div>}
        </dl>
        <span className="mt-5 block h-px origin-left bg-ink/25"><span className="block h-px origin-left scale-x-0 bg-ink transition-transform duration-700 group-hover:scale-x-100" /></span>
      </div>
    </motion.article>
  )
}
