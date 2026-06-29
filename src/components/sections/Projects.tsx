"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectsData } from "@/app/data/portfolioData" ;

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".project-node", {
      scrollTrigger: { trigger: container.current, start: "top 75%" },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section id="projects" ref={container} className="py-32 bg-black/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold font-inter mb-16 text-center">Selected <span className="text-primary">Works</span></h2>
        <div className="grid grid-cols-1 gap-12">
          {projectsData.map((project, index) => (
            <div key={index} className="project-node glass-panel p-8 md:p-12 rounded-3xl border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-primary/20 transition-colors group">
              <div className="lg:col-span-7">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 bg-black/30 border border-white/5 p-6 rounded-2xl">
                <h4 className="text-xs uppercase tracking-widest font-bold text-accent mb-4">Core Deliverables</h4>
                <ul className="text-xs space-y-2 text-text-secondary">
                  {project.features.slice(0, 5).map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-success rounded-full" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}