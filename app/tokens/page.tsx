import type { Metadata } from "next";
import Nav from "../../components/Nav";
import AdSlot from "../../components/AdSlot";

export const metadata: Metadata = {
  title: "Tokens — BaseRamp",
  description: "Comprehensive list of tokens on Base network with real-time prices and analytics.",
};

// Mock token data
const mockTokens = [
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    price: 2500.45,
    change24h: 5.2,
    change7d: 12.8,
    volume24h: 15000000000,
    mcap: 300000000000,
    category: 'gainer'
  },
  {
    id: 'base-token',
    symbol: 'BASE',
    name: 'Base Token',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    price: 1.25,
    change24h: 12.5,
    change7d: 25.3,
    volume24h: 5000000,
    mcap: 50000000,
    category: 'gainer'
  },
  {
    id: 'loser-token',
    symbol: 'LOSE',
    name: 'Loser Token',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    price: 0.45,
    change24h: -15.2,
    change7d: -22.1,
    volume24h: 1200000,
    mcap: 12000000,
    category: 'loser'
  },
  {
    id: 'new-token',
    symbol: 'NEW',
    name: 'New Launch Token',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    price: 0.089,
    change24h: 45.8,
    change7d: 0, // New launch
    volume24h: 850000,
    mcap: 8500000,
    category: 'new'
  }
];

export default function TokensPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        {/* Banner Ad */}
        <div className="flex justify-center">
          <AdSlot size="banner" />
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Base Tokens
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive token analytics for the Base ecosystem
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
            All Tokens
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Top Gainers
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Top Losers
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            New Launches
          </button>
        </div>

        {/* Tokens Table */}
        <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr className="text-left">
                  <th className="px-6 py-4 text-gray-400 font-medium">#</th>
                  <th className="px-6 py-4 text-gray-400 font-medium">Token</th>
                  <th className="px-6 py-4 text-gray-400 font-medium">Price</th>
                  <th className="px-6 py-4 text-gray-400 font-medium">24h %</th>
                  <th className="px-6 py-4 text-gray-400 font-medium">7d %</th>
                  <th className="px-6 py-4 text-gray-400 font-medium">Volume (24h)</th>
                  <th className="px-6 py-4 text-gray-400 font-medium">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {mockTokens.map((token, index) => (
                  <tr key={token.id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-gray-400">{index + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={token.image}
                          alt={token.symbol}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="font-medium text-white">{token.name}</div>
                          <div className="text-sm text-gray-400">{token.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-white">
                      ${token.price.toLocaleString(undefined, { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 6 
                      })}
                    </td>
                    <td className={`px-6 py-4 font-medium ${
                      token.change24h >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                    </td>
                    <td className={`px-6 py-4 font-medium ${
                      token.change7d >= 0 ? 'text-green-400' : 
                      token.change7d === 0 ? 'text-gray-400' : 'text-red-400'
                    }`}>
                      {token.change7d === 0 ? 'New' : 
                       `${token.change7d >= 0 ? '+' : ''}${token.change7d.toFixed(2)}%`}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      ${token.volume24h.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      ${token.mcap.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
            Load More Tokens
          </button>
        </div>
      </main>
    </>
  );
}