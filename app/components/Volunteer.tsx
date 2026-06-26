"use client";
import { useState } from "react";

const roles = [
  { icon: "👩‍⚕️", label: "Healthcare & Medical Support" },
  { icon: "📖", label: "Teaching & Tutoring" },
  { icon: "💼", label: "Business Mentorship" },
  { icon: "💻", label: "Digital & Tech Skills Training" },
  { icon: "📣", label: "Fundraising & Community Outreach" },
  { icon: "🎨", label: "Creative & Media Support" },
];

const areas = ["Healthcare & Medical","Education & Teaching","Business & Entrepreneurship","Digital & Technology","Counseling & Psychology","Fundraising & Events","Media & Communications","Other"];
const avails = ["Weekdays","Weekends","Flexible / Remote","Specific dates only"];

export default function Volunteer({ onToast }: { onToast: (msg: string) => void }) {
  const [form, setForm] = useState({ first:"", last:"", email:"", phone:"", area:"", avail:"Weekdays", bio:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({...f,[k]:e.target.value}));

  const submit = () => {
    if (!form.first || !form.email) { onToast("Please fill in your name and email."); return; }
    onToast(`🙌 Welcome aboard, ${form.first}! We'll contact you at ${form.email} soon.`);
    setForm({ first:"", last:"", email:"", phone:"", area:"", avail:"Weekdays", bio:"" });
  };

  return (
    <section id="volunteer" className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-7 h-px" style={{ background: "var(--deep-purple)" }} />
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--deep-purple)" }}>Get Involved</span>
      </div>
      <h2 className="font-display font-light leading-[1.08] mb-14" style={{ fontSize: "clamp(38px,4.5vw,60px)", color: "var(--near-black)" }}>
        Volunteer <em style={{ color: "var(--deep-purple)" }}>With Us</em>
      </h2>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <div>
          <h3 className="font-display text-3xl mb-4" style={{ color: "var(--near-black)" }}>Your Skills Can Transform Lives</h3>
          <p className="text-base leading-7 mb-8" style={{ color: "var(--muted)" }}>
            Whether you're a healthcare professional, educator, entrepreneur, or community builder —
            there's a place for you in our work. Volunteers are the backbone of everything SMCO does.
          </p>
          <div className="flex flex-col gap-3">
            {roles.map(r => (
              <div key={r.label} className="flex items-center gap-4 px-5 py-3.5 rounded-xl text-sm" style={{ background: "var(--light-blush)", color: "var(--charcoal)" }}>
                <span className="text-xl">{r.icon}</span>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl p-10" style={{ background: "var(--light-blush)" }}>
          <h3 className="font-display text-2xl mb-6" style={{ color: "var(--near-black)" }}>Apply to Volunteer</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div><label className="smco-label">First Name</label><input className="smco-input" placeholder="Your name" value={form.first} onChange={set("first")} /></div>
            <div><label className="smco-label">Last Name</label><input className="smco-input" placeholder="Surname" value={form.last} onChange={set("last")} /></div>
          </div>
          <div className="mb-3"><label className="smco-label">Email Address</label><input className="smco-input" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} /></div>
          <div className="mb-3"><label className="smco-label">Phone Number</label><input className="smco-input" type="tel" placeholder="+256 ..." value={form.phone} onChange={set("phone")} /></div>
          <div className="mb-3">
            <label className="smco-label">Area of Expertise</label>
            <select className="smco-input" value={form.area} onChange={set("area")}>
              <option value="">— Select —</option>
              {areas.map(a => <option key={a}>{a}</option>)}
            </select>
          </div>
          <div className="mb-3">
            <label className="smco-label">Availability</label>
            <select className="smco-input" value={form.avail} onChange={set("avail")}>
              {avails.map(a => <option key={a}>{a}</option>)}
            </select>
          </div>
          <div className="mb-6"><label className="smco-label">Tell us about yourself</label><textarea className="smco-input" rows={3} placeholder="Brief background and why you'd like to volunteer…" value={form.bio} onChange={set("bio")} /></div>
          <button
            onClick={submit}
            className="w-full text-white text-sm font-semibold py-4 rounded-xl transition-all duration-200"
            style={{ background: "var(--deep-purple)" }}
            onMouseEnter={e => (e.currentTarget.style.background="#5a2d82")}
            onMouseLeave={e => (e.currentTarget.style.background="var(--deep-purple)")}
          >Submit Application →</button>
        </div>
      </div>
    </section>
  );
}
