"use client";

import { motion } from "framer-motion";
import { useLeadModal } from "@/context/LeadContext";

const ease = [0.22, 1, 0.36, 1];

export default function GraphicsHero() {
  const { openModal } = useLeadModal();
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl min-h-[520px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          style={{
            backgroundImage: "url('/grahero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-[25px] md:text-[15vw] md:text-[56px] lg:text-[58px] leading-[1.1] font-semibold text-[#9fd0ff]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
            >
              Graphic Designing & Animation Company in Trivandrum, Kerala – Visuals That Convert Attention Into Action
            </motion.h1>

            <motion.p
              className="mt-6 max-w-[720px] mx-auto text-white/90 text-[16px] md:text-[18px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease }}
            >
               A graphic designing and animation company creates visual content that communicates your brand, captures attention, and drives engagement across digital platforms. At Urbanzi, we design high-impact visuals, motion graphics, and animations that make your brand look premium—and perform better across ads, social media, and websites.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease }}
            >
              <button 
                onClick={() => openModal("Graphics & Animation Hero")}
                className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition"
              >
                 Request Design Call
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
