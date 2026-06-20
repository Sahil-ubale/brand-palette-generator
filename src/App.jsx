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

  // Auto-generate default palette on first load
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
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] relative overflow-x-hidden selection:bg-gray-200 selection:text-gray-900">
      {/* Subtle Premium Background Mesh */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))] pointer-events-none"></div>
      
      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        
        <GeneratorCard 
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          onGenerate={handleGenerate}
          onShuffle={handleShuffle}
        />

        {palette && (
          <div className="flex flex-col gap-8">
            <PaletteResults palette={palette} />
            <AccessibilitySection palette={palette} />
            <PreviewSection palette={palette} />
            <ExportSection palette={palette} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
