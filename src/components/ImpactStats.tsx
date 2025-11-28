import { useInView } from '../hooks/useInView'
import { TrendingUp, Target } from 'lucide-react'

interface ImpactStat {
  value: string
  label: string
  trend: 'up' | 'target'
}

interface ImpactStatsProps {
  stats: ImpactStat[]
}

export function ImpactStats({ stats }: ImpactStatsProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`relative p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          {/* Trend icon */}
          <div className="absolute top-4 right-4">
            {stat.trend === 'up' ? (
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            ) : (
              <Target className="w-5 h-5 text-orange-400" />
            )}
          </div>

          {/* Value */}
          <span className="block text-5xl md:text-6xl font-display font-bold text-orange-400">
            {stat.value}
          </span>

          {/* Label */}
          <span className="block mt-2 text-sm text-slate-400 uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
