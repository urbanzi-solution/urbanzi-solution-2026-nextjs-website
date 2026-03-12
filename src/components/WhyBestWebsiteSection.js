"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const cards = [
  { title: "Expertise Across Platforms", desc: "We have deep experience building websites on WordPress, Shopify, React, Next.js, and more—so you get the ideal solution, every time." },
  { title: "Tailored to Your Needs", desc: "Every project is uniquely designed to reflect your brand and meet your specific business goals, never a cookie-cutter approach." },
  { title: "User-Centered Design", desc: "We focus on intuitive navigation, engaging experiences, and visually appealing layouts that turn visitors into loyal customers." },
  { title: "SEO-Driven From Day One", desc: "Our sites are built with the latest SEO best practices, ensuring your business gets found on Google and reaches more potential customers." },
  { title: "Reliable, End-to-End Support", desc: "From discovery to launch and ongoing maintenance, you always have a dedicated team beside you." },
  { title: "Transparent Communication", desc: "We keep you in the loop at every step, providing clear updates, honest advice, and a stress-free experience." },
];

export default function WhyBestWebsiteSection() {
  return (
    <section className="bg-black py-28 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Why We Are Best in Website Development and Design
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="border border-white/20 rounded-xl p-8 bg-black"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease }}
            >
              <h3 className="text-lg font-semibold text-yellow-200 mb-3">{card.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}

          <motion.div
            className="md:col-span-2 border border-white/20 rounded-xl p-10 bg-black text-center"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">Proven Results</h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-3xl mx-auto">
              Our portfolio speaks for itself—businesses across India trust Urbanzi Solutions for websites that drive growth and deliver real value.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
