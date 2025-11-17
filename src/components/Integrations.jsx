import { Slack, Database, Cloud, Bot, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'

const logos = [
  { Icon: Slack, name: 'Slack' },
  { Icon: Database, name: 'Airtable' },
  { Icon: Cloud, name: 'Google Workspace' },
  { Icon: Bot, name: 'OpenAI' },
  { Icon: Workflow, name: 'Zapier/Make/n8n' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Works with your tools</h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">We connect APIs, CRMs, spreadsheets, and AI models into seamless workflows.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
          {logos.map(({ Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <Icon className="text-white/90" />
              <span className="mt-2 text-sm text-slate-300">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
