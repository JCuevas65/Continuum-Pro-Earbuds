import { motion } from "motion/react";

const technicalSpecs = [
  { label: "Driver Type", value: "12mm Planar Magnetic" },
  { label: "Freq. Response", value: "5Hz – 48kHz" },
  { label: "Impedance", value: "32 Ohms" },
  { label: "Connectivity", value: "BT 5.4 / LE Audio / LC3" },
  { label: "Codecs", value: "LDAC, aptX Adaptive, AAC" },
  { label: "Construction", value: "Grade 5 Titanium" },
  { label: "Waterproofing", value: "IPX7 Submersion Proof" },
  { label: "Weight", value: "4.2g per earbud" }
];

export default function Specs() {
  return (
    <section className="py-32 px-6 md:px-12" id="tech">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">CRITICAL DATA.</h2>
            <p className="text-white/40 max-w-sm">Precision performance verified by industry leading standards.</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest leading-none">Status: Production Ready</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-1">
          {technicalSpecs.map((spec, index) => (
            <motion.div 
              key={spec.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex justify-between items-center py-6 border-b border-white/5 group hover:border-accent/30 transition-colors"
            >
              <span className="text-white/30 uppercase text-[10px] tracking-widest">{spec.label}</span>
              <span className="font-mono text-sm group-hover:text-accent transition-colors">{spec.value}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 glass-card rounded-[32px] overflow-hidden relative"
        >
          <div className="relative z-10 grid md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <div id="spec-icon-1" className="w-8 h-8 mb-4 border border-accent/20 rounded flex items-center justify-center text-[10px] text-accent font-mono">12mm</div>
              <h4 className="text-accent text-3xl font-mono mb-2">0.001%</h4>
              <p className="text-[#B8B8B8] text-xs uppercase tracking-widest">Total Harmonic Distortion</p>
            </div>
            <div>
              <div id="spec-icon-2" className="w-8 h-8 mb-4 border border-accent/20 rounded flex items-center justify-center text-[10px] text-accent font-mono">NC</div>
              <h4 className="text-accent text-3xl font-mono mb-2">-48dB</h4>
              <p className="text-[#B8B8B8] text-xs uppercase tracking-widest">Active Noise Cancellation</p>
            </div>
            <div>
              <div id="spec-icon-3" className="w-8 h-8 mb-4 border border-accent/20 rounded flex items-center justify-center text-[10px] text-accent font-mono">5.4</div>
              <h4 className="text-accent text-3xl font-mono mb-2">5.4</h4>
              <p className="text-[#B8B8B8] text-xs uppercase tracking-widest">Bluetooth Standard</p>
            </div>
            <div>
              <div id="spec-icon-4" className="w-8 h-8 mb-4 border border-accent/20 rounded flex items-center justify-center text-[10px] text-accent font-mono">IPX7</div>
              <h4 className="text-accent text-3xl font-mono mb-2">X7</h4>
              <p className="text-[#B8B8B8] text-xs uppercase tracking-widest">Waterproof Grade</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
