"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function AboutPage() {
  return (
    <section className="pt-24 md:pt-32 px-4 md:px-12 bg-black ">
      <motion.div
        className="relative w-full h-[420px] md:h-[600px] rounded-3xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.97, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease }}
      >
        {/* Background Image */}
        <Image
          src="/marketin.webp"
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-blue-300 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
          >
            Let&apos;s Go On An Innovation <br className="hidden md:block" /> Journey Together
          </motion.h1>

          <motion.p
            className="mt-4 md:mt-6 max-w-3xl text-gray-300 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38, ease }}
          >
            At Urbanzi, we redefine how people manage and interact with money by
            empowering businesses with smart tools that create a positive impact.
          </motion.p>

        </div>
      </motion.div>
    </section>
  );
}
