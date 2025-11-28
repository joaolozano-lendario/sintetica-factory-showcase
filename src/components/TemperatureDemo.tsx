import { useInView } from '../hooks/useInView'

interface Temperature {
  id: string
  name: string
  mood: string
  color: string
  accent: string
  tailwindAccent: string
}

const temperatures: Temperature[] = [
  {
    id: 'cold',
    name: 'COLD',
    mood: 'Impacto, seriedade',
    color: '#030810',
    accent: 'cyan',
    tailwindAccent: 'bg-cyan-400',
  },
  {
    id: 'cool',
    name: 'COOL',
    mood: 'Informativo, contexto',
    color: '#050b14',
    accent: 'blue',
    tailwindAccent: 'bg-blue-400',
  },
  {
    id: 'neutral',
    name: 'NEUTRAL',
    mood: 'Técnico, dados',
    color: '#0f172a',
    accent: 'slate',
    tailwindAccent: 'bg-slate-400',
  },
  {
    id: 'warm',
    name: 'WARM',
    mood: 'Histórias, humanização',
    color: '#1a1a2e',
    accent: 'purple',
    tailwindAccent: 'bg-purple-400',
  },
  {
    id: 'hot',
    name: 'HOT',
    mood: 'Urgência, tensão',
    color: '#1a0a0a',
    accent: 'orange',
    tailwindAccent: 'bg-orange-400',
  },
]

export function TemperatureDemo() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {temperatures.map((temp, index) => (
        <div
          key={temp.id}
          className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            backgroundColor: temp.color,
            transitionDelay: `${index * 100}ms`,
          }}
        >
          {/* Glow effect */}
          <div
            className={`absolute -top-8 -right-8 w-24 h-24 ${temp.tailwindAccent} opacity-20 blur-[40px] rounded-full`}
          />

          {/* Content */}
          <div className="relative z-10">
            <div className={`w-3 h-3 rounded-full ${temp.tailwindAccent} mb-4`} />
            <h3 className="font-display font-bold text-lg text-white mb-1">{temp.name}</h3>
            <p className="text-sm text-slate-400">{temp.mood}</p>
          </div>

          {/* Border indicator */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 ${temp.tailwindAccent} opacity-50`} />
        </div>
      ))}
    </div>
  )
}
