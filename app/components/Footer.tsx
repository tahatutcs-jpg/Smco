export default function Footer() {
  const footerImgs = [
    { src: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=600&q=80&auto=format&fit=crop", alt: "Mother and child" },
    { src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80&auto=format&fit=crop", alt: "Volunteers helping" },
    { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&auto=format&fit=crop", alt: "Child learning" },
    { src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&q=80&auto=format&fit=crop", alt: "Family together" },
  ];

  return (
    <footer
      style={{
        position: "relative",
        color: "rgba(255,255,255,0.55)",
        backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(14,5,28,0.92)",
          zIndex: 0,
        }}
      />

      {/* All content above overlay */}
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

          {/* Main grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(247,214,224,0.2)" }}
                >
                  <span className="font-display italic text-xl font-semibold" style={{ color: "var(--accent-pink)" }}>S</span>
                </div>
                <div>
                  <p className="text-xs italic font-light" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Cormorant Garamond, serif" }}>Single Mother's</p>
                  <p className="text-sm font-semibold text-white">Charity Organisation</p>
                </div>
              </div>
              <p className="text-sm leading-7 max-w-xs mb-4">
                A non-profit building a world where every single mother can live with dignity, opportunity, and hope.
              </p>
              <p className="font-display italic" style={{ color: "var(--accent-pink)", fontSize: "16px" }}>
                "Empowering Mothers, Transforming Futures."
              </p>
            </div>

            {/* Organisation links */}
            <div>
              <h5 className="text-xs font-semibold tracking-widest uppercase text-white mb-5">Organisation</h5>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {["About SMCO", "Vision & Mission", "Core Values", "Objectives"].map(l => (
                  <li key={l}>
                    <a
                      href="#about"
                      className="text-sm no-underline transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-pink)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get involved links */}
            <div>
              <h5 className="text-xs font-semibold tracking-widest uppercase text-white mb-5">Get Involved</h5>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {[["Donate", "#donate"], ["Volunteer", "#volunteer"], ["Partner With Us", "#partner"], ["Contact Us", "#contact"]].map(([l, h]) => (
                  <li key={l}>
                    <a
                      href={h}
                      className="text-sm no-underline transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-pink)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image strip */}
          <div
            className="mb-10 overflow-hidden rounded-2xl"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="px-5 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                Our Community in Action
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {footerImgs.map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden"
                  style={{ height: "clamp(110px, 18vw, 180px)" }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.07)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(20,8,35,0.4)", pointerEvents: "none" }}
                  />
                  <span
                    className="absolute bottom-3 left-3 text-white font-medium"
                    style={{ fontSize: "11px", textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
                  >
                    {img.alt}
                  </span>
                  {i < footerImgs.length - 1 && (
                    <div
                      className="absolute top-0 right-0 bottom-0 w-px hidden sm:block"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span>© 2025 Single Mother's Charity Organisation (SMCO). All rights reserved.</span>
            <span>
              Kampala, Uganda ·{" "}
              <a
                href="mailto:smco@mothers.com"
                style={{ color: "var(--accent-pink)", textDecoration: "none" }}
              >
                smco@mothers.com
              </a>
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
