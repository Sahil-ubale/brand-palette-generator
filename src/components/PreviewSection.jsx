import React, { useState } from 'react';
import { ArrowRight, Box, Shield, Zap, BarChart2, Users, TrendingUp, Home, Settings, Bell, Search, ChevronRight, MoreHorizontal } from 'lucide-react';

function SegmentedToggle({ active, onChange }) {
  return (
    <div className="inline-flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200/60">
      {['landing', 'dashboard'].map((mode) => (
        <button
          key={mode}
          onClick={() => onChange(mode)}
          className={`relative px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 capitalize ${
            active === mode
              ? 'bg-white text-slate-800 shadow-sm border border-slate-200/60'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {mode === 'landing' ? 'Landing Page' : 'Dashboard'}
        </button>
      ))}
    </div>
  );
}

function LandingPreview({ palette }) {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar" style={{ backgroundColor: palette.background, color: palette.text }}>
      {/* Mock Navbar */}
      <nav className="px-6 py-4 flex justify-between items-center sticky top-0 backdrop-blur-md bg-inherit z-10" style={{ borderBottom: `1px solid ${palette.secondary}18` }}>
        <div className="font-extrabold text-lg flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: palette.primary }}>
            <span className="text-white text-xs font-black">A</span>
          </div>
          <span>Acme</span>
        </div>
        <div className="hidden sm:flex items-center space-x-6 text-sm font-semibold opacity-70">
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Features</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Pricing</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">About</span>
        </div>
        <button className="px-4 py-2 rounded-xl text-sm font-bold transition-transform hover:scale-105" style={{ backgroundColor: palette.primary, color: '#fff' }}>
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <div className="px-6 py-20 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 mb-6 px-3 py-1.5 rounded-full border text-xs font-semibold" style={{ borderColor: `${palette.primary}30`, color: palette.primary, backgroundColor: `${palette.primary}08` }}>
          <span>✦</span>
          <span>Introducing v2.0 — Now with AI</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Build Something <br />
          <span style={{ color: palette.primary }}>Incredible Today</span>
        </h1>
        <p className="text-base sm:text-lg mb-10 opacity-70 max-w-xl mx-auto leading-relaxed">
          The fastest way to launch your next big idea. Integrate seamlessly and watch your productivity soar.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="px-7 py-3.5 rounded-2xl font-bold flex items-center space-x-2 shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: palette.primary, color: '#fff' }}>
            <span>Start for Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-7 py-3.5 rounded-2xl font-semibold border transition-transform hover:scale-105" style={{ borderColor: `${palette.secondary}40`, color: palette.text }}>
            View Docs →
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-14" style={{ backgroundColor: `${palette.secondary}06` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold mb-3">Why teams love Acme</h2>
            <p className="opacity-60 max-w-lg mx-auto text-sm leading-relaxed">Everything you need to build faster and collaborate smarter.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: 'Blazing Fast', desc: 'Optimized for speed at every layer of the stack.', colorKey: 'primary' },
              { icon: Shield, title: 'Enterprise Secure', desc: 'SOC 2 compliant with end-to-end encryption.', colorKey: 'accent' },
              { icon: Box, title: 'Fully Modular', desc: 'Build only what you need. Extend everything.', colorKey: 'secondary' },
            ].map(({ icon: Icon, title, desc, colorKey }) => (
              <div key={title} className="p-5 rounded-2xl border transition-shadow hover:shadow-md" style={{ backgroundColor: palette.background, borderColor: `${palette[colorKey]}20` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${palette[colorKey]}15`, color: palette[colorKey] }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-1.5 text-sm">{title}</h3>
                <p className="opacity-60 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardPreview({ palette }) {
  const metrics = [
    { label: 'Total Revenue', value: '$48,295', change: '+12.5%', up: true },
    { label: 'Active Users', value: '3,842', change: '+8.1%', up: true },
    { label: 'Conversion', value: '4.6%', change: '-0.4%', up: false },
    { label: 'Avg. Session', value: '3m 42s', change: '+1.2%', up: true },
  ];

  const tableRows = [
    { name: 'Pro Plan', user: 'sarah@design.co', status: 'Active', amount: '$49' },
    { name: 'Starter', user: 'dev@startup.io', status: 'Active', amount: '$19' },
    { name: 'Enterprise', user: 'team@corp.com', status: 'Trialing', amount: '$199' },
    { name: 'Pro Plan', user: 'hello@agency.io', status: 'Active', amount: '$49' },
  ];

  return (
    <div className="flex flex-1 overflow-hidden" style={{ backgroundColor: '#F8FAFC', color: palette.text }}>
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-52 border-r shrink-0 py-5 px-3 bg-white" style={{ borderColor: `${palette.secondary}15` }}>
        <div className="flex items-center space-x-2 px-3 mb-6">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: palette.primary }}>
            <span className="text-white text-xs font-black">A</span>
          </div>
          <span className="font-extrabold text-sm text-slate-800">Acme</span>
        </div>
        {[
          { icon: Home, label: 'Dashboard', active: true },
          { icon: Users, label: 'Customers' },
          { icon: BarChart2, label: 'Analytics' },
          { icon: TrendingUp, label: 'Revenue' },
          { icon: Settings, label: 'Settings' },
        ].map(({ icon: Icon, label, active }) => (
          <div key={label} className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-xl mb-0.5 text-xs font-semibold cursor-pointer transition-colors ${active ? 'text-primary bg-primary/5' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`} style={active ? { color: palette.primary, backgroundColor: `${palette.primary}0A` } : {}}>
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* Top nav */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-10" style={{ borderColor: `${palette.secondary}15` }}>
          <div className="flex items-center space-x-2 bg-slate-100 rounded-xl px-3 py-2 w-48">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs text-slate-400">Search...</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bell className="w-4 h-4 text-slate-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full" style={{ backgroundColor: palette.primary }}></div>
            </div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: palette.primary }}>S</div>
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-base font-extrabold text-slate-800 mb-6">Overview</h1>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {metrics.map(({ label, value, change, up }) => (
              <div key={label} className="bg-white border rounded-2xl p-4" style={{ borderColor: `${palette.secondary}15` }}>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{label}</p>
                <p className="text-xl font-extrabold text-slate-800">{value}</p>
                <p className={`text-xs font-semibold mt-1 ${up ? 'text-emerald-600' : 'text-red-500'}`}>{change}</p>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="bg-white border rounded-2xl p-5 mb-5" style={{ borderColor: `${palette.secondary}15` }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-700">Revenue Over Time</span>
              <span className="text-[10px] font-semibold text-slate-400">Last 30 days</span>
            </div>
            <div className="h-28 flex items-end gap-1.5 px-1">
              {[35, 55, 45, 70, 60, 80, 65, 90, 75, 88, 72, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-lg transition-all" style={{ height: `${h}%`, backgroundColor: i === 11 ? palette.primary : `${palette.primary}30` }}></div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border rounded-2xl overflow-hidden" style={{ borderColor: `${palette.secondary}15` }}>
            <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: `${palette.secondary}10` }}>
              <span className="text-xs font-bold text-slate-700">Recent Subscriptions</span>
              <MoreHorizontal className="w-4 h-4 text-slate-400" />
            </div>
            <div>
              {tableRows.map((row, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3 border-b last:border-b-0 hover:bg-slate-50 transition-colors cursor-default" style={{ borderColor: `${palette.secondary}08` }}>
                  <div>
                    <p className="text-xs font-bold text-slate-700">{row.name}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{row.user}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{row.status}</span>
                    <span className="text-xs font-bold text-slate-700">{row.amount}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PreviewSection({ palette }) {
  const [previewMode, setPreviewMode] = useState('landing');

  if (!palette) return null;

  return (
    <div className="bg-white rounded-[32px] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_32px_64px_-16px_rgba(0,0,0,0.5)] p-6 md:p-10 animate-slide-up">
      {/* Section header with toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">Live Preview</h2>
          <p className="text-sm text-slate-400 mt-0.5 font-medium">See your palette applied in real-world context</p>
        </div>
        <SegmentedToggle active={previewMode} onChange={setPreviewMode} />
      </div>
      
      {/* Browser chrome */}
      <div className="rounded-[28px] overflow-hidden border border-slate-200 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] bg-white flex flex-col" style={{ height: previewMode === 'dashboard' ? '640px' : '580px' }}>
        <div className="bg-slate-100/80 px-5 py-3.5 border-b border-slate-200 flex items-center space-x-3 shrink-0">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white/70 border border-slate-200/70 rounded-lg px-4 py-1 text-xs text-slate-400 font-medium">
              {previewMode === 'landing' ? 'acme.com' : 'app.acme.com/dashboard'}
            </div>
          </div>
        </div>

        {previewMode === 'landing' 
          ? <LandingPreview palette={palette} /> 
          : <DashboardPreview palette={palette} />
        }
      </div>
    </div>
  );
}
