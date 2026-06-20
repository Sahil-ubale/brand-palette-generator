import React from 'react';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
        Generate Professional <br className="hidden sm:block" />
        <span className="text-gray-900">
          Brand Color Palettes
        </span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10">
        Create beautiful industry-specific color systems for websites, apps, startups, and personal brands. Built to ensure accessibility and high readability.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
          <Layers className="w-4 h-4 text-accent" />
          <span>50+ Curated Palettes</span>
        </div>
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
          <Zap className="w-4 h-4 text-accent" />
          <span>Industry-Specific</span>
        </div>
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-accent" />
          <span>Accessibility Checked</span>
        </div>
      </div>
    </div>
  );
}
