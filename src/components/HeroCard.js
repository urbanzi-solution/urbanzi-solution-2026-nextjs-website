"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-black text-white py-15 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <motion.div
          className="block max-w-max bg-zinc-800/80 text-zinc-300 text-xs tracking-widest px-5 py-2 rounded-full mb-10"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          ONE TEAM. EVERY SOLUTION
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl font-light leading-tight">
              <span className="block">
                Build Beyond Boundaries Shape
              </span>
              <span className="block italic text-blue-400 font-normal">
                Tomorrow, Together
              </span>
            </h1>

            <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
              Every dream deserves a chance to grow. At Urbanzi, we turn your ambitions into reality building digital solutions that connect, inspire, and make a difference. Let's create something extraordinary, together.
            </p>
          </motion.div>

          {/* Right Buttons */}
          <motion.div
            className="flex flex-wrap lg:justify-end gap-4 sm:gap-5 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-full font-medium text-white">
              Let's Start
            </button>

            <button className="bg-zinc-200 hover:bg-white transition px-7 py-3 rounded-full font-medium text-black">
              Our Solutions
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
