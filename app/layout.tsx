import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://baseramp.xyz"),
  title: {
    default: "BaseRamp — Trend Radar",
    template: "%s | BaseRamp"
  },
  description: "Your real-time radar for Base network trends. Track tokens, NFTs, and events in the Base ecosystem.",
  keywords: ["Base", "crypto", "tokens", "NFT", "blockchain", "trends", "DeFi"],
  authors: [{ name: "BaseRamp Team" }],
  creator: "BaseRamp",
  publisher: "BaseRamp",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BaseRamp — Trend Radar",
    description: "Your real-time radar for Base network trends. Track tokens, NFTs, and events in the Base ecosystem.",
    url: "https://baseramp.xyz",
    siteName: "BaseRamp",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BaseRamp — Trend Radar",
    description: "Your real-time radar for Base network trends. Track tokens, NFTs, and events in the Base ecosystem.",
    creator: "@baseramp"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen antialiased bg-gradient-to-br from-black via-gray-900 to-black">
        {children}
      </body>
    </html>
  );
}