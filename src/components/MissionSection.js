"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="bg-black text-white px-6 md:px-12 p-20 overflow-hidden -mt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image - Slide In From Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
        >
          <Image
            src="/mission.webp"   // put your image inside public folder
            alt="Mission"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text - Slide In Slightly After */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Our <span className="text-blue-300 italic">Mission</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            At Urbanzi, our mission is to empower businesses across 
Kerala with smart, reliable, and impactful digital solutions. 
We combine thoughtful design, cutting-edge technology, and a 
client-first mindset to build products that truly help our 
customers grow.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            We believe great digital experiences should be accessible to 
every business — whether you're a startup in Trivandrum or 
an established brand scaling across Kerala.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
