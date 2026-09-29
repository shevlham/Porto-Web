import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Placeholder from './Placeholder'
import Button from './Button'

const Block = ({ title, children }) => (
  <div className="border-t border-ink/25 pt-3">
    <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">{title}</h4>
    <p className="mt-2 leading-relaxed">{children}</p>
  </div>
)

export default function ProjectModal({ project: p, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!p) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [p, onClose])

  return (
    <AnimatePresence>
      {p && (
        <motion.div className="fixed inset-0 z-[60] flex items-end justify-center md:items-center md:p-8" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <motion.div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} />
          <motion.div
            initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-ivory p-5 md:p-10"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
              <span>Project {p.no} — {p.type}</span>
              <button ref={closeRef} onClick={onClose} aria-label="Close project" className="p-1"><X size={22} /></button>
            </div>
            <h2 id="modal-title" className="mt-4 font-display text-[clamp(2rem,6vw,5rem)] font-bold uppercase leading-[0.92] tracking-tight">
              {p.title.join(' ')}
            </h2>
            <div className="mt-6 aspect-[16/8]">
              <Placeholder tone={p.tone} big={p.no} src={p.image} label="Screenshot — replace" alt={`${p.title.join(' ')} preview`} />
            </div>
            <p className="mt-6 max-w-2xl text-xl">{p.short}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Block title="Problem">{p.problem}</Block>
              <Block title="Solution">{p.solution}</Block>
              <Block title="Tech stack">{p.tech.join(' / ')}</Block>
              <Block title="Result">{p.result}</Block>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={p.github}>GitHub ↗</Button>
              {p.demo && <Button href={p.demo} variant="outline">Live demo ↗</Button>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
