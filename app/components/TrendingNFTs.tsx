"use client";

import { useEffect, useState } from "react";

interface Collection {
  id: string;
  name: string;
  image: string;
  floorAskPrice: { amount: { decimal: number } } | null;
  volume24h: number;
}

export default function TrendingNFTs() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const res = await fetch(
          "https://api.reservoir.tools/collections/v7?chains=base&sortBy=volume24h&limit=10"
        );
        const data = await res.json();
        setCollections(data.collections || []);
      } catch (err) {
        console.error("Error fetching collections:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCollections();
  }, []);

  if (loading) {
    return <div className="p-4 text-gray-400">Loading trending collections...</div>;
  }

  return (
    <div className="p-4 bg-black/50 rounded-lg border border-white/10">
      <h2 className="text-xl font-bold mb-3">🔥 Trending NFT Collections</h2>
      <ul className="space-y-3">
        {collections.map((col, i) => (
          <li
            key={col.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition"
          >
            <span className="text-gray-400 w-6">{i + 1}.</span>
            <img
              src={col.image || "/placeholder.png"}
              alt={col.name}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold">{col.name}</p>
              <p className="text-xs text-gray-400">
                Floor: {col.floorAskPrice?.amount.decimal ?? "—"} ETH
              </p>
            </div>
            <span className="text-sm text-gray-300">
              Vol: {col.volume24h.toFixed(2)}Ξ
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
