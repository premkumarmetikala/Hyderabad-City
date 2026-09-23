import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS_DATA = [
  {
    question: 'What makes Hyderabad the ultimate launchpad for dreamers and creators?',
    answer:
      'Hyderabad uniquely unites four centuries of living history with India\'s most aggressive innovation velocity. With world-class infrastructure, top-tier safety, low living costs, and Asia\'s largest incubator T-Hub, it gives visionaries the space, network, and support to turn ambitious dreams into reality.',
  },
  {
    question: 'How can I experience the historic charm of Charminar and the Old City?',
    answer:
      'Charminar and surrounding cultural landmarks like Chowmahalla Palace, Mecca Masjid, and the bustling bangle artisans of Laad Bazaar are open throughout the year. You can experience early morning heritage walks and late-night Irani chai culture directly overlooking the 430-year-old monument.',
  },
  {
    question: 'How does Hyderabad support tech founders and creative startups?',
    answer:
      'The city is home to a world-renowned innovation ecosystem anchored by T-Hub, T-Works (India\'s largest prototyping center), WE-Hub for female founders, and global engineering campuses for Microsoft, Google, and Amazon.',
  },
  {
    question: 'What is the living culture and atmosphere like for newcomers?',
    answer:
      'Celebrated worldwide for "Mehman-nawazi" (legendary Deccani hospitality), Hyderabad is one of the most inclusive, cosmopolitan cities in India. The seamless synthesis of Telugu, Urdu, and English culture creates an inviting home for professionals, artists, and families alike.',
  },
  {
    question: 'How can I participate in civic, cultural, and heritage preservation?',
    answer:
      'You can join open citizen stepwell rejuvenation drives (such as the Bansilalpet revival), tree-planting and urban lake restoration programs, local artisan guilds, and quarterly heritage and poetry symposiums across the city.',
  },
];

export function Faqs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faqs" className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-white uppercase mb-4 drop-shadow-md">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span>FAQS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.15] drop-shadow-lg">
              Your Questions, Answered
            </h2>
          </motion.div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 divide-y divide-white/20 border-t border-b border-white/20">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  key={idx} 
                  className="py-6"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/10 rounded-lg p-2 -mx-2 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-white group-hover:text-white/80 transition-colors drop-shadow-md">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-md border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-white transition-all shrink-0 shadow-md">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-xs sm:text-sm text-white/80 font-medium leading-relaxed max-w-xl px-2">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
