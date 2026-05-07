"use client";

import { motion } from "framer-motion";
import { useLeadModal } from "@/context/LeadContext";

const ease = [0.22, 1, 0.36, 1];

export default function CyberHero() {
  const { openModal } = useLeadModal();
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] min-h-[600px] flex items-center justify-center border border-white/10 shadow-2xl shadow-emerald-900/20"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          style={{
            backgroundImage: "url('/innovation-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

          {/* grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.span
              className="inline-block text-[10px] md:text-xs tracking-[0.2em] px-5 py-2.5 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 mb-6 backdrop-blur-md font-medium"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              CYBERSECURITY SERVICES · TRIVANDRUM, KERALA
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[64px] leading-[1.15] font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
            >
              Cybersecurity Services in Kerala —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Protect Your Business
              </span> Before Threats Strike
            </motion.h1>

            <motion.p
              className="mt-6 max-w-[700px] mx-auto text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease }}
            >
              Urbanzi Solutions provides professional cybersecurity services in Trivandrum, Kerala — including vulnerability assessments, penetration testing, network security, and compliance audits. We help businesses stay secure, compliant, and resilient against modern cyber threats.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease }}
            >
              <button
                onClick={() => openModal("Cybersecurity Free Audit")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                Get a Free Security Audit
              </button>
              <button
                onClick={() => openModal("Cybersecurity Consultation")}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                Talk to an Expert
              </button>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
            >
              {["VAPT", "Network Security", "Web App Security", "Data Protection", "Compliance Audits"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
