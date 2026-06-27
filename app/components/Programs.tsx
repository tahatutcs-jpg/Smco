"use client";

const womenSubPrograms = [
  {
    title: "Tailoring & Fashion Training",
    desc: "Teaching mothers to sew, design and sell clothing for income.",
    photo: "https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?w=600&q=85&auto=format&fit=crop",
    photoAlt: "Woman learning to sew on a sewing machine",
  },
  {
    title: "Hairdressing & Beauty Courses",
    desc: "Professional beauty skills to run their own salon businesses.",
    photo: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=85&auto=format&fit=crop",
    photoAlt: "Hairdresser styling hair in salon",
  },
  {
    title: "Business & Entrepreneurship Workshops",
    desc: "Equipping mothers with skills to start and grow their own businesses.",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=85&auto=format&fit=crop",
    photoAlt: "Women in a business training workshop",
  },
  {
    title: "Digital Skills Training",
    desc: "Computer literacy, online marketing and digital tools for modern work.",
    photo: "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=600&q=85&auto=format&fit=crop",
    photoAlt: "Woman learning digital skills on a laptop",
  },
  {
    title: "Women's Empowerment Gatherings",
    desc: "Community events where mothers share stories, support and strength.",
    photo: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=600&q=85&auto=format&fit=crop",
    photoAlt: "Group of women gathered together in community",
  },
];

const otherPrograms = [
  {
    icon: "📚",
    title: "Child Support Program",
    desc: "Investing in children's futures so they can break cycles of poverty.",
    photo: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=85&auto=format&fit=crop",
    photoAlt: "Children studying together in a classroom",
    items: [
      "School fees assistance for vulnerable children",
      "Distribution of scholastic materials and books",
      "Child nutrition support and feeding programs",
      "Mentorship programs for children of single mothers",
    ],
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    desc: "Ensuring mothers and children access essential healthcare and mental wellbeing.",
    photo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=85&auto=format&fit=crop",
    photoAlt: "Healthcare professional supporting a mother",
    items: [
      "Free medical camps and health check-ups",
      "Mental health counseling and trauma support",
      "Reproductive health awareness programs",
      "Nutrition education for mothers and children",
    ],
  },
  {
    icon: "🤝",
    title: "Community Outreach",
    desc: "Reaching the most vulnerable women and families where they are.",
    photo: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&q=85&auto=format&fit=crop",
    photoAlt: "Community outreach volunteers helping families",
    items: [
      "Home visits to identify vulnerable mothers",
      "Community awareness campaigns",
      "Emergency relief and crisis support",
      "Legal aid and rights advocacy",
    ],
  },
  {
    icon: "💰",
    title: "Financial Empowerment",
    desc: "Building financial independence through savings groups and microfinance.",
    photo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=85&auto=format&fit=crop",
    photoAlt: "Women managing finances and savings together",
    items: [
      "Village savings and loan associations (VSLAs)",
      "Micro-loan access for small businesses",
      "Financial literacy and budgeting workshops",
      "Startup capital grants for graduates",
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs" style={{ background: "var(--light-blush)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">

        {/* ── Section header ── */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-px" style={{ background: "var(--deep-purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--deep-purple)" }}>What We Do</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2 className="font-display font-light leading-[1.08]" style={{ fontSize: "clamp(38px, 4.5vw, 60px)", color: "var(--near-black)" }}>
            Programs &<br /><em style={{ color: "var(--deep-purple)" }}>Activities</em>
          </h2>
          <p className="text-base leading-7 max-w-md" style={{ color: "var(--muted)" }}>
            Our programs create lasting change — not temporary relief. Every initiative targets root causes of poverty and builds genuine resilience for single mothers and their children.
          </p>
        </div>

        {/* ══ WOMEN EMPOWERMENT — full-width feature block ══ */}
        <div
          className="rounded-3xl overflow-hidden mb-10"
          style={{
            background: "#fff",
            border: "1px solid rgba(192,68,106,0.08)",
            boxShadow: "0 8px 40px rgba(61,26,94,0.09)",
          }}
        >
          {/* Purple header */}
          <div
            className="px-8 py-7"
            style={{
              background: "linear-gradient(135deg, #2a0f42 0%, #3d1a5e 50%, #5a2d82 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  👗
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(249,212,232,0.6)" }}>Program 01</p>
                  <h3 className="font-display font-semibold text-white" style={{ fontSize: "clamp(20px,3vw,28px)" }}>
                    Women Empowerment Program
                  </h3>
                </div>
              </div>
              <p className="text-sm max-w-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                Practical, income-generating skills that give single mothers financial independence and confidence.
              </p>
            </div>
          </div>

          {/* 5 sub-program image panels */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {womenSubPrograms.map((sp, i) => (
              <div
                key={sp.title}
                className="relative overflow-hidden"
                style={{
                  height: "clamp(180px, 22vw, 260px)",
                  borderRight: i < womenSubPrograms.length - 1 ? "1px solid rgba(192,68,106,0.08)" : "none",
                  borderTop: "1px solid rgba(192,68,106,0.08)",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  const img = (e.currentTarget as HTMLElement).querySelector(".prog-img") as HTMLElement;
                  const overlay = (e.currentTarget as HTMLElement).querySelector(".prog-overlay") as HTMLElement;
                  if (img) img.style.transform = "scale(1.08)";
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={e => {
                  const img = (e.currentTarget as HTMLElement).querySelector(".prog-img") as HTMLElement;
                  const overlay = (e.currentTarget as HTMLElement).querySelector(".prog-overlay") as HTMLElement;
                  if (img) img.style.transform = "scale(1)";
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                {/* Photo */}
                <img
                  src={sp.photo}
                  alt={sp.photoAlt}
                  className="prog-img w-full h-full object-cover"
                  style={{ transition: "transform 0.55s ease" }}
                />

                {/* Always-on bottom gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(20,5,38,0.82) 0%, rgba(20,5,38,0.1) 55%, transparent 100%)", pointerEvents: "none" }}
                />

                {/* Hover overlay */}
                <div
                  className="prog-overlay absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center"
                  style={{
                    background: "rgba(61,26,94,0.6)",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                    pointerEvents: "none",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <p className="text-white text-xs leading-5 font-medium">{sp.desc}</p>
                </div>

                {/* Title always at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4" style={{ pointerEvents: "none" }}>
                  <p
                    className="text-white font-semibold leading-tight"
                    style={{ fontSize: "12px", textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
                  >
                    {sp.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ OTHER PROGRAMS — 2×2 grid ══ */}
        <div className="grid md:grid-cols-2 gap-7">
          {otherPrograms.map((p, idx) => (
            <div
              key={p.title}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "#fff",
                border: "1px solid rgba(192,68,106,0.08)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(61,26,94,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "220px" }}
                onMouseEnter={e => {
                  const img = (e.currentTarget as HTMLElement).querySelector(".card-img") as HTMLElement;
                  if (img) img.style.transform = "scale(1.06)";
                }}
                onMouseLeave={e => {
                  const img = (e.currentTarget as HTMLElement).querySelector(".card-img") as HTMLElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src={p.photo}
                  alt={p.photoAlt}
                  className="card-img w-full h-full object-cover"
                  style={{ transition: "transform 0.55s ease" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(30,14,48,0.55) 0%, transparent 60%)", pointerEvents: "none" }}
                />
                {/* Program number badge */}
                <div
                  className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "rgba(61,26,94,0.8)", color: "rgba(249,212,232,0.9)", backdropFilter: "blur(4px)", border: "1px solid rgba(249,212,232,0.2)" }}
                >
                  Program 0{idx + 2}
                </div>
                {/* Icon */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
                >
                  {p.icon}
                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col gap-4 flex-1">
                <h3 className="font-display font-semibold" style={{ fontSize: "22px", color: "var(--near-black)" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>{p.desc}</p>
                <ul className="flex flex-col gap-2.5 mt-1">
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--charcoal)" }}>
                      <span
                        className="mt-0.5 flex-shrink-0 font-bold"
                        style={{ color: "var(--deep-purple)" }}
                      >→</span>
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
