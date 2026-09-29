import { exploring } from '../data/exploring'

const items = exploring.map((e) => e.title)

function Row({ hidden }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <span key={t} className="flex items-center whitespace-nowrap font-display text-3xl font-medium uppercase tracking-tight md:text-5xl">
          <span className="px-6 md:px-10">{t}</span>
          <span className="text-mustard">×</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-ink bg-navy py-5 text-ivory md:py-7" role="presentation">
      <div className="marquee-track flex w-max">
        <Row /><Row hidden />
      </div>
    </div>
  )
}
