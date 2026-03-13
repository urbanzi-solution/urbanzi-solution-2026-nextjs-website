"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function WhoWeAreSection() {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-12 py-8 pb-20 md:pb-0 md:py-10 -mt-25">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">

          {/* Left Content */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 md:mb-6 leading-tight">
              Who <span className="text-blue-300 italic">We Are</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Urbanzi is a full-service web development company in Trivandrum, Kerala, helping startups, SMEs, and enterprises build modern, scalable websites and web applications. We don’t just design websites — we engineer digital platforms that load fast, rank on Google, and convert visitors into customers.
              Whether you need a business website, an e-commerce store, or a custom web application, our Kerala-based web development team delivers clean design, strong performance, and measurable business outcomes.

            </p>
          </motion.div>

          {/* Right Button */}
          <motion.div
            className="flex justify-center md:justify-end mt-2 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
