"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function WhoWeAreSection() {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-12 py-8 md:py-10 -mt-25">
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
              Welcome! At Urbanzi Solutions, we believe your business deserves
              to be seen and celebrated online. Proudly based in Trivandrum and
              serving all of Kerala, our team combines creativity, empathy, and
              advanced technology to help real businesses like yours grow,
              connect, and succeed on the web. We know that navigating the
              digital world can be stressful, so we walk beside you at every
              step—making the journey simple and rewarding.
            </p>
          </motion.div>

          {/* Right Button */}
          <motion.div
            className="flex justify-center md:justify-end mt-4 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <Link
              href="/contact"
              className="bg-gray-200 text-orange-600 hover:bg-white transition px-6 py-3 rounded-full font-medium"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
