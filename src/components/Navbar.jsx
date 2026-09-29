import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [['About', 'about'], ['Projects', 'projects'], ['Experience', 'experience'], ['Contact', 'contact']]
const sections = ['about', 'projects', 'experience', 'exploring', 'tools', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-ink/10 bg-ivory/75 py-3 backdrop-blur-md' : 'border-transparent py-6'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#about" className="font-display text-xl font-bold tracking-tight">shevlham</a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map(([label, id]) => (
            <li key={id} className="relative">
              <a href={`#${id}`} className={`font-mono text-xs uppercase tracking-[0.18em] transition-opacity ${active === id ? 'opacity-100' : 'opacity-55 hover:opacity-100'}`}>
                {label}
              </a>
              {active === id && (
                <motion.span layoutId="nav-dot" className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-navy" />
              )}
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-ivory px-5 md:hidden"
          >
            {links.map(([label, id], i) => (
              <motion.li key={id} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 * i }} className="border-t border-ink/15">
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-5 font-display text-4xl font-bold uppercase tracking-tight">
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
