import Nav from "./components/Nav";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <div className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">🚀 BaseRamp — Trend Radar</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/20 p-4 shadow-lg hover:shadow-xl transition">
            <h2 className="text-lg font-semibold">Top Gainer Token</h2>
            <p className="text-sm text-gray-400 mt-2">
              $BULL gained <span className="text-green-400 font-bold">+25%</span> in the last 24h.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-white/20 p-4 shadow-lg hover:shadow-xl transition">
            <h2 className="text-lg font-semibold">🔥 Trending NFT Collection</h2>
            <p className="text-sm text-gray-400 mt-2">
              <span className="font-bold">CryptoBullkt #555</span> minted out! 🐂✨
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-white/20 p-4 shadow-lg hover:shadow-xl transition">
            <h2 className="text-lg font-semibold">📅 Upcoming Base Event</h2>
            <p className="text-sm text-gray-400 mt-2">
              Don’t miss <span className="font-bold">BaseCon Istanbul — Sept 20, 2025</span>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
