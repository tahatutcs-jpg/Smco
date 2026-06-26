"use client";

const objectives = [
  { title: "Financial & Material Support", desc: "Provide financial and material support to vulnerable single mothers in need." },
  { title: "Vocational Training", desc: "Offer vocational skills training and entrepreneurship programs to build self-reliance." },
  { title: "Children's Education", desc: "Support children of single mothers with education sponsorship and school supplies." },
  { title: "Counseling & Mental Health", desc: "Provide counseling and mental health support for emotional resilience." },
  { title: "Income Generation", desc: "Create sustainable income-generating opportunities for women in our communities." },
  { title: "Women's Rights", desc: "Promote women's rights and social inclusion through advocacy and awareness." },
  { title: "Community Outreach", desc: "Organise community outreach and empowerment events that bring people together." },
];

export default function Objectives() {
  return (
    <section id="objectives" className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-7 h-px" style={{ background: "var(--deep-purple)" }} />
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--deep-purple)" }}>
          Our Focus
        </span>
      </div>
      <h2
        className="font-display font-light leading-[1.08] mb-4"
        style={{ fontSize: "clamp(38px, 4.5vw, 60px)", color: "var(--near-black)" }}
      >
        Main <em style={{ color: "var(--deep-purple)" }}>Objectives</em>
      </h2>
      <p className="text-base leading-7 mb-14 max-w-xl" style={{ color: "var(--muted)" }}>
        Seven clear goals guide everything we do — from policy advocacy to on-the-ground community outreach.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {objectives.map((obj, i) => (
          <div
            key={obj.title}
            className="flex gap-5 p-6 rounded-2xl transition-all duration-200 cursor-default"
            style={{ background: "#fff", border: "1px solid rgba(192,68,106,0.08)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-pink)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,68,106,0.08)"; }}
          >
            <span
              className="font-display font-semibold leading-none flex-shrink-0 w-12"
              style={{ fontSize: "40px", color: "var(--blush)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-sm font-semibold mb-1.5" style={{ color: "var(--near-black)" }}>{obj.title}</h4>
              <p className="text-sm leading-6" style={{ color: "var(--muted)" }}>{obj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
