import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function PaletteCard({ role, hex, onCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    onCopy(hex);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div 
        className="h-36 w-full transition-transform duration-500 group-hover:scale-105 origin-bottom" 
        style={{ backgroundColor: hex }}
      ></div>
      <div className="p-5 bg-white flex flex-col items-center relative z-10">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">{role}</span>
        <span className="text-slate-800 font-mono font-semibold tracking-wide mb-4">{hex}</span>
        <button
          onClick={handleCopy}
          className="flex items-center justify-center space-x-1.5 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-semibold rounded-xl transition-colors border border-slate-100"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
    </div>
  );
}

export default function PaletteResults({ palette }) {
  const [toastMessage, setToastMessage] = useState(null);

  const handleCopy = (hex) => {
    setToastMessage(`Copied ${hex}`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  if (!palette) return null;

  const roles = [
    { key: 'primary', label: 'Primary' },
    { key: 'secondary', label: 'Secondary' },
    { key: 'accent', label: 'Accent' },
    { key: 'background', label: 'Background' },
    { key: 'text', label: 'Text' }
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-12 relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 animate-fade-in">
        {roles.map(({ key, label }) => (
          <PaletteCard 
            key={key} 
            role={label} 
            hex={palette[key]} 
            onCopy={handleCopy} 
          />
        ))}
      </div>

      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 animate-slide-up z-50">
          <Check className="w-5 h-5 text-green-400" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
