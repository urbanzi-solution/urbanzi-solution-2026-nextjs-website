"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function WhyChooseApp() {
  const features = [
    "Kerala-based app development team",
    "Proven experience with Android, iOS & cross-platform apps",
    "Business-first product thinking (not just code)",
    "Scalable architecture for future growth",
    "Transparent pricing & milestone-based delivery",
    "Long-term technical support & feature upgrades",
  ];

  return (
    <section className="relative py-20 px-6 bg-black text-white overflow-hidden  -mt-10">
      <div className="absolute w-[90vw] max-w-[500px] h-[500px] blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Why Choose
            <span className="bg-blue-400 text-transparent bg-clip-text"> Urbanzi</span>{" "}
            for App Development in Kerala?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We build powerful mobile applications that deliver great user experiences, scale with your business, and generate long-term value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/10 hover:border-blue-500/40 transition"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease }}
            >
              <CheckCircle className="text-blue-400 mt-1 shrink-0" size={22} />
              <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <div className="max-w-3xl mx-auto bg-[#0f1629]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Your app is not a project.
              <br />
              <span className="text-blue-400 font-semibold">It&apos;s a long-term digital asset.</span>
              <br />
              We build it that way.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
