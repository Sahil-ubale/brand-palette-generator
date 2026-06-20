import React from 'react';
import { Palette, ExternalLink } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Palette className="w-6 h-6 text-accent" />
            <span className="font-bold text-xl tracking-tight text-gray-900">Brand Palette Generator</span>
          </div>
          <div>
            <a 
              href="https://digitalheroesco.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-accent transition-colors"
            >
              <span>Built for Digital Heroes</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
