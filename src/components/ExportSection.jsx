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
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-20 animate-slide-up">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Export Palette</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* CSS Export */}
        <div className="bg-[#0F172A] rounded-2xl p-6 shadow-lg flex flex-col relative overflow-hidden group">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 text-blue-400">
              <Code className="w-5 h-5" />
              <span className="font-semibold text-sm">CSS Variables</span>
            </div>
            <button
              onClick={handleCopyCss}
              className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              {copiedCss ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCss ? 'Copied' : 'Copy CSS'}</span>
            </button>
          </div>
          <pre className="text-sm font-mono text-gray-300 overflow-x-auto p-4 bg-black/30 rounded-xl flex-1">
            <code>{cssVariables}</code>
          </pre>
        </div>

        {/* Tailwind Export */}
        <div className="bg-[#0F172A] rounded-2xl p-6 shadow-lg flex flex-col relative overflow-hidden group">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 text-teal-400">
              <FileJson className="w-5 h-5" />
              <span className="font-semibold text-sm">Tailwind Config</span>
            </div>
            <button
              onClick={handleCopyTailwind}
              className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              {copiedTailwind ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedTailwind ? 'Copied' : 'Copy Config'}</span>
            </button>
          </div>
          <pre className="text-sm font-mono text-gray-300 overflow-x-auto p-4 bg-black/30 rounded-xl flex-1">
            <code>{tailwindConfig}</code>
          </pre>
        </div>

      </div>
    </div>
  );
}
