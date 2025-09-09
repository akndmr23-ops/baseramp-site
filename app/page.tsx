import TopTokens from "./components/TopTokens";
import TrendingNFTs from "./components/TrendingNFTs";
import UpcomingEvents from "./components/UpcomingEvents";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl space-y-8 px-4 py-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 BaseRamp
          </h1>
          <p className="text-xl text-gray-300">
            Your real-time radar for Base network trends
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Track the hottest tokens, trending NFT collections, and upcoming events 
            in the Base ecosystem — all in one place.
          </p>
        </div>

        {/* Top 10 Tokens */}
        <TopTokens />

        {/* Trending NFTs */}
        <TrendingNFTs />

        {/* Upcoming Events */}
        <UpcomingEvents />

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            Built with ❤️ for the Base ecosystem • 
            <a href="/about" className="hover:text-white ml-1">Learn more</a>
          </p>
        </footer>
      </main>
    </>
  );
}