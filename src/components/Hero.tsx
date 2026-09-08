import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Droplets, Sun, Zap, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const [activeTier, setActiveTier] = useState<number>(1);

  const tiers = [
    {
      id: 0,
      name: 'TIER 01 • CANOPY APEX',
      crop: 'Hydro Emerald Butterhead',
      image: '/hydro_emerald_butterhead_1788772893347.jpg',
      spectrum: '660nm Deep-Red Photons',
      par: '720 µmol/m²/s',
      temp: '20.4°C',
      humidity: '62%',
      efficiency: '15x Yield / sq ft',
      color: '#00FF87',
    },
    {
      id: 1,
      name: 'TIER 02 • BIO-FLAVOR ZONE',
      crop: 'Thai Sacred Opal Basil',
      image: '/thai_sacred_opal_basil.png',
      spectrum: '450nm Blue Spectral Wave',
      par: '640 µmol/m²/s',
      temp: '22.1°C',
      humidity: '70%',
      efficiency: '+42% Essential Oils',
      color: '#A855F7',
    },
    {
      id: 2,
      name: 'TIER 03 • MICRO-CANOPY TRAY',
      crop: 'Red-Vein Sorrel Microgreens',
      image: '/red_vein_sorrel.png',
      spectrum: 'Full Quantum Broadband',
      par: '580 µmol/m²/s',
      temp: '19.8°C',
      humidity: '65%',
      efficiency: '40x Antioxidants',
      color: '#FF6B00',
    },
  ];

  const activeData = tiers[activeTier];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bio-dark">
      {/* Background Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,255,135,0.06)_0%,rgba(6,9,8,1)_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-bio-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-bio-teal/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#00FF87 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Editorial Text */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Live Telemetry Tagline Badge */}
            <div className="inline-flex max-w-full items-center space-x-2 px-3.5 py-1.5 rounded-full bg-bio-card/90 border border-bio-green/30 backdrop-blur-md overflow-x-auto no-scrollbar">
              <span className="w-2 h-2 rounded-full bg-bio-green shadow-[0_0_8px_#00FF87] shrink-0" />
              <span className="text-bio-green text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap">
                <span>PARALLEL HYDROPONIC STACK</span>
                <span className="text-slate-500">•</span>
                <span className="text-bio-teal">3D MODULE</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[0.95] font-syne">
                GROWN <br />
                <span className="text-gradient-green">
                  DIFFERENT.
                </span>
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-xl font-sans font-light leading-relaxed pt-2">
                Hover or select any tier of our isometric vertical stack to inspect real-time photobiology, spectrum tuning, and micro-climate telemetry.
              </p>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg pt-1">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-bio-card/80 border border-white/5 backdrop-blur-sm">
                <Droplets className="w-4 h-4 text-bio-teal mb-1" />
                <div className="text-white font-mono font-bold text-xs sm:text-sm">95% LESS</div>
                <div className="text-[9px] sm:text-[10px] text-bio-muted uppercase tracking-wider">Water Used</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-2xl bg-bio-card/80 border border-white/5 backdrop-blur-sm">
                <Sun className="w-4 h-4 text-bio-gold mb-1" />
                <div className="text-white font-mono font-bold text-xs sm:text-sm">365 DAYS</div>
                <div className="text-[9px] sm:text-[10px] text-bio-muted uppercase tracking-wider">Pure Harvest</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-2xl bg-bio-card/80 border border-white/5 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-bio-green mb-1" />
                <div className="text-white font-mono font-bold text-xs sm:text-sm">0% PEST</div>
                <div className="text-[9px] sm:text-[10px] text-bio-muted uppercase tracking-wider">Pesticide Free</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href="#growth-lab"
                className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-bio-card border border-bio-green/50 text-bio-green hover:bg-bio-green hover:text-bio-dark font-bold text-xs uppercase tracking-wider font-mono transition-all duration-200 flex items-center space-x-2 shadow-[0_0_20px_rgba(0,255,135,0.15)]"
              >
                <span>Explore Growth Lab</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-bio-card border border-white/10 text-slate-200 hover:border-bio-green/50 hover:text-white font-mono font-medium text-xs uppercase tracking-wider transition-all duration-200 flex items-center space-x-2"
              >
                <span>Request Sample Box</span>
                <Zap className="w-4 h-4 text-bio-teal" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Option C Interactive 3D / Parallax Isometric Vertical Stack */}
          <motion.div 
            className="lg:col-span-6 relative flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tier Selector Tabs */}
            <div className="flex items-center space-x-2 mb-6 bg-bio-card/90 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md z-20">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(tier.id)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-[11px] font-bold uppercase transition-all duration-300 ${
                    activeTier === tier.id
                      ? 'bg-bio-dark text-white border border-bio-green/50 shadow-[0_0_10px_rgba(0,255,135,0.2)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  TIER 0{tier.id + 1}
                </button>
              ))}
            </div>

            {/* Isometric Stack Visual Container */}
            <div className="relative w-full max-w-lg min-h-105 flex items-center justify-center perspective-[1000px]">
              
              {/* Stacked Interactive 3D Layers */}
              <div className="relative w-full flex flex-col space-y-4">
                {tiers.map((t, idx) => {
                  const isSelected = activeTier === idx;
                  return (
                    <motion.div
                      key={t.id}
                      onClick={() => setActiveTier(idx)}
                      animate={{
                        scale: isSelected ? 1.03 : 0.97,
                        y: isSelected ? -6 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className={`relative cursor-pointer rounded-2xl border p-4 backdrop-blur-xl transition-all duration-300 ${
                        isSelected
                          ? 'bg-linear-to-r from-[#0d1712] via-[#12241b] to-[#0d1712] border-bio-green shadow-[0_0_30px_rgba(0,255,135,0.25)] z-20'
                          : 'bg-bio-card/60 border-white/5 hover:border-bio-green/40 hover:bg-bio-card/90 z-10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0">
                            <img src={t.image} alt={t.crop} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono text-bio-muted uppercase tracking-widest">
                              {t.name}
                            </div>
                            <h4 className="text-white font-syne font-bold text-sm mt-0.5">
                              {t.crop}
                            </h4>
                          </div>
                        </div>

                        <div className="text-right font-mono">
                          <div className="text-xs font-bold" style={{ color: t.color }}>
                            {t.par}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {t.efficiency}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Dynamic Telemetry Bar on Active Tier */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-[10px] font-mono"
                          >
                            <div className="p-2 rounded-lg bg-bio-dark/80 border border-white/5">
                              <span className="text-slate-400 block">SPECTRUM</span>
                              <span className="text-bio-green font-bold truncate block">{t.spectrum}</span>
                            </div>
                            <div className="p-2 rounded-lg bg-bio-dark/80 border border-white/5">
                              <span className="text-slate-400 block">TEMP</span>
                              <span className="text-bio-teal font-bold block">{t.temp}</span>
                            </div>
                            <div className="p-2 rounded-lg bg-bio-dark/80 border border-white/5">
                              <span className="text-slate-400 block">HUMIDITY</span>
                              <span className="text-bio-gold font-bold block">{t.humidity}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Realtime Spectrum Wavelength Preview Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 w-full max-w-lg p-3 rounded-2xl bg-bio-card/90 border border-bio-green/40 flex items-center justify-between text-xs font-mono backdrop-blur-md"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: activeData.color }} />
                  <span className="text-slate-300">ACTIVE SPECTRUM:</span>
                  <span className="text-white font-bold">{activeData.spectrum}</span>
                </div>
                <span className="text-bio-green font-bold">{activeData.par}</span>
              </motion.div>
            </AnimatePresence>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
