import { useState } from 'react'
import { useInView } from '../hooks/useInView'

interface Temperature {
  id: string
  name: string
  mood: string
  when: string
  bg: string
  accent: string
  textAccent: string
}

const temperatures: Temperature[] = [
  {
    id: 'cold',
    name: 'COLD',
    mood: 'Impacto. Seriedade. O momento que prende.',
    when: 'Abertura, revelações, encerramento',
    bg: 'bg-[#030810]',
    accent: 'cyan',
    textAccent: 'text-cyan-400',
  },
  {
    id: 'cool',
    name: 'COOL',
    mood: 'Informativo. Contexto. Calma autoridade.',
    when: 'Fundação, explicações, dados',
    bg: 'bg-[#050b14]',
    accent: 'blue',
    textAccent: 'text-blue-400',
  },
  {
    id: 'neutral',
    name: 'NEUTRAL',
    mood: 'Denso. Técnico. Objetivo.',
    when: 'Deep-dives, comparações, análises',
    bg: 'bg-[#0f172a]',
    accent: 'slate',
    textAccent: 'text-slate-400',
  },
  {
    id: 'warm',
    name: 'WARM',
    mood: 'Histórias. Humanização. Empatia.',
    when: 'Cases, narrativas pessoais, conexão',
    bg: 'bg-[#1a1a2e]',
    accent: 'purple',
    textAccent: 'text-purple-400',
  },
  {
    id: 'hot',
    name: 'HOT',
    mood: 'Urgência. Tensão. Ação.',
    when: 'Alertas, conflitos, call-to-action',
    bg: 'bg-[#1a0a0a]',
    accent: 'orange',
    textAccent: 'text-orange-400',
  },
]

export function TemperatureSystem() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 })
  const [activeTemp, setActiveTemp] = useState<string>('cold')

  const currentTemp = temperatures.find((t) => t.id === activeTemp) || temperatures[0]

  return (
    <section
      id="temperature"
      className={`relative min-h-screen py-24 px-4 transition-colors duration-1000 ${currentTemp.bg}`}
    >
      {/* Dynamic glow based on temperature */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[200px] rounded-full transition-colors duration-1000 ${
          activeTemp === 'cold' ? 'bg-cyan-500/10' :
          activeTemp === 'cool' ? 'bg-blue-500/10' :
          activeTemp === 'neutral' ? 'bg-slate-500/5' :
          activeTemp === 'warm' ? 'bg-purple-500/10' :
          'bg-orange-500/10'
        }`}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className={`text-sm font-mono uppercase tracking-[0.3em] ${currentTemp.textAccent} opacity-60`}>
            O Método
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
            Sistema de{' '}
            <span className={`${currentTemp.textAccent}`}>
              Temperatura
            </span>
          </h2>
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Cada seção tem uma temperatura. Cada temperatura evoca uma emoção.
            A jornada emocional é tão importante quanto o conteúdo.
          </p>
        </div>

        {/* Temperature selector */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {temperatures.map((temp) => (
            <button
              key={temp.id}
              onClick={() => setActiveTemp(temp.id)}
              className={`px-5 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTemp === temp.id
                  ? `${temp.textAccent} bg-white/10 scale-105`
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {temp.name}
            </button>
          ))}
        </div>

        {/* Active temperature display */}
        <div className={`max-w-2xl mx-auto text-center transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className={`p-8 rounded-3xl ${currentTemp.bg} border border-white/5 transition-all duration-500`}>
            {/* Temperature indicator */}
            <div className={`w-16 h-16 mx-auto rounded-2xl mb-6 flex items-center justify-center transition-colors duration-500 ${
              activeTemp === 'cold' ? 'bg-cyan-500/20' :
              activeTemp === 'cool' ? 'bg-blue-500/20' :
              activeTemp === 'neutral' ? 'bg-slate-500/20' :
              activeTemp === 'warm' ? 'bg-purple-500/20' :
              'bg-orange-500/20'
            }`}>
              <div className={`w-4 h-4 rounded-full transition-colors duration-500 ${
                activeTemp === 'cold' ? 'bg-cyan-400' :
                activeTemp === 'cool' ? 'bg-blue-400' :
                activeTemp === 'neutral' ? 'bg-slate-400' :
                activeTemp === 'warm' ? 'bg-purple-400' :
                'bg-orange-400'
              }`} />
            </div>

            <h3 className={`text-3xl font-display font-bold mb-4 transition-colors duration-500 ${currentTemp.textAccent}`}>
              {currentTemp.name}
            </h3>

            <p className="text-xl text-white mb-2">
              {currentTemp.mood}
            </p>

            <p className="text-sm text-slate-500">
              Usar em: {currentTemp.when}
            </p>
          </div>
        </div>

        {/* The arc visualization */}
        <div className={`mt-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-center text-slate-500 text-sm font-mono uppercase tracking-wider mb-6">
            O Arco Narrativo Padrão
          </p>

          <div className="flex items-center justify-center gap-1 md:gap-2 overflow-x-auto pb-4">
            {['cold', 'cool', 'neutral', 'warm', 'hot', 'warm', 'cool', 'cold'].map((temp, index) => {
              const _t = temperatures.find((x) => x.id === temp)!
              void _t
              const labels = ['Abertura', 'Contexto', 'Análise', 'Histórias', 'Tensão', 'Resolução', 'Conclusão', 'Fim']
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-8 md:w-12 h-12 md:h-16 rounded-lg transition-all duration-300 cursor-pointer hover:scale-110 ${
                      activeTemp === temp ? 'ring-2 ring-white/30' : ''
                    } ${
                      temp === 'cold' ? 'bg-cyan-500/30' :
                      temp === 'cool' ? 'bg-blue-500/30' :
                      temp === 'neutral' ? 'bg-slate-500/30' :
                      temp === 'warm' ? 'bg-purple-500/30' :
                      'bg-orange-500/30'
                    }`}
                    style={{
                      height: temp === 'hot' ? '80px' :
                              temp === 'warm' ? '60px' :
                              temp === 'neutral' ? '50px' :
                              temp === 'cool' ? '45px' : '40px'
                    }}
                    onClick={() => setActiveTemp(temp)}
                  />
                  <span className="text-[10px] md:text-xs text-slate-600 text-center">
                    {labels[index]}
                  </span>
                </div>
              )
            })}
          </div>

          <p className="text-center text-slate-600 text-sm mt-4">
            Frio → Quente → Frio = Arco de catarse
          </p>
        </div>
      </div>
    </section>
  )
}
