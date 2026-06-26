"use client";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Objectives", href: "#objectives" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Partner", href: "#partner" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: "rgba(253,248,252,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(61,26,94,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[76px] flex items-center justify-between">

        {/* Logo — linked to top */}
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/smco-logo.png"
              alt="SMCO Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <div className="leading-tight hidden sm:block">
            <p
              className="text-xs font-normal italic"
              style={{ color: "var(--muted)", fontFamily: "Cormorant Garamond, serif" }}
            >
              Single Mother's
            </p>
            <p className="text-sm font-semibold tracking-wide" style={{ color: "var(--near-black)" }}>
              Charity Organisation
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium transition-colors duration-200 no-underline"
                style={{ color: "var(--charcoal)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--deep-purple)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--charcoal)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#donate"
          className="hidden lg:flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-lg transition-all duration-200 no-underline"
          style={{ background: "var(--deep-purple)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--mid-purple)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--deep-purple)")}
        >
          <Heart size={14} /> Donate Now
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 rounded"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-5"
          style={{ borderTop: "1px solid rgba(61,26,94,0.08)", background: "rgba(253,248,252,0.98)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium no-underline"
              style={{ color: "var(--charcoal)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#donate"
            className="text-sm font-semibold text-white px-5 py-3 rounded-lg text-center no-underline"
            style={{ background: "var(--deep-purple)" }}
            onClick={() => setOpen(false)}
          >
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
}
