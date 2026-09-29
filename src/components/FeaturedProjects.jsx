import { useCallback, useState } from 'react'
import SectionLabel from './SectionLabel'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" className="px-5 py-24 md:px-10 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel label="Featured work" no="01" />
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display text-[clamp(3rem,10vw,9rem)] font-bold uppercase leading-[0.88] tracking-tighter">Featured<br />Projects</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:pb-3">
            <p className="max-w-xs text-lg text-ink/75">Things I've built, tested, and experimented with.</p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-20 lg:grid-cols-12">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />)}
        </div>
      </div>
      <ProjectModal project={selected} onClose={close} />
    </section>
  )
}
