import SectionLabel from './SectionLabel'
import Reveal from './Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="bg-[#ebe4d3] px-5 py-24 md:px-10 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel label="Experience" no="02" />
        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <h2 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-bold uppercase leading-[0.88] tracking-tighter">Things<br />I've<br />done</h2>
          </Reveal>

          <ol className="lg:col-span-7">
            {experience.map((e, i) => (
              <Reveal key={e.no} delay={i * 0.08} y={24}>
                <li tabIndex={0} className="group relative border-t border-ink/30 py-8 pl-5 outline-offset-0 last:border-b">
                  <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-navy transition-transform duration-500 group-hover:scale-y-100 group-focus:scale-y-100" />
                  <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 transition-transform duration-500 group-hover:translate-x-2 group-focus:translate-x-2 md:grid-cols-[3rem_5rem_1fr]">
                    <span className="font-mono text-sm text-ink/50">{e.no}</span>
                    <span className="font-mono text-sm text-ink/50 max-md:hidden">{e.year}</span>
                    <div>
                      <h3 className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">{e.role}</h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-navy md:hidden">{e.year}</p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-navy">{e.org}</p>
                      <p className="mt-3 max-w-md text-ink/80">{e.desc}</p>
                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr]">
                        <p className="overflow-hidden text-sm text-ink/60"><span className="block pt-3">{e.detail}</span></p>
                      </div>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
