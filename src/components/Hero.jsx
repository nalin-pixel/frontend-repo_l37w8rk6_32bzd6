import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Automate busywork. Scale your impact.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              We build custom automations and AI agents that save time, cut costs, and remove manual steps across your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800">
                Get a free audit
              </a>
              <a href="#benefits" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50">
                See what's possible
              </a>
            </motion.div>
            <p className="mt-4 text-sm text-gray-500">Typical engagement delivers 20-200 hours saved per month.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl bg-gradient-to-tr from-blue-600/10 to-indigo-500/10 border border-black/[0.06] p-6">
              <div className="grid grid-cols-3 gap-3 h-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-white/70 border border-black/[0.06]" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 text-center">Integrates with your stack: HubSpot, Airtable, Notion, Google, Slack, and more.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
