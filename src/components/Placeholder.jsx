const tones = {
  navy: ['#14213d', '#e3b93c'],
  mustard: ['#e3b93c', '#14213d'],
  sky: ['#9db9d8', '#14213d'],
  ink: ['#1b1b1f', '#f3eee2'],
}

// Renders a real <img> when `src` is set, otherwise a patterned placeholder.
export default function Placeholder({ tone = 'navy', label = 'Image placeholder', big, src, alt = '', className = '' }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  const [bg, fg] = tones[tone]
  return (
    <div
      role="img"
      aria-label={alt || label}
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        backgroundColor: bg,
        color: fg,
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${fg}22 14px 15px)`,
      }}
    >
      <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">{label}</span>
      {big && (
        <span className="absolute bottom-0 right-4 font-display text-[clamp(5rem,16vw,14rem)] font-bold leading-none opacity-20">
          {big}
        </span>
      )}
    </div>
  )
}
