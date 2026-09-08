import React from 'react';
import { Layers, ShieldAlert, Cpu, Wind, Sun, ArrowUpRight } from 'lucide-react';

export const OurFarm: React.FC = () => {
  const [activeLayer, setActiveLayer] = React.useState<number>(0);

  const farmPillars = [
    {
      icon: Layers,
      title: 'Vertical Stacking System',
      description:
        '12-tier vertical growth columns utilize 90% less land area than traditional horizontal soil farms, delivering 15x higher crop yield per square foot.',
      metric: '15x Yield / sq ft',
    },
    {
      icon: Cpu,
      title: 'Precision Micro-Climate Units',
      description:
        'Every vertical zone features isolated humidity, airflow, and temperature sensors linked to edge-AI controllers adjusting conditions 120 times per second.',
      metric: '< 0.5°C Variance',
    },
    {
      icon: Wind,
      title: 'Cleanroom HEPA Filtration',
      description:
        'Pressurized ISO Class 6 indoor environment eliminates airborne spores, insects, and pollutants without ever applying synthetic pesticides.',
      metric: 'ISO Class 6 Clean',
    },
    {
      icon: Sun,
      title: 'Dynamic Photonics Engine',
      description:
        'Custom light spectra tuned specifically for target plant flavonoids, maximizing chlorophyll absorption while consuming 40% less energy than standard LEDs.',
      metric: '2.8 µmol/J Efficiency',
    },
  ];

  return (
    <section id="our-farm" className="py-24 bg-bio-dark relative overflow-hidden border-t border-bio-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-bio-green font-mono text-xs font-semibold uppercase tracking-widest mb-2">
              Next-Gen Infrastructure
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
              OUR VERTICAL <span className="text-gradient-green">HYDROPONIC FARM</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 text-sm sm:text-base max-w-md font-sans">
            Built inside controlled urban cleanrooms, our vertical farm facilities operate 365 days a year independent of external weather or climate disruption.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
            {farmPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeLayer === idx;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setActiveLayer(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-bio-card border-bio-green shadow-[0_0_25px_rgba(0,255,135,0.2)] scale-[1.02]'
                      : 'bg-bio-card/40 border-bio-border hover:border-bio-green/40 hover:bg-bio-card/70'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl border ${
                        isSelected ? 'bg-bio-green text-bio-dark border-bio-green' : 'bg-bio-dark text-bio-green border-bio-border'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-white font-bold text-base font-sans">{pillar.title}</h3>
                    </div>
                    <span className="font-mono text-xs font-semibold text-bio-teal px-2.5 py-1 rounded-full bg-bio-dark border border-bio-border">
                      {pillar.metric}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm mt-3 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-bio-card/80 border border-bio-border rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono text-bio-muted uppercase tracking-wider">
                VERTICAL MODULE DIAGRAM — LAYER #{activeLayer + 1}
              </span>
              <div className="flex items-center space-x-2 text-bio-green text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-bio-green shadow-[0_0_8px_#00FF87]" />
                <span>LIVE TELEMETRY ACTIVE</span>
              </div>
            </div>

            <div className="w-full h-80 relative flex items-center justify-center">
              <svg viewBox="0 0 500 300" className="w-full h-full">
                <defs>
                  <linearGradient id="rackGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00FF87" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                <line x1="80" y1="20" x2="80" y2="280" stroke="#1A2923" strokeWidth="6" />
                <line x1="420" y1="20" x2="420" y2="280" stroke="#1A2923" strokeWidth="6" />

                {[0, 1, 2, 3].map((tierIdx) => {
                  const yPos = 50 + tierIdx * 65;
                  const isActive = activeLayer === tierIdx;
                  return (
                    <g key={tierIdx} className="transition-all duration-500">
                      <rect
                        x="70"
                        y={yPos}
                        width="360"
                        height="12"
                        rx="3"
                        fill={isActive ? '#00FF87' : '#0D1411'}
                        stroke={isActive ? '#60EFFF' : '#1A2923'}
                        strokeWidth="2"
                        className="transition-colors duration-300"
                      />

                      <line
                        x1="90"
                        y1={yPos - 35}
                        x2="410"
                        y2={yPos - 35}
                        stroke={isActive ? '#00E5FF' : '#2A3C33'}
                        strokeWidth="4"
                        strokeDasharray={isActive ? 'none' : '4 2'}
                      />

                      {[100, 140, 180, 220, 260, 300, 340, 380].map((xPos) => (
                        <circle
                          key={xPos}
                          cx={xPos}
                          cy={yPos - 12}
                          r={isActive ? 8 : 5}
                          fill={isActive ? '#00FF87' : '#10B981'}
                          opacity={isActive ? 1 : 0.4}
                          className="transition-all duration-300"
                        />
                      ))}

                      <text
                        x="435"
                        y={yPos + 9}
                        fill={isActive ? '#00FF87' : '#8E9B95'}
                        fontSize="10"
                        fontFamily="JetBrains Mono"
                      >
                        TIER 0{tierIdx + 1}
                      </text>
                    </g>
                  );
                })}

                <path
                  d="M60 40 L60 260 Q60 270 70 270 L430 270 Q440 270 440 260 L440 40"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 4"
                  className="animate-pulse"
                />
              </svg>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-bio-dark border border-bio-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <ShieldAlert className="w-5 h-5 text-bio-gold shrink-0" />
                <span className="text-xs text-slate-300 font-sans">
                  Automated harvested trays pass through non-contact UV sterilization prior to rapid cooling.
                </span>
              </div>
              <a
                href="#produce"
                className="text-bio-green text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1 hover:underline shrink-0"
              >
                <span>View Crop Output</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
