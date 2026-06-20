import React from 'react';
import { RefreshCcw, Settings2 } from 'lucide-react';
import { industries, styles } from '../data/palettes';

export default function GeneratorCard({ 
  selectedIndustry, 
  setSelectedIndustry, 
  selectedStyle, 
  setSelectedStyle, 
  onGenerate, 
  onShuffle 
}) {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-12">
      <div className="glass-card p-6 md:p-8 animate-slide-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Industry</label>
            <div className="relative">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-accent focus:border-accent block p-3 appearance-none transition-colors"
              >
                {industries.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Brand Style</label>
            <div className="relative">
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-accent focus:border-accent block p-3 appearance-none transition-colors"
              >
                {styles.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onGenerate}
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all shadow-sm active:scale-[0.98]"
          >
            <Settings2 className="w-5 h-5" />
            <span>Generate Palette</span>
          </button>
          <button
            onClick={onShuffle}
            className="flex-1 flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all shadow-sm active:scale-[0.98]"
          >
            <RefreshCcw className="w-5 h-5" />
            <span>Shuffle Palette</span>
          </button>
        </div>
      </div>
    </div>
  );
}
