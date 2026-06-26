"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Globe, MessageCircle, Send } from "lucide-react";

const subjects = ["General Enquiry","Donation & Funding","Volunteer Application","Partnership Proposal","Media & Press","Beneficiary Support","Other"];

const SMCO_EMAIL = "smco@mothers.com";
const WHATSAPP_NUMBER = "256744652458";

export default function Contact({ onToast }: { onToast: (msg: string) => void }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"General Enquiry", message:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({...f,[k]:e.target.value}));

  const submitEmail = () => {
    if (!form.name || !form.email) { onToast("Please fill in your name and email."); return; }
    const subject = encodeURIComponent(`[SMCO] ${form.subject} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${SMCO_EMAIL}?subject=${subject}&body=${body}`;
    onToast(`✉️ Opening your email client, ${form.name}! Your message is pre-filled.`);
    setForm({ name:"", email:"", phone:"", subject:"General Enquiry", message:"" });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello SMCO 👋\nMy name is ${form.name || "[Your Name]"}.\n\n${form.message || "I'd like to get in touch with your team."}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const contacts = [
    { icon: <MapPin size={18}/>, label: "Address", lines: ["Kampala, Uganda"] },
    { icon: <Phone size={18}/>, label: "Phone", lines: ["+256 744 652 458", "+971 58 616 5594"] },
    { icon: <Mail size={18}/>, label: "Email", lines: ["smco@mothers.com"] },
    { icon: <Globe size={18}/>, label: "Website", lines: ["www.smcomothers.com"] },
  ];

  return (
    <section id="contact" style={{ background: "#fff" }}>

      {/* Full-width photo banner — teacher + children, verified Unsplash ID */}
      <div className="relative overflow-hidden" style={{ height: "340px" }}>
        <img
          src="https://images.unsplash.com/photo-1632215861513-130b66fe97f4?w=1600&q=85&auto=format&fit=crop"
          alt="SMCO community — educator with children"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(30,14,48,0.3) 0%, rgba(30,14,48,0.78) 100%)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px" style={{ background: "rgba(247,214,224,0.5)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(247,214,224,0.8)" }}>Reach Out</span>
            <span className="w-7 h-px" style={{ background: "rgba(247,214,224,0.5)" }} />
          </div>
          <h2
            className="font-display font-light text-white leading-[1.08]"
            style={{ fontSize: "clamp(36px,5vw,64px)" }}
          >
            Contact <em style={{ color: "var(--accent-pink)" }}>SMCO</em>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            Questions, donations, media, partnerships — we're always here to listen.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left — contact info + WhatsApp */}
          <div>
            <h3 className="font-display text-3xl mb-3" style={{ color: "var(--near-black)" }}>We'd Love to Hear From You</h3>
            <p className="text-sm leading-6 mb-8" style={{ color: "var(--muted)" }}>
              Reach us by email, phone, or instantly via WhatsApp — whatever works best for you.
            </p>

            <div className="flex flex-col gap-4 mb-10">
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
                        {c.label === "Email"
                          ? <a href={`mailto:${l}`} style={{ color: "var(--deep-purple)", textDecoration:"none" }}>{l}</a>
                          : c.label === "Phone"
                          ? <a href={`tel:${l.replace(/\s/g,"")}`} style={{ color: "var(--deep-purple)", textDecoration:"none" }}>{l}</a>
                          : c.label === "Website"
                          ? <a href={`https://${l}`} target="_blank" style={{ color: "var(--deep-purple)", textDecoration:"none" }}>{l}</a>
                          : l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA card */}
            <div
              className="rounded-2xl p-6 flex items-center gap-5"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                boxShadow: "0 8px 32px rgba(37,211,102,0.3)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <MessageCircle size={28} color="#fff" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-base mb-0.5">Chat on WhatsApp</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>Get a reply within hours — fastest way to reach us.</p>
              </div>
              <button
                onClick={openWhatsApp}
                className="flex-shrink-0 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
                style={{ background: "#fff", color: "#128C7E", cursor: "pointer" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Message Us
              </button>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-3xl p-10 bg-white" style={{ boxShadow: "0 8px 48px rgba(192,68,106,0.1)", border: "1px solid rgba(192,68,106,0.08)" }}>
            <h3 className="font-display text-2xl mb-1" style={{ color: "var(--near-black)" }}>Send a Message</h3>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>Your message goes directly to our inbox or WhatsApp.</p>

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
            <div className="mb-6"><label className="smco-label">Message</label><textarea className="smco-input" rows={4} placeholder="How can we help you?" value={form.message} onChange={set("message")} /></div>

            <div className="flex flex-col gap-3">
              <button
                onClick={submitEmail}
                className="w-full flex items-center justify-center gap-2 text-white text-sm font-semibold py-4 rounded-xl transition-all duration-200"
                style={{ background: "var(--deep-purple)", cursor: "pointer" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#5a2d82"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="var(--deep-purple)"; }}
              >
                <Send size={15} /> Send via Email
              </button>
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-4 rounded-xl transition-all duration-200"
                style={{ background: "#25D366", color: "#fff", cursor: "pointer" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#1ebe5d"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#25D366"; }}
              >
                <MessageCircle size={15} /> Send via WhatsApp
              </button>
            </div>
            <p className="text-center text-xs mt-4" style={{ color: "var(--muted)" }}>
              Email opens your mail client · WhatsApp connects you instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
