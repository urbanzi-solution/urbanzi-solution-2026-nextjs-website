"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

function ProcessRow({ title, description, isLast, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
    >
      <div className="grid md:grid-cols-2 items-center gap-6">
        {/* Smaller Title */}
        <h3 className="text-2xl md:text-3xl font-light">
          {title}
        </h3>

        {/* Smaller Description */}
        <p className="text-gray-400 text-base md:text-lg text-left md:text-right">
          {description}
        </p>
      </div>

      {!isLast && (
        <motion.div
          className="border-b border-dashed border-blue-400/40 mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease }}
          style={{ originX: 0 }}
        />
      )}
    </motion.div>
  );
}

export default function TransformSection() {
  return (
    <section className="bg-black text-white py-10 lg:py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="inline-block bg-white/10 text-gray-300 text-[11px] tracking-widest px-4 py-1.5 rounded-full uppercase mb-6">
            Accelerating Business Success
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-light leading-snug mb-14">
            How Urbanzi Solutions{" "}
            <span className="text-blue-400 italic">
              Transforms Businesses
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          <ProcessRow index={0} title="Listen" description="We sit with you, understand your goals, and hear what your business truly needs" />
          <ProcessRow index={1} title="Research" description="We study your market, competitors, and audience in Kerala like it's our own business" />
          <ProcessRow index={2} title="Plan" description="We craft a clear digital strategy — no guesswork, just a focused roadmap built for results" />
          <ProcessRow index={3} title="Create" description="We design and build your solution with precision, creativity, and attention to every detail" />
          <ProcessRow index={4} title="Launch" description="We go live with confidence — tested, optimized, and ready to perform from day one" />
          <ProcessRow index={5} title="Grow" description="We stay with you after launch, track results, and keep improving so your business keeps winning" isLast />
        </div>

      </div>
    </section>
  );
}
