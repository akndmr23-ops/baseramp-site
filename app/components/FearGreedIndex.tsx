"use client";

import { useEffect, useState } from "react";

interface FearGreedData {
  value: number;
  classification: string;
  timestamp: string;
}

export default function FearGreedIndex() {
  const [data, setData] = useState<FearGreedData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      const value = Math.floor(Math.random() * 100);
      let classification = "Neutral";
      
      if (value <= 25) classification = "Extreme Fear";
      else if (value <= 45) classification = "Fear";
      else if (value <= 55) classification = "Neutral";
      else if (value <= 75) classification = "Greed";
      else classification = "Extreme Greed";

      setData({
        value,
        classification,
        timestamp: new Date().toISOString()
      });
      setLoading(false);
    }, 700);
  }, []);

  const getColor = (value: number) => {
    if (value <= 25) return "text-red-400";
    if (value <= 45) return "text-orange-400";
    if (value <= 55) return "text-yellow-400";
    if (value <= 75) return "text-green-400";
    return "text-blue-400";
  };

  const getEmoji = (value: number) => {
    if (value <= 25) return "😨";
    if (value <= 45) return "😰";
    if (value <= 55) return "😐";
    if (value <= 75) return "😊";
    return "🤑";
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-6">
        <h2 className="text-xl font-semibold mb-4">🎭 Fear & Greed Index</h2>
        <div className="animate-pulse text-center">
          <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-3"></div>
          <div className="h-4 bg-gray-600 rounded w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6">
      <h2 className="text-xl font-semibold mb-4">🎭 Fear & Greed Index</h2>
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-3">
          <div className="w-24 h-24 rounded-full border-8 border-gray-700 flex items-center justify-center">
            <span className="text-3xl">{data && getEmoji(data.value)}</span>
          </div>
          <div className={`absolute inset-0 rounded-full border-8 border-transparent ${data && getColor(data.value)} opacity-75`}
               style={{
                 borderTopColor: data && getColor(data.value).includes('red') ? '#f87171' :
                                data && getColor(data.value).includes('orange') ? '#fb923c' :
                                data && getColor(data.value).includes('yellow') ? '#fbbf24' :
                                data && getColor(data.value).includes('green') ? '#4ade80' : '#60a5fa',
                 transform: `rotate(${data ? (data.value / 100) * 360 : 0}deg)`
               }}>
          </div>
        </div>
        <div className={`text-2xl font-bold ${data && getColor(data.value)}`}>
          {data?.value}
        </div>
        <div className="text-gray-400 text-sm mt-1">
          {data?.classification}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Updated: {data && new Date(data.timestamp).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}