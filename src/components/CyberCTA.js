"use client";

import { useLeadModal } from "@/context/LeadContext";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function CyberCTA() {
  const { openModal } = useLeadModal();

  return (
    <section className="relative py-16 px-6 bg-black text-white overflow-hidden">
      <div className="absolute w-[80vw] max-w-[600px] h-[500px] blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2 bg-emerald-900/30 pointer-events-none" />

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
        </div>

        <motion.h2
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          Ready to Secure Your Business{" "}
          <span className="text-emerald-400">Before It&apos;s Too Late?</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.22, ease }}
        >
          Get a free initial security consultation from Urbanzi&apos;s cybersecurity team in Trivandrum, Kerala. We&apos;ll help you understand your current risk and what it takes to fix it.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.34, ease }}
        >
          <button
            onClick={() => openModal("Cybersecurity Free Audit CTA")}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition hover:scale-105 w-full md:w-auto"
          >
            Get a Free Security Audit <ArrowRight size={18} />
          </button>
          <button
            onClick={() => openModal("Cybersecurity Expert Call")}
            className="flex items-center justify-center px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition w-full md:w-auto"
          >
            Book an Expert Call
          </button>
        </motion.div>

        <motion.p
          className="mt-8 text-white/40 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
        >
          All engagements are covered by NDA · No commitment required for initial consultation
        </motion.p>
      </motion.div>
    </section>
  );
}
