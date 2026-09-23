import { motion } from 'framer-motion';

export function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full bg-black py-24 px-6 md:px-12">
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
            <span>WHY HYDERABAD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.15] max-w-2xl drop-shadow-lg">
            A City Built on Legacy and Velocity
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-xl flex flex-col justify-between hover:border-white/40 hover:bg-black/60 transition-all duration-300 min-h-[240px] shadow-lg"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug drop-shadow-md">
                Verified Legacy &amp; Living Heritage
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-white/80 font-medium leading-relaxed drop-shadow-md">
                Experience over 400 years of syncretic Deccani culture, pearl crafting, and culinary traditions that thrive today.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs text-white/70 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
              <span>UNESCO Heritage Recognition</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-xl flex flex-col justify-between hover:border-white/40 hover:bg-black/60 transition-all duration-300 min-h-[240px] shadow-lg"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug drop-shadow-md">
                Global Tech Hub for Every Vision
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-white/80 font-medium leading-relaxed drop-shadow-md">
                Connect with mega campuses of Microsoft, Google, Amazon, and Asia&apos;s largest startup hub T-Hub.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs text-white/70 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
              <span>Leading Global R&amp;D Capital</span>
            </div>
          </motion.div>

          {/* Card 3 - Spans full width */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 relative p-8 md:p-12 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-xl overflow-hidden flex flex-col justify-end min-h-[240px] shadow-xl"
          >
            {/* Subtle ambient light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug drop-shadow-md">
                Where Ancient Stones Meet Deep-Tech Horizons
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/90 font-medium leading-relaxed drop-shadow-md">
                A rare metropolis where afternoon conversations over Irani chai beside Charminar transform into planetary-scale innovations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
