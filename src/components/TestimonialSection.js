"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const colVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function TestimonialSection() {
  return (
    <section className="bg-[#000002] py-8 md:py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs tracking-widest px-4 py-2 bg-neutral-800 rounded-full text-neutral-300">
            REAL STORIES. REAL RESULTS
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 md:mt-8 leading-tight">
            Customer <span className="text-blue-400 italic">Testimonials</span>
          </h2>

          <p className="text-neutral-400 mt-4 md:mt-6 max-w-3xl text-sm sm:text-base">
            Every dream deserves a chance to grow. At Urbanzi, we turn your ambitions into reality building digital solutions that connect and inspire.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-20">

          {/* COLUMN 1 */}
          <motion.div
            className="space-y-6 md:space-y-8 md:mt-12"
            variants={colVariants(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Card
              text="Urbanzi truly understood what my startup needed. They built our app from scratch and guided us through every step. Best tech team in Trivandrum, no doubt."
              name="Arjun"
              role="Startup Founder, Trivandrum"
            />

            <Card
              text="They didn't just build our website — they shaped our entire online identity. Our enquiries doubled within two months of launching with Urbanzi."
              name="Akshay"
              role="Business Owner, Kerala"
            />

            {/* Hidden on mobile */}
            <div className="hidden md:block">
              <FadeCard text="Urbanzi truly understood what my startup needed. They built our app from scratch and guided us through every step. Best tech team in Trivandrum." />
            </div>
          </motion.div>

          {/* COLUMN 2 */}
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={colVariants(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Card
              text="Urbanzi handled our e-commerce store end to end. The design is clean, the performance is fast, and our Kerala customers love the experience. Highly recommend."
              name="Wazim"
              role="E-commerce Entrepreneur, Kerala"
            />

            <Card
              text="From logo to website to social media — Urbanzi handled everything for our brand. They are honest, fast, and genuinely care about your success."
              name="Jeril"
              role="Restaurant Owner, Trivandrum"
            />

            {/* Hidden on mobile */}
            <div className="hidden md:block">
              <FadeCard text="Urbanzi handled our e-commerce store end to end. The design is clean, the performance is fast, and our Kerala customers love the experience." />
            </div>
          </motion.div>

          {/* COLUMN 3 */}
          <motion.div
            className="space-y-6 md:space-y-8 md:mt-12"
            variants={colVariants(0.24)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Card
              text="Our Google rankings improved dramatically after Urbanzi handled our SEO. They know exactly how to target the right audience in Kerala. Real results, real growth."
              name="Samad"
              role="Marketing Manager, Kerala"
            />

            <Card
              text="Working with Urbanzi transformed how our business runs online. Their team is always available, always improving. A partner you can trust for the long run."
              name="Mathew"
              role="SME Owner, Trivandrum"
            />

            {/* Hidden on mobile */}
            <div className="hidden md:block">
              <FadeCard text="Our Google rankings improved dramatically after Urbanzi handled our SEO. They know exactly how to target the right audience in Kerala." />
            </div>
          </motion.div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none"></div>

      </div>
    </section>
  );
}

/* CARD */
function Card({ text, name, role }) {
  return (
    <div className="bg-neutral-200 text-black rounded-2xl p-5 md:p-6 shadow-lg">
      <div className="flex gap-1 text-orange-500">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4" />
        ))}
      </div>

      <p className="text-sm mt-4 leading-relaxed text-neutral-700">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Image
          src="/avatar.jpg"
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-blue-700">{name}</p>
          <p className="text-xs text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

/* FADE CARD */
function FadeCard({ text }) {
  return (
    <div className="relative bg-neutral-200 text-black rounded-2xl p-5 md:p-6 shadow-lg overflow-hidden">
      <div className="flex gap-1 text-orange-500">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4" />
        ))}
      </div>

      <p className="text-sm mt-4 leading-relaxed text-neutral-700">
        {text}
      </p>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent"></div>
    </div>
  );
}