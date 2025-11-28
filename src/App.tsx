import { Particles } from './components/Particles'
import { ProgressNav } from './components/ProgressNav'
import { Hero } from './components/Hero'
import { WhatIAm } from './components/WhatIAm'
import { TheProblem } from './components/TheProblem'
import { Breather } from './components/Breather'
import { Transformation } from './components/Transformation'
import { TemperatureSystem } from './components/TemperatureSystem'
import { HowItWorks } from './components/HowItWorks'
import { ComponentsShowcase } from './components/ComponentsShowcase'
import { AgentsSection } from './components/AgentsSection'
import { HowToUse } from './components/HowToUse'
import { Epilogue } from './components/Epilogue'

function App() {
  return (
    <main className="relative">
      {/* Global atmospheric layer */}
      <Particles />

      {/* Navigation */}
      <ProgressNav />

      {/* PROLOGUE: Hero - The hook that captures */}
      <Hero />

      {/* What I Am - Identity statement */}
      <WhatIAm />

      {/* Breather: Question */}
      <Breather
        type="question"
        question="Mas por que seus documentos não funcionam assim?"
        subtext="O problema não é o conteúdo. É a forma."
      />

      {/* The Problem - Why documents fail */}
      <TheProblem />

      {/* Breather: Stat */}
      <Breather
        type="stat"
        stat="3%"
        statLabel="chegam ao final de um relatório tradicional"
      />

      {/* Transformation - Before/After */}
      <Transformation />

      {/* Breather: Question */}
      <Breather
        type="question"
        question="Como criar essa transformação?"
        subtext="O segredo está na temperatura."
      />

      {/* Temperature System - The method */}
      <TemperatureSystem />

      {/* Breather: Manifesto */}
      <Breather
        type="manifesto"
        content="A jornada emocional é tão importante quanto o conteúdo. Frio para impactar. Quente para humanizar. O arco cria catarse."
      />

      {/* How It Works - 80/20 Philosophy */}
      <HowItWorks />

      {/* Breather: Quote */}
      <Breather
        type="quote"
        content="O factory cria o scaffold. O humano adiciona a alma."
        author="Princípio Sintetica"
      />

      {/* Components Showcase */}
      <ComponentsShowcase />

      {/* Breather: Silence */}
      <Breather type="silence" />

      {/* Agents Section */}
      <AgentsSection />

      {/* Breather: Question */}
      <Breather
        type="question"
        question="Pronto para transformar seu próximo projeto?"
        subtext="Aqui está como começar."
      />

      {/* How to Use - Practical guide */}
      <HowToUse />

      {/* EPILOGUE: The invitation */}
      <Epilogue />
    </main>
  )
}

export default App
