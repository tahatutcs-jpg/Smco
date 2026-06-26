"use client";
import { useState } from "react";
import { Lock, Heart } from "lucide-react";

const amounts = ["$10", "$25", "$50", "$100", "$250", "Other"];
const frequencies = ["One-time gift", "Monthly donation", "Quarterly donation", "Annual donation"];

export default function Donate({ onToast }: { onToast: (msg: string) => void }) {
  const [selected, setSelected] = useState("$25");
  const [custom, setCustom] = useState("");
  const [form, setForm] = useState({ first: "", last: "", email: "", freq: "One-time gift", dedicate: "", message: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (!form.first || !form.email) { onToast("Please fill in your name and email."); return; }
    const amt = selected === "Other" ? `$${custom || "0"}` : selected;
    onToast(`💗 Thank you, ${form.first}! Your ${amt} donation makes a real difference.`);
    setForm({ first: "", last: "", email: "", freq: "One-time gift", dedicate: "", message: "" });
    setCustom("");
    setSelected("$25");
  };

  return (
    <section id="donate" style={{ background: "linear-gradient(135deg, var(--deep-purple) 0%, #8b2347 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-px" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white opacity-70">Support Us</span>
            </div>
            <h2
              className="font-display font-light leading-[1.08] text-white mb-6"
              style={{ fontSize: "clamp(38px, 4.5vw, 60px)" }}
            >
              Every Gift<br />
              <em className="opacity-80">Changes</em> a Life
            </h2>
            <p className="text-base leading-7 mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              Your donation directly funds our programs — from school fees for a child,
              to training equipment for a mother learning a new skill.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Fund vocational training for single mothers",
                "Pay school fees for vulnerable children",
                "Support medical camps and healthcare access",
                "Provide counseling and mental health services",
                "Run women's empowerment gatherings",
              ].map((r) => (
                <li key={r} className="flex gap-3 items-start text-sm" style={{ color: "rgba(255,255,255,0.82)" }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  >✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Donate form */}
          <div className="bg-white rounded-3xl p-10" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.25)" }}>
            <h3 className="font-display text-2xl mb-1" style={{ color: "var(--near-black)" }}>Make a Donation</h3>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>Choose an amount or enter your own</p>

            {/* Amount grid */}
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => setSelected(a)}
                  className="py-3 rounded-lg text-base font-semibold transition-all duration-150"
                  style={{
                    border: `2px solid ${selected === a ? "var(--deep-purple)" : "rgba(192,68,106,0.18)"}`,
                    background: selected === a ? "var(--light-blush)" : "#fff",
                    color: selected === a ? "var(--deep-purple)" : "var(--charcoal)",
                    cursor: "pointer",
                  }}
                >
                  {a}
                </button>
              ))}
            </div>

            {selected === "Other" && (
              <div className="mb-4">
                <label className="smco-label">Custom Amount (USD)</label>
                <input className="smco-input" type="number" placeholder="Enter amount" value={custom} onChange={(e) => setCustom(e.target.value)} />
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="smco-label">First Name</label>
                <input className="smco-input" placeholder="Fatima" value={form.first} onChange={set("first")} />
              </div>
              <div>
                <label className="smco-label">Last Name</label>
                <input className="smco-input" placeholder="Nakato" value={form.last} onChange={set("last")} />
              </div>
            </div>
            <div className="mb-3">
              <label className="smco-label">Email Address</label>
              <input className="smco-input" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} />
            </div>
            <div className="mb-3">
              <label className="smco-label">Donation Frequency</label>
              <select className="smco-input" value={form.freq} onChange={set("freq")}>
                {frequencies.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label className="smco-label">Dedicate this donation (optional)</label>
              <input className="smco-input" placeholder="In honor of…" value={form.dedicate} onChange={set("dedicate")} />
            </div>
            <div className="mb-5">
              <label className="smco-label">Message (optional)</label>
              <textarea className="smco-input" rows={2} placeholder="A note to SMCO…" value={form.message} onChange={set("message")} />
            </div>
            <button
              onClick={submit}
              className="w-full flex items-center justify-center gap-2 text-white text-sm font-semibold py-4 rounded-xl transition-all duration-200"
              style={{ background: "var(--deep-purple)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#5a2d82")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--deep-purple)")}
            >
              <Heart size={15} /> Complete Donation
            </button>
            <p className="text-center text-xs mt-3 flex items-center justify-center gap-1" style={{ color: "var(--muted)" }}>
              <Lock size={11} /> Secure &amp; encrypted · 100% goes to our programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
