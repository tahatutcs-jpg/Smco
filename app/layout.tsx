import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Single Mother's Charity Organisation — Empowering Mothers, Transforming Futures",
  description: "SMCO is a non-profit dedicated to supporting, empowering, and improving the lives of single mothers and their children through education, economic empowerment, healthcare support, and community development.",
  keywords: "single mothers charity, Uganda NGO, women empowerment, SMCO, single mother support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
