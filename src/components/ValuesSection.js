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
    <section className="bg-black text-white px-6 md:px-12 py-24 -mt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl font-light mt-35">
            Our <span className="text-blue-300 italic">Values</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            We are committed to making money management accessible for everyone,
            regardless of financial background.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {valuesData.map((item) => {
            const Icon = item.icon;
            const isOpen = active === item.id;

            return (
              <div
                key={item.id}
                className="bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => setActive(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-6">
                    <Icon className="w-6 h-6 text-blue-400" />
                    <span className="text-2xl">{item.title}</span>
                  </div>

                  <span className="text-gray-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Animated Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6 text-gray-300 leading-relaxed"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}