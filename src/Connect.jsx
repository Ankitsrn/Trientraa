import React, { useState } from 'react'

export default function Connect() {
  const [form, setForm] = useState({ service: '', email: '', name: '', phone: '', website: '', message: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function validate() {
    if (!form.service) return 'Please select a service.'
    if (!form.email) return 'Please enter your email.'
    if (!form.name) return 'Please enter your name.'
    if (!form.message) return 'Please enter a message.'
    return ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess(false)
    const v = validate()
    if (v) { setError(v); return }

    setSubmitting(true)
    try {
      // Placeholder: replace with real API endpoint if available
      // await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      await new Promise(r => setTimeout(r, 600))
      setSuccess(true)
      setForm({ service: '', email: '', name: '', phone: '', website: '', message: '' })
    } catch (err) {
      setError('Submission failed. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-start">
      <div className="max-w-3xl mx-auto w-full px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900">Connect with Trientraa</h2>
          <p className="text-sm text-gray-600 mt-1">Tell us about your requirement and we’ll get back to you. Fields marked * are required.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900">Select Services*</label>
              <select name="service" value={form.service} onChange={handleChange} className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-2 text-gray-700">
                <option value="">-- Choose a service --</option>
                <option value="affiliate">Affiliate Marketing</option>
                <option value="influencer">Influencer Marketing</option>
                <option value="loyalty">Loyalty Programs</option>
                <option value="mobile">Mobile OEM Advertising</option>
                <option value="other">Other</option>
              </select>
            </div>  

            <div>
              <label className="block text-sm font-medium text-gray-700">Email*</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="you@company.com" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name*</label>
                <input name="name" value={form.name} onChange={handleChange} type="text" className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Website</label>
              <input name="website" value={form.website} onChange={handleChange} type="url" className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="https://yourwebsite.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message*</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-2 text-gray-700" placeholder="Tell us more about your project" rows={6}></textarea>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}
            {success && <div className="text-sm text-green-600">Thanks — we received your message and will contact you soon.</div>}

            <div className="flex items-center gap-3">
              <button type="submit" disabled={submitting} className="inline-flex items-center px-6 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold">
                {submitting ? 'Sending...' : 'Send'}
              </button>
              <button type="button" onClick={() => { setForm({ service: '', email: '', name: '', phone: '', website: '', message: '' }); setError(''); setSuccess(false) }} className="px-4 py-2 rounded-md border">Reset</button>
              <div className="text-sm text-gray-500">We respect your privacy.</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
