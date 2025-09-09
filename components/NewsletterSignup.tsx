"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // TODO: Connect to Mailchimp/Substack API
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        📧 Stay Updated
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        Get the latest Base ecosystem news and trends delivered to your inbox.
      </p>
      
      {subscribed ? (
        <div className="text-center py-4">
          <div className="text-green-400 text-lg mb-2">✅</div>
          <p className="text-green-400">Thanks for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}