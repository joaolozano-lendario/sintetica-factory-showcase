import { useInView } from '../hooks/useInView'

type BreatherType = 'quote' | 'stat' | 'question' | 'manifesto' | 'silence'

interface BreatherProps {
  type: BreatherType
  content?: string
  author?: string
  stat?: string
  statLabel?: string
  question?: string
  subtext?: string
}

export function Breather({
  type,
  content,
  author,
  stat,
  statLabel,
  question,
  subtext,
}: BreatherProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.4 })

  return (
    <div
      ref={ref}
      className="relative min-h-[50vh] flex items-center justify-center bg-[#020408] overflow-hidden py-16"
    >
      {/* Subtle central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {type === 'quote' && (
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-5xl md:text-6xl text-cyan-400/20 font-serif leading-none">
              "
            </span>
            <blockquote className="text-xl md:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed tracking-tight -mt-6">
              {content}
            </blockquote>
            {author && (
              <cite className="block mt-6 text-sm text-slate-500 font-mono uppercase tracking-[0.15em] not-italic">
                — {author}
              </cite>
            )}
          </div>
        )}

        {type === 'stat' && (
          <div className={`transition-all duration-[1500ms] ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="relative inline-block">
              {/* Main stat */}
              <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/5">
                {stat}
              </span>
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-display font-black leading-none text-cyan-400/5 blur-2xl">
                  {stat}
                </span>
              </div>
            </div>
            {statLabel && (
              <p className="mt-2 text-lg md:text-xl text-slate-400 max-w-lg mx-auto">
                {statLabel}
              </p>
            )}
          </div>
        )}

        {type === 'question' && (
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-cyan-400 leading-tight">
              {question}
            </p>
            {subtext && (
              <p className="mt-6 text-base text-slate-500 italic">{subtext}</p>
            )}
          </div>
        )}

        {type === 'manifesto' && (
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="w-12 h-0.5 bg-cyan-400/30 mx-auto mb-8" />
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed">
              {content}
            </p>
            <div className="w-12 h-0.5 bg-cyan-400/30 mx-auto mt-8" />
          </div>
        )}

        {type === 'silence' && (
          <div className={`py-12 transition-all duration-[2000ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400/40 animate-pulse" />
              <span
                className="w-2 h-2 rounded-full bg-cyan-400/40 animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <span
                className="w-2 h-2 rounded-full bg-cyan-400/40 animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
