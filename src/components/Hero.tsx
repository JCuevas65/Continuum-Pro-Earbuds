import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6" id="hero">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-semibold mb-6 block">
            The Future of Acoustic Engineering
          </span>
        </motion.div>

        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tight leading-[0.8] text-gradient mb-8"
          id="hero-headline"
        >
          BUILT FOR A DECADE,<br />NOT A SEASON.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-lg text-[#B8B8B8] max-w-xl mx-auto mb-10 leading-relaxed"
          id="hero-subtext"
        >
          The era of disposable technology is over. Meet the world’s first modular, Grade 5 titanium audio system.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          id="hero-cta"
        >
          <button className="px-8 py-4 bg-accent text-black rounded-full font-medium hover:bg-accent/80 transition-all transform hover:scale-105 shadow-glow">
            Pre-order Founder’s Edition
          </button>
        </motion.div>
      </div>

      {/* Product Image */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        className="absolute bottom-[-5%] md:bottom-[-15%] w-full max-w-6xl px-6 pointer-events-none"
      >
        <img 
          id="hero-main"
          src="input_file_0.png" 
          alt="Continuum Pro Earbuds Hero" 
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
