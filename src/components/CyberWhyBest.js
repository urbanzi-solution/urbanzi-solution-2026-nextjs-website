"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const reasons = [
  {
    title: "Real-World Attacker Mindset",
    desc: "Our testers think like hackers, not auditors. We go beyond automated scans and simulate the actual techniques adversaries use — finding what tools alone miss.",
  },
  {
    title: "Remediation-First Approach",
    desc: "We don't just hand over a report. We walk your team through every finding, explain the fix, and retest to confirm vulnerabilities are properly closed.",
  },
  {
    title: "Industry Framework Compliance",
    desc: "All engagements follow OWASP, NIST, and ISO 27001 guidelines — so your remediation efforts translate directly to audit-readiness and regulatory compliance.",
  },
  {
    title: "100% Confidential Engagements",
    desc: "Every engagement is covered by a strict NDA. Your vulnerability data, systems, and findings are never shared, stored beyond the engagement, or used for any other purpose.",
  },
  {
    title: "Kerala-Based Team, Global Standards",
    desc: "We understand the local business environment while applying internationally recognised security methodologies — giving you enterprise-grade security without enterprise-grade complexity.",
  },
  {
    title: "Clear, Jargon-Free Reporting",
    desc: "Our reports are written for both technical teams and business owners. You'll know exactly what was found, how serious it is, and what to do next — without needing a security background.",
  },
  {
    title: "Post-Engagement Ongoing Support",
    desc: "Cyber threats evolve. Our relationship doesn't end at delivery. We offer follow-up assessments, monitoring, and consulting as your systems grow and change.",
    full: true,
  },
];

export default function CyberWhyBest() {
  return (
    <section className="bg-black py-10 lg:py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-semibold mb-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          Why Choose Urbanzi for Cybersecurity
        </motion.h2>
        <motion.p
          className="text-center text-white/60 mb-14 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Security that's thorough, transparent, and built around your business — not just a compliance tick.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl border border-white/10 bg-[#040d09] px-8 py-8 hover:border-emerald-500/25 transition-colors ${
                item.full ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-emerald-300 mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
