import { useInView } from '../hooks/useInView'
import { Cpu, User, Sparkles } from 'lucide-react'

const automatedTasks = [
  'Estrutura de 5 atos',
  'Sistema de temperatura',
  'Componentes React',
  'Animações de scroll',
  'Breathers entre seções',
  'Progress navigation',
  'Responsividade',
  'Performance otimizada',
]

const humanTasks = [
  'Seleção de dados impactantes',
  'Frases que ressoam',
  'Sequência dramática',
  'Posicionamento de breathers',
  'O polish final',
]

export function HowItWorks() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section
      id="how-it-works"
      className="relative min-h-screen bg-[#0f172a] py-24 px-4"
    >
      {/* Neutral glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-500/5 blur-[180px] rounded-full" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-sm font-mono text-slate-500 uppercase tracking-[0.3em]">
            A Filosofia
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
            <span className="text-slate-400">80%</span> Automação.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              20%
            </span>{' '}
            Alma.
          </h2>
        </div>

        {/* The split */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Automated */}
          <div className="relative p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">O Factory cria</h3>
                <p className="text-sm text-slate-500">80% do trabalho</p>
              </div>
            </div>

            <ul className="space-y-3">
              {automatedTasks.map((task, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="text-slate-400">{task}</span>
                </li>
              ))}
            </ul>

            {/* Code snippet preview */}
            <div className="mt-6 p-4 rounded-xl bg-slate-900/50 font-mono text-sm overflow-hidden">
              <span className="text-slate-600">$</span>{' '}
              <span className="text-cyan-400">*create</span>{' '}
              <span className="text-white">meu-relatorio</span>
              <div className="mt-2 text-slate-500 text-xs">
                → Estrutura gerada em 30 segundos
              </div>
            </div>
          </div>

          {/* Human */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <User className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">Você adiciona</h3>
                <p className="text-sm text-purple-400/70">20% da alma</p>
              </div>
            </div>

            <ul className="space-y-3">
              {humanTasks.map((task, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${500 + index * 75}ms` }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-white">{task}</span>
                </li>
              ))}
            </ul>

            {/* Insight */}
            <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-purple-200 text-sm italic">
                "O factory cria o scaffold. O humano adiciona a alma."
              </p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/5">
            <div className="text-left">
              <p className="text-2xl font-display font-bold text-white">
                Resultado:
              </p>
              <p className="text-slate-400">
                Experiências{' '}
                <span className="text-cyan-400">únicas</span> em{' '}
                <span className="text-purple-400">horas</span>, não semanas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
