import React from 'react';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center animate-fade-in max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
        Generate Professional <br className="hidden sm:block" />
        <span className="text-gradient">
          Brand Color Palettes
        </span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 font-medium leading-relaxed">
        Create beautiful industry-specific color systems for websites, apps, startups, and personal brands. Built to ensure accessibility and high readability.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-600">
        <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200/60 shadow-sm transition-transform hover:scale-105 cursor-default">
          <Layers className="w-4 h-4 text-primary" />
          <span>50+ Curated Palettes</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200/60 shadow-sm transition-transform hover:scale-105 cursor-default">
          <Zap className="w-4 h-4 text-primary" />
          <span>Industry-Specific</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200/60 shadow-sm transition-transform hover:scale-105 cursor-default">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>Accessibility Checked</span>
        </div>
      </div>
    </div>
  );
}
