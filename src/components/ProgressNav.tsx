import { useState, useEffect } from 'react'

interface Section {
  id: string
  label: string
  temperature: 'cold' | 'cool' | 'neutral' | 'warm' | 'hot'
}

const sections: Section[] = [
  { id: 'hero', label: 'Início', temperature: 'cold' },
  { id: 'what-i-am', label: 'O que sou', temperature: 'cold' },
  { id: 'the-problem', label: 'O problema', temperature: 'cool' },
  { id: 'transformation', label: 'Transmutação', temperature: 'neutral' },
  { id: 'temperature', label: 'Temperatura', temperature: 'warm' },
  { id: 'how-it-works', label: 'Como funciona', temperature: 'neutral' },
  { id: 'components', label: 'Componentes', temperature: 'warm' },
  { id: 'agents', label: 'Agentes', temperature: 'cool' },
  { id: 'how-to-use', label: 'Como usar', temperature: 'hot' },
  { id: 'epilogue', label: 'Fim', temperature: 'cold' },
]

const temperatureColors = {
  cold: 'bg-cyan-400',
  cool: 'bg-blue-400',
  neutral: 'bg-slate-400',
  warm: 'bg-purple-400',
  hot: 'bg-orange-400',
}

export function ProgressNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollTop / docHeight)

      // Find active section
      const sectionElements = sections
        .map((s) => ({ id: s.id, el: document.getElementById(s.id) }))
        .filter((s) => s.el !== null)

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el!
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.4) {
          setActiveSection(sectionElements[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const activeTemp = sections.find((s) => s.id === activeSection)?.temperature || 'cold'

  return (
    <>
      {/* Progress bar at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900/50 z-50">
        <div
          className={`h-full ${temperatureColors[activeTemp]} transition-all duration-300`}
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Side navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {sections.map((section) => {
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group flex items-center gap-3"
              aria-label={section.label}
            >
              {/* Dot indicator */}
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? `${temperatureColors[section.temperature]} scale-150`
                    : 'bg-slate-600 group-hover:bg-slate-400'
                }`}
              />

              {/* Label (shows on hover or active) */}
              <span
                className={`text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'opacity-100 text-white translate-x-0'
                    : 'opacity-0 text-slate-400 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {section.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Temperature indicator (bottom right) */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2">
        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
          temp
        </span>
        <div
          className={`w-3 h-3 rounded-full ${temperatureColors[activeTemp]} transition-colors duration-500`}
        />
        <span className="text-xs font-mono text-slate-400 uppercase">
          {activeTemp}
        </span>
      </div>
    </>
  )
}
