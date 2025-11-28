import { useInView } from '../hooks/useInView'
import {
  BookOpen,
  FlaskConical,
  Palette,
  Layout,
  CheckCircle,
  Eye,
  Rocket,
} from 'lucide-react'

interface Agent {
  name: string
  focus: string
  icon: string
}

const agents: Agent[] = [
  { name: 'Narrative Architect', focus: 'Estrutura dramática', icon: 'book' },
  { name: 'Data Alchemist', focus: 'Extração de insights', icon: 'flask' },
  { name: 'Visual Director', focus: 'Sistema de temperatura', icon: 'palette' },
  { name: 'Experience Designer', focus: 'UX e scroll', icon: 'layout' },
  { name: 'Content Curator', focus: 'Fact-checking e polish', icon: 'check' },
  { name: 'Gestalt Guardian', focus: 'Hierarquia visual', icon: 'eye' },
  { name: 'Production Engineer', focus: 'Build e deploy', icon: 'rocket' },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  book: BookOpen,
  flask: FlaskConical,
  palette: Palette,
  layout: Layout,
  check: CheckCircle,
  eye: Eye,
  rocket: Rocket,
}

export function AgentsGrid() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {agents.map((agent, index) => {
        const Icon = iconMap[agent.icon] || BookOpen
        return (
          <div
            key={agent.name}
            className={`group relative p-5 rounded-xl bg-blue-500/5 border border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-500 cursor-default ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 group-hover:bg-blue-500/30 transition-colors">
              <Icon className="w-5 h-5 text-blue-400" />
            </div>

            {/* Name */}
            <h3 className="font-display font-semibold text-white text-sm mb-1">
              {agent.name}
            </h3>

            {/* Focus */}
            <p className="text-xs text-slate-500">{agent.focus}</p>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors pointer-events-none" />
          </div>
        )
      })}
    </div>
  )
}
