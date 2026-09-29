import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

// Minimal custom cursor. Elements can opt in to a label with data-cursor="VIEW".
export default function Cursor() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [state, setState] = useState({ mode: 'default', label: '' })
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.3 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (reduce || !fine) return
    setEnabled(true)
    document.documentElement.classList.add('has-cursor')

    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => {
      const t = e.target.closest?.('[data-cursor], a, button, [role="button"]')
      if (!t) return setState({ mode: 'default', label: '' })
      const label = t.dataset.cursor
      setState(label ? { mode: 'label', label } : { mode: 'link', label: '' })
    }
    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [reduce, x, y])

  if (!enabled) return null
  const size = state.mode === 'label' ? 84 : state.mode === 'link' ? 30 : 12

  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ x: sx, y: sy }}>
      <motion.div
        animate={{ width: size, height: size }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full ${
          state.mode === 'label' ? 'bg-mustard text-ink' : 'bg-navy/90 mix-blend-multiply'
        }`}
      >
        {state.mode === 'label' && <span className="font-mono text-[10px] uppercase tracking-widest">{state.label}</span>}
      </motion.div>
    </motion.div>
  )
}
