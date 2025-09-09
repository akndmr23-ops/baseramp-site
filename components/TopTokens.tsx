// components/TopTokens.tsx
'use client';

import { useEffect, useState } from 'react';

type Row = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: number;
  change24h: number;
  mcap: number;
};

export default function TopTokens() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/top-tokens')
      .then((r) => r.json())
      .then((d) => setRows(d.list ?? []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-gray-400">Loading top tokens…</div>;

  return (
    <div className="rounded-2xl border border-white/10 p-4">
      <h2 className="text-xl font-semibold mb-3">Top 10 Tokens</h2>
      <div className="grid grid-cols-1 divide-y divide-white/10">
        {rows.map((t) => (
          <div key={t.id} className="flex items-center gap-3 py-3">
            <img src={t.image} alt={t.symbol} className="h-6 w-6 rounded-full" />
            <div className="flex-1">
              <div className="font-medium">{t.name} <span className="text-gray-400">({t.symbol})</span></div>
              <div className="text-sm text-gray-400">${t.price?.toLocaleString()}</div>
            </div>
            <div className={`text-sm ${t.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {t.change24h?.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
