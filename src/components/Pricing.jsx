import { motion } from 'framer-motion'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$1,500',
      period: 'per project',
      features: ['Workflow audit', '1 automation', 'Basic integrations', 'Email support'],
    },
    {
      name: 'Growth',
      price: '$3,500',
      period: 'per project',
      features: ['System design', '3-5 automations', 'Advanced integrations', 'Priority support'],
      highlight: true,
    },
    {
      name: 'Partner',
      price: 'Custom',
      period: 'retainer',
      features: ['Ongoing iteration', 'Team training', 'SLAs', 'Dedicated Slack'],
    },
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Simple, transparent pricing</h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Start small, scale as you see impact. Most projects complete within 2-4 weeks.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`p-6 rounded-2xl border ${t.highlight ? 'border-sky-400/60 ring-2 ring-sky-400/20' : 'border-white/10'} bg-white/5 backdrop-blur-xl`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-white">{t.name}</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">{t.price}</div>
                  <div className="text-sm text-slate-300">{t.period}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="text-slate-300">• {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-md ${t.highlight ? 'bg-gradient-to-tr from-sky-500 to-indigo-500 text-white hover:opacity-95' : 'bg-white/10 text-white hover:bg-white/15'}`}>
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
