import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Activity, Zap, Sliders, CheckCircle2 } from 'lucide-react';

type NutrientType = 'all' | 'nitrogen' | 'phosphorus' | 'potassium';

interface NutrientDetail {
  id: NutrientType;
  label: string;
  ec: string;
  ph: string;
  focus: string;
  color: string;
  description: string;
}

export const HydroponicsWaterFlow: React.FC = () => {
  const [activeNutrient, setActiveNutrient] = useState<NutrientType>('all');
  const [flowSpeed, setFlowSpeed] = useState<number>(1);

  const nutrientDetails: Record<NutrientType, NutrientDetail> = {
    all: {
      id: 'all',
      label: 'Balanced N-P-K Solution',
      ec: '1.8 mS/cm',
      ph: '6.0 - 6.2',
      focus: 'General Vegetative Equilibrium',
      color: '#00FF87',
      description: 'Standard baseline nutrient bath supplying equal ratios of Nitrogen, Phosphorus, Potassium, and essential trace minerals.',
    },
    nitrogen: {
      id: 'nitrogen',
      label: 'High-N Leaf Growth',
      ec: '2.2 mS/cm',
      ph: '5.8 - 6.0',
      focus: 'Chlorophyll Expansion & Canopy Mass',
      color: '#00FF87',
      description: 'Elevated Nitrate (NO3-) dosing accelerates vegetative leaf surface expansion and deep green chlorophyll synthesis.',
    },
    phosphorus: {
      id: 'phosphorus',
      label: 'High-P Root Health',
      ec: '1.9 mS/cm',
      ph: '6.2 - 6.4',
      focus: 'Root System Branching & ATP Energy',
      color: '#FFD700',
      description: 'Concentrated Phosphate (H2PO4-) solution stimulates dense root capillary branching and ATP cellular energy transfer.',
    },
    potassium: {
      id: 'potassium',
      label: 'High-K Flavonoid Boost',
      ec: '2.4 mS/cm',
      ph: '6.0 - 6.3',
      focus: 'Flavor Density & Brix Sweetness',
      color: '#00E5FF',
      description: 'Potassium (K+) enrichment triggers sugar translocation into plant tissues, raising Brix levels and essential aromatic oils.',
    },
  };

  const currentDetail = nutrientDetails[activeNutrient];

  return (
    <section id="hydroponics" className="py-24 bg-bio-dark relative overflow-hidden border-t border-bio-border/40">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-bio-teal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bio-card border border-bio-teal/30 text-bio-teal text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Droplets className="w-3.5 h-3.5" />
            <span>Closed-Loop Liquid Dynamics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
            CLOSED-LOOP <span className="text-gradient-green">HYDROPONIC SYSTEM</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Water is filtered, infused with bio-available minerals, recirculated through root modules, and recycled back into the core reservoir with 0% runoff waste.
          </p>
        </div>

        {/* Filter Control Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-bio-card border border-bio-border p-4 rounded-2xl">
          <div className="flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-bio-green" />
            <span className="text-xs font-mono uppercase font-bold text-white">Nutrient Blend Filter:</span>
          </div>

          {/* Interactive Nutrient Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Balanced N-P-K Solution' },
              { id: 'nitrogen', label: 'High-N Leaf Growth' },
              { id: 'phosphorus', label: 'High-P Root Health' },
              { id: 'potassium', label: 'High-K Flavonoid Boost' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveNutrient(btn.id as NutrientType)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all border ${
                  activeNutrient === btn.id
                    ? 'bg-bio-card text-bio-green border-bio-green/80 shadow-[0_0_10px_rgba(0,255,135,0.15)]'
                    : 'bg-bio-dark text-slate-300 border-bio-border hover:border-bio-green/40 hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Flow Rate Toggle */}
          <div className="flex items-center space-x-2 text-xs font-mono text-bio-muted">
            <span>FLOW RATE:</span>
            <button
              onClick={() => setFlowSpeed(flowSpeed === 1 ? 2 : 1)}
              className="px-2.5 py-1 rounded-lg bg-bio-dark border border-bio-border text-bio-teal hover:border-bio-teal font-bold transition-all"
            >
              {flowSpeed === 1 ? '1.0x Normal' : '2.0x Accelerated'}
            </button>
          </div>
        </div>

        {/* Live Active Nutrient Telemetry Feedback Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNutrient}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-8 p-4 rounded-2xl bg-bio-card/90 border border-bio-green/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 backdrop-blur-md"
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full shrink-0 shadow-[0_0_12px_currentColor] transition-colors duration-500" style={{ backgroundColor: currentDetail.color }} />
              <div>
                <span className="text-xs font-mono text-bio-muted uppercase">ACTIVE INJECTION FORMULA:</span>
                <h4 className="text-white font-mono font-bold text-sm">{currentDetail.label}</h4>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="px-3 py-1 rounded-lg bg-bio-dark border border-bio-border text-slate-200">
                EC TARGET: <span className="text-bio-green font-bold">{currentDetail.ec}</span>
              </div>
              <div className="px-3 py-1 rounded-lg bg-bio-dark border border-bio-border text-slate-200">
                pH RANGE: <span className="text-bio-teal font-bold">{currentDetail.ph}</span>
              </div>
              <div className="px-3 py-1 rounded-lg bg-bio-dark border border-bio-border text-slate-200">
                FOCUS: <span className="text-bio-gold font-bold">{currentDetail.focus}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive SVG Diagram - Hydroponics Water Loop */}
        <div className="bg-bio-card/70 border border-bio-border rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* SVG Interactive Loop */}
            <div className="lg:col-span-8 relative w-full h-90 sm:h-105">
              <svg viewBox="0 0 600 360" className="w-full h-full">
                <defs>
                  <linearGradient id="waterFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="50%" stopColor={currentDetail.color} />
                    <stop offset="100%" stopColor="#00E5FF" />
                  </linearGradient>
                </defs>

                {/* Reservoir */}
                <rect x="40" y="240" width="140" height="90" rx="10" fill="#060908" stroke="#00E5FF" strokeWidth="2" />
                <text x="55" y="265" fill="#00E5FF" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                  BIO RESERVOIR
                </text>
                <text x="55" y="285" fill="#8E9B95" fontSize="10" fontFamily="JetBrains Mono">
                  EC: {currentDetail.ec}
                </text>
                <text x="55" y="305" fill="#8E9B95" fontSize="10" fontFamily="JetBrains Mono">
                  DO: 9.8 mg/L
                </text>

                {/* Pump Module */}
                <circle cx="230" cy="285" r="25" fill="#1A2923" stroke={currentDetail.color} strokeWidth="2" />
                <path d="M222 285 L238 285 M230 277 L230 293" stroke={currentDetail.color} strokeWidth="2" />
                <text x="205" y="325" fill={currentDetail.color} fontSize="10" fontFamily="JetBrains Mono">
                  VFD PUMP ({flowSpeed}.0x)
                </text>

                {/* NFT Growth Channel */}
                <rect x="180" y="60" width="360" height="70" rx="12" fill="#060908" stroke={currentDetail.color} strokeWidth="2" />
                <text x="200" y="85" fill={currentDetail.color} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                  NFT GROWTH CHANNEL — [{activeNutrient.toUpperCase()}]
                </text>

                {/* Plants */}
                {[230, 310, 390, 470].map((x) => (
                  <g key={x}>
                    <path d={`M${x} 60 C${x-15} 40 ${x-25} 35 ${x} 20 C${x+25} 35 ${x+15} 40 ${x} 60`} fill={currentDetail.color} />
                    <path d={`M${x} 60 L${x-5} 105 M${x} 60 L${x+5} 110`} stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2" />
                  </g>
                ))}

                {/* UV Sterilizer */}
                <rect x="420" y="240" width="130" height="90" rx="10" fill="#060908" stroke="#60EFFF" strokeWidth="2" />
                <text x="435" y="265" fill="#60EFFF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                  UV STERILIZER
                </text>
                <text x="435" y="285" fill="#8E9B95" fontSize="10" fontFamily="JetBrains Mono">
                  254nm Spectrum
                </text>

                {/* Animated Water Flow Pipes */}
                <path d="M180 285 L205 285" stroke="url(#waterFlow)" strokeWidth="4" />
                
                <path
                  d="M255 285 L320 285 Q340 285 340 265 L340 170 Q340 150 320 150 L200 150 Q180 150 180 130"
                  stroke="url(#waterFlow)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="12 6"
                  opacity="0.85"
                />

                <rect x="190" y="105" width="340" height="15" fill={currentDetail.color} opacity="0.25" rx="4" />

                <path
                  d="M540 95 L560 95 Q570 95 570 115 L570 260 Q570 285 550 285"
                  stroke="url(#waterFlow)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="12 6"
                  opacity="0.85"
                />

                <path
                  d="M420 285 L180 285"
                  stroke="url(#waterFlow)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="12 6"
                  opacity="0.85"
                />

                {/* Smooth Glowing Nutrient Dots */}
                {[0, 1, 2, 3].map((p) => (
                  <circle
                    key={p}
                    cx={200 + p * 80}
                    cy={112}
                    r={4}
                    fill={currentDetail.color}
                    opacity="0.9"
                    className="transition-all duration-500"
                  />
                ))}
              </svg>
            </div>

            {/* Right Information Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-5 rounded-2xl bg-bio-dark border border-bio-border space-y-3">
                <div className="flex items-center space-x-2 text-bio-green">
                  <CheckCircle2 className="w-5 h-5" />
                  <h4 className="font-mono font-bold text-sm text-white">95% Water Recirculation</h4>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Unlike traditional farming where 90% of irrigation drains into soil runoff, our closed loop continuously recycles purified liquid, using only 5% of standard agricultural water.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-bio-dark border border-bio-border space-y-3">
                <div className="flex items-center space-x-2 text-bio-teal">
                  <Activity className="w-5 h-5" />
                  <h4 className="font-mono font-bold text-sm text-white">Real-Time Mineral Dosing</h4>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Precision EC & pH probe arrays inject micro-doses of Calcium, Potassium, Magnesium, and Nitrate every 15 seconds to match exact plant physiological demand.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-bio-dark border border-bio-border space-y-3">
                <div className="flex items-center space-x-2 text-bio-gold">
                  <Zap className="w-5 h-5" />
                  <h4 className="font-mono font-bold text-sm text-white">Zero Soil Pathogens</h4>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Eliminating soil removes root rot, nematodes, and soil-borne bacteria like E. coli, guaranteeing ultra-clean greens that require no harsh washing.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
