"use client";

import { motion } from "framer-motion";
import { Code2, Database, Building2, Users, Cloud, HeartPulse, Truck } from "lucide-react";
import { useLeadModal } from "@/context/LeadContext";

const ease = [0.22, 1, 0.36, 1];

const services = [
  { icon: <Code2 size={26} />, title: "Custom Software Development Services", desc: "Stop wasting time on software that only half-works for you. We create user-friendly custom platforms—CRM, ERP, logistics, portals, and more—designed for your workflows, with simple interfaces and powerful functionality." },
  { icon: <Database size={26} />, title: "CRM Software Development Company", desc: "Tired of spreadsheets and silos? We build CRM solutions that organize your contacts, sales, and support in one easy place—so your team can focus on relationships, not paperwork." },
  { icon: <Building2 size={26} />, title: "Enterprise Software Development Company", desc: "Need to connect your departments or automate complex processes? Our enterprise software streamlines everything—from HR to inventory—giving leaders better control and faster decision-making." },
  { icon: <Users size={26} />, title: "Outsourcing Software Development", desc: "Worried about cost or in-house expertise? Outsource your project to us. You get a reliable team that acts as your tech partner, updating you every step and delivering on time and budget." },
  { icon: <Cloud size={26} />, title: "SaaS Development Company", desc: "Want to launch your own online software business? We handle everything for scalable, secure SaaS platforms—user management, billing, cloud hosting—so you can focus on growth, not tech headaches." },
  { icon: <HeartPulse size={26} />, title: "Healthcare Software Development", desc: "Healthcare shouldn't be complicated. We build HIPAA-compliant apps, patient portals, and management tools that make care delivery smoother and more secure." },
  { icon: <Truck size={26} />, title: "Logistics Software Development", desc: "Move more, manage less! Our custom logistics platforms track shipments, optimize routes, and automate billing—helping you get goods out faster with less manual effort." },
];

function Card({ service, delay }) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-400/15 bg-gradient-to-br from-[#071a32] to-[#020b1c] p-8 text-center transition-all duration-300 hover:border-slate-300/30"
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-[#0f223f] text-slate-300">
        {service.icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-4">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
    </motion.div>
  );
}

export default function SoftwareServicesSection() {
  const { openModal } = useLeadModal();
  return (
    <section className="bg-[#020617] py-10 md:py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Our Custom Software Development Services</h2>
          <div className="w-24 h-[3px] bg-white/80 mx-auto mt-5 rounded-full" />
          <p className="text-gray-400 mt-6">Everything You Need for Business-Boosting Software</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 4).map((service, index) => (
            <Card key={index} service={service} delay={index * 0.07} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto">
          {services.slice(4).map((service, index) => (
            <Card key={index} service={service} delay={(index + 4) * 0.07} />
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
        >
          <button 
            onClick={() => openModal("Software Services Section")}
            className="px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            Get Custom Software Quote →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
