import { useInView } from '../hooks/useInView'
import { Terminal, ArrowRight } from 'lucide-react'

export function Epilogue() {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section
      id="epilogue"
      className="relative min-h-screen flex items-center justify-center bg-[#020408] py-24 px-4"
    >
      {/* Subtle cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[200px] rounded-full" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main message */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* The question */}
          <p className="text-xl md:text-2xl text-slate-500 mb-8">
            Você tem dados, pesquisas, ideias.
          </p>

          {/* The transformation */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Agora você sabe como transformá-los em
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
              experiências inesquecíveis.
            </span>
          </h2>

          {/* The invitation */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Cada relatório, pesquisa ou apresentação pode ser uma jornada.
            O factory está pronto. A escolha é sua.
          </p>
        </div>

        {/* CTA */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/20">
            <div className="flex items-center gap-3 text-cyan-400">
              <Terminal className="w-5 h-5" />
              <span className="text-sm font-mono uppercase tracking-wider">Comece agora</span>
            </div>

            <code className="text-2xl md:text-3xl font-mono text-white">
              *create <span className="text-cyan-400">seu-projeto</span>
            </code>

            <p className="text-sm text-slate-500">
              30 segundos para o scaffold. Horas para a experiência completa.
            </p>
          </div>
        </div>

        {/* What you'll create */}
        <div className={`mt-16 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {[
            'Relatórios que engajam',
            'Pesquisas que impactam',
            'Apresentações que transformam',
            'Histórias que ressoam',
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/30 border border-slate-700/30"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <ArrowRight className="w-3 h-3 text-cyan-400" />
              <span className="text-sm text-slate-400">{item}</span>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mb-6" />

          <p className="text-sm text-slate-600 font-mono uppercase tracking-[0.3em]">
            Sintetica Factory
          </p>
          <p className="text-xs text-slate-700 mt-2">
            Sistema de Experiências Narrativas
          </p>

          {/* Philosophy */}
          <p className="text-sm text-slate-500 mt-8 italic">
            "O factory cria o scaffold. O humano adiciona a alma."
          </p>
        </div>
      </div>
    </section>
  )
}
