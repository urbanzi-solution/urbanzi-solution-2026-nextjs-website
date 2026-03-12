"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const cards = [
  { title: "Deep Local & Industry Experience", desc: "Trusted by SMEs and enterprises from Trivandrum to all India, with proven results in complex domains." },
  { title: "Fully Custom Solutions", desc: "Every project is built around your unique processes, not forced into a template." },
  { title: "User-Friendly Design", desc: "We focus on intuitive interfaces, so everyone on your team feels confident." },
  { title: "Full-Stack Strength", desc: "From web and mobile to cloud and integration, our engineers are experts in every layer." },
  { title: "Secure & Scalable", desc: "We follow best practices for security, privacy (GDPR, HIPAA), and future growth." },
  { title: "Transparent Communication", desc: "You get clear updates, timelines, and access to your project at all times." },
];

export default function SoftWhyBest() {
  return (
    <section className="bg-black py-28 px-6 -mt-29 text-white">
      <div className="max-w-6xl mx-auto">

        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease }}>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Why We Are Best in Software Development</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div key={index} className="border border-white/20 rounded-xl p-8 bg-black" initial={{ opacity: 0, y: 32, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.08, ease }}>
              <h3 className="text-lg font-semibold text-yellow-200 mb-3">{card.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}

          <motion.div className="md:col-span-2 border border-white/20 rounded-xl p-10 bg-black text-center" initial={{ opacity: 0, y: 32, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: 0.5, ease }}>
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">Real Business Results</h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-3xl mx-auto">Our software streamlines work, reduces costs, and earns glowing client feedback.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
