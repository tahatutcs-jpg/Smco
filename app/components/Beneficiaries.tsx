"use client";

const benes = [
  { icon: "👩‍👧", title: "Single Mothers", desc: "Women raising children alone, facing economic and social hardship." },
  { icon: "🕊️", title: "Widows", desc: "Women who have lost their husbands and need a new support system." },
  { icon: "🌱", title: "Teenage Mothers", desc: "Young mothers who need guidance, education, and emotional support." },
  { icon: "🤲", title: "Vulnerable Women", desc: "Women in precarious situations who need immediate intervention." },
  { icon: "🧒", title: "Orphaned Children", desc: "Children without parental support who need care and education." },
  { icon: "🏠", title: "Low-Income Families", desc: "Families struggling to meet basic needs and build stability." },
];

// Fresh, varied photos for the strip
const stripPhotos = [
  { url: "https://images.unsplash.com/photo-1603570388450-15f1d0c2cb7e?w=600&q=80", alt: "African mother smiling with children" },
  { url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80", alt: "Women community gathering" },
  { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", alt: "Children in school" },
  { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", alt: "Healthcare outreach" },
];

export default function Beneficiaries() {
  return (
    <section style={{ background: "var(--near-black)" }}>
      {/* Photo strip */}
      <div className="flex overflow-hidden" style={{ height: "220px" }}>
        {stripPhotos.map((p, i) => (
          <div
            key={i}
            className="relative flex-1 overflow-hidden transition-all duration-500"
            style={{ minWidth: 0 }}
            onMouseEnter={e => (e.currentTarget.style.flex = "1.6")}
            onMouseLeave={e => (e.currentTarget.style.flex = "1")}
          >
            <img
              src={p.url}
              alt={p.alt}
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.5s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(30,14,48,0.4)" }}
            />
          </div>
        ))}
      </div>

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
