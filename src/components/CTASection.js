"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function CTASection() {
  return (
    <section className="bg-black px-4 md:px-12 py-16 md:py-24 -mt-25">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease }}
        >
          {/* Background Image */}
          <Image
            src="/cta-bg.webp"
            alt="CTA Background"
            fill
            className="object-cover"
          />

          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-blue-950/70" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-20 items-center text-white">

            {/* Left */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2, ease }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Ready to Get
                <br />
                Started
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3, ease }}
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6 md:mb-8">
                Take the next step with Urbanzi Solutions. Whether you&apos;re a
                visionary entrepreneur or a growing business, our team is
                dedicated to building digital experiences that inspire,
                connect, and help you achieve more. Let&apos;s create something
                extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium transition duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
