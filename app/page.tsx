import TopTokens from "@/components/TopTokens";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl space-y-6 px-4 py-10">
      <h1 className="text-3xl font-bold">
        🚀 BaseRamp — Trend Radar
      </h1>
      <p className="text-gray-400">
        Realtime trends and upcoming events on the Base network.
      </p>

      {/* Top 10 Tokens */}
      <TopTokens />

      {/* Trending NFT */}
      <div className="rounded-xl border border-white/10 bg-black/40 p-4">
        <h2 className="text-lg font-semibold">🔥 Trending NFT Collection</h2>
        <p className="text-gray-400 text-sm">
          <strong className="text-white">CryptoBullkt</strong> #555 minted out! 🐂✨
        </p>
      </div>

      {/* Upcoming Event */}
      <div className="rounded-xl border border-white/10 bg-black/40 p-4">
        <h2 className="text-lg font-semibold">📅 Upcoming Base Event</h2>
        <p className="text-gray-400 text-sm">
          Don’t miss <strong className="text-white">BaseCon Istanbul</strong> — Sept 20, 2025.
        </p>
      </div>
    </main>
  );
}
