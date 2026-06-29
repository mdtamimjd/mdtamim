"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { skillsData } from "@/app/data/portfolioData" ;

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".skill-category", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold font-inter mb-16 text-center">Technical <span className="text-accent">Skills</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, list]) => (
            <div key={category} className="skill-category glass-panel p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/5 pb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span key={skill} className="text-sm px-4 py-1.5 rounded-xl bg-white/5 border border-white/5 text-text-secondary hover:text-text hover:border-primary/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}