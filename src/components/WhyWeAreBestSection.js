"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const cards = [
  { title: "Expertise Across Platforms", text: "We have deep experience building websites on WordPress, Shopify, React, Next.js, and more so you get the ideal solution, every time.", span: "lg:col-span-7" },
  { title: "Tailored to Your Needs", text: "Every project is uniquely designed to reflect your brand and meet your specific business goals, never a cookie-cutter approach.", span: "lg:col-span-5" },
  { title: "User-Centered Design", text: "We focus on intuitive navigation, engaging experiences, and visually appealing layouts that turn visitors into loyal customers.", span: "lg:col-span-4" },
  { title: "SEO-Driven From Day One", text: "Our sites are built with the latest SEO best practices, ensuring your business gets found on Google and reaches more potential customers.", span: "lg:col-span-4" },
  { title: "Reliable, End-to-End Support", text: "From discovery to launch and ongoing maintenance, you always have a dedicated team beside you.", span: "lg:col-span-4" },
  { title: "Transparent Communication", text: "We keep you in the loop at every step, providing clear updates, honest advice, and a stress-free experience.", span: "lg:col-span-6" },
  { title: "Proven Results", text: "Our portfolio speaks for itself—businesses across India trust Urbanzi Solutions for websites that drive growth and deliver real value.", span: "lg:col-span-6" },
];

export default function WhyWeAreBestSection() {
  return (
    <section className="bg-black text-white py-20 md:py-20 lg:py-32 px-6 md:px-[75px] -mt-10 md:-mt-28">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-[52px] font-light leading-tight mb-12 md:mb-20 max-w-[1100px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
        >
          Why We Are Best in Website{" "}
          <span className="text-blue-300 italic">Development and Design</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={card.span}
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease }}
            >
              <div className="relative h-full rounded-3xl p-6 md:p-10 bg-gradient-to-br from-[#0e1c3a] via-[#0b162e] to-[#070c18] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-24 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="relative z-10 text-xl md:text-[26px] font-medium mb-3 md:mb-4 leading-snug">{card.title}</h3>
                <p className="relative z-10 text-white/70 leading-relaxed text-sm md:text-[15px] max-w-[520px]">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
