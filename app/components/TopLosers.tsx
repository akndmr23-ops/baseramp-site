"use client";

import { useEffect, useState } from "react";

interface Token {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: number;
  change24h: number;
  mcap: number;
}

// Mock data for top losers
const mockLosers: Token[] = [
  {
    id: 'token-1',
    symbol: 'LOSE',
    name: 'Loser Token',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    price: 0.45,
    change24h: -15.2,
    mcap: 12000000,
  },
  {
    id: 'token-2',
    symbol: 'DOWN',
    name: 'Down Token',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    price: 1.23,
    change24h: -12.8,
    mcap: 25000000,
  },
  {
    id: 'token-3',
    symbol: 'RED',
    name: 'Red Token',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    price: 0.089,
    change24h: -9.4,
    mcap: 8500000,
  }
];

export default function TopLosers() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTokens(mockLosers);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-6">
        <h2 className="text-xl font-semibold mb-4">📉 Top 10 Loser Tokens</h2>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-600 rounded w-24 mb-1"></div>
                <div className="h-3 bg-gray-700 rounded w-16"></div>
              </div>
              <div className="h-4 bg-gray-600 rounded w-12"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6">
      <h2 className="text-xl font-semibold mb-4">📉 Top 10 Loser Tokens</h2>
      <div className="space-y-3">
        {tokens.map((token, index) => (
          <div
            key={token.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            <span className="text-gray-400 w-6 text-sm">{index + 1}.</span>
            <img
              src={token.image}
              alt={token.symbol}
              className="w-8 h-8 rounded-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder-token.png';
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">
                {token.name}
                <span className="text-gray-400 ml-1">({token.symbol})</span>
              </div>
              <div className="text-sm text-gray-400">
                ${token.price?.toLocaleString(undefined, { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 6 
                })}
              </div>
            </div>
            <div className="text-sm font-medium text-red-400">
              {token.change24h?.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}