import type { Metadata } from "next";
import Nav from "../../components/Nav";
import AdSlot from "../../components/AdSlot";

export const metadata: Metadata = {
  title: "NFTs — BaseRamp",
  description: "Trending NFT collections and top sales on Base network.",
};

// Mock NFT data
const mockCollections = [
  {
    id: 'base-punks',
    name: 'Base Punks',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400',
    floorPrice: 0.5,
    volume24h: 125.8,
    change24h: 15.2,
    items: 10000
  },
  {
    id: 'base-apes',
    name: 'Base Apes',
    image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=400',
    floorPrice: 0.25,
    volume24h: 89.4,
    change24h: -5.8,
    items: 5000
  },
  {
    id: 'base-cats',
    name: 'Base Cats',
    image: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=400',
    floorPrice: 0.1,
    volume24h: 45.2,
    change24h: 8.9,
    items: 8888
  },
  {
    id: 'base-robots',
    name: 'Base Robots',
    image: 'https://images.pexels.com/photos/7567465/pexels-photo-7567465.jpeg?auto=compress&cs=tinysrgb&w=400',
    floorPrice: 0.75,
    volume24h: 156.7,
    change24h: 22.1,
    items: 3333
  }
];

const mockTopSales = [
  {
    id: 'sale-1',
    collection: 'Base Punks',
    tokenId: '#1234',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=200',
    price: 5.2,
    buyer: '0x1234...5678',
    time: '2 hours ago'
  },
  {
    id: 'sale-2',
    collection: 'Base Robots',
    tokenId: '#567',
    image: 'https://images.pexels.com/photos/7567465/pexels-photo-7567465.jpeg?auto=compress&cs=tinysrgb&w=200',
    price: 3.8,
    buyer: '0xabcd...efgh',
    time: '4 hours ago'
  }
];

export default function NFTsPage() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Base NFTs
              </h1>
              <p className="text-xl text-gray-300">
                Discover trending collections and top sales on Base
              </p>
            </div>

            {/* Trending Collections */}
            <section>
              <h2 className="text-2xl font-bold mb-6">🔥 Trending Collections</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCollections.map((collection) => (
                  <div
                    key={collection.id}
                    className="rounded-xl border border-white/10 bg-black/40 p-6 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Floor Price</span>
                        <span className="font-mono text-white">{collection.floorPrice} ETH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">24h Volume</span>
                        <span className="font-mono text-white">{collection.volume24h} ETH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">24h Change</span>
                        <span className={`font-medium ${
                          collection.change24h >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {collection.change24h >= 0 ? '+' : ''}{collection.change24h}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Items</span>
                        <span className="text-white">{collection.items.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Sales */}
            <section>
              <h2 className="text-2xl font-bold mb-6">💎 Recent Top Sales</h2>
              <div className="rounded-xl border border-white/10 bg-black/40 p-6">
                <div className="space-y-4">
                  {mockTopSales.map((sale) => (
                    <div
                      key={sale.id}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <img
                        src={sale.image}
                        alt={`${sale.collection} ${sale.tokenId}`}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{sale.collection} {sale.tokenId}</h3>
                        <p className="text-sm text-gray-400">
                          Bought by {sale.buyer} • {sale.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-400">
                          {sale.price} ETH
                        </div>
                        <div className="text-sm text-gray-400">
                          ${(sale.price * 2500).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 space-y-6">
            <AdSlot size="sidebar" />
            
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold mb-4">📊 NFT Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Collections</span>
                  <span className="text-white">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Volume</span>
                  <span className="text-white">892 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Sales</span>
                  <span className="text-white">2,156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Traders</span>
                  <span className="text-white">445</span>
                </div>
              </div>
            </div>

            <AdSlot size="sidebar" />
          </div>
        </div>
      </div>
    </>
  );
}