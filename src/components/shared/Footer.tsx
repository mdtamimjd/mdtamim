"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-background">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-text-secondary">
        <div>© 2026 Jahangir. All development structures secured.</div>
        <div className="flex gap-6">
          <Link href="#about" className="hover:text-text transition-colors">About</Link>
          <Link href="#projects" className="hover:text-text transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-text transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}