import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface RevealStage {
  number: string
  label: string
}

const stages: RevealStage[] = [
  { number: '80%', label: 'dos relatórios corporativos nunca são lidos até o fim' },
  { number: '7s', label: 'é o tempo médio de atenção antes do scroll' },
  { number: '1', label: 'chance de criar uma primeira impressão' },
]

export function Hero() {
  const [stage, setStage] = useState(0)
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    // Stage progression
    timers.push(setTimeout(() => setStage(1), 1500))
    timers.push(setTimeout(() => setStage(2), 4000))
    timers.push(setTimeout(() => setStage(3), 6500))
    timers.push(setTimeout(() => setStage(4), 9000))
    timers.push(setTimeout(() => setStage(5), 11500))
    timers.push(setTimeout(() => setShowScroll(true), 13000))

    return () => timers.forEach(clearTimeout)
  }, [])

  const skipToEnd = () => {
    setStage(5)
    setShowScroll(true)
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-cold-bg overflow-hidden cursor-pointer"
      onClick={skipToEnd}
    >
      {/* Atmospheric layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-cold-bg via-cold-bg to-cool-bg" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Opening question */}
        <div
          className={`transition-all duration-1000 ${
            stage >= 1 && stage < 5 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {stage < 5 && (
            <p className="text-xl md:text-2xl text-slate-400 mb-16 font-light">
              Você tem dados. Pesquisas. Ideias.{' '}
              <span className="text-cyan-400">Mas ninguém lê.</span>
            </p>
          )}
        </div>

        {/* Staged number reveals */}
        {stage >= 1 && stage < 5 && (
          <div className="space-y-12">
            {stages.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  stage > index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="block text-7xl md:text-9xl font-display font-bold text-gradient-cyan">
                  {item.number}
                </span>
                <span className="block text-lg md:text-xl text-slate-400 mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Final reveal */}
        <div
          className={`transition-all duration-1500 ${
            stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {stage >= 5 && (
            <>
              {/* Giant ghost number */}
              <div className="relative mb-8">
                <span className="text-[12rem] md:text-[18rem] font-display font-black text-ghost leading-none">
                  80%
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12rem] md:text-[18rem] font-display font-black text-cyan-400/5 blur-2xl">
                    80%
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                <span className="text-gradient-cyan">Do Caos</span>
                <span className="text-white"> à </span>
                <span className="text-gradient-cyan">Clareza</span>
              </h1>

              {/* Punchline */}
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                E se você pudesse transformar qualquer dado em uma{' '}
                <span className="text-cyan-400 font-medium">jornada irresistível</span>?
              </p>

              {/* Subtitle */}
              <p className="text-sm md:text-base text-slate-500 mt-8 font-mono uppercase tracking-[0.2em]">
                Sintetica Factory — Sistema de Experiências Narrativas
              </p>
            </>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          showScroll ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce" />
      </div>
    </section>
  )
}
