import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export function GetStartedModal({ isOpen, onClose, initialInterest = 'Tech & Startup Innovation' }: GetStartedModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: initialInterest,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-neutral-950/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-white inline-block"></span>
              <span>HYDERABAD DREAMS NETWORK</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Join the City of Dreamers
            </h3>
            <p className="mt-2 text-xs text-white/60">
              Connect with founders, artists, researchers, and community champions shaping Hyderabad.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Aisha Rahman"
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="aisha@dreams.org"
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">
                    Studio / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Deccani Studio / Venture"
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white text-xs focus:outline-none focus:border-white transition-colors cursor-pointer"
                  >
                    <option value="Tech & Startup Innovation">Tech & Startup Innovation</option>
                    <option value="Heritage & Architectural Conservation">Heritage & Architectural Conservation</option>
                    <option value="Arts, Crafts & Gastronomy">Arts, Crafts & Gastronomy</option>
                    <option value="Research & Delegations">Research & Delegations</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-white text-black hover:bg-white/90 text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <span>Connect With Hyderabad Network</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-white/40 text-center">
                Instant access · Open to all passionate dreamers, creators &amp; residents
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto mb-4 border border-white/20">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-light text-white mb-2">Welcome to Hyderabad Dreams</h3>
            <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed mb-6">
              Welcome, <span className="text-white font-medium">{formData.name}</span>. Your connection for{' '}
              <span className="text-white font-medium">{formData.organization}</span> ({formData.interest}) has been confirmed. We&apos;ve sent your welcome guide and community invites to{' '}
              <span className="text-white font-medium">{formData.email}</span>.
            </p>
            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 cursor-pointer"
            >
              Enter Community Portal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
