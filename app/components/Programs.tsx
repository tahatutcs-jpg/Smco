"use client";

const womenSubPrograms = [
  {
    title: "Tailoring & Fashion Training",
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85&auto=format&fit=crop",
    photoAlt: "Woman sewing at machine",
  },
  {
    title: "Hairdressing & Beauty Courses",
    photo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=85&auto=format&fit=crop",
    photoAlt: "Hairdressing salon training",
  },
  {
    title: "Business & Entrepreneurship Workshops",
    photo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=85&auto=format&fit=crop",
    photoAlt: "Women in business workshop",
  },
  {
    title: "Digital Skills Training",
    photo: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&q=85&auto=format&fit=crop",
    photoAlt: "Woman learning on laptop",
  },
  {
    title: "Women's Empowerment Gatherings",
    photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=85&auto=format&fit=crop",
    photoAlt: "Women gathering and supporting each other",
  },
];

const programs = [
  {
    icon: "📚",
    title: "Child Support Program",
    desc: "Investing in children's futures so they can break cycles of poverty.",
    photo: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=85&auto=format&fit=crop",
    photoAlt: "Children learning together",
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
    photo: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=700&q=85&auto=format&fit=crop",
    photoAlt: "Healthcare and wellness support",
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

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-px" style={{ background: "var(--deep-purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--deep-purple)" }}>What We Do</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2 className="font-display font-light leading-[1.08]" style={{ fontSize: "clamp(38px, 4.5vw, 60px)", color: "var(--near-black)" }}>
            Programs &<br /><em style={{ color: "var(--deep-purple)" }}>Activities</em>
          </h2>
          <p className="text-base leading-7 max-w-md" style={{ color: "var(--muted)" }}>
            Our programs create lasting change — not temporary relief. Every initiative targets root causes and builds genuine resilience.
          </p>
        </div>

        {/* ── Women Empowerment — full width feature block ── */}
        <div
          className="rounded-3xl overflow-hidden mb-10"
          style={{ background: "#fff", border: "1px solid rgba(192,68,106,0.08)", boxShadow: "0 8px 40px rgba(192,68,106,0.07)" }}
        >
          {/* Block header */}
          <div
            className="flex items-center gap-4 px-8 py-6"
            style={{ borderBottom: "1px solid rgba(192,68,106,0.08)", background: "linear-gradient(135deg, #3d1a5e 0%, #5a2d82 100%)" }}
          >
            <span className="text-3xl">👗</span>
            <div>
              <h3 className="font-display font-semibold text-white" style={{ fontSize: "24px" }}>Women Empowerment Program</h3>
              <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                Practical skills that build income and independence for single mothers.
              </p>
            </div>
          </div>

          {/* Sub-program image grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {womenSubPrograms.map((sp, i) => (
              <div
                key={sp.title}
                className="relative overflow-hidden group"
                style={{
                  height: "clamp(160px, 20vw, 220px)",
                  borderRight: i < womenSubPrograms.length - 1 ? "1px solid rgba(192,68,106,0.08)" : "none",
                  cursor: "default",
                }}
              >
                <img
                  src={sp.photo}
                  alt={sp.photoAlt}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.5s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                />
                {/* Always-on gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(30,14,48,0.75) 0%, transparent 55%)", pointerEvents: "none" }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: "rgba(61,26,94,0.5)",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                    pointerEvents: "none",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  <span
                    className="text-white text-xs font-semibold tracking-wider text-center px-3"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                  >
                    {sp.title}
                  </span>
                </div>
                {/* Caption */}
                <p
                  className="absolute bottom-3 left-3 right-3 text-white font-semibold text-center leading-tight"
                  style={{ fontSize: "11px", textShadow: "0 1px 4px rgba(0,0,0,0.7)", pointerEvents: "none" }}
                >
                  {sp.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Child Support + Health & Wellness cards ── */}
        <div className="grid md:grid-cols-2 gap-7">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-200 cursor-default"
              style={{ background: "#fff", border: "1px solid rgba(192,68,106,0.08)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(192,68,106,0.14)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <img
                  src={p.photo}
                  alt={p.photoAlt}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.5s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(30,14,48,0.45) 0%, transparent 55%)", pointerEvents: "none" }}
                />
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                >
                  {p.icon}
                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col gap-4 flex-1">
                <h3 className="font-display font-semibold" style={{ fontSize: "22px", color: "var(--near-black)" }}>{p.title}</h3>
                <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>{p.desc}</p>
                <ul className="flex flex-col gap-2 mt-1">
                  {p.items.map(item => (
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
