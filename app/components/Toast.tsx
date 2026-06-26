"use client";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-medium text-white transition-all duration-300"
      style={{
        background: "var(--near-black)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        transform: visible ? "translateY(0)" : "translateY(80px)",
        opacity: visible ? 1 : 0,
        pointerEvents: "none",
        border: "1px solid rgba(247,214,224,0.12)",
        maxWidth: "360px",
      }}
    >
      <CheckCircle size={18} style={{ color: "var(--accent-pink)", flexShrink: 0 }} />
      {message}
    </div>
  );
}
