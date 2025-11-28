import { useInView } from '../hooks/useInView'
import { FileText, Clock, TrendingDown, X } from 'lucide-react'

const stats = [
  {
    icon: FileText,
    value: '15',
    unit: 'páginas',
    label: 'Relatório médio que ninguém lê',
  },
  {
    icon: Clock,
    value: '2',
    unit: 'min',
    label: 'Tempo real de engajamento',
  },
  {
    icon: TrendingDown,
    value: '3',
    unit: '%',
    label: 'Chegam ao final',
  },
]

const painPoints = [
  'Informação densa sem hierarquia visual',
  'Ausência de ritmo narrativo',
  'Zero jornada emocional',
  'Parece com tudo que já existe',
  'O leitor não sabe onde está',
  'Fadiga cognitiva em 30 segundos',
]

export function TheProblem() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const [statsRef, statsVisible] = useInView<HTMLDivElement>({ threshold: 0.2 })
  const [painRef, painVisible] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section
      id="the-problem"
      className="relative min-h-screen bg-gradient-to-b from-[#020408] via-[#050b14] to-[#050b14] py-24 px-4"
    >
      {/* Blue glow for cool temperature */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-sm font-mono text-blue-400/60 uppercase tracking-[0.3em]">
            O Problema
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
            Por que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              ninguém lê
            </span>{' '}
            seus documentos
          </h2>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-center transition-all duration-700 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon className="w-6 h-6 text-blue-400/50 mx-auto mb-4" />
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-display font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-2xl text-blue-400">{stat.unit}</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Pain points */}
        <div ref={painRef} className="max-w-2xl mx-auto">
          <p className="text-center text-slate-500 mb-8 font-mono text-sm uppercase tracking-wider">
            Sintomas
          </p>
          <div className="space-y-3">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/10 transition-all duration-500 ${
                  painVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-red-400" />
                </div>
                <span className="text-slate-400">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
