import { Code2, Brain, Globe, Wrench } from 'lucide-react'
import SectionLabel from './SectionLabel'
import Reveal from './Reveal'
import { techStack } from '../data/techStack'

const icons = { Code2, Brain, Globe, Wrench }
const offsets = ['', 'lg:mt-16', 'lg:mt-6', 'lg:mt-24']

export default function TechStack() {
  return (
    <section id="tools" className="px-5 py-24 md:px-10 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel label="Stack" no="04" />
        <Reveal className="mt-10">
          <h2 className="font-display text-[clamp(3rem,10vw,9rem)] font-bold uppercase leading-[0.88] tracking-tighter">Tools<br />of the<br />Trade</h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((g, gi) => {
            const Icon = icons[g.icon]
            return (
              <Reveal key={g.group} delay={gi * 0.08} className={offsets[gi]}>
                <h3 className="flex items-center justify-between border-b border-ink pb-3 font-mono text-xs uppercase tracking-[0.2em]">
                  {g.group} <Icon size={16} aria-hidden="true" />
                </h3>
                <ul>
                  {g.items.map((t) => (
                    <li key={t.name} tabIndex={0} className="group border-b border-ink/15 py-4">
                      <div className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-2 group-focus:translate-x-2">
                        <Icon size={20} aria-hidden="true" className="-ml-8 text-navy opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100 group-focus:ml-0 group-focus:opacity-100" />
                        <span className="font-display text-3xl font-medium tracking-tight">{t.name}</span>
                      </div>
                      <p className="mt-1 h-4 font-mono text-[10px] uppercase tracking-wider text-ink/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                        {t.projects.length ? `Used in ${t.projects.join(', ')}` : 'Not linked to a featured project yet'}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
