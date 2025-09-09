"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur border-b border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold tracking-tight">BaseRamp</Link>
        <div className="flex items-center gap-5 text-sm text-gray-400">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/status" className="hover:text-white">Status</Link>
        </div>
      </div>
    </nav>
  );
}
