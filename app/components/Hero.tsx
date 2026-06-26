"use client";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const stats = [
  { num: "500+", label: "Mothers Helped" },
  { num: "7", label: "Core Programs" },
  { num: "3+", label: "Countries Reached" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e0e30 0%, #3d1a5e 55%, #2a0f42 100%)",
        paddingTop: "76px",
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #f9d4e8 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Pink glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(244,167,195,0.14) 0%, transparent 70%)",
          transform: "translate(30%,-30%)",
        }}
      />
      {/* Gold glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)",
          transform: "translate(-30%,30%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <div
            className="transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
          >
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{ background: "rgba(249,212,232,0.1)", border: "1px solid rgba(249,212,232,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-pink)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--blush)" }}>
                Est. March 2025 · Kampala, Uganda
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-light leading-[1.06] mb-4"
              style={{ fontSize: "clamp(52px, 6.5vw, 88px)", color: "#fff", letterSpacing: "-1.5px" }}
            >
              Single<br />
              <em style={{ color: "var(--accent-pink)" }}>Mother's</em><br />
              Charity
            </h1>

            <p
              className="font-display italic mb-8"
              style={{ fontSize: "21px", color: "rgba(249,212,232,0.65)" }}
            >
              "Empowering Mothers, Transforming Futures."
            </p>

            <p className="text-base leading-7 mb-10 max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              A non-profit organisation dedicated to supporting single mothers and their children
              through education, economic empowerment, healthcare, and community development.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#donate"
                className="flex items-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded-lg no-underline transition-all duration-200"
                style={{ background: "var(--deep-purple)", border: "1px solid rgba(244,167,195,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--mid-purple)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--deep-purple)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Donate Today <ArrowRight size={15} />
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-white px-7 py-3.5 rounded-lg no-underline transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.22)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(244,167,195,0.5)"; e.currentTarget.style.background = "rgba(244,167,195,0.07)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.background = "transparent"; }}
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 mt-12 overflow-hidden rounded-2xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(249,212,232,0.1)" }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="py-6 text-center"
                  style={{ borderLeft: i > 0 ? "1px solid rgba(249,212,232,0.08)" : "none" }}
                >
                  <p
                    className="font-display font-semibold"
                    style={{ fontSize: "36px", color: "var(--accent-pink)" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-xs mt-1 tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Real Logo */}
          <div
            className="hidden lg:flex justify-center items-center relative"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 1.2s ease 0.3s" }}
          >
            {/* Outer spin ring */}
            <div
              className="absolute w-[460px] h-[460px] rounded-full spin-slow"
              style={{ border: "1px dashed rgba(201,162,39,0.2)" }}
            />
            {/* Pink glow ring */}
            <div
              className="absolute w-[380px] h-[380px] rounded-full pulse-ring"
              style={{ border: "1px solid rgba(244,167,195,0.15)" }}
            />
            {/* Logo */}
            <div
              className="float-logo relative w-[300px] h-[300px] rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "2px solid rgba(244,167,195,0.18)",
                boxShadow: "0 0 80px rgba(244,167,195,0.2), 0 0 160px rgba(61,26,94,0.4)",
              }}
            >
              <Image
                src="/smco-logo.png"
                alt="Single Mother's Charity Organisation Logo"
                width={280}
                height={280}
                className="object-contain rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 no-underline"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
