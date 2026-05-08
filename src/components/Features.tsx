import { motion } from "motion/react";
import { Shield, Layers, Battery, Radio } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Aerospace Titanium",
    description: "Built from Grade 5 titanium, the housing is practically indestructible and weighing only 4.2g."
  },
  {
    icon: Layers,
    title: "Circular Design",
    description: "Reduce e-waste by 75% with zero-glue construction. Every single component is user-replaceable in seconds."
  },
  {
    icon: Radio,
    title: "Continuum Link",
    description: "Lossless 24-bit audio over Bluetooth 5.4 with zero latency for professional monitoring."
  },
  {
    icon: Battery,
    title: "50-Hour Endurance",
    description: "12 hours of continuous playback, with 48 additional hours stored in the ultra-compact titanium case."
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white/5" id="durability">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">Survival Protocol</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
              TITANIUM TOUGH.<br />
              <span className="text-[#B8B8B8]">ALL WEATHER READY.</span>
            </h2>
            <p className="text-[#B8B8B8]/60 text-lg max-w-lg mb-10 leading-relaxed">
              With an IPX4-rated Grade 5 titanium shell, the Continuum Pro thrives in the harshest urban environments. 
              Rain, sweat, and concrete—nothing slows the frequency.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-card rounded-[40px] aspect-square flex items-center justify-center p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent/5 blur-3xl opacity-50" />
            <img 
              id="lifestyle-urban"
              src="input_file_2.png" 
              alt="Continuum Pro in Urban Environment" 
              className="w-full h-full object-cover rounded-[24px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-white/5 hover:border-white/20 transition-all group"
            >
              <feature.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-medium mb-4">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
