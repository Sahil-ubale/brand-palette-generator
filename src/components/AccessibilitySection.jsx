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
        <span className="inline-flex items-center space-x-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-green-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>AAA Passed</span>
        </span>
      );
    }
    if (evaluation.status === 'AA Passed') {
      return (
        <span className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-blue-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>AA Passed</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center space-x-1 bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-orange-200">
        <AlertTriangle className="w-3.5 h-3.5" />
        <span>Needs Improvement</span>
      </span>
    );
  };

  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-20 animate-slide-up">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center space-x-2 mb-6">
          <h3 className="text-xl font-bold text-gray-900">Accessibility Validation</h3>
          <div className="group relative">
            <Info className="w-5 h-5 text-gray-400 cursor-help" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-gray-900 text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              WCAG 2.1 requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Primary vs Background</p>
              <div className="flex items-end space-x-2">
                <span className="text-3xl font-bold text-gray-900">{primaryBgContrast}:1</span>
              </div>
            </div>
            <div>{renderBadge(primaryEval)}</div>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Text vs Background</p>
              <div className="flex items-end space-x-2">
                <span className="text-3xl font-bold text-gray-900">{textBgContrast}:1</span>
              </div>
            </div>
            <div>{renderBadge(textEval)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
