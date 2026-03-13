"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const steps = [
  { no: "1", title: "Discovery & Planning", desc: "You tell us your idea, your audience, and your goals. We ask the right questions, define the scope, and build a clear plan before a single line of code is written." },
  { no: "2", title: "Design & Prototype", desc: "Worried that you'll hate the look or feel? We show you every step, gather your input, and make sure the experience matches your brand and your users' needs." },
  { no: "3", title: "Development", desc: "Our coders quietly handle every detail—so you don't have to worry about bugs or slowdowns." },
  { no: "4", title: "Test & Launch", desc: "Launching doesn't need to be scary. We ensure your app is smooth, secure, and ready for every device—then walk you through the big day." },
  { no: "5", title: "Support & Grow", desc: "We're here even after launch—resolving issues quickly, helping with updates, and working with you to grow your app's reach." },
];

export default function ProcessSection() {
  return (
    <section className="bg-black text-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-light mb-12 md:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          Our <span className="font-semibold">Process</span>
        </motion.h2>

        <motion.div
          className="border-t border-white/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ originX: 0 }}
        />

        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="border-b border-white/10"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.1, ease }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[80px_240px_1fr] gap-4 md:gap-6 py-8 md:py-12 items-start text-center md:text-left">
              <div className="text-sky-400 text-2xl md:text-3xl font-semibold">{step.no}</div>
              <div className="text-white font-semibold text-base">{step.title}</div>
              <div className="text-white/40 text-sm leading-relaxed max-w-xl mx-auto md:mx-0">{step.desc}</div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
