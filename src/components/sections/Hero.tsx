"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { personalInfo } from "@/app/data/portfolioData" ;

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-reveal", { y: 80, opacity: 0, duration: 1, stagger: 0.15, ease: "power4.out" })
      .from(".hero-fade", { scale: 0.95, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      <div className="container mx-auto px-6 z-10 text-center max-w-4xl">
        <h2 className="hero-reveal text-primary font-geist font-semibold tracking-widest uppercase mb-4 text-sm">
          {personalInfo.title}
        </h2>
        <h1 className="hero-reveal text-5xl md:text-8xl font-bold font-inter tracking-tight mb-6 leading-none">
          {personalInfo.name}
        </h1>
        <p className="hero-reveal text-text-secondary text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light">
          {personalInfo.subtitle}
        </p>
        <div className="hero-fade flex flex-wrap items-center justify-center gap-4">
          <Link href="#projects" className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/20 transition-all">
            View Projects
          </Link>
          <Link href="#contact" className="px-8 py-3 rounded-full glass-panel hover:bg-white/5 text-text border border-white/10 font-medium transition-all">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}