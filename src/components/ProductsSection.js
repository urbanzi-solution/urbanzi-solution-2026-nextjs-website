"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, delay: i * 0.15, ease },
  }),
};

export default function ProductsSection() {
  const products = [
    {
      title: "HRMS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      img: "/hrms.webp",
      alt: "HRMS",
    },
    {
      title: "GYM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
      img: "/gym.webp",
      alt: "Gym",
    },
    {
      title: "WHATSAPP AUTOMATION",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      img: "/whatsapp.webp",
      alt: "WhatsApp Automation",
    },
  ];

  return (
    <section className="bg-black px-6 text-white py-8 lg:py-10">
      <div className="max-w-6xl mx-auto space-y-5">
        {products.map((product, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group bg-gradient-to-r from-[#111] to-[#0a0a0a]
              rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-10
              border border-white/5
              transition-all duration-500
              hover:-translate-y-3
              hover:scale-[1.02]
              hover:border-white/20"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
                {product.title}
              </h2>
              <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {product.desc}
              </p>
            </div>

            <div className="flex-1">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={product.img}
                  alt={product.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
