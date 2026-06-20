import React from 'react';
import { ArrowRight, Box, Shield, Zap } from 'lucide-react';

export default function PreviewSection({ palette }) {
  if (!palette) return null;

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-20 animate-slide-up">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Live Landing Page Preview</h3>
      
      {/* Container for the preview with an outline and shadow to make it feel like a browser window */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white flex flex-col h-[600px]">
        {/* Mock Browser Header */}
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 text-center text-xs font-medium text-gray-400">preview.digitalheroes.co</div>
        </div>

        {/* Dynamic Preview Body */}
        <div 
          className="flex-1 overflow-y-auto custom-scrollbar"
          style={{ backgroundColor: palette.background, color: palette.text }}
        >
          {/* Mock Navbar */}
          <nav className="px-6 py-4 flex justify-between items-center" style={{ borderBottom: `1px solid ${palette.secondary}20` }}>
            <div className="font-bold text-lg flex items-center space-x-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: palette.primary }}>
                <span className="text-white text-xs">▲</span>
              </div>
              <span>Acme Corp</span>
            </div>
            <div className="hidden sm:flex items-center space-x-6 text-sm font-medium">
              <span className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity">Features</span>
              <span className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity">Pricing</span>
              <span className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity">About</span>
              <button 
                className="px-4 py-2 rounded-lg transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: palette.primary, color: palette.background }}
              >
                Sign Up
              </button>
            </div>
          </nav>

          {/* Mock Hero */}
          <div className="px-6 py-20 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Build Something <br/>
              <span style={{ color: palette.primary }}>Incredible Today</span>
            </h1>
            <p className="text-lg sm:text-xl mb-10 opacity-80 max-w-2xl mx-auto">
              The fastest way to launch your next big idea. Seamlessly integrate our tools into your workflow and watch your productivity soar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                className="px-8 py-4 rounded-xl font-bold flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95 shadow-lg"
                style={{ backgroundColor: palette.primary, color: palette.background }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                className="px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: palette.secondary, color: palette.background }}
              >
                View Documentation
              </button>
            </div>
          </div>

          {/* Mock Features */}
          <div className="px-6 py-16" style={{ backgroundColor: `${palette.secondary}0a` }}>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why choose Acme?</h2>
                <p className="opacity-80 max-w-2xl mx-auto text-lg">Everything you need to succeed in one powerful platform.</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div 
                  className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: palette.background, border: `1px solid ${palette.secondary}20` }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${palette.primary}20`, color: palette.primary }}
                  >
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                  <p className="opacity-70 leading-relaxed text-sm">Experience blazing fast performance with our highly optimized infrastructure.</p>
                </div>
                
                {/* Feature 2 */}
                <div 
                  className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: palette.background, border: `1px solid ${palette.secondary}20` }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${palette.accent}20`, color: palette.accent }}
                  >
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Highly Secure</h3>
                  <p className="opacity-70 leading-relaxed text-sm">Your data is safe with our enterprise-grade security and encryption protocols.</p>
                </div>

                {/* Feature 3 */}
                <div 
                  className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1"
                  style={{ backgroundColor: palette.background, border: `1px solid ${palette.secondary}20` }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${palette.secondary}20`, color: palette.secondary }}
                  >
                    <Box className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Modular Design</h3>
                  <p className="opacity-70 leading-relaxed text-sm">Easily extend and customize the platform to fit your unique business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
