"use client";

const benes = [
  { icon: "👩‍👧", title: "Single Mothers", desc: "Women raising children alone, facing economic and social hardship." },
  { icon: "🕊️", title: "Widows", desc: "Women who have lost their husbands and need a new support system." },
  { icon: "🌱", title: "Teenage Mothers", desc: "Young mothers who need guidance, education, and emotional support." },
  { icon: "🤲", title: "Vulnerable Women", desc: "Women in precarious situations who need immediate intervention." },
  { icon: "🧒", title: "Orphaned Children", desc: "Children without parental support who need care and education." },
  { icon: "🏠", title: "Low-Income Families", desc: "Families struggling to meet basic needs and build stability." },
];

// All 4 verified directly from Unsplash search pages — distinct subjects
const stripPhotos = [
  {
    // African women group — photo-1681545303529-b6beb2e19f02
    url: "https://images.unsplash.com/photo-1681545303529-b6beb2e19f02?w=600&q=80&auto=format&fit=crop",
    alt: "Group of African women standing together",
    label: "Community"
  },
  {
    // Children on bench — photo-1627423896085-e3e694d88e40
    url: "https://images.unsplash.com/photo-1627423896085-e3e694d88e40?w=600&q=80&auto=format&fit=crop",
    alt: "African children sitting on bench",
    label: "Children"
  },
  {
    // Children in classroom — photo-1473649085228-583485e6e4d7
    url: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?w=600&q=80&auto=format&fit=crop",
    alt: "Children in African classroom",
    label: "Education"
  },
  {
    // Woman carrying baby — photo-1487546331507-fcf8a5d27ab3
    url: "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?w=600&q=80&auto=format&fit=crop",
    alt: "African mother carrying child",
    label: "Mothers"
  },
];

export default function Beneficiaries() {
  return (
    <section style={{ background: "var(--near-black)" }}>
      {/* Expanding photo strip */}
      <div className="flex overflow-hidden" style={{ height: "240px" }}>
        {stripPhotos.map((p, i) => (
          <div key={i} className="relative flex-1 overflow-hidden transition-all duration-500" style={{ minWidth: 0 }}
            onMouseEnter={e => (e.currentTarget.style.flex = "1.7")}
            onMouseLeave={e => (e.currentTarget.style.flex = "1")}>
            <img src={p.url} alt={p.alt} className="w-full h-full object-cover"
              style={{ transition: "transform 0.5s ease", objectPosition: "center top" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,14,48,0.7) 0%, rgba(30,14,48,0.25) 100%)" }} />
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-white opacity-80">{p.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-px" style={{ background: "rgba(247,214,224,0.4)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(247,214,224,0.6)" }}>Who We Serve</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2 className="font-display font-light leading-[1.08]" style={{ fontSize: "clamp(38px, 4.5vw, 60px)", color: "#fff" }}>
            Our <em style={{ color: "var(--accent-pink)" }}>Beneficiaries</em>
          </h2>
          <p className="text-base leading-7 max-w-md" style={{ color: "rgba(255,255,255,0.45)" }}>
            We serve the most vulnerable women and children — those who need support the most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benes.map((b) => (
            <div key={b.title} className="rounded-2xl p-7 text-center transition-all duration-200 cursor-default"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(247,214,224,0.08)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(247,214,224,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,214,224,0.22)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,214,224,0.08)"; }}>
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
