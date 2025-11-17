import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
            >
              Automate busywork. Scale your impact.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-slate-300/90 max-w-xl"
            >
              We build custom automations and AI agents that save time, cut costs, and remove manual steps across your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-tr from-sky-500 to-indigo-500 text-white font-medium hover:opacity-95 shadow-lg shadow-indigo-500/20">
                Get a free audit
              </a>
              <a href="#benefits" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/10 text-slate-200 hover:bg-white/5">
                See what's possible
              </a>
            </motion.div>
            <p className="mt-4 text-sm text-slate-400">Typical engagement delivers 20-200 hours saved per month.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-[0_8px_40px_rgba(2,6,23,0.4)]">
              <div className="grid grid-cols-3 gap-3 h-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-xl bg-white/10 border border-white/10" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-400 text-center">Integrates with your stack: HubSpot, Airtable, Notion, Google, Slack, and more.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
