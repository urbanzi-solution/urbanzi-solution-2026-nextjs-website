"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex -mt-35 md:-mt-60 lg:-mt-30 items-center">
      <div className="max-w-7xl mx-auto px-5 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Heading */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease }}
              >
                <span className="block">
                  Empowering India&apos;s Digital Future with
                </span>
                <span className="block text-blue-400 italic font-medium">
                  Urbanzi Solutions
                </span>
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
            >
              At Urbanzi, we help businesses grow with innovative and tailored
              digital solutions. From web development to branding we create
              seamless experiences that elevate your brand. Let&apos;s bring your
              vision to life with creativity and technology.
            </motion.p>

          </div>

          {/* RIGHT BUTTONS */}
          <motion.div
            className="flex flex-wrap lg:justify-end gap-5 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition">
              Let&apos;s Start
            </button>

            <button className="bg-gray-200 text-black hover:bg-white px-6 py-3 rounded-full font-medium transition">
              Our Solutions
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
