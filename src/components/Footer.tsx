import { useState, type FormEvent } from 'react';
import { Link, Share2, Camera, Code, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-black py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Newsletter Box matching the pill card in reference */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl p-8 sm:p-10 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-xl mb-14 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-white/30 transition-colors"
        >
          <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight drop-shadow-md">
            Stay Connected with Hyderabad Dreams
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-white/80 font-medium drop-shadow-md">
            Receive monthly updates on heritage preservation, cultural symposiums, and startup milestones.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-full bg-white/[0.06] border border-white/20 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-white/90 text-xs font-semibold transition-colors cursor-pointer shrink-0 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-md"
            >
              {subscribed ? (
                <span className="flex items-center gap-1.5 justify-center">
                  <Check className="w-3.5 h-3.5" />
                  Subscribed
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/90 font-medium"
        >
          <a
            href="mailto:dreams@hyderabad.org"
            className="hover:text-white underline underline-offset-4 decoration-white/20 transition-colors"
          >
            dreams@hyderabad.org
          </a>
          <span className="hidden sm:inline text-white/30">·</span>
          <a
            href="tel:+914023456789"
            className="hover:text-white underline underline-offset-4 decoration-white/20 transition-colors"
          >
            +91 40 2345 6789
          </a>
        </motion.div>

        {/* Social Icons matching the 4 icons in screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-5 text-white/80"
        >
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-all cursor-pointer"
            aria-label="Twitter / X"
          >
            <Share2 className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-all cursor-pointer"
            aria-label="LinkedIn"
          >
            <Link className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-all cursor-pointer"
            aria-label="Instagram"
          >
            <Camera className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-all cursor-pointer"
            aria-label="GitHub"
          >
            <Code className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Big Watermark Logo matching reference */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mt-16 select-none pointer-events-none"
        >
          <span className="text-7xl sm:text-9xl md:text-[140px] font-bold tracking-tighter text-white/[0.25] leading-none block drop-shadow-2xl">
            Hyderabad
          </span>
        </motion.div>

        {/* Bottom micro copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-xs text-white/70 font-medium flex flex-col sm:flex-row items-center gap-2 drop-shadow-md"
        >
          <span>© 2025 Hyderabad Dreams Initiative. All rights reserved.</span>
          <span className="hidden sm:inline">·</span>
          <span>Built In ❤️ with Hyderabad</span>
        </motion.div>
      </div>
    </footer>
  );
}
