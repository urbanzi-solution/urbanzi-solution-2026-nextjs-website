"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function ProductsHero() {
  return (
    <section className="bg-black text-white py-15 lg:py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Badge */}
        <motion.div
          className="block max-w-max bg-white/10 text-gray-300 text-xs tracking-widest px-5 py-2 rounded-full uppercase mb-8"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease }}
        >
          Our Products
        </motion.div>

        {/* Main Heading — word by word reveal */}
        <motion.h1
          className="text-2xl md:text-4xl font-light leading-snug mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.1, ease }}
        >
          Powerful products built to simplify and scale your{" "}
          <span className="text-blue-400 italic font-normal">
            business.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-lg leading-relaxed max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.22, ease }}
        >
          Our products are designed to solve real business problems through
          automation, clarity, and performance. Each solution is built with
          scalability, security, and ease of use at its core so you can focus
          on growth while we handle the complexity.
        </motion.p>

      </div>
    </section>
  );
}
