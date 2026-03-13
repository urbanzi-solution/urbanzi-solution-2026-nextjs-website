"use client";

import { useLeadModal } from "@/context/LeadContext";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function WebCTA() {
  const { openModal } = useLeadModal();
  return (
    <section className="relative py-14 px-6 bg-black text-white overflow-hidden -mt-20">
      <div className="absolute w-[90vw] max-w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2" />

      <motion.div
        className="relative max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          Ready to build a website that
          <span className="bg-blue-400 text-transparent bg-clip-text"> actually grows your business?</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.22, ease }}
        >
          Talk to our <span className="text-blue-400 font-semibold">web development experts in Trivandrum</span> today and discover how the right website can generate leads, boost credibility, and scale your business online.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.34, ease }}
        >
          <button 
            onClick={() => openModal("Web Development Consultation Section")}
            className="flex items-center justify-center gap-2 px-5 py-5 rounded-full bg-blue-500 font-semibold hover:scale-105 transition w-full md:w-auto"
          >
            Book a Free Website Consultation <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => openModal("Web Development Quote Section")}
            className="flex items-center justify-center px-10 py-5 rounded-full border border-white/20 hover:bg-white/5 transition w-full md:w-auto"
          >
            Get a Custom Quote in 24 Hours
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
