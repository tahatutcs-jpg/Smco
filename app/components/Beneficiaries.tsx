"use client";

const benes = [
  { icon: "👩‍👧", title: "Single Mothers", desc: "Women raising children alone, facing economic and social hardship." },
  { icon: "🕊️", title: "Widows", desc: "Women who have lost their husbands and need a new support system." },
  { icon: "🌱", title: "Teenage Mothers", desc: "Young mothers who need guidance, education, and emotional support." },
  { icon: "🤲", title: "Vulnerable Women", desc: "Women in precarious situations who need immediate intervention." },
  { icon: "🧒", title: "Orphaned Children", desc: "Children without parental support who need care and education." },
  { icon: "🏠", title: "Low-Income Families", desc: "Families struggling to meet basic needs and build stability." },
];

export default function Beneficiaries() {
  return (
    <section style={{ background: "var(--near-black)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-px" style={{ background: "rgba(247,214,224,0.4)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(247,214,224,0.6)" }}>
            Who We Serve
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2
            className="font-display font-light leading-[1.08]"
            style={{ fontSize: "clamp(38px, 4.5vw, 60px)", color: "#fff" }}
          >
            Our <em style={{ color: "var(--accent-pink)" }}>Beneficiaries</em>
          </h2>
          <p className="text-base leading-7 max-w-md" style={{ color: "rgba(255,255,255,0.45)" }}>
            We serve the most vulnerable women and children — those who need support the most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benes.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl p-7 text-center transition-all duration-200 cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(247,214,224,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(247,214,224,0.07)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,214,224,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,214,224,0.08)";
              }}
            >
              <span className="text-4xl block mb-4">{b.icon}</span>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#fff" }}>{b.title}</h4>
              <p className="text-sm leading-6" style={{ color: "rgba(255,255,255,0.45)" }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
