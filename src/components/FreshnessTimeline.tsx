import React, { useState } from 'react';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const FreshnessTimeline: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>('');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode) return;
    setCalcResult('Estimated Farm-to-Door Delivery: 3.5 Hours (Same-Day Morning Harvest)');
  };

  return (
    <section id="freshness" className="py-24 bg-bio-dark relative overflow-hidden border-t border-bio-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bio-card border border-bio-green/30 text-bio-green text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Peak Nutrient Density Window</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
            HARVEST TO TABLE <span className="text-gradient-green">IN HOURS</span>
          </h2>
          <p className="mt-4 text-slate-400 font-sans text-base sm:text-lg">
            Traditional supermarket greens spend 7 to 14 days in trucks, losing up to 50% of their nutrients before reaching your plate. Our local hydroponic cleanroom delivers same-day peak vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-bio-card/40 border border-bio-border rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-bio-border/60 pb-4">
              <span className="font-mono text-xs text-rose-400 uppercase font-bold tracking-wider">
                TRADITIONAL SOIL FARMING
              </span>
              <span className="font-mono text-xs text-slate-400">10-14 DAYS TOTAL</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-rose-950 border border-rose-800 text-rose-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  D1
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Harvest & Soil Washing</h4>
                  <p className="text-xs text-slate-400">Field harvest, triple chemical wash to remove dirt & soil bacteria.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-rose-950 border border-rose-800 text-rose-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  D3
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Diesel Refrigerated Trucking</h4>
                  <p className="text-xs text-slate-400">1,500+ mile interstate transport causing vibration bruising & moisture loss.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-rose-950 border border-rose-800 text-rose-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  D8
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Supermarket Warehouse & Display</h4>
                  <p className="text-xs text-slate-400">Sits under fluorescent light while Vitamin C degrades rapidly.</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/50 text-rose-300 text-xs font-mono">
              ⚠ Result: Degraded flavor, 45% nutrient loss, high waste.
            </div>
          </div>

          <div className="bg-bio-card border border-bio-green/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-[0_0_30px_rgba(0,255,135,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bio-green/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-bio-border pb-4">
              <span className="font-mono text-xs text-bio-green uppercase font-bold tracking-wider flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>HYDROPONIC DIRECT HARVEST</span>
              </span>
              <span className="font-mono text-xs text-bio-green font-bold">&lt; 6 HOURS TOTAL</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-bio-green text-bio-dark font-mono text-xs font-extrabold flex items-center justify-center shrink-0">
                  H0
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Precision Automated Clip Harvest</h4>
                  <p className="text-xs text-slate-300">Cleanroom harvested at 5:00 AM peak moisture inflation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-bio-green text-bio-dark font-mono text-xs font-extrabold flex items-center justify-center shrink-0">
                  H2
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Atmospheric Nitrogen Sealed Pods</h4>
                  <p className="text-xs text-slate-300">Packed in 100% recyclable pod with zero chemical preservatives.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-bio-green text-bio-dark font-mono text-xs font-extrabold flex items-center justify-center shrink-0">
                  H5
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">EV Local Courier to Your Kitchen</h4>
                  <p className="text-xs text-slate-300">Delivered directly to your door at 100% cellular vitality.</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-bio-green/10 border border-bio-green/40 text-bio-green text-xs font-mono font-semibold">
              ✓ Result: Maximum crispness, 100% bio-available nutrients.
            </div>
          </div>

        </div>

        <div className="bg-bio-card border border-bio-border rounded-3xl p-6 sm:p-10 max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white font-sans mb-2">
            Check Freshness Delivery Window in Your Area
          </h3>
          <p className="text-xs text-slate-400 mb-6 font-sans">
            Enter your local ZIP code to calculate urban hydroponic delivery timeframe.
          </p>

          <form onSubmit={handleCalculate} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-center">
            <label htmlFor="delivery-zip-code" className="sr-only">
              ZIP / Postal Code
            </label>
            <input
              id="delivery-zip-code"
              name="zipCode"
              type="text"
              autoComplete="postal-code"
              placeholder="Enter ZIP / Postal Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="flex-1 w-full px-4 py-3 rounded-xl bg-bio-dark border border-bio-border text-white text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-bio-green"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-bio-card border border-bio-green/50 text-bio-green hover:bg-bio-green hover:text-bio-dark font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-[0_0_12px_rgba(0,255,135,0.15)]"
            >
              <span>Calculate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {calcResult && (
            <div className="mt-4 p-3 rounded-xl bg-bio-green/20 border border-bio-green text-bio-green text-xs font-mono font-semibold animate-fadeIn">
              {calcResult}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
