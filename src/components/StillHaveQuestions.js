"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function StillHaveQuestions() {
  return (
    <section className="bg-black py-16 md:py-24 px-5 md:px-[75px] -mt-10 md:-mt-25">
      <div className="max-w-[1400px] mx-auto">

        <motion.div
          className="relative overflow-hidden rounded-[22px] md:rounded-[28px] min-h-[260px] md:min-h-[320px] flex items-center justify-center text-center"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          style={{
            backgroundImage: "url('/ct-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* dark orange overlay */}
          <div className="absolute inset-0 bg-[#8a3b1a]/70" />

          {/* content */}
          <motion.div
            className="relative z-10 px-4 md:px-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25, ease }}
          >
            <h2 className="text-white text-[30px] sm:text-[36px] md:text-[48px] leading-tight font-semibold mb-3 md:mb-4">
              Still have questions?
            </h2>

            <p className="text-white/90 text-[15px] sm:text-base md:text-lg mb-6 md:mb-8">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
            </p>

            <button
              className="
                bg-white text-[#e14a14]
                px-6 md:px-8 py-2.5 md:py-3 rounded-full
                text-sm md:text-base
                font-medium
                transition
                hover:scale-105
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              "
            >
              Get in Touch
            </button>
          </motion.div>

          {/* soft vignette */}
          <div className="pointer-events-none absolute inset-0 rounded-[22px] md:rounded-[28px] shadow-[inset_0_0_120px_rgba(0,0,0,0.45)]" />
        </motion.div>

      </div>
    </section>
  );
}
