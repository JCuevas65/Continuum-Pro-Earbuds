import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function Shop() {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-brand" id="shop">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">FOUNDER'S EDITION.</h2>
            <p className="text-[#B8B8B8] text-lg mb-12 leading-relaxed">
              Be among the first 1000 to own the Continuum Pro. Individually numbered, with a limited-run 
              Titanium Black finish and an extended 10-year battery replacement warranty.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "Individually Numbered (0001-1000)",
                "Carbon-Fiber Travel Case (Exclusive)",
                "Lifetime Logic-Board Upgrades",
                "Priority 24/7 Concierge Support"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <Check className="w-4 h-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-1 px-1 rounded-[40px] bg-linear-to-b from-accent/20 to-transparent"
          >
            <div className="bg-[#0D0D0D] rounded-[39px] p-12 text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Limited Production</span>
              <div className="text-6xl font-medium mb-4">$599</div>
              <p className="text-white/20 text-xs uppercase tracking-widest mb-12">Batch 01 Shipping Fall 2026</p>
              
              <button className="w-full py-5 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                Join Pre-order Queue
              </button>
              
              <p className="mt-6 text-white/10 text-[10px] tracking-tight">
                Fully refundable $50 deposit required to secure your slot.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
