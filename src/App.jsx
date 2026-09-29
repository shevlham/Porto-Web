import { MotionConfig } from 'framer-motion'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import FeaturedProjects from './components/FeaturedProjects'
import Experience from './components/Experience'
import CurrentlyExploring from './components/CurrentlyExploring'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy focus:px-4 focus:py-2 focus:text-ivory">
        Skip to content
      </a>
      <Cursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <FeaturedProjects />
        <Experience />
        <CurrentlyExploring />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
