import { useInView } from '../hooks/useInView'
import { X } from 'lucide-react'

interface PainPointsProps {
  items: string[]
}

export function PainPoints({ items }: PainPointsProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div ref={ref} className="mt-12 space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-start gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
            <X className="w-3 h-3 text-red-400" />
          </div>
          <span className="text-slate-300">{item}</span>
        </div>
      ))}
    </div>
  )
}
