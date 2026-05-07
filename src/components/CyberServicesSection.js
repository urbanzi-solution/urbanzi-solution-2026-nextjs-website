"use client";

import { motion } from "framer-motion";
import { Shield, Search, Globe, Lock, FileCheck, Users, AlertTriangle, Wifi } from "lucide-react";
import { useLeadModal } from "@/context/LeadContext";

const ease = [0.22, 1, 0.36, 1];

const services = [
  {
    icon: Search,
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    desc: "We simulate real-world cyberattacks to uncover weaknesses in your systems before hackers do. Covers web apps, networks, APIs, and infrastructure — with a detailed remediation report.",
    span: 3,
  },
  {
    icon: Globe,
    title: "Web Application Security",
    desc: "Identify and fix OWASP Top 10 vulnerabilities — SQL injection, XSS, broken auth, and more — before they put your customers at risk.",
    span: 2,
  },
  {
    icon: Wifi,
    title: "Network Security Assessment",
    desc: "A full audit of your internal and external network infrastructure to close open ports, misconfigurations, and lateral movement paths.",
    span: 2,
  },
  {
    icon: Lock,
    title: "Data Protection & Privacy Compliance",
    desc: "We help you align with GDPR, IT Act 2000, and industry-specific data protection requirements — reducing legal exposure and building customer trust.",
    span: 2,
  },
  {
    icon: FileCheck,
    title: "Security Audit & Risk Assessment",
    desc: "A comprehensive top-down security audit covering policies, access controls, and technical posture — with a prioritised risk register and remediation roadmap.",
    span: 3,
  },
  {
    icon: AlertTriangle,
    title: "Incident Response & Recovery",
    desc: "Already been breached or suspect a threat? Our incident response team contains, investigates, and helps you recover — fast, with minimal downtime.",
    span: 2,
  },
  {
    icon: Users,
    title: "Cybersecurity Awareness Training",
    desc: "90% of breaches start with human error. We train your team to recognise phishing, social engineering, and unsafe practices through practical workshops.",
    span: 2,
  },
  {
    icon: Shield,
    title: "Managed Security Monitoring",
    desc: "Continuous monitoring of your systems and alerts for suspicious activity — so threats are caught and contained before they escalate.",
    span: 2,
  },
];

export default function CyberServicesSection() {
  const { openModal } = useLeadModal();

  return (
    <section className="bg-black py-20 lg:py-32 px-6 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Cybersecurity</span> Services
          </h2>
          <div className="flex justify-center mt-6">
            <span className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
          </div>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            End-to-end security services designed to find vulnerabilities, fix them, and keep your business protected — continuously.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={`relative group rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 p-8 lg:p-10 flex flex-col items-start overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 ${
                  item.span === 3 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
                initial={{ opacity: 0, y: 36, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-6 h-14 w-14 rounded-2xl bg-gradient-to-tr from-emerald-900/50 to-emerald-800/20 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-emerald-400/40 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <Icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300 relative z-10">{item.title}</h3>
                <p className="text-base font-light leading-relaxed text-gray-400 relative z-10">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-24 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight text-white">
            Security That Goes Beyond{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Compliance Checkboxes</span>
          </h3>
          <p className="mt-8 text-gray-400 text-lg leading-relaxed font-light">
            We don't hand you a generic report and walk away. Every Urbanzi security engagement includes clear findings, prioritised fix guidance, and post-remediation support — so your business is genuinely more secure, not just audit-ready.
          </p>
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => openModal("Cybersecurity Services CTA")}
              className="px-8 py-4 rounded-full font-semibold text-black bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] inline-flex items-center gap-3 group"
            >
              Request a Security Assessment <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
