"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function PerformanceSection() {
  return (
    <section className="px-5 md:px-12 py-16 md:py-24 bg-black text-white -mt-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight mb-12 md:mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease }}
        >
          We focus on one thing:
          <br />
          <span className="font-normal">
            Building digital solutions that truly perform.
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* LEFT COLUMN */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0, ease }}
          >
            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-6 md:p-8 rounded-3xl border border-white/5">
              <div className="flex gap-4">
                <div className="w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
                <p className="text-gray-300 text-sm md:text-base">
                  We combine smart technology, thoughtful design, and reliable systems
                  to help businesses operate better, scale faster, and make a meaningful impact.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-6 md:p-8 rounded-3xl border border-white/5">
              <p className="text-gray-300 mb-8 text-sm md:text-base">
                We prioritize long-term partnerships by delivering solutions that exceed expectations.
              </p>
              <h3 className="text-4xl md:text-5xl font-bold text-blue-300">100%</h3>
              <p className="text-blue-300 mt-2 text-base md:text-lg">Customer Satisfaction</p>
            </div>
          </motion.div>

          {/* CENTER COLUMN */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-6 md:p-10 rounded-3xl border border-white/5 flex flex-col justify-center min-h-[220px] md:min-h-[300px]">
              <p className="text-gray-300 mb-8 text-sm md:text-base">
                Our team is always available to ensure your systems run smoothly, anytime you need us.
              </p>
              <h3 className="text-4xl md:text-6xl font-bold text-blue-300">24/7</h3>
              <p className="text-blue-300 mt-2 text-base md:text-xl">Support Available</p>
            </div>

            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-6 md:p-8 rounded-3xl border border-white/5">
              <div className="flex gap-4">
                <div className="w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
                <p className="text-gray-300 text-sm md:text-base">
                  Trusted by growing businesses across industries.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-6 md:p-10 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[260px] md:min-h-[400px]">
              <p className="text-gray-300 mb-10 md:mb-20 text-sm md:text-base">
                We build secure, stable, and reliable platforms you can trust to perform without interruption.
              </p>
              <div>
                <h3 className="text-4xl md:text-6xl font-bold text-blue-300">99.9%</h3>
                <p className="text-blue-300 mt-2 text-base md:text-xl">Uptime Guarantee</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
