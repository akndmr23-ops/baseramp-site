"use client";

import { useEffect, useState } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location?: string;
  type: 'conference' | 'launch' | 'update' | 'community';
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'BaseCon Istanbul',
    date: '2025-09-20',
    description: 'The biggest Base ecosystem conference in Turkey',
    location: 'Istanbul, Turkey',
    type: 'conference'
  },
  {
    id: '2',
    title: 'Base Mainnet Anniversary',
    date: '2025-08-09',
    description: 'Celebrating 2 years of Base mainnet with special events',
    type: 'community'
  },
  {
    id: '3',
    title: 'Coinbase Wallet Integration Update',
    date: '2025-07-15',
    description: 'New features for Base network integration',
    type: 'update'
  }
];

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 500);
  }, []);

  const getEventEmoji = (type: Event['type']) => {
    switch (type) {
      case 'conference': return '🎤';
      case 'launch': return '🚀';
      case 'update': return '🔄';
      case 'community': return '🎉';
      default: return '📅';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-6">
        <h2 className="text-xl font-semibold mb-4">📅 Upcoming Base Events</h2>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse p-4 rounded-lg bg-white/5">
              <div className="h-4 bg-gray-600 rounded w-32 mb-2"></div>
              <div className="h-3 bg-gray-700 rounded w-48"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6">
      <h2 className="text-xl font-semibold mb-4">📅 Upcoming Base Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 rounded-lg border border-white/5 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{getEventEmoji(event.type)}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-white">{event.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{event.description}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  <span>📍 {event.location || 'Online'}</span>
                  <span>🗓️ {formatDate(event.date)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}