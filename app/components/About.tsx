"use client";
import Image from "next/image";

const values = [
  { icon: "💗", label: "Compassion" },
  { icon: "⚖️", label: "Integrity" },
  { icon: "💪", label: "Empowerment" },
  { icon: "🤝", label: "Equality" },
  { icon: "✅", label: "Accountability" },
  { icon: "🌍", label: "Community Service" },
  { icon: "🕊️", label: "Respect for Human Dignity" },
];

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
      <div className="grid lg:grid-cols-2 gap-20 items-start">

        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-px" style={{ background: "var(--deep-purple)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--deep-purple)" }}>
              About SMCO
            </span>
          </div>
          <h2
            className="font-display font-light leading-[1.08] mb-6"
            style={{ fontSize: "clamp(38px, 4.5vw, 60px)", color: "var(--near-black)" }}
          >
            A Sanctuary of<br />
            <em style={{ color: "var(--deep-purple)" }}>Hope & Strength</em>
          </h2>
          <p className="text-base leading-7 mb-10" style={{ color: "var(--muted)", maxWidth: "480px" }}>
            The Single Mother Charity Organisation (SMCO) is a non-profit dedicated to supporting,
            empowering, and improving the lives of single mothers and their children. We create
            opportunities for vulnerable women — helping them become financially independent,
            emotionally strong, and socially empowered.
          </p>

          {/* Vision / Mission */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              {
                tag: "Our Vision",
                text: "To build a society where every single mother and her children can live with dignity, stability, opportunity, and hope.",
              },
              {
                tag: "Our Mission",
                text: "To empower single mothers through education, vocational training, financial support, mentorship, and healthcare that promote self-reliance.",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="rounded-xl p-6"
                style={{
                  background: "var(--light-blush)",
                  borderLeft: "3px solid var(--deep-purple)",
                }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--deep-purple)" }}>
                  {c.tag}
                </p>
                <p className="text-sm leading-6" style={{ color: "var(--charcoal)" }}>{c.text}</p>
              </div>
            ))}
          </div>

          {/* Logo placement — brand identity anchor */}
          <div
            className="flex items-center gap-5 p-6 rounded-2xl"
            style={{ background: "var(--near-black)", border: "1px solid rgba(244,167,195,0.12)" }}
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/smco-logo.png"
                alt="SMCO Official Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div>
              <p
                className="text-xs italic font-light mb-0.5"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Cormorant Garamond, serif" }}
              >
                Single Mother's
              </p>
              <p className="text-base font-semibold text-white mb-1">Charity Organisation</p>
              <p className="text-xs italic" style={{ color: "var(--accent-pink)" }}>
                "Empowering Mothers, Transforming Futures."
              </p>
            </div>
          </div>
        </div>

        {/* Right — Photo + Values */}
        <div>
          {/* Real photo */}
          <div className="relative overflow-hidden rounded-2xl mb-8" style={{ height: "280px" }}>
            <img
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=85"
              alt="SMCO community — mothers and children"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(61,26,94,0.55) 0%, transparent 55%)" }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="text-white text-sm font-semibold">Kampala, Uganda</span>
              <span
                className="text-xs px-3 py-1 rounded-full font-semibold"
                style={{ background: "var(--accent-pink)", color: "#fff" }}
              >
                Est. 2025
              </span>
            </div>
          </div>

          <h3
            className="font-display mb-6"
            style={{ fontSize: "26px", color: "var(--near-black)" }}
          >
            Our Core Values
          </h3>
          <div className="flex flex-col gap-3">
            {values.map((v) => (
              <div
                key={v.label}
                className="flex items-center gap-4 px-5 py-4 rounded-xl cursor-default transition-all duration-200"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(192,68,106,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--deep-purple)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,68,106,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                }}
              >
                <span className="text-2xl">{v.icon}</span>
                <span className="text-sm font-medium" style={{ color: "var(--near-black)" }}>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
