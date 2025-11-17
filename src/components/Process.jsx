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
    <section id="how" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">How we work</h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">Clear process from idea to automation in production.</p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {steps.map((s, i) => (
            <div key={s.title} className="p-6 rounded-xl border border-black/[0.06] bg-white">
              <div className="text-4xl font-black text-gray-200">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-semibold text-gray-900 mt-2">{s.title}</h3>
              <p className="text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
