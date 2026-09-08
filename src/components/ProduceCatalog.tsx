import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ShoppingBag, Info } from 'lucide-react';

interface ProduceItem {
  id: string;
  name: string;
  category: 'Greens' | 'Herbs' | 'Berries' | 'Microgreens';
  flavorNote: string;
  vitamins: string[];
  growthDays: number;
  shelfLife: string;
  pricePerBox: string;
  accentColor: string;
  imageSrc?: string;
  imageSvg: React.ReactNode;
  description: string;
}

interface ProduceProps {
  onOpenOrderModal: () => void;
}

export const ProduceCatalog: React.FC<ProduceProps> = ({ onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<ProduceItem | null>(null);

  const categories = ['All', 'Greens', 'Herbs', 'Berries', 'Microgreens'];

  const produceItems: ProduceItem[] = [
    {
      id: 'butterhead',
      name: 'Hydro Emerald Butterhead',
      category: 'Greens',
      flavorNote: 'Silky, sweet, buttery finish',
      vitamins: ['Vitamin K (180%)', 'Vitamin A', 'Folate', 'Lutein'],
      growthDays: 24,
      shelfLife: '21 Days in Crisp Pod',
      pricePerBox: '$4.50 / head',
      accentColor: '#00FF87',
      imageSrc: '/hydro_emerald_butterhead_1788772893347.jpg',
      description:
        'Grown with elevated far-red light stimulation, delivering a velvety leaf texture with twice the soluble antioxidant levels of field lettuce.',
      imageSvg: (
        <svg viewBox="0 0 120 120" className="w-20 h-20 filter drop-shadow-[0_0_15px_rgba(0,255,135,0.4)]">
          <circle cx="60" cy="60" r="45" fill="#0D1411" stroke="#00FF87" strokeWidth="1.5" />
          <path d="M60 25 C40 35 30 55 35 75 C45 95 75 95 85 75 C90 55 80 35 60 25" fill="#00FF87" opacity="0.85" />
          <path d="M60 35 C48 45 42 60 45 75 C52 88 68 88 75 75 C78 60 72 45 60 35" fill="#60EFFF" opacity="0.9" />
          <circle cx="60" cy="58" r="6" fill="#FFD700" />
        </svg>
      ),
    },
    {
      id: 'strawberries',
      name: 'Bio-Luminescent Alpine Strawberry',
      category: 'Berries',
      flavorNote: 'Intense wildflower sweetness, wild aroma',
      vitamins: ['Vitamin C (210%)', 'Ellagic Acid', 'Manganese'],
      growthDays: 45,
      shelfLife: '14 Days Misted',
      pricePerBox: '$7.99 / 250g',
      accentColor: '#FF4D6D',
      imageSrc: '/alpine_strawberry_1788772921808.jpg',
      description:
        'Pollinated by bio-domed stingless bees and ripened under high-intensity red LED spectrums to achieve 14.5 Brix sweetness level.',
      imageSvg: (
        <svg viewBox="0 0 120 120" className="w-20 h-20 filter drop-shadow-[0_0_15px_rgba(255,77,109,0.5)]">
          <circle cx="60" cy="60" r="45" fill="#0D1411" stroke="#FF4D6D" strokeWidth="1.5" />
          <path d="M60 30 Q35 50 45 85 Q60 100 75 85 Q85 50 60 30" fill="#FF4D6D" />
          <path d="M50 30 Q60 20 70 30 Q60 35 50 30" fill="#00FF87" />
          <circle cx="52" cy="55" r="1.5" fill="#FFD700" />
          <circle cx="68" cy="60" r="1.5" fill="#FFD700" />
          <circle cx="58" cy="72" r="1.5" fill="#FFD700" />
        </svg>
      ),
    },
    {
      id: 'sacred-basil',
      name: 'Thai Sacred Opal Basil',
      category: 'Herbs',
      flavorNote: 'Anise, peppery clove, citrus lift',
      vitamins: ['Eugenol Essential Oil', 'Iron', 'Magnesium'],
      growthDays: 18,
      shelfLife: '18 Days Fresh',
      pricePerBox: '$3.99 / 100g',
      accentColor: '#A855F7',
      imageSrc: '/thai_sacred_opal_basil.png',
      description:
        'Aeroponically misted with organic mineral salts to boost essential oil density by 42% for hyper-aromatic culinary infusion.',
      imageSvg: (
        <svg viewBox="0 0 120 120" className="w-20 h-20 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <circle cx="60" cy="60" r="45" fill="#0D1411" stroke="#A855F7" strokeWidth="1.5" />
          <path d="M60 20 L60 90" stroke="#A855F7" strokeWidth="3" opacity="0.4" />
          <path d="M60 40 Q30 30 25 50 Q45 60 60 50" fill="#A855F7" opacity="0.85" />
          <path d="M60 40 Q90 30 95 50 Q75 60 60 50" fill="#A855F7" opacity="0.85" />
          <path d="M60 65 Q25 55 20 75 Q45 85 60 75" fill="#60EFFF" opacity="0.8" />
          <path d="M60 65 Q95 55 100 75 Q75 85 60 75" fill="#60EFFF" opacity="0.8" />
        </svg>
      ),
    },
    {
      id: 'red-vein-sorrel',
      name: 'Red-Vein Sorrel Micro-Canopy',
      category: 'Microgreens',
      flavorNote: 'Bright green apple sharpness & lemony zip',
      vitamins: ['Vitamin C', 'Oxalates', 'Beta-Carotene'],
      growthDays: 12,
      shelfLife: '14 Days Living Tray',
      pricePerBox: '$5.50 / living tray',
      accentColor: '#FF6B00',
      imageSrc: '/red_vein_sorrel.png',
      description:
        'Harvested at peak 12-day seedling stage when polyphenol concentrations are up to 40 times higher than mature plants.',
      imageSvg: (
        <svg viewBox="0 0 120 120" className="w-20 h-20 filter drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]">
          <circle cx="60" cy="60" r="45" fill="#0D1411" stroke="#FF6B00" strokeWidth="1.5" />
          <path d="M40 85 Q35 50 45 40 Q65 40 55 85" fill="#00FF87" />
          <path d="M45 40 L50 85" stroke="#FF6B00" strokeWidth="2" />
          <path d="M75 85 Q70 50 80 40 Q100 40 90 85" fill="#00FF87" />
          <path d="M80 40 L83 85" stroke="#FF6B00" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const filteredItems =
    activeCategory === 'All'
      ? produceItems
      : produceItems.filter((item) => item.category === activeCategory);

  return (
    <section id="produce" className="py-24 bg-bio-dark relative overflow-hidden border-t border-bio-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-bio-green font-mono text-xs font-semibold uppercase tracking-widest mb-2">
              Pesticide-Free Harvest Catalog
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
              OUR PURE <span className="text-gradient-green">PRODUCE LINE</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-bio-card text-bio-green border border-bio-green/70 font-semibold shadow-[0_0_12px_rgba(0,255,135,0.15)]'
                    : 'bg-bio-card/60 text-slate-400 border border-bio-border/80 hover:border-bio-green/40 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-bio-card border border-bio-border rounded-3xl p-6 flex flex-col justify-between group hover:border-bio-green/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,135,0.15)]"
            >
              <div>
                {/* Photo / SVG Showcase Header */}
                <div className="w-full h-56 bg-[#060908] rounded-2xl flex items-center justify-center border border-white/5 mb-5 relative overflow-hidden group-hover:border-bio-green/40 transition-all duration-500 shadow-inner">
                  {item.imageSrc ? (
                    <>
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,135,0.05),transparent_70%)]" />
                      {item.imageSvg}
                    </>
                  )}
                  <span className="absolute top-3 right-3 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-bio-teal z-10">
                    {item.growthDays} DAYS CYCLED
                  </span>
                </div>

                <div className="text-[10px] font-mono text-bio-muted uppercase tracking-widest mb-1.5 flex items-center justify-between">
                  <span>{item.category}</span>
                  <span className="text-bio-green/70">100% ORGANIC</span>
                </div>

                <h3 className="text-xl font-extrabold text-white font-syne group-hover:text-bio-green transition-colors leading-snug">
                  {item.name}
                </h3>

                <div className="flex items-center space-x-1.5 text-xs text-bio-teal font-sans mt-2">
                  <Leaf className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.flavorNote}</span>
                </div>

                <p className="text-slate-400 text-xs mt-3 font-sans leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-bio-border/60 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-bio-muted uppercase">Harvest Price</div>
                  <div className="text-white font-mono font-bold text-base">{item.pricePerBox}</div>
                </div>

                <button
                  onClick={() => setSelectedItem(item)}
                  className="px-3.5 py-2 rounded-xl bg-bio-dark border border-bio-green/40 text-bio-green text-xs font-mono font-bold hover:bg-bio-green hover:text-bio-dark transition-all flex items-center space-x-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-bio-card border border-bio-green/50 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-[0_0_50px_rgba(0,255,135,0.3)] overflow-hidden"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white font-mono text-lg p-2 z-20"
                >
                  ✕
                </button>

                <div className="flex items-center space-x-4 mb-4">
                  {selectedItem.imageSrc ? (
                    <img
                      src={selectedItem.imageSrc}
                      alt={selectedItem.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-bio-green/40"
                    />
                  ) : (
                    selectedItem.imageSvg
                  )}
                  <div>
                    <span className="text-xs font-mono text-bio-teal uppercase tracking-widest">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{selectedItem.name}</h3>
                    <span className="text-bio-green font-mono font-bold text-sm">
                      {selectedItem.pricePerBox}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                  {selectedItem.description}
                </p>

                <div className="space-y-3 bg-bio-dark p-4 rounded-2xl border border-bio-border mb-6">
                  <div className="text-xs font-mono uppercase text-bio-muted font-bold">
                    Key Bio-Nutrients & Vitamins:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.vitamins.map((v) => (
                      <span
                        key={v}
                        className="px-2.5 py-1 rounded-lg bg-bio-card text-bio-green border border-bio-green/30 text-xs font-mono"
                      >
                        ✓ {v}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      onOpenOrderModal();
                    }}
                    className="flex-1 py-3 rounded-xl bg-bio-green text-bio-dark font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,135,0.4)] flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Tasting Box</span>
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-3 rounded-xl bg-bio-dark border border-bio-border text-slate-300 text-xs font-mono uppercase hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
