import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white/[0.02]" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">INITIATE CONNECTION.</h2>
          <p className="text-white/40 text-lg mb-16">
            Join the waitlist for the next production run or inquire about our enterprise titanium acoustic solutions.
          </p>
        </div>

        <form className="grid md:grid-cols-2 gap-12" id="contact-form">
          <div className="space-y-12">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-accent w-0 group-focus-within:w-full transition-all duration-500" />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-accent w-0 group-focus-within:w-full transition-all duration-500" />
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="relative group mb-12">
              <textarea 
                rows={4}
                placeholder="How can we help?" 
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-white/20"
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-accent w-0 group-focus-within:w-full transition-all duration-500" />
            </div>

            <button className="w-full md:w-auto self-end flex items-center justify-center gap-3 px-12 py-5 bg-white text-black font-semibold rounded-full hover:bg-accent hover:text-black transition-all group overflow-hidden relative">
              <span className="relative z-10">Send Transmission</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
