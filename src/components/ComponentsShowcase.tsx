import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import {
  Box,
  Layout,
  BarChart2,
  MousePointer,
  Play,
  Quote,
  Hash,
  HelpCircle,
  Pause,
} from 'lucide-react'

interface ComponentCategory {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  items: string[]
  description: string
}

const categories: ComponentCategory[] = [
  {
    name: 'Core',
    icon: Box,
    color: 'cyan',
    items: ['Act', 'Breather', 'ProgressNav', 'HeroNumber', 'SectionWrapper'],
    description: 'A fundação de toda experiência',
  },
  {
    name: 'Display',
    icon: Layout,
    color: 'blue',
    items: ['Hero', 'Timeline', 'Cheatsheet', 'ExpertPanel', 'ComparisonChart'],
    description: 'Apresentação de informação',
  },
  {
    name: 'Data',
    icon: BarChart2,
    color: 'purple',
    items: ['SkillsRadar', 'ImpactStats', 'MarketPulse', 'ToolsGrid'],
    description: 'Visualização de dados',
  },
  {
    name: 'Interactive',
    icon: MousePointer,
    color: 'orange',
    items: ['Calculator', 'Assessment', 'KnowledgeMap', 'ComparisonSlider'],
    description: 'Engajamento do usuário',
  },
]

const breatherTypes = [
  { type: 'quote', icon: Quote, label: 'Citação', desc: 'Autoridade + reflexão' },
  { type: 'stat', icon: Hash, label: 'Estatística', desc: 'Impacto numérico' },
  { type: 'question', icon: HelpCircle, label: 'Pergunta', desc: 'Transição socrática' },
  { type: 'silence', icon: Pause, label: 'Silêncio', desc: 'Pausa para processar' },
]

export function ComponentsShowcase() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeBreather, setActiveBreather] = useState<string | null>(null)

  return (
    <section
      id="components"
      className="relative min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1a1a2e] py-24 px-4"
    >
      {/* Warm purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-sm font-mono text-purple-400/60 uppercase tracking-[0.3em]">
            A Biblioteca
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
              35+
            </span>{' '}
            Componentes
          </h2>
          <p className="text-xl text-slate-400 mt-4">
            Peças pré-construídas. Infinitas combinações.
          </p>
        </div>

        {/* Categories grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {categories.map((cat, index) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.name
            return (
              <div
                key={cat.name}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  isActive
                    ? `bg-${cat.color}-500/20 border-${cat.color}-500/40 scale-105`
                    : 'bg-slate-800/30 border-slate-700/30 hover:bg-slate-800/50'
                } border`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActiveCategory(isActive ? null : cat.name)}
              >
                <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${
                  isActive ? `bg-${cat.color}-500/30` : 'bg-slate-700/50'
                }`}>
                  <Icon className={`w-5 h-5 ${isActive ? `text-${cat.color}-400` : 'text-slate-400'}`} />
                </div>

                <h3 className="font-display font-bold text-white mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{cat.description}</p>

                {/* Component list */}
                <div className={`space-y-1 overflow-hidden transition-all duration-300 ${
                  isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Play className="w-3 h-3 text-slate-600" />
                      <span className="text-sm font-mono text-slate-400">
                        {'<'}{item}{' />'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Count badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-mono ${isActive ? `text-${cat.color}-400` : 'text-slate-600'}`}>
                    {cat.items.length}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Breathers section */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-center text-2xl font-display font-bold text-white mb-2">
            Breathers
          </h3>
          <p className="text-center text-slate-500 mb-8">
            Pausas cognitivas entre seções densas
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {breatherTypes.map((breather) => {
              const Icon = breather.icon
              const isActive = activeBreather === breather.type
              return (
                <button
                  key={breather.type}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    isActive
                      ? 'bg-purple-500/20 border-purple-500/40 scale-105'
                      : 'bg-slate-800/30 border-slate-700/30 hover:bg-slate-800/50'
                  } border`}
                  onClick={() => setActiveBreather(isActive ? null : breather.type)}
                >
                  <Icon className={`w-5 h-5 mx-auto mb-2 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                  <p className="text-sm font-medium text-white">{breather.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{breather.desc}</p>
                </button>
              )
            })}
          </div>

          {/* Breather preview */}
          {activeBreather && (
            <div className="mt-8 p-8 rounded-2xl bg-[#020408] border border-purple-500/20 max-w-2xl mx-auto">
              {activeBreather === 'quote' && (
                <div className="text-center">
                  <span className="text-4xl text-purple-400/30">"</span>
                  <p className="text-xl text-white font-light italic -mt-4">
                    Uma citação que adiciona autoridade e convida à reflexão.
                  </p>
                  <p className="text-sm text-slate-500 mt-4">— Autor Relevante</p>
                </div>
              )}
              {activeBreather === 'stat' && (
                <div className="text-center">
                  <span className="text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">
                    42%
                  </span>
                  <p className="text-slate-400 mt-2">Um número que conta toda a história</p>
                </div>
              )}
              {activeBreather === 'question' && (
                <div className="text-center">
                  <p className="text-2xl text-purple-400 font-light">
                    E se houvesse uma forma melhor?
                  </p>
                  <p className="text-sm text-slate-500 mt-4 italic">A resposta está na próxima seção...</p>
                </div>
              )}
              {activeBreather === 'silence' && (
                <div className="text-center py-8">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <p className="text-sm text-slate-600 mt-4">Um momento para processar</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
