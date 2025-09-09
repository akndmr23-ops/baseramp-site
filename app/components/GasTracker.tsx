"use client";

import { useEffect, useState } from "react";

interface GasData {
  slow: number;
  standard: number;
  fast: number;
  timestamp: string;
}

export default function GasTracker() {
  const [gasData, setGasData] = useState<GasData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      setGasData({
        slow: 0.001,
        standard: 0.002,
        fast: 0.004,
        timestamp: new Date().toISOString()
      });
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-6">
        <h2 className="text-xl font-semibold mb-4">⛽ Base Gas Tracker</h2>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-600 rounded w-32"></div>
          <div className="h-4 bg-gray-600 rounded w-28"></div>
          <div className="h-4 bg-gray-600 rounded w-24"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6">
      <h2 className="text-xl font-semibold mb-4">⛽ Base Gas Tracker</h2>
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
          <span className="text-green-400">🐌 Slow</span>
          <span className="font-mono text-green-400">{gasData?.slow} ETH</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <span className="text-yellow-400">🚶 Standard</span>
          <span className="font-mono text-yellow-400">{gasData?.standard} ETH</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg bg-red-500/10 border border-red-500/20">
          <span className="text-red-400">🏃 Fast</span>
          <span className="font-mono text-red-400">{gasData?.fast} ETH</span>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Updated: {gasData && new Date(gasData.timestamp).toLocaleTimeString()}
      </p>
    </div>
  );
}