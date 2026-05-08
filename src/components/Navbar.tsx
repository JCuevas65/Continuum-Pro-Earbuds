import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 backdrop-blur-sm"
      id="navbar"
    >
      <div className="flex items-center gap-8">
        <a href="#" className="text-xl font-medium tracking-tighter" id="logo">
          CONTINUUM<span className="text-accent">.</span>PRO
        </a>
        <div className="hidden md:flex items-center gap-6" id="nav-links">
          {["Durability", "Engineering", "Sustainability", "Tech"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest text-[#B8B8B8] hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors" id="btn-login">
          Login
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-semibold hover:bg-accent hover:text-black transition-all group shadow-glow" id="btn-order">
          Pre-order Now
          <ShoppingBag className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.nav>
  );
}
