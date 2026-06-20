import React, { useEffect, useState } from 'react';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth performance
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="pt-24 pb-48 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto relative z-10"
      style={{ transform: `translateY(${scrollY * 0.25}px)` }} // Subtle parallax
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
        Generate Professional <br className="hidden sm:block" />
        <span className="text-gradient">
          Brand Color Palettes
        </span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12 font-medium leading-relaxed">
        Create beautiful industry-specific color systems for websites, apps, startups, and personal brands. Built to ensure accessibility and high readability.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-300">
        <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-700 shadow-sm">
          <Layers className="w-4 h-4 text-primary" />
          <span>50+ Curated Palettes</span>
        </div>
        <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-700 shadow-sm">
          <Zap className="w-4 h-4 text-primary" />
          <span>Industry-Specific</span>
        </div>
        <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-700 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>Accessibility Checked</span>
        </div>
      </div>
    </div>
  );
}
