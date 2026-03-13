"use client";

import { motion } from "framer-motion";
import { PencilRuler, Bug, Settings } from "lucide-react";
import { SiAndroid, SiApple, SiFlutter, SiReact } from "react-icons/si";
import { useLeadModal } from "@/context/LeadContext";

const ease = [0.22, 1, 0.36, 1];

const services = [
  { icon: <SiAndroid size={28} />, title: "Android App Development", desc: "Tired of missing out on Android's huge market? We offer smooth, reliable apps that get you seen—and make life easier for you and your users." },
  { icon: <SiApple size={28} />, title: "iPhone App Development", desc: "Want to impress your Apple-loving customers? Our iPhone development company crafts intuitive, elegant iOS apps your audience will rave about." },
  { icon: <SiFlutter size={28} />, title: "Flutter App Development", desc: "Worried about high costs and long waits? With Flutter, you get one app for both Android and iOS—without sacrificing quality or breaking the bank." },
  { icon: <SiReact size={28} />, title: "React Native App Development", desc: "Is flexibility your top concern? We give you adaptable, future-proof apps that grow with your business." },
  { icon: <SiApple size={28} />, title: "Custom iOS Mobile Application Development", desc: "Need something truly unique? We don't do cookie-cutter. Our custom iOS solutions tackle your specific challenges." },
  { icon: <PencilRuler size={28} />, title: "App UI/UX Design & Prototyping", desc: "Sick of apps that frustrate users? We build clean, beautiful experiences that keep people coming back." },
  { icon: <Bug size={28} />, title: "App Testing & Maintenance", desc: "Dreading hidden bugs or post-launch headaches? We test everything and support you long-term." },
  { icon: <Settings size={28} />, title: "Integration & Consultation", desc: "Unsure how your app fits into your business? We connect every part—CRMs, payment gateways, websites—no confusion, just results." },
];

export default function MobileAppServicesSection() {
  const { openModal } = useLeadModal();
  return (
    <section className="bg-[#020617] py-10 md:py-20 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Our Mobile App Development Services
          </h2>
          <div className="w-20 h-[3px] bg-white mx-auto mt-4 rounded-full" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Everything You Need, from First Idea to Real App — No Tech Jargon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-6 md:gap-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group aspect-auto md:aspect-square min-h-[260px] md:min-h-[340px] rounded-xl border border-white/10 bg-gradient-to-br from-[#0a1a35] to-[#02060f] p-6 md:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.07, ease }}
            >
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/5 mb-5 md:mb-6 text-white/80">
                {service.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white">{service.title}</h3>
              <p className="text-sm leading-relaxed text-white/70 max-w-[260px]">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
        >
          <button 
            onClick={() => openModal("Mobile App Services Section")}
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            Explore All Services →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
