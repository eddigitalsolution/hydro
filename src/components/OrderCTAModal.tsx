import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Leaf, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

interface CTAProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderCTAModal: React.FC<CTAProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'tasting-box',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00FF87', '#00E5FF', '#60EFFF', '#FFD700'],
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
      <div className="bg-bio-card border border-bio-green/60 rounded-3xl p-6 sm:p-10 max-w-xl w-full relative shadow-[0_0_60px_rgba(0,255,135,0.25)] overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-bio-green/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white font-mono text-xl p-2"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-2 text-bio-green text-xs font-mono font-bold uppercase tracking-widest mb-2">
              <Leaf className="w-4 h-4" />
              <span>Taste Grown Different</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Request Hydroponic Tasting Box
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm font-sans mt-2 mb-6">
              Experience the crispness of pesticide-free vertical greens harvested fresh from our cleanroom facility within 4 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="customer-full-name" className="block text-xs font-mono text-bio-muted uppercase mb-1">
                  Full Name
                </label>
                <input
                  id="customer-full-name"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bio-dark border border-bio-border text-white text-xs font-mono focus:outline-none focus:border-bio-green"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customer-email" className="block text-xs font-mono text-bio-muted uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    id="customer-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="alex@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bio-dark border border-bio-border text-white text-xs font-mono focus:outline-none focus:border-bio-green"
                  />
                </div>

                <div>
                  <label htmlFor="customer-phone" className="block text-xs font-mono text-bio-muted uppercase mb-1">
                    Phone Number
                  </label>
                  <input
                    id="customer-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bio-dark border border-bio-border text-white text-xs font-mono focus:outline-none focus:border-bio-green"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="customer-interest" className="block text-xs font-mono text-bio-muted uppercase mb-1">
                  Preferred Experience
                </label>
                <select
                  id="customer-interest"
                  name="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bio-dark border border-bio-border text-white text-xs font-mono focus:outline-none focus:border-bio-green"
                >
                  <option value="tasting-box">Chef & Culinary Tasting Box (4 Crop Varieties)</option>
                  <option value="weekly-sub">Home Kitchen Weekly Subscription (95% Less Water)</option>
                  <option value="farm-tour">Private Cleanroom Facility Tour & Demo</option>
                  <option value="b2b-wholesale">Commercial Grocery / Restaurant Supply</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-bio-green text-bio-dark font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,255,135,0.4)] hover:shadow-[0_0_40px_rgba(0,255,135,0.7)] transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Harvest Reservation</span>
              </button>

              <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-bio-muted pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-bio-green" />
                <span>Zero Commitment • Free Courier Delivery on First Sample</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-bio-green/20 border border-bio-green text-bio-green flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Harvest Reserved!</h3>
            <p className="text-xs text-slate-300 font-sans max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-bio-green font-bold">{formData.name}</span>. Our cleanroom farm team has queued your fresh harvest order. Check your email for delivery tracking.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-xl bg-bio-green text-bio-dark font-mono font-bold text-xs uppercase tracking-wider"
            >
              Back to Farm Portal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
