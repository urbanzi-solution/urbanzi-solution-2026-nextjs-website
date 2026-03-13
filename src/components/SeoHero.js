"use client";

import { motion } from "framer-motion";
import { useLeadModal } from "@/context/LeadContext";

const ease = [0.22, 1, 0.36, 1];

export default function SeoHero() {
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
            backgroundImage: "url('/seohero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-[25px] sm:text-[42px] md:text-[15vw] md:text-[56px] lg:text-[18vw] lg:text-[64px] leading-[1.1] font-semibold text-[#9fd0ff]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
            >
              SEO Company in Trivandrum, Kerala – Get Found on Google & Grow Your Business
            </motion.h1>

            <motion.p
              className="mt-6 max-w-[720px] mx-auto text-white/90 text-[16px] md:text-[18px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease }}
            >
               An SEO company helps your website rank higher on Google so potential customers can find your business when they search for your products or services. At Urbanzi, we use ethical, data-driven SEO strategies to increase your visibility, website traffic, and qualified leads across Kerala.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease }}
            >
              <button 
                onClick={() => openModal("SEO Hero")}
                className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition"
              >
                Get a Free SEO Audit
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
