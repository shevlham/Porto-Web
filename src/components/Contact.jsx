import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import Button from './Button'
import { profile } from '../data/profile'

export default function Contact() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const nx = useMotionValue(0)
  const ny = useMotionValue(0)
  const sx = useSpring(nx, { stiffness: 70, damping: 20 })
  const sy = useSpring(ny, { stiffness: 70, damping: 20 })
  const tx = useTransform(sx, [-0.5, 0.5], [-10, 10])
  const ty = useTransform(sy, [-0.5, 0.5], [-6, 6])
  const bx = useTransform(sx, [-0.5, 0.5], [50, -50])
  const by = useTransform(sy, [-0.5, 0.5], [30, -30])
  const cx = useTransform(sx, [-0.5, 0.5], [-25, 25])

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    nx.set((e.clientX - r.left) / r.width - 0.5)
    ny.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section id="contact" ref={ref} onMouseMove={onMove} className="relative overflow-hidden bg-mustard px-5 py-24 md:px-10 lg:py-40">
      <motion.div aria-hidden="true" style={{ x: bx, y: by }} className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-navy md:h-[28rem] md:w-[28rem]" />
      <motion.div aria-hidden="true" style={{ x: cx }} className="absolute bottom-10 left-[38%] h-40 w-40 rounded-full border border-ink max-md:hidden" />

      <div className="relative mx-auto max-w-[1440px]">
        <p className="font-mono text-xs uppercase tracking-[0.2em]">Contact</p>
        <motion.h2 style={{ x: tx, y: ty }} className="mt-6 font-display text-[clamp(2.8rem,12.5vw,13rem)] font-bold uppercase leading-[0.86] tracking-tighter">
          Let's<br />build<br />something.
        </motion.h2>
        <p className="mt-8 max-w-md text-lg">Have an interesting idea, project, or problem to solve?</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={profile.links.github}>GitHub ↗</Button>
          <Button href={profile.links.linkedin} variant="outline">LinkedIn ↗</Button>
          <Button href={profile.links.email} variant="outline" external={false}>Email ↗</Button>
          <Button href={profile.links.Instagram} variant="outline">Instagram ↗</Button>
        </div>
      </div>
    </section>
  )
}
