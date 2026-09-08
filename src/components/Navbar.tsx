import { useState, useEffect } from 'react';
import { Sprout, Menu, X, ChevronRight, Leaf } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Growth Lab', href: '#growth-lab' },
    { name: 'Our Farm', href: '#our-farm' },
    { name: 'Hydroponics', href: '#hydroponics' },
    { name: 'Produce', href: '#produce' },
    { name: 'Tech & Impact', href: '#sustainability' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bio-dark/90 backdrop-blur-xl border-b border-bio-border/80 py-3.5 shadow-2xl'
          : 'bg-bio-dark/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-xl bg-bio-card border border-bio-green/30 flex items-center justify-center group-hover:border-bio-green transition-all">
            <Sprout className="w-5 h-5 text-bio-green group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-widest text-base text-white font-syne leading-none">
              HYDR<span className="text-bio-green">O</span>
            </span>
            <span className="text-[9px] tracking-[0.2em] text-bio-muted font-mono uppercase mt-0.5">
              Grown Different
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-8 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-bio-green transition-colors text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Clean Functional CTA Button */}
        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={onOpenOrderModal}
            className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-xl bg-bio-card border border-bio-green/40 text-bio-green hover:bg-bio-green hover:text-bio-dark font-mono font-semibold text-xs uppercase tracking-wider transition-all duration-200"
          >
            <Leaf className="w-3.5 h-3.5" />
            <span>Taste Fresh Harvest</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-bio-card text-slate-200 border border-bio-border hover:text-bio-green"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-bio-card/95 backdrop-blur-2xl border-b border-bio-border px-6 py-6 mt-2 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-bio-green text-sm font-mono font-semibold uppercase tracking-wider py-2 flex items-center justify-between border-b border-bio-border/30"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-bio-green" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="mt-3 w-full py-3 rounded-xl bg-bio-card border border-bio-green/50 text-bio-green hover:bg-bio-green hover:text-bio-dark font-bold text-xs uppercase tracking-wider font-mono transition-all"
            >
              Taste Fresh Harvest
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
