import { useState } from 'react';
import { ArrowRight, Trophy, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AwardItem {
  year: string;
  title: string;
  description: string;
  organization: string;
}

const FEATURED_AWARDS: AwardItem[] = [
  {
    year: '2022',
    title: 'AIPH World Green City Grand Winner',
    description: 'Crowned the overall Grand Winner at Jeju, South Korea, for the visionary greening of the Outer Ring Road and large-scale urban forestry, besting Paris and Montreal.',
    organization: 'International Association of Horticultural Producers (AIPH)',
  },
  {
    year: '2022',
    title: 'UNESCO Asia-Pacific Award of Distinction',
    description: 'Conferred for the meticulous hydrological revival and architectural conservation of the 16th-century Stepwells of Golconda (Qutb Shahi Tombs complex).',
    organization: 'UNESCO Asia-Pacific Awards for Cultural Heritage Conservation',
  },
  {
    year: '2019',
    title: 'UNESCO Creative City of Gastronomy',
    description: 'Designated into the prestigious UNESCO Creative Cities Network in recognition of 400 years of living culinary heritage, Dum Biryani, and Nizami feast culture.',
    organization: 'UNESCO Creative Cities Network',
  },
  {
    year: '2023',
    title: '#1 Most Liveable City in India',
    description: 'Ranked the top Indian city for quality of life for six consecutive survey cycles, evaluated on personal safety, climate, healthcare, and cultural vitality.',
    organization: 'Mercer Quality of Living Survey',
  },
];

const ALL_AWARDS: AwardItem[] = [
  ...FEATURED_AWARDS,
  {
    year: '2022',
    title: 'National Startup Award - Best Incubator in India',
    description: 'Conferred by DPIIT and the Ministry of Commerce & Industry, honoring Hyderabad\'s T-Hub as India\'s premier startup incubator and deep-tech innovation catalyst.',
    organization: 'DPIIT, Ministry of Commerce & Industry, Government of India',
  },
  {
    year: '2021 & 2022',
    title: 'Tree Cities of the World',
    description: 'Recognized consecutively by the UN Food and Agriculture Organization (FAO) and Arbor Day Foundation for enduring commitments to urban forest conservation.',
    organization: 'UN FAO & Arbor Day Foundation',
  },
];

export function Awards() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <section id="awards" className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-white uppercase mb-4 drop-shadow-md">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span>ACCOLADES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.15] drop-shadow-lg">
              Celebrating Hyderabad&apos;s Global Accolades
            </h2>
          </div>

          <button
            onClick={() => setShowAllModal(true)}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md hover:bg-white text-white hover:text-black transition-all duration-300 cursor-pointer text-sm font-semibold self-start md:self-auto shrink-0 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            <span>See All Accolades</span>
            <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-black text-white flex items-center justify-center transition-colors">
              <ArrowRight className="w-3 h-3 group-hover:text-white" />
            </div>
          </button>
        </motion.div>

        {/* Awards Table / List */}
        <div className="divide-y divide-white/20 border-t border-b border-white/20">
          {FEATURED_AWARDS.map((award, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              onClick={() => setSelectedAward(award)}
              className="group py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.03] px-2 md:px-4 -mx-2 md:-mx-4 transition-all duration-200 cursor-pointer"
            >
              {/* Year */}
              <div className="w-24 text-sm font-mono text-white/60 group-hover:text-white transition-colors">
                {award.year}
              </div>

              {/* Title */}
              <div className="md:w-1/3">
                <h3 className="text-lg md:text-xl font-light text-white group-hover:translate-x-1 transition-transform duration-300 drop-shadow-md">
                  {award.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:flex-1">
                <p className="text-xs md:text-sm text-white/70 font-normal leading-relaxed max-w-xl drop-shadow-sm">
                  {award.description}
                </p>
              </div>

              {/* Action arrow button */}
              <div className="shrink-0 flex justify-end">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-black group-hover:bg-white group-hover:border-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Award Detail / All Accolades Modal */}
      <AnimatePresence>
        {(selectedAward || showAllModal) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-black/80 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-[0_0_40px_rgba(0,0,0,0.5)] relative max-h-[85vh] overflow-y-auto"
            >
            <button
              onClick={() => {
                setSelectedAward(null);
                setShowAllModal(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {selectedAward && !showAllModal ? (
              <div>
                <div className="flex items-center gap-3 text-amber-400 mb-4">
                  <Trophy className="w-6 h-6" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                    Conferred {selectedAward.year}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-white mb-2">
                  {selectedAward.title}
                </h3>

                <div className="text-xs text-amber-300/90 font-medium mb-4">
                  Conferred by: {selectedAward.organization}
                </div>

                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  {selectedAward.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedAward(null)}
                    className="px-5 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 text-amber-400 mb-3">
                  <Trophy className="w-6 h-6" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                    Verified Global Honors
                  </span>
                </div>

                <h3 className="text-2xl font-light text-white mb-2">
                  Hyderabad&apos;s Accolades
                </h3>

                <p className="text-xs sm:text-sm text-white/60 mb-6">
                  Authentic global recognitions in heritage conservation, civic liveability, green canopy restoration, and deep-tech incubation.
                </p>

                <div className="space-y-4 mb-6 divide-y divide-white/10">
                  {ALL_AWARDS.map((award, i) => (
                    <div key={i} className={i === 0 ? '' : 'pt-4'}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-amber-400 font-semibold">{award.year}</span>
                        <span className="text-white/40 text-xs">·</span>
                        <span className="text-xs text-white/60">{award.organization}</span>
                      </div>
                      <h4 className="text-sm font-medium text-white mb-1">{award.title}</h4>
                      <p className="text-xs text-white/70 leading-relaxed">{award.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setShowAllModal(false)}
                    className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 cursor-pointer shadow-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
