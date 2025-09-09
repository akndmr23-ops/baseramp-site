"use client";

import { useEffect, useState } from "react";

interface Meme {
  id: string;
  title: string;
  caption: string;
  image: string;
  date: string;
}

const mockMemes: Meme[] = [
  {
    id: '1',
    title: 'Base Chain Vibes',
    caption: 'When gas fees are actually affordable on Base 🚀',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
    date: new Date().toISOString()
  },
  {
    id: '2',
    title: 'DeFi Summer on Base',
    caption: 'Me checking my Base portfolio every 5 minutes 📈',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
    date: new Date().toISOString()
  }
];

export default function MemeOfTheDay() {
  const [meme, setMeme] = useState<Meme | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const randomMeme = mockMemes[Math.floor(Math.random() * mockMemes.length)];
      setMeme(randomMeme);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-6">
        <h2 className="text-xl font-semibold mb-4">😂 Meme of the Day</h2>
        <div className="animate-pulse">
          <div className="w-full h-48 bg-gray-600 rounded-lg mb-3"></div>
          <div className="h-4 bg-gray-600 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6">
      <h2 className="text-xl font-semibold mb-4">😂 Meme of the Day</h2>
      {meme && (
        <div>
          <img
            src={meme.image}
            alt={meme.title}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="font-semibold text-white mb-2">{meme.title}</h3>
          <p className="text-gray-300 text-sm">{meme.caption}</p>
        </div>
      )}
    </div>
  );
}