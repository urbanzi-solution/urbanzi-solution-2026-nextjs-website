"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BoltIcon,
  UserGroupIcon,
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";

const valuesData = [
  {
    id: 1,
    title: "Innovation",
    icon: BoltIcon,
    content:
      "At Urbanzi, we foster a mindset of continuous growth and creativity. We strive to break boundaries, explore new possibilities, and challenge the ordinary by pushing our limits and embracing bold ideas.",
  },
  {
    id: 2,
    title: "Collaboration",
    icon: UserGroupIcon,
    content: "At Urbanzi, teamwork drives everything we do. We believe that great ideas flourish through shared efforts, diverse perspectives, and a commitment to working together toward common goals.",
  },
  {
    id: 3,
    title: "Customer Focused",
    icon: ShieldCheckIcon,
    content: "Our customers are at the heart of Urbanzi. We listen, adapt, and deliver solutions that truly meet their needs going beyond expectations to create lasting value and trust.",
  },
  {
    id: 4,
    title: "Excellence",
    icon: StarIcon,
    content: "We are committed to excellence in every detail. From innovative thinking to flawless execution, Urbanzi aims to set higher standards and consistently deliver exceptional results.",
  },
  {
    id: 5,
    title: "Respect",
    icon: SparklesIcon,
    content: "At Urbanzi, we embrace a culture of mutual respect and dignity. We value diverse perspectives, foster inclusive environments, and treat everyone with the consideration they deserve.",
  },
];

export default function ValuesSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-black text-white px-6 md:px-12 md:pb-25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          
          {/* LEFT SIDE: Content & Accordion */}
          <div className="space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-light mb-6"
              >
                Our <span className="text-blue-300 italic">Values</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-xl leading-relaxed max-w-xl"
              >
                We are committed to making money management accessible for everyone,
                regardless of financial background.
              </motion.p>
            </div>

            <div className="space-y-4">
              {valuesData.map((item, index) => {
                const Icon = item.icon;
                const isOpen = active === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group rounded-2xl border transition-all duration-300 ${
                      isOpen 
                        ? "bg-white/5 border-blue-500/30" 
                        : "bg-[#111] border-white/5 hover:border-white/10"
                    }`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => setActive(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-center gap-6">
                        <div className={`p-3 rounded-xl transition-colors ${
                          isOpen ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-gray-400 group-hover:text-blue-400"
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-2xl transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}>
                          {item.title}
                        </span>
                      </div>

                      <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <span className="text-xl font-light">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </button>

                    {/* Animated Content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-[88px] text-gray-400 leading-relaxed text-lg">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Sticky Image */}
          <div className="hidden lg:block sticky top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="/values-premium.png"
                alt="Urbanzi Values"
                fill
                className="object-cover"
                priority
              />
              
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 z-20">
                <div className="bg-blue-500/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-blue-200">Our Core Principles</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Image (shown below content) */}
          <div className="block lg:hidden mt-8">
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/values-premium.png"
                alt="Urbanzi Values"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
