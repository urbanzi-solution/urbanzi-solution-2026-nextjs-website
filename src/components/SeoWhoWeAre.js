"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function SeoWebWhoWeAre() {
  return (
    <section className="bg-black py-24 px-6 -mt-42">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <img src="/Seoare.webp" alt="Who we are" className="max-w-70" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <h2 className="text-[42px] md:text-[52px] font-semibold text-[#9fd0ff]">Who We Are</h2>
            <div className="w-20 h-[3px] bg-[#9fd0ff] mt-4 mb-8" />
            <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              At <span className="font-semibold text-white">Urbanzi Solutions</span>, we believe your business deserves to be seen and celebrated online. Proudly based in Trivandrum and serving all of Kerala, our team combines creativity, empathy, and advanced technology to help real businesses like yours grow, connect, and succeed on the web. We know that navigating the digital world can be stressful, so we walk beside you at every step—making the journey simple and rewarding.
            </p>
            <div className="mt-10">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition">
                Contact Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
