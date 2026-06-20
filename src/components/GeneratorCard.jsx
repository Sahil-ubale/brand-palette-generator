import React, { useState, useRef, useEffect } from 'react';
import { RefreshCcw, Settings2, ChevronDown, Check } from 'lucide-react';
import { industries, styles } from '../data/palettes';

function CustomSelect({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2" ref={containerRef}>
      <label className="block text-xs font-bold text-slate-500 tracking-wide uppercase px-1">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between bg-white/60 hover:bg-white/90 border ${isOpen ? 'border-primary ring-4 ring-primary/10' : 'border-slate-200/80'} text-slate-800 text-base font-semibold rounded-[20px] p-4 transition-all shadow-sm outline-none`}
        >
          <span>{value}</span>
          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[20px] shadow-[0_8px_32px_-4px_rgba(0,0,0,0.08)] overflow-hidden animate-fade-in origin-top">
            <div className="max-h-64 overflow-y-auto custom-scrollbar p-1.5">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-[14px] transition-colors mb-1 last:mb-0 ${
                    value === option 
                      ? 'bg-primary/5 text-primary font-bold' 
                      : 'text-slate-700 font-medium hover:bg-slate-50'
                  }`}
                  style={{ minHeight: '44px' }}
                >
                  <span>{option}</span>
                  {value === option && <Check className="w-4 h-4 text-primary" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GeneratorCard({ 
  selectedIndustry, 
  setSelectedIndustry, 
  selectedStyle, 
  setSelectedStyle, 
  onGenerate, 
  onShuffle 
}) {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-16 relative z-20">
      <div className="glass-card p-6 md:p-8 animate-slide-up">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <CustomSelect 
            label="Industry" 
            options={industries} 
            value={selectedIndustry} 
            onChange={setSelectedIndustry} 
          />
          <CustomSelect 
            label="Brand Style" 
            options={styles} 
            value={selectedStyle} 
            onChange={setSelectedStyle} 
          />
        </div>
        
        <div className="flex flex-col gap-3">
          <button
            onClick={onGenerate}
            className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Settings2 className="w-5 h-5" />
            <span>Generate Palette</span>
          </button>
          
          <button
            onClick={onShuffle}
            className="w-full flex items-center justify-center space-x-2 bg-white/50 hover:bg-white/80 border border-slate-200/80 text-slate-600 hover:text-slate-900 font-semibold py-3.5 px-6 rounded-2xl transition-all hover:shadow-sm active:translate-y-0"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Shuffle Palette</span>
          </button>
        </div>

      </div>
    </div>
  );
}
