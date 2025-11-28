import { useInView } from '../hooks/useInView'
import { ArrowRight } from 'lucide-react'

export function WhatIAm() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section
      id="what-i-am"
      className="relative min-h-screen flex items-center justify-center bg-[#020408] overflow-hidden py-24"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[180px] rounded-full" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* The definition */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-sm font-mono text-cyan-400/60 uppercase tracking-[0.3em] mb-8">
            O que eu sou
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-8">
            Eu sou um{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              sistema de transmutação
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
            Eu pego o que é denso, complexo, ignorado — e transformo em{' '}
            <span className="text-white">experiências que as pessoas não conseguem parar de consumir.</span>
          </p>
        </div>

        {/* The translations */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { from: 'Informação', to: 'Emoção', color: 'cyan' },
            { from: 'Dado', to: 'Narrativa', color: 'blue' },
            { from: '"Tenho que ler"', to: '"Não consigo parar"', color: 'purple' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50"
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <span className="text-slate-500 text-sm">{item.from}</span>
              <ArrowRight className={`w-4 h-4 text-${item.color}-400`} />
              <span className={`text-${item.color}-400 font-medium`}>{item.to}</span>
            </div>
          ))}
        </div>

        {/* Core insight */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-block px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-cyan-300 font-light">
              A transformação acontece <span className="font-medium">durante</span> o scroll, não no final.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
