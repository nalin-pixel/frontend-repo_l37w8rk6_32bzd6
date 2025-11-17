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
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Simple, transparent pricing</h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">Start small, scale as you see impact. Most projects complete within 2-4 weeks.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {tiers.map((t) => (
            <div key={t.name} className={`p-6 rounded-xl border ${t.highlight ? 'border-blue-500 ring-2 ring-blue-100' : 'border-black/[0.06]'} bg-white`}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">{t.price}</div>
                  <div className="text-sm text-gray-500">{t.period}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="text-gray-600">• {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-md ${t.highlight ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
