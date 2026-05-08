import { motion } from "motion/react";

export default function Sustainability() {
  return (
    <section className="py-32 px-6 md:px-12 bg-brand overflow-hidden" id="sustainability">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">Our Responsibility</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
              DESIGNED TO BE <br />
              <span className="text-white/40">THE LAST.</span>
            </h2>
            <p className="text-[#B8B8B8] text-lg mb-8 leading-relaxed">
              Every year, millions of earbuds end up in landfills. Most are glued shut, making repair impossible. 
              Continuum Pro breaks this cycle. 
            </p>
            <div className="space-y-6">
              <div className="p-6 glass-card rounded-2xl">
                <h4 className="text-white font-medium mb-2">Zero Glue Policy</h4>
                <p className="text-white/40 text-sm">Mechanical fasteners allow us to disassemble and repair even the smallest circuits.</p>
              </div>
              <div className="p-6 glass-card rounded-2xl">
                <h4 className="text-white font-medium mb-2">Infinite Support</h4>
                <p className="text-white/40 text-sm">As battery technology improves, we offer core replacements that fit your original titanium shell.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative aspect-square rounded-[40px] overflow-hidden"
          >
            <img 
              id="sustainability-visual"
              src="input_file_3.png" 
              alt="Sustainability comparison" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
