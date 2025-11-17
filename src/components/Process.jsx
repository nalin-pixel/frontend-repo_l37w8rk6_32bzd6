import { motion } from 'framer-motion'

export default function Process() {
  const steps = [
    {
      title: 'Discovery',
      desc: 'We map your workflow, identify blockers, and define measurable outcomes.'
    },
    {
      title: 'Design',
      desc: 'We architect automations using the tools that best fit your stack and constraints.'
    },
    {
      title: 'Build',
      desc: 'We implement, test, and iterate quickly with tight feedback loops.'
    },
    {
      title: 'Launch & iterate',
      desc: 'We go live, monitor, and keep improving as your needs evolve.'
    },
  ]

  return (
    <section id="how" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">How we work</h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Clear process from idea to automation in production.</p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="text-4xl font-black text-white/10">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-semibold text-white mt-2">{s.title}</h3>
              <p className="text-slate-300 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
