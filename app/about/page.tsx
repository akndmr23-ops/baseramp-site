import type { Metadata } from "next";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "About — BaseRamp",
  description:
    "Learn about BaseRamp, your real-time radar for Base network trends, tokens, NFTs, and events.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-12 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About BaseRamp
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your comprehensive dashboard for tracking the Base ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🎯 Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                BaseRamp makes it easy to stay on top of the rapidly evolving Base ecosystem. 
                We aggregate real-time data on trending tokens, hot NFT collections, and 
                upcoming events so you never miss what's happening on Base.
              </p>
            </section>

            <section className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                ⚡ Features
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Real-time token price tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Trending NFT collections
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Upcoming ecosystem events
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Mobile-responsive design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Lightning-fast performance
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🛠️ Tech Stack
              </h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="font-medium text-blue-400">Frontend</div>
                  <div className="text-gray-400">Next.js 15</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="font-medium text-purple-400">Styling</div>
                  <div className="text-gray-400">Tailwind CSS</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="font-medium text-green-400">Language</div>
                  <div className="text-gray-400">TypeScript</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <div className="font-medium text-orange-400">Hosting</div>
                  <div className="text-gray-400">Bolt Hosting</div>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                📊 Data Sources
              </h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• CoinGecko API for token prices</li>
                <li>• Reservoir API for NFT data</li>
                <li>• Community-curated events</li>
                <li>• Real-time Base network data</li>
              </ul>
            </section>

            <section className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🤝 Connect
              </h2>
              <div className="space-y-3">
                <a
                  href="https://github.com/akndmr23-ops"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>🐙</span>
                  GitHub: akndmr23-ops
                </a>
                <a
                  href="/status"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>📊</span>
                  System Status
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="text-center py-8">
          <p className="text-gray-400">
            Built with ❤️ for the Base community
          </p>
        </div>
      </main>
    </>
  );
}