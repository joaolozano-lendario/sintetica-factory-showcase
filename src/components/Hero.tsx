import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const [stage, setStage] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    // The reveal sequence - each moment builds anticipation
    timers.push(setTimeout(() => setStage(1), 800))    // "Você tem..."
    timers.push(setTimeout(() => setStage(2), 2500))   // "dados"
    timers.push(setTimeout(() => setStage(3), 3500))   // "pesquisas"
    timers.push(setTimeout(() => setStage(4), 4500))   // "ideias"
    timers.push(setTimeout(() => setStage(5), 6000))   // "Mas ninguém lê."
    timers.push(setTimeout(() => setStage(6), 8500))   // Fade out question
    timers.push(setTimeout(() => setStage(7), 9500))   // "E se..."
    timers.push(setTimeout(() => setStage(8), 12000))  // Main title
    timers.push(setTimeout(() => setShowContent(true), 13500))

    return () => timers.forEach(clearTimeout)
  }, [])

  const skipToEnd = () => {
    setStage(8)
    setShowContent(true)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      onClick={stage < 8 ? skipToEnd : undefined}
    >
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[#020408]" />

      {/* Radial glow from center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[200px] rounded-full" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Phase 1: The Problem Statement */}
        {stage >= 1 && stage < 6 && (
          <div className="space-y-4">
            {/* "Você tem..." */}
            <p className={`text-2xl md:text-3xl text-slate-400 font-light transition-all duration-1000 ${
              stage >= 1 ? 'opacity-100' : 'opacity-0'
            }`}>
              Você tem...
            </p>

            {/* The three things */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-8">
              <span className={`text-4xl md:text-6xl font-display font-bold text-white transition-all duration-700 ${
                stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                dados
              </span>
              <span className={`text-4xl md:text-6xl font-display font-bold text-white transition-all duration-700 ${
                stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                pesquisas
              </span>
              <span className={`text-4xl md:text-6xl font-display font-bold text-white transition-all duration-700 ${
                stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                ideias
              </span>
            </div>

            {/* The punchline */}
            <p className={`text-3xl md:text-5xl font-display font-bold transition-all duration-1000 ${
              stage >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <span className="text-slate-500">Mas </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                ninguém lê.
              </span>
            </p>
          </div>
        )}

        {/* Phase 2: The Transformation Promise */}
        {stage >= 7 && stage < 8 && (
          <div className={`transition-all duration-1500 ${
            stage >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-2xl md:text-4xl text-slate-300 font-light leading-relaxed">
              E se você pudesse transformar tudo isso em
              <br />
              <span className="text-cyan-400 font-medium">
                experiências que ninguém consegue parar de consumir?
              </span>
            </p>
          </div>
        )}

        {/* Phase 3: The Identity Reveal */}
        {stage >= 8 && (
          <div className={`transition-all duration-1500 ${
            stage >= 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* The name */}
            <div className="relative mb-6">
              {/* Ghost text behind */}
              <span className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-display font-black text-cyan-400/5 blur-xl flex items-center justify-center">
                SINTÉTICA
              </span>

              {/* Main title */}
              <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-display font-black">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                  SINTÉTICA
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-400 font-light mb-4">
              Factory
            </p>

            {/* Tagline */}
            <p className={`text-lg md:text-xl text-slate-500 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}>
              O sistema que transmuta complexidade em jornadas irresistíveis.
            </p>

            {/* What I am - quick summary */}
            <div className={`mt-12 flex flex-wrap justify-center gap-6 text-sm font-mono uppercase tracking-wider transition-all duration-1000 delay-700 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="text-cyan-400/70">Scrollytelling</span>
              <span className="text-slate-600">•</span>
              <span className="text-blue-400/70">Narrativa</span>
              <span className="text-slate-600">•</span>
              <span className="text-purple-400/70">Experiência</span>
              <span className="text-slate-600">•</span>
              <span className="text-orange-400/70">Transformação</span>
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">
          Scroll para descobrir
        </span>
        <ChevronDown className="w-5 h-5 text-cyan-400/50 animate-bounce" />
      </div>
    </section>
  )
}
