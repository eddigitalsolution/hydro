import { Sprout, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bio-dark border-t border-bio-border py-16 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-bio-border/60">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-bio-card border border-bio-green/40 flex items-center justify-center">
                <Sprout className="w-6 h-6 text-bio-green" />
              </div>
              <div>
                <span className="font-extrabold tracking-widest text-lg text-white font-sans block leading-none">
                  HYDR<span className="text-bio-green">O</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-bio-muted font-mono uppercase">
                  Grown Different
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Ultra-pure vertical hydroponic agriculture fusing high-frequency photobiology, autonomous micro-climate sensors, and closed-loop recirculating nutrients.
            </p>
            <div className="flex items-center space-x-3 text-xs font-mono text-bio-teal pt-2">
              <span className="px-2.5 py-1 rounded-full bg-bio-card border border-bio-border">ISO Class 6 Cleanroom</span>
              <span className="px-2.5 py-1 rounded-full bg-bio-card border border-bio-border">100% Pesticide Free</span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#growth-lab" className="hover:text-bio-green transition-colors">Plant Growth Lab</a></li>
              <li><a href="#our-farm" className="hover:text-bio-green transition-colors">Our Vertical Farm</a></li>
              <li><a href="#hydroponics" className="hover:text-bio-green transition-colors">Hydroponic Loop</a></li>
              <li><a href="#produce" className="hover:text-bio-green transition-colors">Harvest Catalog</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              Technology
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#technology" className="hover:text-bio-green transition-colors">Neural AI Climate</a></li>
              <li><a href="#technology" className="hover:text-bio-green transition-colors">Bio-Photonic Spectrum</a></li>
              <li><a href="#sustainability" className="hover:text-bio-green transition-colors">95% Water Saving</a></li>
              <li><a href="#freshness" className="hover:text-bio-green transition-colors">Same-Day Delivery</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              Sustainability Badges
            </div>
            <div className="p-4 rounded-2xl bg-bio-card border border-bio-border space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-bio-green font-mono font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Agricultural Runoff</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">
                Our closed-loop nutrient recirculation leaves 0% chemical trace in local soil or groundwater tables.
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-bio-muted">
          <div>
            © {new Date().getFullYear()} HYDRO FARMING INC. ALL RIGHTS RESERVED.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-1">
            <span>Grown with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>& Photon Energy.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
