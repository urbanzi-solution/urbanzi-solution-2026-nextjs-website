"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function SoftWhoWeAre() {
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
            <img src="/soft.webp" alt="Who we are" className="max-w-full w-full sm:w-auto h-auto" />
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
              Urbanzi is a trusted software development company in Trivandrum, Kerala, helping startups, SMEs, and enterprises design and build custom software systems that solve real operational problems. From internal business tools to full-scale SaaS platforms, we engineer software that improves productivity, visibility, and long-term scalability.
              If off-the-shelf software forces your team to change how they work, you don’t need new habits — you need custom software built around your workflows.

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
