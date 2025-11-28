import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Transformation() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.2 })
  const [showAfter, setShowAfter] = useState(false)

  return (
    <section
      id="transformation"
      className="relative min-h-screen bg-[#0f172a] py-24 px-4 overflow-hidden"
    >
      {/* Neutral temperature glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-500/5 blur-[180px] rounded-full" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-sm font-mono text-slate-500 uppercase tracking-[0.3em]">
            A Transmutação
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
            De <span className="text-slate-500">documento</span> para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              experiência
            </span>
          </h2>
        </div>

        {/* Before / After comparison */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* BEFORE */}
          <div className="relative">
            <div className="absolute -top-3 left-4 px-3 py-1 bg-slate-800 rounded-full">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Antes</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-slate-700/50 h-80 overflow-hidden">
              {/* Fake document */}
              <div className="space-y-3 opacity-60">
                <div className="h-4 bg-slate-700 rounded w-3/4" />
                <div className="h-3 bg-slate-800 rounded w-full" />
                <div className="h-3 bg-slate-800 rounded w-full" />
                <div className="h-3 bg-slate-800 rounded w-5/6" />
                <div className="h-3 bg-slate-800 rounded w-full" />
                <div className="h-4 bg-slate-700 rounded w-1/2 mt-6" />
                <div className="h-3 bg-slate-800 rounded w-full" />
                <div className="h-3 bg-slate-800 rounded w-4/5" />
                <div className="h-3 bg-slate-800 rounded w-full" />
                <div className="h-3 bg-slate-800 rounded w-3/4" />
                <div className="h-3 bg-slate-800 rounded w-full" />
                <div className="h-3 bg-slate-800 rounded w-2/3" />
              </div>
              {/* Overlay showing boredom */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#0f172a] via-transparent to-transparent">
                <div className="text-center">
                  <p className="text-2xl text-slate-600 font-light">😴</p>
                  <p className="text-sm text-slate-600 mt-2">Mais um PDF...</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-slate-600">
              <span className="text-sm">Scroll depth: 12%</span>
              <div className="w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[12%] h-full bg-red-500/50" />
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <button
              onClick={() => setShowAfter(!showAfter)}
              className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-110 transition-transform shadow-lg shadow-purple-500/25"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* AFTER */}
          <div className="relative">
            <div className="absolute -top-3 left-4 px-3 py-1 bg-cyan-500/20 rounded-full">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Depois</span>
            </div>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#030810] to-[#0a1525] border border-cyan-500/20 h-80 overflow-hidden">
              {/* Mini scrollytelling preview */}
              <div className="space-y-4">
                {/* Hero section mini */}
                <div className="p-4 rounded-lg bg-gradient-to-b from-cyan-500/10 to-transparent">
                  <div className="text-center">
                    <span className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                      78%
                    </span>
                    <p className="text-xs text-slate-500 mt-1">O número que muda tudo</p>
                  </div>
                </div>

                {/* Content sections mini */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <span className="text-xs text-blue-400">Ato 1</span>
                  </div>
                  <div className="h-12 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <span className="text-xs text-purple-400">Ato 2</span>
                  </div>
                  <div className="h-12 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <span className="text-xs text-orange-400">Ato 3</span>
                  </div>
                </div>

                {/* Breather mini */}
                <div className="p-3 rounded-lg bg-slate-800/30 text-center">
                  <p className="text-sm text-slate-400 italic">"Uma pausa para respirar"</p>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 h-0.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-cyan-500 to-purple-500" />
                  </div>
                  <span className="text-xs text-slate-500">85%</span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-cyan-500/20 blur-2xl" />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-cyan-400">
              <span className="text-sm">Scroll depth: 85%</span>
              <div className="w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile arrow */}
        <div className="lg:hidden flex justify-center my-8">
          <ArrowRight className="w-8 h-8 text-cyan-400 rotate-90" />
        </div>

        {/* Key insight */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
            <div className="text-center">
              <span className="text-3xl font-display font-bold text-red-400">12%</span>
              <p className="text-xs text-slate-500 mt-1">Antes</p>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-600 rotate-90 md:rotate-0" />
            <div className="text-center">
              <span className="text-3xl font-display font-bold text-emerald-400">85%</span>
              <p className="text-xs text-slate-500 mt-1">Depois</p>
            </div>
            <div className="w-px h-12 bg-slate-700 hidden md:block" />
            <p className="text-slate-400 text-sm">
              Mesmo conteúdo.<br />
              <span className="text-white">Experiência transformada.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
