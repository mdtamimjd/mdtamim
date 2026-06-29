"use client";
import { useState } from "react";
import { blogData } from "@/app/data/portfolioData" ;

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("Please complete all required entries.");
      return;
    }
    setStatus("Transmission validated successfully.");
  };

  return (
    <section id="contact" className="py-32 bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-bold mb-8">Initiate <span className="text-primary">Contact</span></h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-primary transition-colors" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                <input type="email" placeholder="Email" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-primary transition-colors" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-primary transition-colors" value={formState.subject} onChange={e => setFormState({...formState, subject: e.target.value})} />
              <textarea placeholder="Message" rows={5} required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-primary transition-colors resize-none" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} />
              <button type="submit" className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary/90 font-medium text-sm transition-colors w-full sm:w-auto">Send Message</button>
              {status && <p className="text-xs text-text-secondary pt-2">{status}</p>}
            </form>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold mb-8">Notebook Updates</h3>
            <div className="space-y-4">
              {blogData.map((post, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                  <span className="text-[10px] font-mono text-accent">{post.date}</span>
                  <h4 className="text-base font-bold mt-1 text-text hover:text-primary transition-colors">{post.title}</h4>
                  <p className="text-xs text-text-secondary mt-1 line-clamp-1">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}