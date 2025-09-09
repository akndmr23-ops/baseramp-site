import type { Metadata } from "next";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "Events — BaseRamp",
  description: "Upcoming Base ecosystem events, meetups, and hackathons.",
};

// Mock events data
const mockEvents = [
  {
    id: '1',
    title: 'BaseCon Istanbul',
    date: '2025-09-20',
    endDate: '2025-09-22',
    description: 'The biggest Base ecosystem conference in Turkey featuring top builders, investors, and community members.',
    location: 'Istanbul, Turkey',
    type: 'conference',
    attendees: 500,
    price: 'Free',
    organizer: 'Base Turkey Community',
    website: 'https://basecon.istanbul'
  },
  {
    id: '2',
    title: 'Base Mainnet Anniversary',
    date: '2025-08-09',
    endDate: '2025-08-09',
    description: 'Celebrating 2 years of Base mainnet with special events, AMAs, and community celebrations.',
    location: 'Online',
    type: 'community',
    attendees: 2000,
    price: 'Free',
    organizer: 'Coinbase',
    website: 'https://base.org'
  },
  {
    id: '3',
    title: 'Base Builder Hackathon',
    date: '2025-07-15',
    endDate: '2025-07-17',
    description: 'Build the next generation of DeFi applications on Base. $100k in prizes!',
    location: 'San Francisco, CA',
    type: 'hackathon',
    attendees: 300,
    price: 'Free',
    organizer: 'Base Foundation',
    website: 'https://hackathon.base.org'
  },
  {
    id: '4',
    title: 'DeFi on Base Workshop',
    date: '2025-06-28',
    endDate: '2025-06-28',
    description: 'Learn how to build DeFi protocols on Base with hands-on workshops and expert guidance.',
    location: 'New York, NY',
    type: 'workshop',
    attendees: 100,
    price: '$50',
    organizer: 'DeFi Alliance',
    website: 'https://defialliance.org'
  },
  {
    id: '5',
    title: 'Base NFT Meetup',
    date: '2025-06-15',
    endDate: '2025-06-15',
    description: 'Monthly meetup for Base NFT creators, collectors, and enthusiasts.',
    location: 'Los Angeles, CA',
    type: 'meetup',
    attendees: 75,
    price: 'Free',
    organizer: 'Base NFT Community',
    website: 'https://meetup.com/base-nft'
  }
];

const getEventEmoji = (type: string) => {
  switch (type) {
    case 'conference': return '🎤';
    case 'hackathon': return '💻';
    case 'workshop': return '🛠️';
    case 'meetup': return '🤝';
    case 'community': return '🎉';
    default: return '📅';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const formatDateRange = (startDate: string, endDate: string) => {
  if (startDate === endDate) {
    return formatDate(startDate);
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
  }
  
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

export default function EventsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Base Events
          </h1>
          <p className="text-xl text-gray-300">
            Discover upcoming events, meetups, and hackathons in the Base ecosystem
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
            All Events
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Conferences
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Hackathons
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Meetups
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
            Online
          </button>
        </div>

        {/* Events Calendar */}
        <div className="space-y-6">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-white/10 bg-black/40 p-6 hover:bg-white/5 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-24 flex-shrink-0">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{getEventEmoji(event.type)}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                    <div className="text-2xl font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          📍 {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          👥 {event.attendees} attendees
                        </span>
                        <span className="flex items-center gap-1">
                          💰 {event.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'conference' ? 'bg-blue-500/20 text-blue-400' :
                        event.type === 'hackathon' ? 'bg-purple-500/20 text-purple-400' :
                        event.type === 'workshop' ? 'bg-green-500/20 text-green-400' :
                        event.type === 'meetup' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{event.description}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-sm text-gray-400">
                      <div className="font-medium text-white mb-1">
                        {formatDateRange(event.date, event.endDate)}
                      </div>
                      <div>Organized by {event.organizer}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                        Learn More
                      </button>
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Event CTA */}
        <div className="text-center py-8">
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-8">
            <h3 className="text-2xl font-bold mb-4">Have an Event to Share?</h3>
            <p className="text-gray-300 mb-6">
              Submit your Base ecosystem event and reach thousands of community members.
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
              Submit Event
            </button>
          </div>
        </div>
      </main>
    </>
  );
}