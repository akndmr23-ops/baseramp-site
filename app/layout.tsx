import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://baseramp.xyz"),
  title: "BaseRamp — Trend Radar",
  description: "Track tokens, NFTs, dApps, and upcoming events on Base.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BaseRamp — Trend Radar",
    description: "Realtime trends and upcoming events on Base.",
    url: "https://baseramp.xyz",
    siteName: "BaseRamp",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BaseRamp — Trend Radar",
    description: "Realtime trends and upcoming events on Base."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
