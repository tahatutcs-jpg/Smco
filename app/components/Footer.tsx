export default function Footer() {
  return (
    <footer style={{ background: "var(--near-black)", color: "rgba(255,255,255,0.5)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(247,214,224,0.15)" }}>
                <span className="font-display italic text-xl font-semibold" style={{ color: "var(--accent-pink)" }}>S</span>
              </div>
              <div>
                <p className="text-xs italic font-light" style={{ color: "rgba(255,255,255,0.4)", fontFamily:"Cormorant Garamond, serif" }}>Single Mother's</p>
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

          {/* Links */}
          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-white mb-5">Organisation</h5>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {["About SMCO","Vision & Mission","Core Values","Objectives"].map(l => (
                <li key={l}><a href="#about" className="text-sm no-underline transition-colors duration-200" style={{ color: "rgba(255,255,255,0.45)" }} onMouseEnter={e=>(e.currentTarget.style.color="var(--accent-pink)")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.45)")}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-white mb-5">Get Involved</h5>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {[["Donate","#donate"],["Volunteer","#volunteer"],["Partner With Us","#partner"],["Contact Us","#contact"]].map(([l,h]) => (
                <li key={l}><a href={h} className="text-sm no-underline transition-colors duration-200" style={{ color: "rgba(255,255,255,0.45)" }} onMouseEnter={e=>(e.currentTarget.style.color="var(--accent-pink)")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.45)")}>{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span>© 2025 Single Mother's Charity Organisation (SMCO). All rights reserved.</span>
          <span>Kampala, Uganda · <a href="mailto:smco@mothers.com" style={{ color: "var(--accent-pink)", textDecoration:"none" }}>smco@mothers.com</a></span>
        </div>
      </div>
    </footer>
  );
}
