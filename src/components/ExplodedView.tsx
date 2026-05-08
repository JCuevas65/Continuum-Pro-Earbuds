import { motion } from "motion/react";

export default function ExplodedView() {
  return (
    <section className="py-32 px-6 md:px-12 bg-brand" id="engineering">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">ENGINEERING & MODULARITY.</h2>
          <p className="text-[#B8B8B8] max-w-2xl mx-auto text-lg leading-relaxed">
            Continuum Pro is more than just titanium housing. It is a masterpiece of micro-engineering, 
            designed to be taken apart and understood.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-accent font-mono text-xs uppercase tracking-widest">01. Acoustic Chamber</h3>
              <p className="text-white/80 leading-relaxed">
                A custom-milled titanium acoustic chamber eliminates unwanted internal resonances, 
                providing a neutral, transparent sound stage that usually requires open-back headphones.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-accent font-mono text-xs uppercase tracking-widest">02. Planar Magnetic Driver</h3>
              <p className="text-white/80 leading-relaxed">
                Our 12mm ultra-thin diaphragm responds with unmatched speed. The trace-pattern voice coil 
                is etched directly onto the substrate for zero mass-lag and distortion-free playback at any volume.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-accent font-mono text-xs uppercase tracking-widest">03. Swap-Core Battery</h3>
              <p className="text-white/80 leading-relaxed">
                Housings snap open to reveal the high-density lithium-ion core. No heat-guns or glue required. 
                Replacing your battery takes less than 30 seconds, ensuring your earbuds last for decades.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 blur-[150px] -z-10" />
            <img 
              id="modular-parts"
              src="input_file_1.png" 
              alt="Internal exploded view schematic" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
