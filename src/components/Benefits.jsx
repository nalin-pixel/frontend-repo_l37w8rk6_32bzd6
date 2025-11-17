import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Save time at scale',
    desc: 'Automate repetitive work across teams — onboarding, reporting, data entry, lead routing, and more.'
  },
  {
    title: 'Reduce errors',
    desc: 'Remove manual steps where mistakes happen. Systems update themselves consistently.'
  },
  {
    title: 'Ship faster',
    desc: 'Launch internal tools and workflows in days, not months, using best-in-class platforms.'
  },
  {
    title: 'Own your stack',
    desc: 'We build on reliable, flexible tools you can maintain: Airtable, Make, n8n, Supabase, FastAPI, and more.'
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Why teams automate with us</h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Outcome-focused builds that pay for themselves within weeks.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-sky-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-300 mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
