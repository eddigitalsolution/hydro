import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Globe, ShieldCheck, Zap, Leaf, Compass } from 'lucide-react';

export const SustainabilityMetrics: React.FC = () => {
  const metrics = [
    {
      icon: Droplets,
      value: '95%',
      label: 'LESS WATER USAGE',
      subtext: 'Recirculating closed loop saves over 2.4 million gallons annually.',
      accent: '#00E5FF',
    },
    {
      icon: Globe,
      value: '90%',
      label: 'LESS LAND FOOTPRINT',
      subtext: '12-tier vertical racks yield 15 acres worth of produce in just 1 acre.',
      accent: '#00FF87',
    },
    {
      icon: ShieldCheck,
      value: '0%',
      label: 'SYNTHETIC PESTICIDES',
      subtext: 'Controlled cleanroom atmosphere eliminates the need for toxic sprays.',
      accent: '#FFD700',
    },
    {
      icon: Zap,
      value: '100%',
      label: 'RENEWABLE POWERED',
      subtext: 'Driven by rooftop solar arrays and localized micro-grid storage.',
      accent: '#60EFFF',
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-bio-dark relative overflow-hidden border-t border-bio-border/40">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-bio-green/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bio-card border border-bio-green/30 text-bio-green text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span>Ecological Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
            SUSTAINABILITY BY <span className="text-gradient-green">ARCHITECTURE</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Traditional agriculture is responsible for 70% of global freshwater withdrawal and topsoil erosion. We designed our farms to heal the planet while feeding cities.
          </p>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                whileHover={{ y: -6 }}
                className="bg-bio-card/80 border border-bio-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden group hover:border-bio-green/50 transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-bio-dark border border-bio-border flex items-center justify-center group-hover:border-bio-green transition-colors">
                    <Icon className="w-6 h-6" style={{ color: m.accent }} />
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-xs font-mono font-bold text-bio-green uppercase tracking-widest mt-1">
                      {m.label}
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {m.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ESG & Environmental Impact Banner */}
        <div className="bg-gradient-to-r from-bio-card via-bio-dark to-bio-card border border-bio-border rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-2xl">
          <div className="space-y-3 max-w-2xl">
            <div className="text-bio-teal font-mono text-xs font-semibold uppercase tracking-widest">
              ZERO-MILE LOCAL HARVEST IMPACT
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              98% Reduction in Transport Carbon Footprint
            </h3>
            <p className="text-slate-300 text-sm font-sans leading-relaxed">
              By building our vertical farms inside urban hubs within 10 miles of grocery distribution centers, we eliminate cross-country refrigerated diesel trucking.
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="p-4 rounded-2xl bg-bio-dark border border-bio-green/40 flex items-center space-x-4">
              <Compass className="w-8 h-8 text-bio-green animate-spin" style={{ animationDuration: '20s' }} />
              <div>
                <div className="text-xs font-mono text-bio-muted uppercase">Urban Proximity</div>
                <div className="text-white font-mono font-bold text-sm">Under 2 Hours Farm-to-Fork</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
