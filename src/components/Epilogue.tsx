import { useInView } from '../hooks/useInView'
import { Terminal } from 'lucide-react'

export function Epilogue() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
        Transforme seu próximo relatório
        <br />
        <span className="text-gradient-cyan">em uma experiência.</span>
      </h2>

      {/* Command box */}
      <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
        <Terminal className="w-5 h-5 text-cyan-400" />
        <code className="font-mono text-lg text-cyan-300">
          *create <span className="text-slate-400">{'{nome-do-projeto}'}</span>
        </code>
      </div>

      {/* Subtext */}
      <p className="mt-8 text-lg text-slate-500 max-w-lg mx-auto">
        O factory está pronto. O que você vai criar?
      </p>

      {/* Signature */}
      <div className="mt-16 pt-8 border-t border-slate-800">
        <p className="font-mono text-xs text-slate-600 uppercase tracking-[0.3em]">
          Sintetica Factory v1.0
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Sistema de Experiências Narrativas
        </p>
      </div>
    </div>
  )
}
