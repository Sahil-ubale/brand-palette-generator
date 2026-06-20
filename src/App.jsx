import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GeneratorCard from './components/GeneratorCard';
import PaletteResults from './components/PaletteResults';
import AccessibilitySection from './components/AccessibilitySection';
import PreviewSection from './components/PreviewSection';
import ExportSection from './components/ExportSection';
import Footer from './components/Footer';

import { generatePalette, shufflePalette } from './utils/paletteGenerator';

function App() {
  const [selectedIndustry, setSelectedIndustry] = useState('SaaS');
  const [selectedStyle, setSelectedStyle] = useState('Modern');
  const [palette, setPalette] = useState(null);

  useEffect(() => {
    const initialPalette = generatePalette('SaaS', 'Modern');
    setPalette(initialPalette);
  }, []);

  const handleGenerate = () => {
    const newPalette = generatePalette(selectedIndustry, selectedStyle);
    setPalette(newPalette);
  };

  const handleShuffle = () => {
    if (palette) {
      const shuffledPalette = shufflePalette(selectedIndustry, selectedStyle, palette);
      setPalette(shuffledPalette);
    }
  };

  return (
    /* ── Full-page dark canvas ── */
    <div className="min-h-screen flex flex-col bg-[#0B1220] relative overflow-x-hidden selection:bg-primary/20 selection:text-primary font-sans">
      
      {/* Ambient glow layer — spans full page at very low opacity */}
      <div className="fixed inset-0 pointer-events-none z-0"
           style={{
             background: [
               'radial-gradient(ellipse 70% 50% at 15% 20%, rgba(37,99,235,0.12) 0%, transparent 60%)',
               'radial-gradient(ellipse 60% 50% at 85% 30%, rgba(124,58,237,0.08) 0%, transparent 55%)',
               'radial-gradient(ellipse 50% 40% at 50% 80%, rgba(37,99,235,0.05) 0%, transparent 60%)',
             ].join(',')
           }}
      ></div>

      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />

        <Hero />
        
        {/* ── Workspace Card — floats above dark canvas ── */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20 -mt-20 mb-10">
          <div className="bg-white rounded-[32px] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_32px_64px_-16px_rgba(0,0,0,0.5)] p-6 md:p-12 flex flex-col gap-12 sm:gap-16">
            
            <GeneratorCard 
              selectedIndustry={selectedIndustry}
              setSelectedIndustry={setSelectedIndustry}
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              onGenerate={handleGenerate}
              onShuffle={handleShuffle}
            />

            {palette && (
              <>
                <div className="h-px w-full bg-slate-100"></div>
                <PaletteResults palette={palette} />
                <div className="h-px w-full bg-slate-100"></div>
                <AccessibilitySection palette={palette} />
                <div className="h-px w-full bg-slate-100"></div>
                <ExportSection palette={palette} />
              </>
            )}
          </div>
        </div>

        {/* ── Preview Card — also floats above dark canvas ── */}
        {palette && (
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-10">
            <PreviewSection palette={palette} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
