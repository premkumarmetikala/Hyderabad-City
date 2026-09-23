import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { CharminarLogo } from './CharminarLogo';

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export function Navbar({ onOpenGetStarted }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close menu on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const sections = [
    { label: 'About the City', id: 'about' },
    { label: 'Dream Districts & Heritage', id: 'programs' },
    { label: 'Why Hyderabad', id: 'why-us' },
    { label: 'City Accolades', id: 'awards' },
    { label: 'Voices of Dreamers', id: 'testimonials' },
    { label: 'Questions & Answers', id: 'faqs' },
  ];

  return (
    <>
      {/* Floating Center-Aligned Header */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
        <div ref={containerRef} className="relative w-[260px] sm:w-[280px]">
          {/* Main Top Navbar Pill: no shadow, no "|", width aligned with menu */}
          <div className="w-full flex items-center justify-between p-1.5 pl-2.5 pr-2 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-2xl">
            {/* Logo with Charminar icon + "Hyderabad" wordmark */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 py-1 rounded-full hover:bg-white/5 active:scale-98 transition-all cursor-pointer group shrink-0"
              aria-label="Hyderabad - Scroll to top"
              title="Hyderabad - Scroll to top"
            >
              <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <CharminarLogo
                  className="w-4.5 h-4.5"
                  badgeBg="bg-transparent"
                  iconColor="text-black"
                />
              </div>

              <span className="text-sm font-medium tracking-tight text-white group-hover:text-white/90 transition-colors select-none whitespace-nowrap">
                Hyderabad
              </span>
            </button>

            {/* Hamburger / Close toggle button (no "|" separator) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-7.5 h-7.5 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 active:bg-white/20 transition-all cursor-pointer ${
                menuOpen ? 'bg-white/15 text-white' : ''
              }`}
              aria-label={menuOpen ? 'Close Navigation' : 'Open Navigation'}
              title="Navigation"
            >
              {menuOpen ? (
                <X className="w-4 h-4 text-white transition-transform duration-200" />
              ) : (
                <Menu className="w-4 h-4 text-white transition-transform duration-200" />
              )}
            </button>
          </div>

          {/* Smooth Dropdown Frame: width matching navbar pill, zero shadow */}
          <div
            className={`absolute top-full mt-2 left-0 w-full rounded-2xl p-1.5 border border-white/15 bg-black/75 backdrop-blur-2xl origin-top transition-all duration-200 ease-out ${
              menuOpen
                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="space-y-0.5">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs sm:text-sm text-white/80 hover:text-white hover:bg-white/10 active:bg-white/15 transition-all cursor-pointer group whitespace-nowrap"
                >
                  <span className="font-normal">{sec.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/25 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Smooth Click-Out Dimmer */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200 ease-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />
    </>
  );
}
