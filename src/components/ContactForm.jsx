import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      console.log("Stakeholder inquiry", form);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-neutral-900/60 px-3 py-1 text-xs text-yellow-300">
              <Mail className="w-3.5 h-3.5" /> Contact
            </div>
            <h3 className="mt-4 text-2xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-neutral-300">Stakeholders, hospitals, and partners: request a demo, discuss integrations, or onboarding timelines.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <div className="flex items-center gap-2 text-yellow-300"><Phone className="w-4 h-4" /><span>Sales & Partnerships</span></div>
                <div className="mt-1 text-neutral-400">Mon–Fri, 9am–6pm</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <div className="flex items-center gap-2 text-yellow-300"><Mail className="w-4 h-4" /><span>support@wasper.tech</span></div>
                <div className="mt-1 text-neutral-400">24/7 priority support (Enterprise)</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 p-6">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-neutral-300 mb-1">Name</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Jane Doe" className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/40" />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-300 mb-1">Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="jane@hospital.org" className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/40" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-neutral-300 mb-1">Organization</label>
                  <input name="org" value={form.org} onChange={onChange} placeholder="City General Hospital" className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/40" />
                </div>
                <div>
                  <label className="block text-sm text-neutral-300 mb-1">Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="Tell us about your needs: departments, on-prem sync, integrations (NHIS, finance), go-live timeline..." className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/40" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">By submitting, you agree to be contacted about luxuryHMSPRO.</span>
                  <button type="submit" disabled={loading} className="inline-flex items-center rounded-md bg-gradient-to-r from-yellow-300 to-amber-500 text-neutral-900 font-medium px-4 py-2 disabled:opacity-60">
                    {loading ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="mx-auto w-14 h-14 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-300" />
                </div>
                <h4 className="mt-4 text-lg font-semibold">Thank you!</h4>
                <p className="mt-1 text-sm text-neutral-300">Your message has been received. Our team will reach out shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 inline-flex items-center rounded-md border border-yellow-500/40 text-yellow-300 px-4 py-2">Send another</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
