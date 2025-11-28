import { useInView } from '../hooks/useInView'
import { Box, Layout, BarChart2, MousePointer } from 'lucide-react'

interface Category {
  name: string
  items: string[]
  icon: 'core' | 'display' | 'data' | 'interactive'
}

const categories: Category[] = [
  {
    name: 'Core',
    items: ['Act', 'Breather', 'ProgressNav', 'HeroNumber'],
    icon: 'core',
  },
  {
    name: 'Display',
    items: ['Hero', 'Timeline', 'Cheatsheet', 'ExpertPanel'],
    icon: 'display',
  },
  {
    name: 'Data',
    items: ['SkillsRadar', 'ImpactStats', 'MarketPulse'],
    icon: 'data',
  },
  {
    name: 'Interactive',
    items: ['Calculator', 'Assessment', 'KnowledgeMap'],
    icon: 'interactive',
  },
]

const iconMap = {
  core: Box,
  display: Layout,
  data: BarChart2,
  interactive: MousePointer,
}

export function ComponentShowcase() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, catIndex) => {
        const Icon = iconMap[category.icon]
        return (
          <div
            key={category.name}
            className={`p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${catIndex * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-display font-bold text-white">{category.name}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li
                  key={item}
                  className={`text-sm text-slate-400 font-mono transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${catIndex * 100 + itemIndex * 50}ms` }}
                >
                  <span className="text-purple-400">&lt;</span>
                  {item}
                  <span className="text-purple-400">/&gt;</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
