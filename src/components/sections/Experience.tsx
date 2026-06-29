"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { timelineData, servicesData } from "@/app/data/portfolioData" ;

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".timeline-item", {
      scrollTrigger: { trigger: ".timeline-trigger", start: "top 80%" },
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    });
    gsap.from(".service-chip", {
      scrollTrigger: { trigger: ".service-trigger", start: "top 85%" },
      scale: 0.9,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power1.out"
    });
  }, { scope: container });

  return (
    <section id="experience" ref={container} className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6 timeline-trigger">
            <h2 className="text-3xl font-bold mb-12">Professional <span className="text-primary">Journey</span></h2>
            <div className="relative border-l border-white/10 pl-6 space-y-10 ml-2">
              {timelineData.map((item, idx) => (
                <div key={idx} className="timeline-item relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-background" />
                  <span className="text-xs text-accent font-mono">{item.period}</span>
                  <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                  <h4 className="text-sm text-text-secondary font-medium mb-3">{item.company}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 service-trigger">
            <h2 className="text-3xl font-bold mb-12">Expertise & <span className="text-accent">Services</span></h2>
            <div className="flex flex-wrap gap-3">
              {servicesData.map((service, idx) => (
                <div key={idx} className="service-chip px-5 py-3 rounded-2xl glass-panel border border-white/5 text-sm font-medium hover:border-accent/40 transition-colors cursor-default">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}