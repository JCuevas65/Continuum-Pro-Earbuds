export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-brand">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <div className="text-xl font-medium tracking-tighter mb-4">
            CONTINUUM<span className="text-accent">.</span>PRO
          </div>
          <p className="text-[#B8B8B8]/40 text-xs tracking-widest uppercase">
            © 2026 Continuum Acoustic Systems. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="space-y-4">
            <h5 className="text-[10px] text-[#B8B8B8]/60 uppercase tracking-widest mb-6">Social</h5>
            <ul className="space-y-3">
              {["Instagram", "X (Twitter)", "Linear"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#B8B8B8]/80 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] text-[#B8B8B8]/60 uppercase tracking-widest mb-6">Support</h5>
            <ul className="space-y-3">
              {["Repair Guide", "Manuals", "Privacy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#B8B8B8]/80 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
        <div className="font-mono text-[9px] text-[#B8B8B8]/20 uppercase tracking-[0.3em]">
          Designed in Berlin. Machined in Switzerland.
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[9px] text-accent uppercase tracking-widest">Network Active</span>
        </div>
      </div>
    </footer>
  );
}
