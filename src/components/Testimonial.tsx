import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HighResCityImage, DREAMER_PORTRAIT_1, DREAMER_PORTRAIT_2, DREAMER_PORTRAIT_3 } from './CityVisuals';

const TESTIMONIALS = [
  {
    quote:
      'I came to Hyderabad with just a laptop and a bold dream. Between late-night Irani chai beside the illuminated arches of Charminar and the electric momentum of T-Hub, this city gives you permission to think impossibly big. It welcomes dreamers with open arms.',
    author: 'Aisha Rahman',
    role: 'Founder & CEO',
    organization: 'Deccani AI Studios · HITEC City',
    image: DREAMER_PORTRAIT_1,
  },
  {
    quote:
      'Hyderabad is unlike any place on earth. In the morning, you are documenting 400-year-old Qutb Shahi acoustics, and in the evening you are collaborating with researchers building tomorrow’s quantum and biotech innovations.',
    author: 'Vikramaditya Rao',
    role: 'Architect & Conservationist',
    organization: 'Deccan Heritage Guild · Jubilee Hills',
    image: DREAMER_PORTRAIT_2,
  },
  {
    quote:
      'The cultural generosity of Hyderabad nurtures every craft. Generations of pearl artisans in Laad Bazaar and modern software engineers share the exact same spirit: patience, mastery, and pride in creating enduring legacies.',
    author: 'Farhan Qureshi',
    role: 'Master Craftsman & Historian',
    organization: 'Charminar Guild of Artisans',
    image: DREAMER_PORTRAIT_3,
  },
];

export function Testimonial() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIdx((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));
  };

  const item = TESTIMONIALS[currentIdx];

  return (
    <section id="testimonials" className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-white uppercase mb-4 drop-shadow-md">
            <span className="w-2 h-2 bg-white inline-block"></span>
            <span>VOICES OF HYDERABAD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.15] drop-shadow-lg">
            Stories from Hyderabad&apos;s Dreamers
          </h2>
        </motion.div>

        {/* Two Column Layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Rounded High-Res City Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-[4/3.8] rounded-3xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-0"
                >
                  <HighResCityImage
                    src={item.image}
                    alt={`${item.author} - Hyderabadi Dreamer portrait`}
                    aspectClass="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Quote and Author info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col justify-between h-full pl-0 lg:pl-6"
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-relaxed drop-shadow-md"
              >
                &ldquo;{item.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-12 flex items-end justify-between border-t border-white/20 pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-lg font-medium text-white drop-shadow-md">{item.author}</div>
                  <div className="text-xs text-white/70 mt-1 font-medium drop-shadow-md">{item.role} · {item.organization}</div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/30 hover:border-white text-white hover:bg-white hover:text-black bg-black/40 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/30 shadow-md hover:shadow-lg"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/30 hover:border-white text-white hover:bg-white hover:text-black bg-black/40 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/30 shadow-md hover:shadow-lg"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
