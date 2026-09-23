import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HighResCityImage, CHARMINAR_HERO, HYDERABAD_CYBERABAD_SKYLINE, GOLCONDA_FORT } from './CityVisuals';

interface ProgramsProps {
  onOpenGetStarted: () => void;
}

const PROGRAM_SLIDES = [
  {
    title: 'Charminar Heritage Precinct',
    subtitle: 'Preserving 400-year-old architectural marvels, vibrant artisan bazaars, and the soulful heartbeat of the Old City.',
    tag: 'Living Heritage',
    location: 'Old City, Hyderabad',
    image: CHARMINAR_HERO,
  },
  {
    title: 'T-Hub & HITEC City Corridor',
    subtitle: 'Fueling over 3,000 global startups and deep-tech visionaries inside Asia\'s premier innovation catalyst.',
    tag: 'Global Tech & AI',
    location: 'Cyberabad Innovation Zone',
    image: HYDERABAD_CYBERABAD_SKYLINE,
  },
  {
    title: 'Golconda & Stepwell Revival',
    subtitle: 'Reviving centuries-old acoustic stone fortifications, royal baolis, and timeless Deccani craftsmanship.',
    tag: 'Ecological Restoration',
    location: 'Western Heritage Belt',
    image: GOLCONDA_FORT,
  },
];

export function Programs({ onOpenGetStarted }: ProgramsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? PROGRAM_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === PROGRAM_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const slide = PROGRAM_SLIDES[currentSlide];

  return (
    <section id="programs" className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Proposition and Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-white uppercase mb-8 drop-shadow-md">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span>DREAM DISTRICTS</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.15] drop-shadow-lg">
              Spaces That Shape Hyderabad&apos;s Tomorrow
            </h2>

            {/* Description */}
            <p className="mt-8 text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-xl drop-shadow-md">
              From historic stepwells and the iconic arches of Charminar to world-class incubators,
              our districts make ambition actionable. Explore the vital centers designed to foster
              creativity, culture, and economic momentum.
            </p>

            {/* CTA */}
            <button
              onClick={onOpenGetStarted}
              className="mt-10 group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md hover:bg-white text-white hover:text-black transition-all duration-300 cursor-pointer text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label="Explore the districts of Hyderabad"
            >
              <span>Explore The Districts</span>
              <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-black text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3 h-3 group-hover:text-white" />
              </div>
            </button>
          </motion.div>

          {/* Right Column: Featured Landmark Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/4.5] rounded-3xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl flex flex-col justify-between p-6 sm:p-8">
              {/* Background Art / Landmark Image */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-0"
                >
                  <HighResCityImage
                    src={slide.image}
                    alt={slide.title}
                    aspectClass="w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Top Bar inside card */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="text-xs font-medium text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{slide.tag}</span>
                </div>
                <div className="text-xs text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {slide.location}
                </div>
              </div>

              {/* Bottom Information Overlay & Navigation Buttons */}
              <div className="relative z-10 pt-16 bg-gradient-to-t from-black/90 via-black/70 to-transparent -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
                <div className="flex items-end justify-between gap-4">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1"
                    >
                      <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight drop-shadow-md">
                        {slide.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-white/90 font-medium leading-relaxed max-w-md drop-shadow-md">
                        {slide.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel navigation chevrons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/30 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/30 backdrop-blur-md"
                      aria-label="Previous district"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/30 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/30 backdrop-blur-md"
                      aria-label="Next district"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
