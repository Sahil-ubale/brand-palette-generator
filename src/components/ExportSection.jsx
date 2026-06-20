import React, { useState } from 'react';
import { Copy, Check, Code, FileJson } from 'lucide-react';

export default function ExportSection({ palette }) {
  const [copiedCss, setCopiedCss] = useState(false);
  const [copiedTailwind, setCopiedTailwind] = useState(false);
  
  if (!palette) return null;

  const cssVariables = `:root {
  --primary: ${palette.primary};
  --secondary: ${palette.secondary};
  --accent: ${palette.accent};
  --background: ${palette.background};
  --text: ${palette.text};
}`;

  const tailwindConfig = `module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "${palette.primary}",
        secondary: "${palette.secondary}",
        accent: "${palette.accent}",
        background: "${palette.background}",
        text: "${palette.text}",
      }
    }
  }
}`;

  const handleCopyCss = () => {
    navigator.clipboard.writeText(cssVariables);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2000);
  };

  const handleCopyTailwind = () => {
    navigator.clipboard.writeText(tailwindConfig);
    setCopiedTailwind(true);
    setTimeout(() => setCopiedTailwind(false), 2000);
  };

  return (
    <div className="animate-slide-up">
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Export</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* CSS Export */}
        <div className="bg-[#0F172A] rounded-2xl p-5 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 text-blue-400">
              <Code className="w-4 h-4" />
              <span className="font-bold text-xs tracking-wide uppercase">CSS Variables</span>
            </div>
            <button
              onClick={handleCopyCss}
              className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            >
              {copiedCss ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCss ? 'Copied!' : 'Copy CSS'}</span>
            </button>
          </div>
          <pre className="text-sm font-mono text-slate-300 overflow-x-auto p-4 bg-black/30 rounded-xl flex-1 custom-scrollbar">
            <code>{cssVariables}</code>
          </pre>
        </div>

        {/* Tailwind Export */}
        <div className="bg-[#0F172A] rounded-2xl p-5 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 text-teal-400">
              <FileJson className="w-4 h-4" />
              <span className="font-bold text-xs tracking-wide uppercase">Tailwind Config</span>
            </div>
            <button
              onClick={handleCopyTailwind}
              className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            >
              {copiedTailwind ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedTailwind ? 'Copied!' : 'Copy Config'}</span>
            </button>
          </div>
          <pre className="text-sm font-mono text-slate-300 overflow-x-auto p-4 bg-black/30 rounded-xl flex-1 custom-scrollbar">
            <code>{tailwindConfig}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
