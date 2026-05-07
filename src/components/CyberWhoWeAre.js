"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  { value: "50+", label: "Security Audits Completed" },
  { value: "100%", label: "Client Data Confidentiality" },
  { value: "24/7", label: "Threat Monitoring Support" },
  { value: "0", label: "Data Breaches Post-Engagement" },
];

export default function CyberWhoWeAre() {
  return (
    <section className="bg-black py-20 lg:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src="/appwho.webp"
                alt="Urbanzi cybersecurity specialists protecting business networks and digital assets in Kerala"
                className="relative max-w-[380px] w-full rounded-2xl border border-white/10 shadow-2xl z-10"
              />
              {/* floating shield badge */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-[#040d09]/90 border border-emerald-500/30 rounded-2xl px-6 py-5 backdrop-blur-md shadow-2xl z-20 hover:scale-105 transition-transform duration-300">
                <div className="text-emerald-400 text-3xl mb-2">🛡️</div>
                <div className="text-white text-base font-bold">Certified</div>
                <div className="text-emerald-300/80 text-sm">Security Experts</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-tight">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mt-6 mb-10" />

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 font-light">
              Urbanzi Solutions is a trusted cybersecurity company in Trivandrum, Kerala. Our security specialists bring deep expertise in identifying vulnerabilities, securing networks, and protecting sensitive business data across industries — from startups to established enterprises.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-12">
              We follow internationally recognised security frameworks including OWASP, NIST, and ISO 27001 guidelines. Every engagement is treated with strict confidentiality, and our remediation-first approach means we don't just find problems — we help you fix them.
            </p>

            {/* E-E-A-T trust signals */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-12">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-[#040d09] border border-white/5 p-6 hover:border-emerald-500/30 transition-colors duration-300 group">
                  <div className="text-3xl font-bold text-emerald-400 group-hover:scale-105 transition-transform origin-left">{s.value}</div>
                  <div className="text-gray-400 text-sm mt-2 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-semibold"
            >
              Contact Our Security Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
