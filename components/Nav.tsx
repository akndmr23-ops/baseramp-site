"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 backdrop-blur border-b border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold tracking-tight">BaseRamp</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 text-sm text-gray-400">
          <Link href="/tokens" className="hover:text-white">Tokens</Link>
          <Link href="/nfts" className="hover:text-white">NFTs</Link>
          <Link href="/events" className="hover:text-white">Events</Link>
          <Link href="/news" className="hover:text-white">News</Link>
          <Link href="/airdrops" className="hover:text-white">Airdrops</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/status" className="hover:text-white">Status</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur border-b border-white/10 md:hidden">
            <div className="flex flex-col gap-4 p-4 text-sm text-gray-400">
              <Link href="/tokens" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Tokens</Link>
              <Link href="/nfts" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>NFTs</Link>
              <Link href="/events" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Events</Link>
              <Link href="/news" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>News</Link>
              <Link href="/airdrops" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Airdrops</Link>
              <Link href="/about" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/status" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Status</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
