"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const threats = [
  { stat: "300%", label: "Rise in cyberattacks on Indian SMBs since 2021", icon: "📈" },
  { stat: "₹17 Cr", label: "Average cost of a data breach in India (IBM 2024)", icon: "💸" },
  { stat: "74%", label: "Of businesses that suffer a breach close within 2 years", icon: "⚠️" },
  { stat: "60 sec", label: "How often a new cyberattack is launched globally", icon: "⏱️" },
];

export default function CyberThreatStats() {
  return (
    <section className="bg-[#020a05] py-16 lg:py-24 px-6 text-white relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-emerald-900/20 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-xs tracking-widest px-4 py-2 bg-red-900/40 border border-red-500/30 rounded-full text-red-400">
            THE THREAT IS REAL
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-6 leading-tight">
            Cyber Threats Are Growing —{" "}
            <span className="text-red-400">Is Your Business Protected?</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Small and mid-sized businesses in India are the most targeted. The question is not if you will be attacked, but when — and whether you are ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {threats.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-red-500/15 bg-red-950/10 px-6 py-8 text-center hover:border-red-500/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <div className="text-3xl mb-3">{t.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-3">{t.stat}</div>
              <p className="text-white/60 text-sm leading-relaxed">{t.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
            The businesses that survive these attacks aren&apos;t lucky —{" "}
            <span className="text-emerald-400">they were prepared.</span>
          </p>
          <p className="text-white/60 mt-4">
            Urbanzi&apos;s cybersecurity team helps you find and fix vulnerabilities before attackers exploit them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
