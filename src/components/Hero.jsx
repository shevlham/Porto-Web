import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Placeholder from './Placeholder'
import Button from './Button'
import { profile } from '../data/profile'

const ease = [0.22, 1, 0.36, 1]
const stagger = { show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
const line = { hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.8, ease } } }
const meta = [['Currently', 'Exploring AI + Automation'], ['Based in', profile.location], ['Field', 'Informatics']]

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const imgY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -70])
  const fade = (delay) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease } })

  return (
    <section id="about" className="px-5 pb-16 pt-28 md:px-10 lg:pt-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative">
          <motion.p {...fade(0)} className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">Hello, I'm</motion.p>

          <motion.h1
            variants={stagger} initial="hidden" animate="show"
            aria-label={profile.name}
            className="relative z-10 mt-3 font-display text-[clamp(3rem,10vw,9rem)] font-bold uppercase leading-[0.86] tracking-tighter"
          >
            {['Sheva', 'Ilham', 'Ramadhan.'].map((t) => (
              <span key={t} className="block overflow-hidden py-[0.03em]" aria-hidden="true">
                <motion.span variants={line} className="block">
                  <span className="text-mustard">{t[0]}</span>{t.slice(1)}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.figure
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="mt-10 max-w-sm lg:absolute lg:right-0 lg:top-2 lg:mt-0 lg:w-[30%] lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full bg-navy" aria-hidden="true" />
              <div className="relative aspect-[3/4]" data-cursor="OPEN ↗" style={{ clipPath: 'polygon(0 0,100% 0,100% 90%,84% 100%,0 100%)' }}>
                <Placeholder tone="mustard" label="Portrait — replace" src={profile.photo} alt={`Portrait of ${profile.name}`} />
              </div>
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">Fig. 01 — {profile.short}, {profile.university}</figcaption>
          </motion.figure>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <motion.p {...fade(0.55)} className="font-display text-2xl font-medium uppercase tracking-tight md:text-3xl">{profile.role}</motion.p>
            <motion.p {...fade(0.6)} className="mt-1 font-mono text-sm uppercase tracking-[0.15em] text-navy">{profile.focus}</motion.p>
            <motion.p {...fade(0.65)} className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
              Building things, experimenting with technology, and figuring out how to make systems work better.
            </motion.p>
            <motion.div {...fade(0.95)} className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects" external={false}>View projects</Button>
              <Button href={profile.links.github} variant="outline">GitHub ↗</Button>
            </motion.div>
          </div>

          <motion.dl {...fade(0.8)} className="grid grid-cols-3 gap-6 self-end border-t border-ink/30 pt-4 lg:col-span-5 lg:col-start-8">
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">{k}</dt>
                <dd className="mt-1 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
