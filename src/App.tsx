import { Hero } from './components/Hero'
import { Act } from './components/Act'
import { Breather } from './components/Breather'
import { StatsGrid } from './components/StatsGrid'
import { PainPoints } from './components/PainPoints'
import { TemperatureDemo } from './components/TemperatureDemo'
import { ComponentShowcase } from './components/ComponentShowcase'
import { ImpactStats } from './components/ImpactStats'
import { AgentsGrid } from './components/AgentsGrid'
import { Epilogue } from './components/Epilogue'

function App() {
  return (
    <main className="relative">
      {/* PROLOGUE: Hero Sequence */}
      <Hero />

      {/* ACT 1: O Problema */}
      <Act
        id="act-1"
        number={1}
        title="O Problema"
        subtitle="Por que ninguém lê seus documentos"
        temperature="cool"
      >
        <StatsGrid
          stats={[
            { value: '15 páginas', label: 'Relatório médio que ninguém lê' },
            { value: '2 min', label: 'Tempo real de engajamento' },
            { value: '3%', label: 'Leitores que chegam ao final' },
          ]}
          accentColor="blue"
        />
        <PainPoints
          items={[
            'Informação densa sem hierarquia visual',
            'Ausência de ritmo narrativo',
            'Zero jornada emocional',
            'Parece com tudo que já existe',
          ]}
        />
      </Act>

      {/* BREATHER 1: Question */}
      <Breather
        type="question"
        question="E se documentos funcionassem como experiências?"
        subtext="Como o NYT Snow Fall. Como a Apple Keynote. Como... cinema."
        accentColor="cyan"
      />

      {/* ACT 2: A Solução */}
      <Act
        id="act-2"
        number={2}
        title="A Solução"
        subtitle="O Sistema de Temperatura Narrativa"
        temperature="neutral"
      >
        <TemperatureDemo />
        <p className="mt-12 text-lg text-slate-400 max-w-3xl">
          Cada ato tem sua temperatura. Cada temperatura evoca uma emoção.
          A jornada do <span className="text-cyan-400">frio</span> ao{' '}
          <span className="text-orange-400">quente</span> e de volta ao{' '}
          <span className="text-cyan-400">frio</span> cria catarse narrativa.
        </p>
      </Act>

      {/* BREATHER 2: Stat */}
      <Breather
        type="stat"
        stat="5"
        statLabel="atos. 5 temperaturas. Uma jornada que transforma."
        accentColor="blue"
      />

      {/* ACT 3: Os Componentes */}
      <Act
        id="act-3"
        number={3}
        title="Os Componentes"
        subtitle="35 peças. Infinitas combinações."
        temperature="warm"
      >
        <ComponentShowcase />
      </Act>

      {/* BREATHER 3: Quote */}
      <Breather
        type="quote"
        content="O factory cria o scaffold. O humano adiciona a alma."
        author="Princípio Sintetica"
        accentColor="purple"
      />

      {/* ACT 4: O Resultado */}
      <Act
        id="act-4"
        number={4}
        title="O Resultado"
        subtitle="Métricas que importam"
        temperature="hot"
      >
        <ImpactStats
          stats={[
            { value: '+30%', label: 'Tempo na página', trend: 'up' },
            { value: '+20%', label: 'Scroll até o final', trend: 'up' },
            { value: '90+', label: 'Lighthouse Score', trend: 'target' },
          ]}
        />
      </Act>

      {/* BREATHER 4: Silence */}
      <Breather type="silence" accentColor="orange" />

      {/* ACT 5: Os Agentes */}
      <Act
        id="act-5"
        number={5}
        title="Os Agentes"
        subtitle="7 especialistas orquestrando cada detalhe"
        temperature="cool"
      >
        <AgentsGrid />
      </Act>

      {/* EPILOGUE */}
      <Act id="epilogue" title="" temperature="cold" showHeader={false}>
        <Epilogue />
      </Act>
    </main>
  )
}

export default App
