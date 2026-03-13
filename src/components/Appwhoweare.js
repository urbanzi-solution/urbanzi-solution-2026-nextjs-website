"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Appwhoweare() {
  return (
    <section className="bg-black pb-10 md:pb-15  px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image side */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <img
              src="/appwho.webp"
              alt="Who we are"
              className="max-w-full h-auto"
            />
          </motion.div>

          {/* Content side */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <h2 className="text-[32px] sm:text-[38px] md:text-[52px] font-semibold text-[#9fd0ff]">
              Who We Are
            </h2>

            {/* small underline */}
            <div className="w-16 md:w-20 h-[3px] bg-[#9fd0ff] mt-3 md:mt-4 mb-6 md:mb-8 mx-auto lg:mx-0" />

            <p className="text-white/90 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
              Urbanzi is a professional mobile app development company in Trivandrum, Kerala, delivering end-to-end mobile solutions for startups, SMEs, and enterprises. From concept validation to design, development, launch, and long-term support — we handle the entire mobile app lifecycle.
We don’t build apps just to exist on app stores.
 We build business tools that drive users, revenue, and retention.
            </p>

            <div className="mt-8 md:mt-10 flex justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
