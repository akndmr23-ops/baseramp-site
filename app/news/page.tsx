import type { Metadata } from "next";
import Nav from "../../components/Nav";
import AdSlot from "../../components/AdSlot";

export const metadata: Metadata = {
  title: "News — BaseRamp",
  description: "Latest news and updates from the Base ecosystem.",
};

// Mock news data
const mockNews = [
  {
    id: '1',
    title: 'Base Network Reaches 1 Million Daily Active Users',
    excerpt: 'Base continues its rapid growth with a new milestone of 1 million daily active users, showcasing the network\'s increasing adoption.',
    content: 'The Base network has achieved a significant milestone by reaching 1 million daily active users...',
    author: 'BaseRamp Team',
    publishedAt: '2025-01-15T10:00:00Z',
    category: 'Network',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '3 min read'
  },
  {
    id: '2',
    title: 'New DeFi Protocol Launches on Base with $50M TVL',
    excerpt: 'A major DeFi protocol has launched on Base, bringing innovative yield farming opportunities and attracting significant liquidity.',
    content: 'The latest DeFi protocol to launch on Base has already attracted over $50 million in total value locked...',
    author: 'DeFi Analyst',
    publishedAt: '2025-01-14T15:30:00Z',
    category: 'DeFi',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '5 min read'
  },
  {
    id: '3',
    title: 'Base NFT Marketplace Sees Record Trading Volume',
    excerpt: 'NFT trading on Base reaches new heights with record-breaking volume as creators and collectors embrace the low-fee environment.',
    content: 'The Base NFT ecosystem is experiencing unprecedented growth with trading volumes reaching all-time highs...',
    author: 'NFT Reporter',
    publishedAt: '2025-01-13T09:15:00Z',
    category: 'NFTs',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '4 min read'
  },
  {
    id: '4',
    title: 'Coinbase Announces New Base Developer Grants Program',
    excerpt: 'Coinbase launches a $10 million grants program to support developers building innovative applications on the Base network.',
    content: 'Coinbase has announced a comprehensive grants program aimed at fostering innovation on Base...',
    author: 'Crypto News',
    publishedAt: '2025-01-12T14:20:00Z',
    category: 'Development',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '6 min read'
  },
  {
    id: '5',
    title: 'Base Gas Fees Hit All-Time Low',
    excerpt: 'Transaction costs on Base reach historic lows, making it even more attractive for users and developers.',
    content: 'Base network optimization has led to significantly reduced gas fees, benefiting all users...',
    author: 'Tech Analyst',
    publishedAt: '2025-01-11T11:45:00Z',
    category: 'Network',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '3 min read'
  }
];

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'network': return 'bg-blue-500/20 text-blue-400';
    case 'defi': return 'bg-green-500/20 text-green-400';
    case 'nfts': return 'bg-purple-500/20 text-purple-400';
    case 'development': return 'bg-orange-500/20 text-orange-400';
    default: return 'bg-gray-500/20 text-gray-400';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function NewsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Base News
          </h1>
          <p className="text-xl text-gray-300">
            Stay updated with the latest developments in the Base ecosystem
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
            All News
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Network
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            DeFi
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            NFTs
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Development
          </button>
        </div>

        {/* Featured Article */}
        <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden">
          <img
            src={mockNews[0].image}
            alt={mockNews[0].title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(mockNews[0].category)}`}>
                {mockNews[0].category}
              </span>
              <span className="text-sm text-gray-400">{formatDate(mockNews[0].publishedAt)}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">{mockNews[0].readTime}</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">{mockNews[0].title}</h2>
            <p className="text-gray-300 mb-4">{mockNews[0].excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">By {mockNews[0].author}</span>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockNews.slice(1).map((article) => (
            <div
              key={article.id}
              className="rounded-xl border border-white/10 bg-black/40 overflow-hidden hover:bg-white/5 transition-colors cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{formatDate(article.publishedAt)}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>By {article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
            Load More Articles
          </button>
        </div>

        {/* Footer Ad */}
        <div className="flex justify-center py-8">
          <AdSlot size="footer" />
        </div>
      </main>
    </>
  );
}