"use client";

const programs = [
  {
    icon: "👗",
    title: "Women Empowerment",
    desc: "Practical skills that build income and independence for single mothers.",
    items: [
      "Tailoring and fashion training",
      "Hairdressing and beauty courses",
      "Business and entrepreneurship workshops",
      "Digital skills training",
      "Women's Empowerment Gatherings",
    ],
  },
  {
    icon: "📚",
    title: "Child Support Program",
    desc: "Investing in children's futures so they can break cycles of poverty.",
    items: [
      "School fees assistance",
      "Distribution of scholastic materials",
      "Child nutrition support",
      "Mentorship programs for children",
    ],
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    desc: "Ensuring mothers and children have access to essential healthcare.",
    items: [
      "Medical camps",
      "Mental health counseling",
      "Reproductive health awareness",
      "Nutrition education",
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs" style={{ background: "var(--light-blush)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-px" style={{ background: "var(--deep-purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--deep-purple)" }}>
            What We Do
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2
            className="font-display font-light leading-[1.08]"
            style={{ fontSize: "clamp(38px, 4.5vw, 60px)", color: "var(--near-black)" }}
          >
            Programs &<br />
            <em style={{ color: "var(--deep-purple)" }}>Activities</em>
          </h2>
          <p className="text-base leading-7 max-w-md" style={{ color: "var(--muted)" }}>
            Our programs create lasting change — not temporary relief. Every initiative targets
            root causes and builds genuine resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-9 flex flex-col gap-4 transition-all duration-200 cursor-default"
              style={{ background: "#fff", border: "1px solid rgba(192,68,106,0.08)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(192,68,106,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span className="text-4xl">{p.icon}</span>
              <h3
                className="font-display font-semibold"
                style={{ fontSize: "22px", color: "var(--near-black)" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>{p.desc}</p>
              <ul className="flex flex-col gap-2 mt-1">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--charcoal)" }}>
                    <span className="mt-0.5 flex-shrink-0" style={{ color: "var(--deep-purple)" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
