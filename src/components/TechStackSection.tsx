import React, { useState } from 'react';
import { Cpu, Sun, Activity, Database } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<number>(0);

  const techStack = [
    {
      id: 0,
      title: 'Neural Climate Optimization Engine',
      category: 'AI & Machine Learning',
      icon: Cpu,
      stats: '120 Hz Inference Loop',
      description:
        'Proprietary machine learning models continuously ingest over 5,000 sensor feeds (vapor pressure deficit, transpiration, CO2 density) to tweak ambient farm parameters dynamically.',
      features: ['Predictive Vapor Pressure Control', 'Automated Transpiration Curve Mapping', 'Zero-Human Intervention Calibration'],
    },
    {
      id: 1,
      title: 'Bio-Photonic Spectrum Tuning',
      category: 'Spectral LED Control',
      icon: Sun,
      stats: '400nm - 730nm Precision',
      description:
        'Programmable LED arrays adjust wavelength intensity hourly—shifting from blue-dominant light during dawn vegetative phases to deep red and far-red spectra during harvest maturity.',
      features: ['Anthocyanin Flavor Enhancement', 'Dynamic PAR Efficiency Adjustment', 'Circadian Light Pulse Scheduling'],
    },
    {
      id: 2,
      title: 'Autonomous Dosing & Telemetry Array',
      category: 'IoT Sensor Mesh',
      icon: Database,
      stats: '1,000+ Nodes / Tower',
      description:
        'High-speed optical turbidity sensors, micro-pH probes, and dissolved oxygen meters communicate over an isolated mesh network for instant nutrient injection.',
      features: ['Sub-Millisecond EC Metering', 'Automatic Peristaltic Dosing Pumps', 'Redundant Sensor Fallback Grid'],
    },
  ];

  const currentTech = techStack[selectedTech];

  return (
    <section id="technology" className="py-24 bg-bio-dark relative overflow-hidden border-t border-bio-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bio-card border border-bio-green/30 text-bio-green text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Autonomous Agricultural Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
            HARDWARE & <span className="text-gradient-green">SOFTWARE STACK</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            We operate at the convergence of botany, software engineering, and robotics. Every leaf in our farm is continuously monitored by intelligent feedback loops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              const isSelected = selectedTech === idx;
              return (
                <div
                  key={tech.title}
                  onClick={() => setSelectedTech(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-bio-card border-bio-green shadow-[0_0_25px_rgba(0,255,135,0.2)] scale-[1.02]'
                      : 'bg-bio-card/40 border-bio-border hover:border-bio-green/40'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl border ${
                      isSelected ? 'bg-bio-green text-bio-dark border-bio-green' : 'bg-bio-dark text-bio-green border-bio-border'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-bio-teal uppercase tracking-wider">
                        {tech.category}
                      </div>
                      <h3 className="text-white font-bold text-base font-sans mt-0.5">
                        {tech.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-bio-card border border-bio-border rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-bio-border pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-bio-green" />
                <span className="text-xs font-mono text-white font-bold uppercase">
                  SYSTEM MONITOR — {currentTech.category}
                </span>
              </div>
              <span className="font-mono text-xs text-bio-teal px-3 py-1 rounded-full bg-bio-dark border border-bio-border">
                {currentTech.stats}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white font-sans mb-4">
              {currentTech.title}
            </h3>

            <p className="text-slate-300 text-sm font-sans leading-relaxed mb-6">
              {currentTech.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-bio-muted uppercase tracking-wider font-bold">
                Core Capabilities:
              </div>
              <div className="space-y-2">
                {currentTech.features.map((feat) => (
                  <div key={feat} className="flex items-center space-x-3 p-3 rounded-xl bg-bio-dark/80 border border-bio-border/80">
                    <Cpu className="w-4 h-4 text-bio-green shrink-0" />
                    <span className="text-xs font-mono text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-bio-dark border border-bio-border/60 font-mono text-[11px] text-bio-muted space-y-1">
              <div className="text-bio-green">[AI_CORE]: Optimal transpiration reached. VPD = 1.15 kPa.</div>
              <div className="text-bio-teal">[SENSOR_MESH]: Node #402 reported EC = 1.82 mS/cm. Adjusting dosing +2%.</div>
              <div className="text-slate-400">[SPECTRUM]: Shifting LED array to 660nm deep-red recipe.</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
