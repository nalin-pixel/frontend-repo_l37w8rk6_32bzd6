import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Process />
        <Integrations />
        <Pricing />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Automate Now. All rights reserved.</p>
          <a href="/test" className="text-sm text-slate-400 hover:text-white/90">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
