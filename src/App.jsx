import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Process />
        <Integrations />
        <Pricing />
        <Contact />
      </main>
      <footer className="py-10 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Automate Now. All rights reserved.</p>
          <a href="/test" className="text-sm text-gray-500 hover:text-gray-700">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
