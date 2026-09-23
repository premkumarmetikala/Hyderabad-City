import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenGetStarted: () => void;
}

export function Hero({ onOpenGetStarted }: HeroProps) {
  return (
    <section className="relative w-full bg-black pt-36 sm:pt-44 pb-24 md:pb-32 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Headline - center aligned with two lines step by step */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-[54px] font-medium tracking-tight text-white max-w-3xl leading-[1.18] text-center"
        >
          <span className="block">Built on legacy.</span>
          <span className="block">Driven by dreams.</span>
        </motion.h1>

        {/* Subtitle - center aligned with two lines step by step */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl font-normal leading-relaxed text-center drop-shadow-md"
        >
          <span className="block">Charminar to Cyberabad, 400 years of living history.</span>
          <span className="block">One unstoppable city of dreamers.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-8 sm:mt-10"
        >
          <button
            onClick={onOpenGetStarted}
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-200 cursor-pointer text-sm font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            <span>Explore The Dreams</span>
            <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
