"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const subjects = ["General Enquiry","Donation & Funding","Volunteer Application","Partnership Proposal","Media & Press","Beneficiary Support","Other"];

export default function Contact({ onToast }: { onToast: (msg: string) => void }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"General Enquiry", message:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({...f,[k]:e.target.value}));

  const submit = () => {
    if (!form.name || !form.email) { onToast("Please fill in your name and email."); return; }
    onToast(`✉️ Message received, ${form.name}! We'll get back to you shortly.`);
    setForm({ name:"", email:"", phone:"", subject:"General Enquiry", message:"" });
  };

  const contacts = [
    { icon: <MapPin size={18}/>, label: "Address", lines: ["Kampala, Uganda"] },
    { icon: <Phone size={18}/>, label: "Phone", lines: ["+256 744 652 458", "+971 58 616 5594"] },
    { icon: <Mail size={18}/>, label: "Email", lines: ["smco@mothers.com"] },
    { icon: <Globe size={18}/>, label: "Website", lines: ["www.smcomothers.com"] },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-7 h-px" style={{ background: "var(--deep-purple)" }} />
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--deep-purple)" }}>Reach Out</span>
      </div>
      <h2 className="font-display font-light leading-[1.08] mb-14" style={{ fontSize: "clamp(38px,4.5vw,60px)", color: "var(--near-black)" }}>
        Contact <em style={{ color: "var(--deep-purple)" }}>SMCO</em>
      </h2>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <div>
          <h3 className="font-display text-3xl mb-8" style={{ color: "var(--near-black)" }}>We'd Love to Hear From You</h3>
          <div className="flex flex-col gap-4">
            {contacts.map(c => (
              <div key={c.label} className="flex gap-4 items-start p-5 rounded-xl" style={{ background: "var(--light-blush)" }}>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: "var(--deep-purple)" }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>{c.label}</p>
                  {c.lines.map(l => (
                    <p key={l} className="text-sm font-medium" style={{ color: "var(--near-black)" }}>
                      {c.label === "Email" ? <a href={`mailto:${l}`} style={{ color: "var(--deep-purple)", textDecoration:"none" }}>{l}</a>
                      : c.label === "Phone" ? <a href={`tel:${l.replace(/\s/g,"")}`} style={{ color: "var(--deep-purple)", textDecoration:"none" }}>{l}</a>
                      : c.label === "Website" ? <a href={`https://${l}`} target="_blank" style={{ color: "var(--deep-purple)", textDecoration:"none" }}>{l}</a>
                      : l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl p-10 bg-white" style={{ boxShadow: "0 8px 40px rgba(192,68,106,0.08)", border: "1px solid rgba(192,68,106,0.08)" }}>
          <h3 className="font-display text-2xl mb-2" style={{ color: "var(--near-black)" }}>Send a Message</h3>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>Questions, feedback, media enquiries — we're here.</p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div><label className="smco-label">Your Name</label><input className="smco-input" placeholder="Full name" value={form.name} onChange={set("name")} /></div>
            <div><label className="smco-label">Email</label><input className="smco-input" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} /></div>
          </div>
          <div className="mb-3"><label className="smco-label">Phone (optional)</label><input className="smco-input" type="tel" placeholder="+256 ..." value={form.phone} onChange={set("phone")} /></div>
          <div className="mb-3">
            <label className="smco-label">Subject</label>
            <select className="smco-input" value={form.subject} onChange={set("subject")}>
              {subjects.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="mb-6"><label className="smco-label">Message</label><textarea className="smco-input" rows={5} placeholder="How can we help you?" value={form.message} onChange={set("message")} /></div>
          <button
            onClick={submit}
            className="w-full text-white text-sm font-semibold py-4 rounded-xl transition-all duration-200"
            style={{ background: "var(--deep-purple)" }}
            onMouseEnter={e => (e.currentTarget.style.background="#5a2d82")}
            onMouseLeave={e => (e.currentTarget.style.background="var(--deep-purple)")}
          >Send Message →</button>
        </div>
      </div>
    </section>
  );
}
