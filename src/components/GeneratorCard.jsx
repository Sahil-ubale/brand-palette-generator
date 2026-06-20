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
                  className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-[14px] transition-colors mb-1 last:mb-0 ${value === option
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
    <div className="relative z-20">
      <div className="mb-1">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Configure</h2>
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

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onGenerate}
            className="flex-1 flex items-center justify-center space-x-2 bg-primary hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all  hover:shadow-[0_6px_20px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
          >
            <Settings2 className="w-4.5 h-4.5" />
            <span>Generate Palette</span>
          </button>

          <button
            onClick={onShuffle}
            className="flex-1 flex items-center justify-center space-x-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 font-semibold py-4 px-6 rounded-2xl transition-all active:scale-[0.99]"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Shuffle</span>
          </button>
        </div>
      </div>
    </div>
  );
}
