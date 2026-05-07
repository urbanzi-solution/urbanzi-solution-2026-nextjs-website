"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const steps = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We start by understanding your business, systems, and security goals. We define the scope — which assets, networks, or applications need testing — and sign a formal agreement protecting both parties.",
  },
  {
    step: "02",
    title: "Reconnaissance & Threat Modelling",
    desc: "Our team maps your attack surface using passive and active intelligence gathering. We identify entry points, assets, and build a threat model tailored to your business profile and industry.",
  },
  {
    step: "03",
    title: "Assessment & Testing",
    desc: "We conduct rigorous technical testing — VAPT, network scans, web app testing, social engineering simulations — using industry-standard tools and manual expert verification to eliminate false positives.",
  },
  {
    step: "04",
    title: "Reporting & Remediation Guidance",
    desc: "You receive a clear, jargon-free report: executive summary, technical findings, risk rating for each vulnerability, and step-by-step remediation guidance your team can act on immediately.",
  },
  {
    step: "05",
    title: "Remediation Support & Retest",
    desc: "We stay with you through the fix phase — answering questions, reviewing patches, and retesting critical vulnerabilities to confirm they have been properly closed.",
  },
  {
    step: "06",
    title: "Ongoing Monitoring & Review",
    desc: "Security is not a one-time event. We offer continuous monitoring, periodic reassessments, and quarterly security reviews to keep your defences current as threats evolve.",
  },
];

export default function CyberProcessSection() {
  return (
    <section className="bg-black py-10 lg:py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-xs tracking-widest px-4 py-2 bg-neutral-800 rounded-full text-neutral-300">
            HOW WE WORK
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-6">
            Our Security <span className="text-emerald-400 italic">Process</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            A structured, transparent engagement from first call to ongoing protection.
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical connector line */}
          <div className="hidden lg:block absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
              >
                {/* step dot */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 text-sm font-bold">{s.step}</span>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-7 py-6 flex-1 hover:border-emerald-500/20 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
