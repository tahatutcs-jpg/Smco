"use client";

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
          <div className="grid sm:grid-cols-2 gap-5">
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
        </div>

        {/* Right — Values */}
        <div>
          <h3
            className="font-display mb-8"
            style={{ fontSize: "28px", color: "var(--near-black)" }}
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
