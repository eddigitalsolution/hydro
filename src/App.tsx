import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlantGrowthStage } from './components/PlantGrowthStage';
import { OurFarm } from './components/OurFarm';
import { HydroponicsWaterFlow } from './components/HydroponicsWaterFlow';
import { ProduceCatalog } from './components/ProduceCatalog';
import { SustainabilityMetrics } from './components/SustainabilityMetrics';
import { TechStackSection } from './components/TechStackSection';
import { FreshnessTimeline } from './components/FreshnessTimeline';
import { OrderCTAModal } from './components/OrderCTAModal';
import { Footer } from './components/Footer';

export function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bio-dark text-slate-100 font-sans selection:bg-bio-green selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Signature Interaction - Plant Growth Stage Controller */}
      <PlantGrowthStage />

      {/* Our Farm Section */}
      <OurFarm />

      {/* Hydroponics Section - Water Flow Dynamics */}
      <HydroponicsWaterFlow />

      {/* Produce Section */}
      <ProduceCatalog onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Sustainability Section */}
      <SustainabilityMetrics />

      {/* Technology Section */}
      <TechStackSection />

      {/* Freshness Section */}
      <FreshnessTimeline />

      {/* Order CTA Modal */}
      <OrderCTAModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
