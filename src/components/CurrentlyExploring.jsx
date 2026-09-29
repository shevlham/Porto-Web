import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import Reveal from './Reveal'
import { exploring } from '../data/exploring'

export default function CurrentlyExploring() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(e.clientX - r.left - 250)
    my.set(e.clientY - r.top - 250)
  }

  return (
    <section id="exploring" ref={ref} onMouseMove={onMove} className="on-dark relative overflow-hidden bg-navy px-5 py-24 text-ivory md:px-10 lg:py-36">
      <motion.div aria-hidden="true" style={{ x: sx, y: sy, background: 'radial-gradient(circle, rgba(227,185,60,.18), transparent 65%)' }} className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] max-lg:hidden" />
      <div className="relative mx-auto max-w-[1440px]">
        <SectionLabel label="Currently exploring" no="03" dark />
        <Reveal className="mt-10">
          <h2 className="font-display text-[clamp(3rem,10vw,9rem)] font-bold uppercase leading-[0.88] tracking-tighter">Currently<br />Exploring</h2>
          <p className="mt-4 text-lg text-ivory/70">What I'm currently trying to understand.</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <ul className="lg:col-span-8">
            {exploring.map((t, i) => (
              <li key={t.title} className="border-t border-ivory/20">
                <button
                  onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="flex w-full items-baseline gap-4 py-3 text-left md:py-4"
                >
                  <span className="font-mono text-xs text-mustard">{String(i + 1).padStart(2, '0')}</span>
                  <motion.span
                    animate={{ x: active === i ? 20 : 0, opacity: active === i ? 1 : 0.35 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-[clamp(2.2rem,6.5vw,6rem)] font-bold uppercase leading-none tracking-tighter"
                  >
                    {t.title}
                  </motion.span>
                </button>
                {active === i && <p className="pb-4 pl-9 text-ivory/70 lg:hidden">{t.desc}</p>}
              </li>
            ))}
          </ul>

          <div className="hidden lg:col-span-4 lg:block" aria-live="polite">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <span className="font-display text-8xl font-bold text-mustard">{String(active + 1).padStart(2, '0')}</span>
                  <p className="mt-4 text-2xl leading-snug">{exploring[active].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
