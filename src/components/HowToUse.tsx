import { useInView } from '../hooks/useInView'
import { Terminal, FileText, Palette, Rocket, ArrowRight, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Inicie o projeto',
    command: '*create nome-do-projeto',
    description: 'O Factory gera a estrutura completa: 5 atos, breathers, componentes base.',
    icon: Terminal,
    output: '→ Scaffold gerado em 30s',
  },
  {
    number: '02',
    title: 'Defina o arco narrativo',
    command: '*arc nome-do-projeto',
    description: 'O Narrative Architect ajuda a estruturar sua história em atos com temperatura.',
    icon: FileText,
    output: '→ experience.yaml criado',
  },
  {
    number: '03',
    title: 'Aplique temperatura',
    command: '*temperature',
    description: 'O Visual Director configura a jornada emocional seção por seção.',
    icon: Palette,
    output: '→ Tokens de cor aplicados',
  },
  {
    number: '04',
    title: 'Deploy',
    command: '*deploy',
    description: 'Production Engineer otimiza e publica. Lighthouse 90+, WCAG AA.',
    icon: Rocket,
    output: '→ sintetica.app/seu-projeto',
  },
]

const commands = [
  { cmd: '*help', desc: 'Lista todos os comandos' },
  { cmd: '*create {nome}', desc: 'Cria nova experiência' },
  { cmd: '*arc {nome}', desc: 'Design narrativo' },
  { cmd: '*temperature', desc: 'Ajusta temperaturas' },
  { cmd: '*validate', desc: 'Valida qualidade' },
  { cmd: '*deploy', desc: 'Publica produção' },
  { cmd: '*agents', desc: 'Lista agentes' },
  { cmd: '*status', desc: 'Status do projeto' },
]

export function HowToUse() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section
      id="how-to-use"
      className="relative min-h-screen bg-gradient-to-b from-[#050b14] to-[#1a0a0a] py-24 px-4"
    >
      {/* Hot orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[200px] rounded-full" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-sm font-mono text-orange-400/60 uppercase tracking-[0.3em]">
            Na Prática
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
            Como{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
              usar
            </span>
          </h2>
          <p className="text-xl text-slate-400 mt-4">
            De ideia a produção em 4 passos.
          </p>
        </div>

        {/* Steps */}
        <div className={`space-y-6 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-800/20 border border-slate-700/30 hover:border-orange-500/30 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-4xl font-display font-bold text-orange-500/30">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-orange-400" />
                    <h3 className="text-xl font-display font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    {step.description}
                  </p>

                  {/* Command */}
                  <div className="flex flex-wrap items-center gap-3">
                    <code className="px-4 py-2 rounded-lg bg-slate-900/50 font-mono text-sm text-orange-300">
                      {step.command}
                    </code>
                    <span className="text-sm text-slate-600">{step.output}</span>
                  </div>
                </div>

                {/* Arrow to next */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -bottom-6 left-12 text-slate-700">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* All commands reference */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-center text-xl font-display font-bold text-white mb-6">
            Referência de Comandos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {commands.map((cmd) => (
              <div
                key={cmd.cmd}
                className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-orange-500/20 transition-colors"
              >
                <code className="text-sm font-mono text-orange-300">{cmd.cmd}</code>
                <p className="text-xs text-slate-500 mt-1">{cmd.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success metrics */}
        <div className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {[
            { value: '30s', label: 'Scaffold gerado' },
            { value: '~2h', label: 'Primeira versão' },
            { value: '90+', label: 'Lighthouse Score' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20"
            >
              <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto mb-3" />
              <span className="text-3xl font-display font-bold text-white">{stat.value}</span>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
