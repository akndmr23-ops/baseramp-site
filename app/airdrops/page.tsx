import type { Metadata } from "next";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "Airdrops — BaseRamp",
  description: "Potential airdrops and opportunities in the Base ecosystem.",
};

// Mock airdrop data
const mockAirdrops = [
  {
    id: '1',
    title: 'BaseSwap Protocol',
    description: 'Leading DEX on Base with high trading volume. Users who provide liquidity and trade regularly may be eligible for future token distribution.',
    status: 'potential',
    category: 'DeFi',
    requirements: [
      'Provide liquidity for at least 30 days',
      'Complete minimum 10 trades',
      'Hold LP tokens worth $100+'
    ],
    estimatedValue: '$500 - $2,000',
    participants: '~50,000',
    deadline: '2025-06-30',
    website: 'https://baseswap.fi',
    logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    title: 'Base Name Service',
    description: 'Decentralized naming service for Base addresses. Early adopters who register .base domains may receive governance tokens.',
    status: 'potential',
    category: 'Infrastructure',
    requirements: [
      'Register a .base domain',
      'Hold domain for 6+ months',
      'Set up ENS records'
    ],
    estimatedValue: '$200 - $800',
    participants: '~25,000',
    deadline: '2025-08-15',
    website: 'https://basename.app',
    logo: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    title: 'Base Bridge Users',
    description: 'Users who bridged assets to Base early and frequently may be eligible for a retroactive airdrop from Base ecosystem projects.',
    status: 'speculative',
    category: 'Infrastructure',
    requirements: [
      'Bridge assets to Base before 2024',
      'Minimum $1,000 bridged volume',
      'Use Base for DeFi activities'
    ],
    estimatedValue: '$300 - $1,500',
    participants: '~100,000',
    deadline: 'TBA',
    website: 'https://bridge.base.org',
    logo: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '4',
    title: 'BaseLend Protocol',
    description: 'Lending and borrowing protocol on Base. Active users who lend, borrow, and participate in governance may receive tokens.',
    status: 'confirmed',
    category: 'DeFi',
    requirements: [
      'Lend or borrow for 60+ days',
      'Minimum $500 in protocol',
      'Vote on governance proposals'
    ],
    estimatedValue: '$400 - $1,200',
    participants: '~15,000',
    deadline: '2025-05-20',
    website: 'https://baselend.xyz',
    logo: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '5',
    title: 'Base NFT Marketplace',
    description: 'Leading NFT marketplace on Base. Traders, creators, and collectors may be eligible for platform governance tokens.',
    status: 'potential',
    category: 'NFTs',
    requirements: [
      'Trade NFTs worth $200+',
      'Create or mint NFTs',
      'Hold Base NFTs for 30+ days'
    ],
    estimatedValue: '$150 - $600',
    participants: '~30,000',
    deadline: '2025-07-10',
    website: 'https://basenft.market',
    logo: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'potential': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'speculative': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  }
};

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'defi': return 'bg-blue-500/20 text-blue-400';
    case 'nfts': return 'bg-purple-500/20 text-purple-400';
    case 'infrastructure': return 'bg-green-500/20 text-green-400';
    default: return 'bg-gray-500/20 text-gray-400';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'confirmed': return '✅';
    case 'potential': return '🟡';
    case 'speculative': return '🔍';
    default: return '❓';
  }
};

export default function AirdropsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Base Airdrops
          </h1>
          <p className="text-xl text-gray-300">
            Discover potential airdrop opportunities in the Base ecosystem
          </p>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-yellow-400 text-sm">
              ⚠️ <strong>Disclaimer:</strong> Airdrop information is speculative and not guaranteed. 
              Always do your own research and never invest more than you can afford to lose.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
            All Airdrops
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Confirmed
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Potential
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            DeFi
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            NFTs
          </button>
        </div>

        {/* Airdrops List */}
        <div className="space-y-6">
          {mockAirdrops.map((airdrop) => (
            <div
              key={airdrop.id}
              className="rounded-xl border border-white/10 bg-black/40 p-6 hover:bg-white/5 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-20 flex-shrink-0">
                  <img
                    src={airdrop.logo}
                    alt={airdrop.title}
                    className="w-16 h-16 rounded-lg object-cover mx-auto"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{airdrop.title}</h2>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(airdrop.status)}`}>
                          {getStatusIcon(airdrop.status)} {airdrop.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(airdrop.category)}`}>
                          {airdrop.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{airdrop.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        {airdrop.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-400 mt-0.5">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Estimated Value:</span>
                        <span className="text-green-400 font-medium">{airdrop.estimatedValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Participants:</span>
                        <span className="text-white">{airdrop.participants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Deadline:</span>
                        <span className="text-white">{airdrop.deadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                      Visit Protocol
                    </button>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
                      Add to Watchlist
                    </button>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Section */}
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">🎓 Airdrop Strategy Tips</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Best Practices:</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Diversify across multiple protocols</li>
                <li>• Meet requirements consistently</li>
                <li>• Keep detailed records of activities</li>
                <li>• Stay active in communities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Risk Management:</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Never invest more than you can lose</li>
                <li>• Be aware of gas costs</li>
                <li>• Verify official announcements</li>
                <li>• Avoid airdrop farming scams</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}