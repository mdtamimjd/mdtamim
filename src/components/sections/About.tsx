"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { personalInfo } from "@/app/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".about-animate", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-32 bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="about-animate text-4xl font-bold font-inter mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="about-animate text-text-secondary text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="about-animate glass-panel p-6 rounded-2xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">{stat.value}</div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}