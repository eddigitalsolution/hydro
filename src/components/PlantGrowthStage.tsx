import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Thermometer, Droplets, Zap, Shield, Sprout } from 'lucide-react';

export const PlantGrowthStage: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(3);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  React.useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % 4);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const stages = [
    {
      id: 0,
      title: '1. SEED',
      subtitle: 'Precision Dormancy Break',
      days: 'Day 0 - 3',
      temp: '22.4°C',
      humidity: '88%',
      ph: '5.8',
      light: 'Dark Warm (Far-Red LED)',
      ppm: '300 PPM',
      description:
        'Selected non-GMO seeds are placed in bio-degradable rockwool plugs under precise far-red wavelength LED pulses to initiate rapid radical emergence without soil contact.',
    },
    {
      id: 1,
      title: '2. SPROUT',
      subtitle: 'Root System Anchor & Radicle',
      days: 'Day 4 - 8',
      temp: '21.8°C',
      humidity: '75%',
      ph: '5.9',
      light: 'Blue Spectrum (450nm)',
      ppm: '650 PPM',
      description:
        'The primary hypocotyl emerges while pure misted nutrient channels hydrate emerging root capillaries. Blue spectral light strengthens early cellular cell walls.',
    },
    {
      id: 2,
      title: '3. LEAF',
      subtitle: 'Vegetative Canopy Expansion',
      days: 'Day 9 - 18',
      temp: '20.5°C',
      humidity: '65%',
      ph: '6.0',
      light: 'Full Spectrum Quantum LED',
      ppm: '980 PPM',
      description:
        'True cotyledon and secondary leaves expand. Dissolved oxygen levels in the nutrient bath are maintained at >9.5 mg/L to maximize photosynthesis index.',
    },
    {
      id: 3,
      title: '4. FULL PLANT',
      subtitle: 'Peak Biomass & Nutrient Maturity',
      days: 'Day 19 - 28',
      temp: '19.8°C',
      humidity: '60%',
      ph: '6.2',
      light: 'Sun-Simulated Broadband (660nm)',
      ppm: '1250 PPM',
      description:
        'Dense, crispy, nutrient-packed leaf canopy ready for harvest. Flavonoid concentration is optimized by 30% over conventional soil farming.',
    },
  ];

  const currentInfo = stages[activeStage];

  return (
    <section id="growth-lab" className="py-24 bg-bio-dark relative overflow-hidden border-t border-bio-border/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-bio-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bio-card border border-bio-green/30 text-bio-green text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>Interactive Growth Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            THE <span className="text-gradient-green">PLANT GROWTH</span> LAB
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Interact with our hydroponic stage controller to observe how precise LED spectra & liquid nutrients transform a single seed into prime harvest.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => {
                setActiveStage(stage.id);
                setIsPlaying(false);
              }}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 border ${
                activeStage === stage.id
                  ? 'bg-bio-card text-bio-green border-bio-green/80'
                  : 'bg-bio-card/60 text-slate-400 border-bio-border/80 hover:border-bio-green/40 hover:text-slate-200'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeStage === stage.id ? 'bg-bio-green animate-pulse' : 'bg-bio-muted'}`} />
              <span>{stage.title}</span>
            </button>
          ))}

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-xl bg-bio-card border border-bio-teal/50 text-bio-teal hover:bg-bio-teal hover:text-bio-dark transition-all ml-2"
            title={isPlaying ? 'Pause Auto Growth Cycle' : 'Play Auto Growth Cycle'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-bio-card/60 border border-bio-border p-6 sm:p-10 rounded-3xl backdrop-blur-xl">
          
          <div className="lg:col-span-6 flex flex-col items-center justify-center min-h-95 relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full border border-dashed border-bio-green/20 animate-spin" style={{ animationDuration: '30s' }} />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -10 }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 20,
                    mass: 0.8,
                    opacity: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <svg viewBox="0 0 200 240" className="w-full h-full">
                    <defs>
                      <linearGradient id="stemGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="100%" stopColor="#00FF87" />
                      </linearGradient>
                      <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00FF87" />
                        <stop offset="100%" stopColor="#047857" />
                      </linearGradient>
                    </defs>

                    <polygon points="75,200 125,200 115,225 85,225" fill="#1A2923" stroke="#00FF87" strokeWidth="1.5" />
                    <line x1="40" y1="215" x2="160" y2="215" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

                    {activeStage === 0 && (
                      <g>
                        <rect x="85" y="180" width="30" height="20" fill="#2A3C33" rx="2" />
                        <ellipse cx="100" cy="188" rx="6" ry="9" fill="#FFD700" className="animate-pulse" />
                        <circle cx="100" cy="188" r="2" fill="#00FF87" />
                      </g>
                    )}

                    {activeStage === 1 && (
                      <g>
                        <path d="M100 200 Q95 210 90 225" stroke="#00E5FF" strokeWidth="2" fill="none" />
                        <path d="M100 200 Q98 170 100 150" stroke="url(#stemGradient)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                        <path d="M100 150 C90 142 80 145 78 138 C88 138 96 144 100 150" fill="url(#leafGradient)" />
                        <path d="M100 150 C110 142 120 145 122 138 C112 138 104 144 100 150" fill="url(#leafGradient)" />
                      </g>
                    )}

                    {activeStage === 2 && (
                      <g>
                        <path d="M90 200 C80 215 70 220 60 230 M100 200 C100 215 105 225 110 235 M110 200 C120 215 130 220 140 230" stroke="#00E5FF" strokeWidth="1.5" fill="none" />
                        <path d="M100 200 Q97 140 100 100" stroke="url(#stemGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <path d="M100 160 C75 145 45 155 40 135 C60 130 85 145 100 160" fill="url(#leafGradient)" />
                        <path d="M100 140 C125 125 155 135 160 115 C140 110 115 125 100 140" fill="url(#leafGradient)" />
                        <path d="M100 110 C80 95 60 100 55 85 C75 80 90 95 100 110" fill="url(#leafGradient)" />
                        <path d="M100 100 C120 85 140 90 145 75 C125 70 110 85 100 100" fill="url(#leafGradient)" />
                      </g>
                    )}

                    {activeStage === 3 && (
                      <g>
                        <path d="M85 200 C70 215 50 225 35 240 M95 200 C92 218 88 230 80 245 M105 200 C108 218 112 230 120 245 M115 200 C130 215 150 225 165 240" stroke="#00E5FF" strokeWidth="2" strokeDasharray="5 2" fill="none" />
                        <path d="M100 200 Q98 120 100 65" stroke="url(#stemGradient)" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                        <path d="M100 170 C65 155 35 165 25 140 C50 130 80 150 100 170" fill="url(#leafGradient)" />
                        <path d="M100 150 C135 135 165 145 175 120 C150 110 120 130 100 150" fill="url(#leafGradient)" />
                        <path d="M100 130 C70 110 40 120 30 95 C60 90 85 110 100 130" fill="url(#leafGradient)" />
                        <path d="M100 110 C130 90 160 100 170 75 C140 70 115 90 100 110" fill="url(#leafGradient)" />
                        <path d="M100 85 C80 65 60 70 50 50 C70 45 90 65 100 85" fill="url(#leafGradient)" />
                        <path d="M100 70 C120 50 140 55 150 35 C130 30 110 50 100 70" fill="url(#leafGradient)" />
                        <path d="M100 65 C90 40 95 20 100 10 C105 20 110 40 100 65" fill="#60EFFF" />
                      </g>
                    )}
                  </svg>
                </motion.div>
              </AnimatePresence>

              <div className="absolute -bottom-2 bg-bio-dark border border-bio-green/40 px-4 py-1.5 rounded-full font-mono text-xs text-bio-green font-semibold">
                {currentInfo.days}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-bio-teal font-mono text-xs uppercase tracking-widest font-semibold mb-1">
                {currentInfo.subtitle}
              </div>
              <h3 className="text-3xl font-extrabold text-white font-sans">
                {currentInfo.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mt-3 font-sans">
                {currentInfo.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              
              <div className="p-3.5 rounded-xl bg-bio-dark/80 border border-bio-border">
                <div className="flex items-center space-x-1.5 text-bio-muted text-[11px] font-mono uppercase mb-1">
                  <Thermometer className="w-3.5 h-3.5 text-bio-gold" />
                  <span>Target Temp</span>
                </div>
                <div className="text-white font-mono font-bold text-base">{currentInfo.temp}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-bio-dark/80 border border-bio-border">
                <div className="flex items-center space-x-1.5 text-bio-muted text-[11px] font-mono uppercase mb-1">
                  <Droplets className="w-3.5 h-3.5 text-bio-teal" />
                  <span>Ambient RH</span>
                </div>
                <div className="text-white font-mono font-bold text-base">{currentInfo.humidity}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-bio-dark/80 border border-bio-border">
                <div className="flex items-center space-x-1.5 text-bio-muted text-[11px] font-mono uppercase mb-1">
                  <Zap className="w-3.5 h-3.5 text-bio-green" />
                  <span>Nutrient pH</span>
                </div>
                <div className="text-white font-mono font-bold text-base">{currentInfo.ph}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-bio-dark/80 border border-bio-border">
                <div className="flex items-center space-x-1.5 text-bio-muted text-[11px] font-mono uppercase mb-1">
                  <Shield className="w-3.5 h-3.5 text-bio-accent" />
                  <span>EC / PPM</span>
                </div>
                <div className="text-white font-mono font-bold text-base">{currentInfo.ppm}</div>
              </div>

              <div className="col-span-2 p-3.5 rounded-xl bg-bio-dark/80 border border-bio-border">
                <div className="text-bio-muted text-[11px] font-mono uppercase mb-1">
                  Spectrum Recipe
                </div>
                <div className="text-bio-green font-mono font-semibold text-xs truncate">
                  {currentInfo.light}
                </div>
              </div>

            </div>

            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-mono text-bio-muted">
                <span>GROWTH CYCLE PROGRESS</span>
                <span className="text-bio-green font-bold">{Math.round(((activeStage + 1) / 4) * 100)}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-bio-dark border border-bio-border overflow-hidden">
                <motion.div
                  className="h-full bg-linear-to-r from-bio-teal to-bio-green"
                  animate={{ width: `${((activeStage + 1) / 4) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
