"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function WebbHero() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl min-h-[520px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          style={{
            backgroundImage: "url('/Webhero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-[12vw] sm:text-[42px] md:text-[15vw] md:text-[56px] lg:text-[18vw] lg:text-[64px] leading-[1.1] font-semibold text-[#9fd0ff]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
            >
              Web Development Company in Trivandrum, Kerala
              <br />
              High-Performance Websites That Convert
            </motion.h1>

            <motion.p
              className="mt-6 max-w-[720px] mx-auto text-white/90 text-[16px] md:text-[18px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease }}
            >
              Urbanzi is a professional web development company in Trivandrum, Kerala, building fast, secure, SEO-optimized websites and e-commerce platforms. Custom WordPress, Shopify, React &amp; Next.js solutions for businesses that want more leads and sales.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease }}
            >
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition">
                Start Your Project
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
