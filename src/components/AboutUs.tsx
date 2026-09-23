import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HighResCityImage, CHARMINAR_HERO, CHARMINAR_FRONT } from './CityVisuals';

interface AboutUsProps {
  onOpenGetStarted: () => void;
}

export function AboutUs({ onOpenGetStarted }: AboutUsProps) {
  return (
    <section id="about" className="w-full bg-black py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Section Kicker */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-white uppercase drop-shadow-md">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span>ABOUT THE CITY</span>
            </div>
          </motion.div>

          {/* 3 Metrics Columns */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-light text-white tracking-tight tabular-nums drop-shadow-md">
                430+
              </div>
              <p className="mt-2 text-xs md:text-sm text-white/80 font-medium leading-relaxed max-w-[200px] drop-shadow-md">
                Years of living heritage and architectural legacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-light text-white tracking-tight tabular-nums drop-shadow-md">
                10M+
              </div>
              <p className="mt-2 text-xs md:text-sm text-white/80 font-medium leading-relaxed max-w-[200px] drop-shadow-md">
                Dreamers, creators, and innovators calling it home.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-light text-white tracking-tight tabular-nums drop-shadow-md">
                #1
              </div>
              <p className="mt-2 text-xs md:text-sm text-white/80 font-medium leading-relaxed max-w-[200px] drop-shadow-md">
                Ranked most liveable mega-city &amp; startup capital.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Block & Visuals matching layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          {/* Left Visual Card: High-Res Charminar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="w-full aspect-square max-w-[280px] rounded-3xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl">
              <HighResCityImage
                src={CHARMINAR_HERO}
                alt="Iconic Charminar monument in Hyderabad"
              />
            </div>
          </motion.div>

          {/* Center Main Editorial Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-snug drop-shadow-lg">
              By weaving centuries of historic culture with cutting-edge digital ambition, Hyderabad makes
              it easy to build ventures, nurture artistry, and turn the boldest dreams into an enduring reality.
            </p>

            <button
              onClick={onOpenGetStarted}
              className="mt-8 group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md hover:bg-white text-white hover:text-black transition-all duration-300 cursor-pointer text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label="Explore the city of Hyderabad"
            >
              <span>Explore The City</span>
              <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-black text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3 h-3 group-hover:text-white" />
              </div>
            </button>
          </motion.div>

          {/* Right Botanical/Monument Mini Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3 flex flex-col items-end"
          >
            <div className="w-full max-w-[260px] flex flex-col gap-3">
              <div className="text-xs text-white/80 font-medium tracking-wide flex items-center justify-between drop-shadow-md">
                <span>Charminar | Heritage</span>
                <span>Old City Precinct</span>
              </div>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-xl">
                <HighResCityImage
                  src={CHARMINAR_FRONT}
                  alt="Front perspective of Charminar Hyderabad"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
