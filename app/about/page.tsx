import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — BaseRamp",
  description:
    "BaseRamp; Base ağındaki trendleri ve etkinlikleri takip etmek için hafif, hızlı bir Next.js uygulamasıdır.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <h1 className="text-3xl md:text-4xl font-semibold">About</h1>

      <p className="text-gray-300 leading-relaxed">
        BaseRamp, Base ekosistemindeki token, NFT ve dApp hareketlerini hızlı
        bir şekilde görmeni sağlar. Next.js App Router, TailwindCSS ve Netlify
        ile dağıtılmıştır.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Tech Stack</h2>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Next.js (App Router)</li>
          <li>TypeScript & Tailwind CSS</li>
          <li>Netlify (Continuous Deployment)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Contact</h2>
        <ul className="list-disc pl-5 text-gray-300">
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/akndmr23-ops"
              className="underline hover:text-white"
            >
              akndmr23-ops
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
