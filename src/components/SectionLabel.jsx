export default function SectionLabel({ label, no, total = '04', dark = false }) {
  return (
    <div className={`flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] ${dark ? 'text-ivory/70' : 'text-ink/60'}`}>
      <span>{label}</span>
      <span className="h-px flex-1 bg-current opacity-30" aria-hidden="true" />
      <span>{no} / {total}</span>
    </div>
  )
}
