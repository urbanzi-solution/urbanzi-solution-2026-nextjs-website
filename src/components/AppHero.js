"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function webHero() {
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl min-h-[420px] md:min-h-[520px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          style={{
            backgroundImage: "url('/app-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* content */}
          <div className="relative z-10 text-center px-4 md:px-6">
            <motion.h1
              className="text-[28px] sm:text-[36px] md:text-[15vw] md:text-[56px] lg:text-[18vw] lg:text-[64px] leading-[1.15] md:leading-[1.1] font-semibold text-[#9fd0ff]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
            >
              Turn Your App Idea into Reality with
              Kerala&apos;s Trusted Mobile
              <br className="hidden md:block" />
              App Development Company
            </motion.h1>

            <motion.p
              className="mt-4 md:mt-6 max-w-[720px] mx-auto text-white/90 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease }}
            >
              Struggling to turn your business vision into a website that truly works? Based in Trivandrum, Urbanzi Solutions understands the frustration of feeling invisible online, outdated, or held back by tech headaches. We listen to your challenges, then craft SEO-friendly, stunning websites that break barriers, attract real customers, and finally give your brand the spotlight it deserves.
            </motion.p>

            <motion.div
              className="mt-8 md:mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease }}
            >
              <button className="px-6 md:px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition">
                Start Your Project
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
