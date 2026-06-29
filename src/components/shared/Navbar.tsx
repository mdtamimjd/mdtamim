"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5 bg-background/60 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="font-geist font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          JAHANGIR.
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link href="#about" className="hover:text-text transition-colors">About</Link>
          <Link href="#skills" className="hover:text-text transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-text transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-text transition-colors">Experience</Link>
          <Link href="#contact" className="hover:text-text transition-colors">Contact</Link>
        </div>
        <Link href="#contact" className="px-5 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-sm font-medium transition-colors">
          Let's Talk
        </Link>
      </div>
    </nav>
  );
}