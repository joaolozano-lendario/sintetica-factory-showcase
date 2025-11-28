import { useInView } from '../hooks/useInView'

interface Stat {
  value: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
  accentColor?: 'cyan' | 'blue' | 'purple' | 'orange'
}

export function StatsGrid({ stats, accentColor = 'cyan' }: StatsGridProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.2 })

  const accentClasses = {
    cyan: 'text-cyan-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    orange: 'text-orange-400',
  }

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <span className={`block text-5xl md:text-6xl font-display font-bold ${accentClasses[accentColor]}`}>
            {stat.value}
          </span>
          <span className="block mt-2 text-sm text-slate-400 uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
