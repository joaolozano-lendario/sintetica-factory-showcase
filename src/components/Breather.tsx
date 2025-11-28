import { useInView } from '../hooks/useInView'

type BreatherType = 'quote' | 'stat' | 'question' | 'manifesto' | 'silence' | 'visual'

interface BreatherProps {
  type: BreatherType
  content?: string
  author?: string
  source?: string
  stat?: string
  statLabel?: string
  question?: string
  subtext?: string
  accentColor?: 'cyan' | 'blue' | 'purple' | 'orange' | 'slate'
}

export function Breather({
  type,
  content,
  author,
  stat,
  statLabel,
  question,
  subtext,
  accentColor = 'cyan',
}: BreatherProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>({ threshold: 0.3 })

  const accentClasses = {
    cyan: 'text-cyan-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    orange: 'text-orange-400',
    slate: 'text-slate-400',
  }

  const glowClasses = {
    cyan: 'bg-cyan-500/20',
    blue: 'bg-blue-500/20',
    purple: 'bg-purple-500/20',
    orange: 'bg-orange-500/20',
    slate: 'bg-slate-500/10',
  }

  return (
    <div
      ref={ref}
      className="relative min-h-[60vh] flex items-center justify-center bg-[#020408] overflow-hidden"
    >
      {/* Atmospheric glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ${glowClasses[accentColor]} blur-[180px] rounded-full`}
      />

      {/* Content based on type */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {type === 'quote' && (
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className={`text-6xl md:text-8xl ${accentClasses[accentColor]} opacity-30 font-serif`}>
              "
            </span>
            <blockquote className="text-2xl md:text-4xl lg:text-5xl text-white/95 font-light leading-[1.3] tracking-tight -mt-8">
              {content}
            </blockquote>
            {author && (
              <cite className="block mt-8 text-sm text-slate-500 font-mono uppercase tracking-[0.2em] not-italic">
                — {author}
              </cite>
            )}
          </div>
        )}

        {type === 'stat' && (
          <div
            className={`transition-all duration-[1500ms] ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Giant number with glow */}
            <div className="relative">
              <span className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-display font-black leading-none text-ghost">
                {stat}
              </span>
              {/* Glow layer */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  className={`text-[10rem] md:text-[14rem] lg:text-[18rem] font-display font-black leading-none ${accentClasses[accentColor]} opacity-10 blur-2xl`}
                >
                  {stat}
                </span>
              </div>
            </div>
            {statLabel && (
              <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
                {statLabel}
              </p>
            )}
          </div>
        )}

        {type === 'question' && (
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className={`text-3xl md:text-5xl lg:text-6xl font-display font-light ${accentClasses[accentColor]}`}>
              {question}
            </p>
            {subtext && (
              <p className="mt-6 text-lg text-slate-500 italic">{subtext}</p>
            )}
          </div>
        )}

        {type === 'manifesto' && (
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className={`w-16 h-0.5 ${accentClasses[accentColor].replace('text-', 'bg-')} mx-auto mb-8 opacity-50`} />
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed">
              {content}
            </p>
            <div className={`w-16 h-0.5 ${accentClasses[accentColor].replace('text-', 'bg-')} mx-auto mt-8 opacity-50`} />
          </div>
        )}

        {type === 'silence' && (
          <div
            className={`transition-all duration-[2000ms] ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className={`w-2 h-2 rounded-full ${accentClasses[accentColor].replace('text-', 'bg-')} animate-pulse-slow`} />
              <span
                className={`w-2 h-2 rounded-full ${accentClasses[accentColor].replace('text-', 'bg-')} animate-pulse-slow`}
                style={{ animationDelay: '0.5s' }}
              />
              <span
                className={`w-2 h-2 rounded-full ${accentClasses[accentColor].replace('text-', 'bg-')} animate-pulse-slow`}
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        )}

        {type === 'visual' && (
          <div
            className={`w-full h-48 transition-all duration-[2000ms] ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl animate-pulse-slow" />
          </div>
        )}
      </div>
    </div>
  )
}
