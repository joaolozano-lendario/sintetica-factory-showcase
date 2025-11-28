import { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Temperature = 'cold' | 'cool' | 'neutral' | 'warm' | 'hot'

interface ActProps {
  id: string
  number?: number
  title: string
  subtitle?: string
  temperature: Temperature
  children: ReactNode
  showHeader?: boolean
}

const temperatureStyles: Record<Temperature, { bg: string; accent: string; glow: string }> = {
  cold: {
    bg: 'bg-cold-bg',
    accent: 'text-cyan-400',
    glow: 'bg-cyan-500/15',
  },
  cool: {
    bg: 'bg-cool-bg',
    accent: 'text-blue-400',
    glow: 'bg-blue-500/15',
  },
  neutral: {
    bg: 'bg-neutral-bg',
    accent: 'text-slate-400',
    glow: 'bg-slate-500/10',
  },
  warm: {
    bg: 'bg-warm-bg',
    accent: 'text-purple-400',
    glow: 'bg-purple-500/15',
  },
  hot: {
    bg: 'bg-hot-bg',
    accent: 'text-orange-400',
    glow: 'bg-orange-500/15',
  },
}

export function Act({
  id,
  number,
  title,
  subtitle,
  temperature,
  children,
  showHeader = true,
}: ActProps) {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.2 })
  const styles = temperatureStyles[temperature]

  return (
    <section id={id} className={`relative ${styles.bg} overflow-hidden`}>
      {/* Atmospheric glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${styles.glow} blur-[180px] rounded-full pointer-events-none`}
      />

      {/* Content */}
      <div className="relative z-10 py-24 px-4 md:px-8">
        {showHeader && (
          <div
            ref={headerRef}
            className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {number && (
              <span className={`font-mono text-sm uppercase tracking-[0.3em] ${styles.accent} opacity-70`}>
                Ato {number}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2 text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl md:text-2xl text-slate-400 mt-4 font-light">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="max-w-6xl mx-auto">{children}</div>
      </div>
    </section>
  )
}
