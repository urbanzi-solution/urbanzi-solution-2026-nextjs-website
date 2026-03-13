"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-[#050914]">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Our Expertise</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
        >
          Innovative Solutions <br /> for Your <span className="italic text-blue-500 font-normal">Digital Transformation</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We bridge the gap between imagination and reality with cutting-edge technology. From conceptualization to deployment, explore our full range of digital excellence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link
            href="/contact"
            className="group px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-200 transition-all hover:scale-105"
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 transition-all"
          >
            Explore Solutions
          </a>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

    </section>
  );
}
