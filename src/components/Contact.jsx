import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus('Thanks! We will get back to you shortly.')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Tell us about your workflow</h2>
        <p className="text-slate-300 text-center mt-3">We’ll respond within 24 hours.</p>

        <form onSubmit={submit} className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-200">Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md border border-white/10 bg-white/10 text-white placeholder:text-slate-300/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300/30" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-slate-200">Email</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-md border border-white/10 bg-white/10 text-white placeholder:text-slate-300/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300/30" placeholder="jane@company.com" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-200">Company (optional)</label>
            <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-1 w-full rounded-md border border-white/10 bg-white/10 text-white placeholder:text-slate-300/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300/30" placeholder="Acme Inc." />
          </div>
          <div>
            <label className="text-sm text-slate-200">What would you like to automate?</label>
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-md border border-white/10 bg-white/10 text-white placeholder:text-slate-300/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300/30" placeholder="Describe your current process and where it gets stuck." />
          </div>
          <button type="submit" className="w-full bg-gradient-to-tr from-sky-500 to-indigo-500 text-white py-3 rounded-md hover:opacity-95 shadow-lg shadow-indigo-500/20">Send</button>
          {status && <p className="text-center text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}
