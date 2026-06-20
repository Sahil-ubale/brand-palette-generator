import React from 'react';
import { Palette, ExternalLink } from 'lucide-react';
import Logo from '../assets/svg-logo.svg'

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6">
              <img src={Logo} alt="" />
            </div>
            <span className="font-extrabold text-[14px] sm:text-xl tracking-tight text-white">Brand Palette Generator</span>
          </div>
          <div>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-[12px] sm:text-sm font-bold text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
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
