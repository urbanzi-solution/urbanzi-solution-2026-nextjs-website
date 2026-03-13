"use client";

import { motion } from "framer-motion";
import { Palette, Megaphone, Clapperboard, Box, Film, Layout } from "lucide-react";
import { useLeadModal } from "@/context/LeadContext";

const ease = [0.22, 1, 0.36, 1];

const services = [
  { icon: <Palette size={26} />, title: "Brand Identity & Visual Design", desc: "Logos, brand systems, typography, color palettes, and brand guidelines that build trust and recognition." },
  { icon: <Megaphone size={26} />, title: "Social Media Creatives & Ad Designs", desc: "High-converting creatives for Instagram, Facebook, YouTube, LinkedIn, and performance ads." },
  { icon: <Clapperboard size={26} />, title: "Motion Graphics & Explainer Videos", desc: "Short-form animations, explainer videos, reels, and ad creatives designed to communicate complex ideas simply." },
  { icon: <Box size={26} />, title: "2D & 3D Animation", desc: "Character animation, product visualization, 3D motion graphics, and cinematic brand visuals." },
  { icon: <Film size={26} />, title: "Video Editing & Post-Production", desc: "Professional editing for ads, YouTube, reels, corporate videos, and brand films." },
  { icon: <Layout size={26} />, title: "Website & UI Visual Assets", desc: "Custom illustrations, banners, icons, and animations optimized for websites, landing pages, and product pages." },
];

export default function GraphicsServicesSection() {
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
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Our Graphic Designing &amp; Animation Services</h2>
          <div className="w-20 h-[3px] bg-white mx-auto mt-4 rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Everything You Need to Make Your Brand Unforgettable.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#0a1a35] to-[#02060f] p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.09, ease }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 mb-6 text-white/80">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4 text-white leading-snug">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
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
            onClick={() => openModal("Graphics Services Section")}
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:scale-105 transition duration-300"
          >
            See More Services →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
