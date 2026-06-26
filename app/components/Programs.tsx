"use client";

const programs = [
  {
    icon: "👗",
    title: "Women Empowerment",
    desc: "Practical skills that build income and independence for single mothers.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=85",
    photoAlt: "Women in training workshop",
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
    photo: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=85",
    photoAlt: "Children learning in class",
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
    photo: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=85",
    photoAlt: "Healthcare and wellness",
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
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-200 cursor-default"
              style={{ background: "#fff", border: "1px solid rgba(192,68,106,0.08)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(192,68,106,0.14)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Photo header */}
              <div className="relative overflow-hidden" style={{ height: "190px" }}>
                <img
                  src={p.photo}
                  alt={p.photoAlt}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ display: "block" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(30,14,48,0.45) 0%, transparent 55%)" }}
                />
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "rgba(255,255,255,0.9)" }}
                >
                  {p.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-4 flex-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
