import React from 'react';
import { getContrastRatio, evaluateWCAG } from '../utils/accessibility';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';

export default function AccessibilitySection({ palette }) {
  if (!palette) return null;

  const primaryBgContrast = getContrastRatio(palette.primary, palette.background);
  const textBgContrast = getContrastRatio(palette.text, palette.background);

  const primaryEval = evaluateWCAG(primaryBgContrast, true); // Primary usually for buttons/large elements
  const textEval = evaluateWCAG(textBgContrast, false); // Text for normal body copy

  const renderBadge = (evaluation) => {
    if (evaluation.status === 'AAA Passed') {
      return (
        <span className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide border border-emerald-200/60 shadow-sm">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>AAA PASS</span>
        </span>
      );
    }
    if (evaluation.status === 'AA Passed') {
      return (
        <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide border border-blue-200/60 shadow-sm">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>AA PASS</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center space-x-1.5 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide border border-amber-200/60 shadow-sm">
        <AlertTriangle className="w-3.5 h-3.5" />
        <span>IMPROVE</span>
      </span>
    );
  };

  return (
    <div className="animate-slide-up">
      <div className="flex items-center space-x-2 mb-6">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Accessibility</h2>
          <div className="group relative">
            <Info className="w-5 h-5 text-slate-400 cursor-help" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900 text-white text-xs p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
              WCAG 2.1 requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
            </div>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex justify-between items-center transition-all hover:-translate-y-0.5 duration-300 group">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Primary · Background</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl font-extrabold text-slate-800 tracking-tight">{primaryBgContrast}</span>
                <span className="text-lg font-bold text-slate-300">:1</span>
              </div>
            </div>
            <div>{renderBadge(primaryEval)}</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex justify-between items-center transition-all hover:-translate-y-0.5 duration-300 group">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Text · Background</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl font-extrabold text-slate-800 tracking-tight">{textBgContrast}</span>
                <span className="text-lg font-bold text-slate-300">:1</span>
              </div>
            </div>
            <div>{renderBadge(textEval)}</div>
          </div>
        </div>
    </div>
  );
}
