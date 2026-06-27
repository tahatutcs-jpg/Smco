"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { num: 500, suffix: "+", label: "Mothers Helped" },
  { num: 7,   suffix: "",  label: "Core Programs" },
  { num: 3,   suffix: "+", label: "Countries Reached" },
];

const mosaicPhotos = {
  large:          "https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=800&q=85&auto=format&fit=crop",
  largeAlt:       "Mother smiling with her child",
  topRight:       "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=85&auto=format&fit=crop",
  topRightAlt:    "Child studying and learning",
  bottomRight:    "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&q=85&auto=format&fit=crop",
  bottomRightAlt: "Family together outdoors",
};

function useCounter(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ num, suffix, label, active, index }: { num: number; suffix: string; label: string; active: boolean; index: number }) {
  const count = useCounter(num, active);
  return (
    <div
      className="py-6 text-center"
      style={{ borderLeft: index > 0 ? "1px solid rgba(249,212,232,0.08)" : "none" }}
    >
      <p className="font-display font-semibold" style={{ fontSize: "36px", color: "var(--accent-pink)" }}>
        {count}{suffix}
      </p>
      <p className="text-xs mt-1 tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible]         = useState(false);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        position: "relative",
        backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        paddingTop: "76px",
      }}
    >
      {/* Purple gradient overlay — keeps the deep purple theme over the photo */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(20,8,35,0.96) 0%, rgba(61,26,94,0.93) 55%, rgba(30,10,50,0.96) 100%)",
          zIndex: 0,
        }}
      />

      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, #f9d4e8 1px, transparent 1px)", backgroundSize: "30px 30px", zIndex: 0 }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(244,167,195,0.12) 0%, transparent 70%)", transform: "translate(30%,-30%)", zIndex: 0 }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 70%)", transform: "translate(-30%,30%)", zIndex: 0 }} />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left text ── */}
          <div
            className="transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ background: "rgba(249,212,232,0.1)", border: "1px solid rgba(249,212,232,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-pink)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--blush)" }}>Est. March 2025 · Kampala, Uganda</span>
            </div>

            <h1 className="font-display font-light leading-[1.06] mb-4" style={{ fontSize: "clamp(52px, 6.5vw, 88px)", color: "#fff", letterSpacing: "-1.5px" }}>
              Single<br />
              <em style={{ color: "var(--accent-pink)" }}>Mother's</em><br />
              Charity
            </h1>
            <p className="font-display italic mb-8" style={{ fontSize: "21px", color: "rgba(249,212,232,0.65)" }}>
              "Empowering Mothers, Transforming Futures."
            </p>
            <p className="text-base leading-7 mb-10 max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              A non-profit organisation dedicated to supporting single mothers and their children through education, economic empowerment, healthcare, and community development.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#donate"
                className="flex items-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded-lg no-underline transition-all duration-200"
                style={{ background: "var(--deep-purple)", border: "1px solid rgba(244,167,195,0.3)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--mid-purple)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--deep-purple)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Donate Today <ArrowRight size={15} />
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-white px-7 py-3.5 rounded-lg no-underline transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.22)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(244,167,195,0.5)"; e.currentTarget.style.background = "rgba(244,167,195,0.07)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.background = "transparent"; }}
              >
                Learn More
              </a>
            </div>

            {/* Animated stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 mt-12 overflow-hidden rounded-2xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(249,212,232,0.1)" }}
            >
              {stats.map((s, i) => (
                <StatItem key={s.label} num={s.num} suffix={s.suffix} label={s.label} active={statsActive} index={i} />
              ))}
            </div>
          </div>

          {/* ── Right — Photos ── */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s",
            }}
          >

            {/* MOBILE: single image */}
            <div className="block md:hidden relative overflow-hidden rounded-2xl" style={{ height: "280px" }}>
              <img
                src={mosaicPhotos.large}
                alt={mosaicPhotos.largeAlt}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,14,48,0.65) 0%, transparent 55%)", pointerEvents: "none" }} />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl text-white text-xs font-semibold backdrop-blur-sm" style={{ background: "rgba(61,26,94,0.75)", border: "1px solid rgba(244,167,195,0.25)" }}>
                💗 Supporting families since 2025
              </div>
            </div>

            {/* TABLET: 2-col grid */}
            <div className="hidden md:grid lg:hidden gap-3" style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "200px 200px" }}>
              <div className="relative overflow-hidden rounded-2xl" style={{ gridRow: "1 / 3" }}>
                <img src={mosaicPhotos.large} alt={mosaicPhotos.largeAlt} className="w-full h-full object-cover" style={{ objectPosition: "center 20%", transition: "transform 0.6s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,14,48,0.65) 0%, transparent 55%)", pointerEvents: "none" }} />
                <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl text-white text-xs font-semibold backdrop-blur-sm" style={{ background: "rgba(61,26,94,0.75)", border: "1px solid rgba(244,167,195,0.25)" }}>
                  💗 Supporting families since 2025
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img src={mosaicPhotos.topRight} alt={mosaicPhotos.topRightAlt} className="w-full h-full object-cover" style={{ transition: "transform 0.6s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                <div className="absolute inset-0 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(30,14,48,0.7) 0%, transparent 60%)", pointerEvents: "none" }}>
                  <span className="text-xs text-white font-medium">Education</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img src={mosaicPhotos.bottomRight} alt={mosaicPhotos.bottomRightAlt} className="w-full h-full object-cover" style={{ objectPosition: "center 15%", transition: "transform 0.6s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                <div className="absolute inset-0 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(30,14,48,0.7) 0%, transparent 60%)", pointerEvents: "none" }}>
                  <span className="text-xs text-white font-medium">Family</span>
                </div>
              </div>
            </div>

            {/* DESKTOP: full 3-col mosaic */}
            <div className="hidden lg:grid gap-3" style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "220px 220px" }}>
              <div className="relative overflow-hidden rounded-2xl" style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}>
                <img
                  src={mosaicPhotos.large}
                  alt={mosaicPhotos.largeAlt}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.6s ease", objectPosition: "center 20%" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    (e.currentTarget.nextElementSibling as HTMLElement).style.opacity = "1";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "scale(1)";
                    (e.currentTarget.nextElementSibling as HTMLElement).style.opacity = "0";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(61,26,94,0.45)", opacity: 0, transition: "opacity 0.4s ease", pointerEvents: "none" }}>
                  <span className="text-white text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.4)", backdropFilter: "blur(4px)" }}>Our Community</span>
                </div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,14,48,0.65) 0%, transparent 55%)", pointerEvents: "none" }} />
                <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl text-white text-xs font-semibold backdrop-blur-sm" style={{ background: "rgba(61,26,94,0.75)", border: "1px solid rgba(244,167,195,0.25)" }}>
                  💗 Supporting families since 2025
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl" style={{ gridColumn: "3", gridRow: "1" }}>
                <img src={mosaicPhotos.topRight} alt={mosaicPhotos.topRightAlt} className="w-full h-full object-cover" style={{ transition: "transform 0.6s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                <div className="absolute inset-0 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(30,14,48,0.7) 0%, transparent 60%)", pointerEvents: "none" }}>
                  <span className="text-xs text-white font-medium">Education</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl" style={{ gridColumn: "3", gridRow: "2" }}>
                <img src={mosaicPhotos.bottomRight} alt={mosaicPhotos.bottomRightAlt} className="w-full h-full object-cover" style={{ transition: "transform 0.6s ease", objectPosition: "center 15%" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                <div className="absolute inset-0 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(30,14,48,0.7) 0%, transparent 60%)", pointerEvents: "none" }}>
                  <span className="text-xs text-white font-medium">Family</span>
                </div>
              </div>
            </div>

            <p className="text-right mt-2 text-xs hidden lg:block" style={{ color: "rgba(255,255,255,0.2)" }}>Real families we serve ↑</p>
          </div>

        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 no-underline" style={{ color: "rgba(255,255,255,0.28)", zIndex: 10 }}>
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
