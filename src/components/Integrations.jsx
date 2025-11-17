import { Slack, Database, Cloud, Bot, Workflow } from 'lucide-react'

const logos = [
  { Icon: Slack, name: 'Slack' },
  { Icon: Database, name: 'Airtable' },
  { Icon: Cloud, name: 'Google Workspace' },
  { Icon: Bot, name: 'OpenAI' },
  { Icon: Workflow, name: 'Zapier/Make/n8n' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Works with your tools</h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">We connect APIs, CRMs, spreadsheets, and AI models into seamless workflows.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
          {logos.map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-black/[0.06]">
              <Icon className="text-gray-700" />
              <span className="mt-2 text-sm text-gray-600">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
