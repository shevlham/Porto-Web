import Magnetic from './Magnetic'

const variants = {
  solid: 'bg-navy text-ivory border border-navy hover:bg-ink hover:border-ink',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-ivory',
}

export default function Button({ href = '#', children, variant = 'solid', external = true }) {
  return (
    <Magnetic>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className={`inline-flex items-center gap-2 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${variants[variant]}`}
      >
        {children}
      </a>
    </Magnetic>
  )
}
