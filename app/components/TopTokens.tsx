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

export default function TopTokens() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTokens() {
      try {
        const response = await fetch('/api/top-tokens');
        if (!response.ok) {
          throw new Error('Failed to fetch tokens');
        }
        const data = await response.json();
        setTokens(data.list || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchTokens();
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-6">
        <h2 className="text-xl font-semibold mb-4">📈 Top 10 Gainer Tokens</h2>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
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

  if (error) {
    return (
      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6">
        <h2 className="text-xl font-semibold mb-2 text-red-400">📈 Top 10 Gainer Tokens</h2>
        <p className="text-red-300">Error loading tokens: {error}</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6">
      <h2 className="text-xl font-semibold mb-4">📈 Top 10 Gainer Tokens</h2>
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
            <div className={`text-sm font-medium ${
              token.change24h >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {token.change24h >= 0 ? '+' : ''}{token.change24h?.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}