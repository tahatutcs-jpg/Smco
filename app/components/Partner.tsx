"use client";
import { useState } from "react";

const partnerTypes = [
  { icon: "🏛️", title: "Government Agencies", desc: "Policy collaboration and resource mobilisation." },
  { icon: "🌐", title: "NGOs & Charities", desc: "Joint programs and shared beneficiary networks." },
  { icon: "🏢", title: "Corporate Companies", desc: "CSR partnerships and sponsorship opportunities." },
  { icon: "👥", title: "Community Leaders", desc: "Grassroots outreach and beneficiary identification." },
  { icon: "🌍", title: "International Organisations", desc: "Development funding and technical assistance." },
  { icon: "⛪", title: "Religious Institutions", desc: "Faith-community networks for resource sharing." },
];

const types = ["Government Agency","NGO / Charity","Corporate / CSR","Community Leader","International Organisation","Religious Institution","Other"];

export default function Partner({ onToast }: { onToast: (msg: string) => void }) {
  const [form, setForm] = useState({ org:"", contact:"", email:"", phone:"", type:"", country:"", desc:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({...f,[k]:e.target.value}));

  const submit = () => {
    if (!form.org || !form.email) { onToast("Please fill in your organisation name and email."); return; }
    onToast(`🤝 Thank you! We'll review ${form.org}'s enquiry within 48 hours.`);
    setForm({ org:"", contact:"", email:"", phone:"", type:"", country:"", desc:"" });
  };

  return (
    <section id="partner" style={{ background: "var(--light-blush)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-px" style={{ background: "var(--deep-purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--deep-purple)" }}>Collaborate</span>
        </div>
        <h2 className="font-display font-light leading-[1.08] mb-4" style={{ fontSize: "clamp(38px,4.5vw,60px)", color: "var(--near-black)" }}>
          Partnership <em style={{ color: "var(--deep-purple)" }}>Opportunities</em>
        </h2>
        <p className="text-base leading-7 mb-14 max-w-xl" style={{ color: "var(--muted)" }}>
          We welcome collaborations with organisations that share our commitment to uplifting women and children.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {partnerTypes.map(p => (
            <div key={p.title} className="rounded-2xl p-7 text-center" style={{ background: "#fff", border: "1px solid rgba(192,68,106,0.08)" }}>
              <span className="text-3xl block mb-3">{p.icon}</span>
              <h4 className="text-sm font-semibold mb-2" style={{ color: "var(--near-black)" }}>{p.title}</h4>
              <p className="text-xs leading-5" style={{ color: "var(--muted)" }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Partnership form */}
        <div className="max-w-2xl mx-auto rounded-3xl p-10 bg-white" style={{ boxShadow: "0 8px 40px rgba(192,68,106,0.08)", border: "1px solid rgba(192,68,106,0.08)" }}>
          <h3 className="font-display text-3xl text-center mb-2" style={{ color: "var(--near-black)" }}>Become a Partner</h3>
          <p className="text-sm text-center mb-8" style={{ color: "var(--muted)" }}>Our team will get back to you within 48 hours.</p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div><label className="smco-label">Organisation Name</label><input className="smco-input" placeholder="Your organisation" value={form.org} onChange={set("org")} /></div>
            <div><label className="smco-label">Contact Person</label><input className="smco-input" placeholder="Full name" value={form.contact} onChange={set("contact")} /></div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div><label className="smco-label">Email Address</label><input className="smco-input" type="email" placeholder="contact@org.com" value={form.email} onChange={set("email")} /></div>
            <div><label className="smco-label">Phone Number</label><input className="smco-input" type="tel" placeholder="+256 ..." value={form.phone} onChange={set("phone")} /></div>
          </div>
          <div className="mb-3">
            <label className="smco-label">Partnership Type</label>
            <select className="smco-input" value={form.type} onChange={set("type")}>
              <option value="">— Select —</option>
              {types.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="mb-3"><label className="smco-label">Country / Region</label><input className="smco-input" placeholder="Uganda, Kenya, UAE…" value={form.country} onChange={set("country")} /></div>
          <div className="mb-6"><label className="smco-label">Proposed Collaboration</label><textarea className="smco-input" rows={4} placeholder="Describe how you'd like to work with SMCO…" value={form.desc} onChange={set("desc")} /></div>
          <button
            onClick={submit}
            className="w-full text-white text-sm font-semibold py-4 rounded-xl transition-all duration-200"
            style={{ background: "var(--deep-purple)" }}
            onMouseEnter={e => (e.currentTarget.style.background="#5a2d82")}
            onMouseLeave={e => (e.currentTarget.style.background="var(--deep-purple)")}
          >Send Partnership Enquiry →</button>
        </div>
      </div>
    </section>
  );
}
