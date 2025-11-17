import { CheckCircle2 } from 'lucide-react'

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
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Why teams automate with us</h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">Outcome-focused builds that pay for themselves within weeks.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {items.map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-black/[0.06] bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
