import { useInView } from '../hooks/useInView'
import {
  BookOpen,
  FlaskConical,
  Palette,
  Layout,
  CheckCircle,
  Eye,
  Rocket,
  Zap,
} from 'lucide-react'

interface Agent {
  name: string
  role: string
  focus: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  command: string
}

const agents: Agent[] = [
  {
    name: 'Narrative Architect',
    role: 'Estrutura',
    focus: 'Desenha o arco de 5 atos, posiciona breathers, define ritmo',
    icon: BookOpen,
    color: 'cyan',
    command: '@narrative-architect',
  },
  {
    name: 'Data Alchemist',
    role: 'Insights',
    focus: 'Extrai dados impactantes, valida fontes, gera visualizações',
    icon: FlaskConical,
    color: 'emerald',
    command: '@data-alchemist',
  },
  {
    name: 'Visual Director',
    role: 'Atmosfera',
    focus: 'Aplica sistema de temperatura, define mood visual por seção',
    icon: Palette,
    color: 'purple',
    command: '@visual-director',
  },
  {
    name: 'Experience Designer',
    role: 'Interação',
    focus: 'Scroll behaviors, navegação, adaptação mobile, gestos',
    icon: Layout,
    color: 'blue',
    command: '@experience-designer',
  },
  {
    name: 'Content Curator',
    role: 'Qualidade',
    focus: 'Fact-checking, citações, frases de impacto, polish final',
    icon: CheckCircle,
    color: 'pink',
    command: '@content-curator',
  },
  {
    name: 'Gestalt Guardian',
    role: 'Hierarquia',
    focus: 'Princípios visuais, proximidade, contraste, carga cognitiva',
    icon: Eye,
    color: 'amber',
    command: '@gestalt-guardian',
  },
  {
    name: 'Production Engineer',
    role: 'Deploy',
    focus: 'Build otimizado, Lighthouse 90+, acessibilidade, rollback',
    icon: Rocket,
    color: 'orange',
    command: '@production-engineer',
  },
]

export function AgentsSection() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section
      id="agents"
      className="relative min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#050b14] py-24 px-4"
    >
      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[200px] rounded-full" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-sm font-mono text-blue-400/60 uppercase tracking-[0.3em]">
            A Equipe
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              7
            </span>{' '}
            Agentes Especializados
          </h2>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Cada aspecto da experiência tem um especialista dedicado.
            Eles trabalham em conjunto, orquestrados pelo Factory.
          </p>
        </div>

        {/* Agents grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {agents.map((agent, index) => {
            const Icon = agent.icon
            return (
              <div
                key={agent.name}
                className={`group relative p-5 rounded-2xl bg-slate-800/20 border border-slate-700/30 hover:bg-slate-800/40 hover:border-blue-500/30 transition-all duration-300 cursor-default`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl bg-${agent.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 text-${agent.color}-400`} />
                </div>

                {/* Content */}
                <div className="mb-3">
                  <h3 className="font-display font-semibold text-white text-sm">
                    {agent.name}
                  </h3>
                  <span className="text-xs text-blue-400/70">{agent.role}</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {agent.focus}
                </p>

                {/* Command on hover */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <code className="text-[10px] font-mono text-slate-600">
                    {agent.command}
                  </code>
                </div>
              </div>
            )
          })}

          {/* The orchestrator */}
          <div
            className="relative p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 md:col-span-2 lg:col-span-1"
            style={{ transitionDelay: '525ms' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-sm">
                  Sintetica Factory
                </h3>
                <span className="text-xs text-cyan-400/70">Orquestrador</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Coordena todos os agentes, mantém contexto, garante coerência da experiência final.
            </p>

            <div className="mt-4 p-2 rounded-lg bg-cyan-500/10">
              <code className="text-xs font-mono text-cyan-300">
                @sintetica-factory
              </code>
            </div>
          </div>
        </div>

        {/* How they work together */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30">
            <p className="text-slate-400 text-sm">
              Você conversa com <span className="text-cyan-400">um</span>.
              Ele orquestra <span className="text-blue-400">todos</span>.
            </p>
            <div className="flex items-center gap-2">
              <code className="text-sm font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-lg">
                *create meu-projeto
              </code>
              <span className="text-slate-600">→</span>
              <span className="text-sm text-slate-500">Todos os agentes ativados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
