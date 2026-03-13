"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const steps = [
  { num: "01", title: "Discover", desc: "We sit with you to understand your business, your goals, and your audience — so every decision we make is built around what you actually need." },
  { num: "02", title: "Design", desc: "We create wireframes and visual designs that reflect your brand identity — clean, modern, and focused on giving your visitors the best possible experience." },
  { num: "03", title: "Development", desc: "We build your website with clean code, fast load times, and full mobile responsiveness — tested thoroughly before a single line goes live." },
  { num: "04", title: "Launch & Support", desc: "We launch your site with confidence and stay with you after — handling updates, monitoring performance, and making sure everything keeps running smoothly.", isLast: true },
];

export default function OurProcessSection() {
  return (
    <section className="bg-black text-white py-10 md:py-32 px-6 md:px-[75px] -mt-25">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 md:gap-20 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          className="relative w-full h-[350px] md:h-[500px] lg:h-[800px] md:w-full rounded-3xl overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
        >
          <Image src="/process.webp" alt="Process" fill className="object-cover" priority />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-[54px] text-center font-light mb-10 md:mb-16"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
          >
            Our <span className="text-blue-300 italic">Process</span>
          </motion.h2>

          <div className="space-y-8 md:space-y-10 ">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
              >
                <div className="flex flex-col gap-2 lg:grid lg:grid-cols-[80px_200px_1fr] lg:items-start lg:gap-4">
                  <div className="flex items-center gap-3 lg:contents">
                    <span className="text-2xl md:text-[32px] font-semibold">{step.num}</span>
                    <h3 className="text-lg md:text-[26px]">{step.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base w-full">{step.desc}</p>
                </div>
                {!step.isLast && (
                  <motion.div
                    className="border-b border-dashed border-blue-300/40 mt-6 md:mt-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.2, ease }}
                    style={{ originX: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
