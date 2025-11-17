import { useState } from 'react'
import { Menu, X, Rocket, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Benefits', href: '#benefits' },
    { label: 'How it works', href: '#how' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-white">Automate Now</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-tr from-sky-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:opacity-95 shadow-lg shadow-indigo-500/20">
              <Mail size={16} /> Contact
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-200">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block py-2 font-medium text-white">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
