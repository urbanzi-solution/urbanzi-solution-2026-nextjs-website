"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function CTASoft() {
  return (
    <section className="relative py-14 px-6 bg-black text-white overflow-hidden -mt-20">
      <div className="absolute w-[90vw] max-w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2" />

      <motion.div className="relative max-w-6xl mx-auto text-center" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease }}>
        <motion.h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease }}>
          Ready to build software that
          <span className="bg-blue-400 text-transparent bg-clip-text"> actually fits your business?</span>
        </motion.h2>
        <motion.p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.22, ease }}>
          Work with a trusted <span className="text-blue-400 font-semibold">software development company in Trivandrum</span> and build scalable, secure, and high-performance software tailored to your business needs.
        </motion.p>
        <motion.div className="flex flex-col md:flex-row justify-center gap-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.34, ease }}>
          <Link href="/contact" className="flex items-center justify-center gap-2 px-5 py-5 rounded-full bg-blue-500 font-semibold hover:scale-105 transition">
            Book a Free Software Strategy Call <ArrowRight size={20} />
          </Link>
          <Link href="/contact" className="flex items-center justify-center px-10 py-5 rounded-full border border-white/20  hover:bg-white/5 transition">
            Get a Custom Software Quote in 24 Hours
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
