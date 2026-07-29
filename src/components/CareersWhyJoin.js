"use client";

import { motion } from "framer-motion";
import {
  TrophyIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: TrophyIcon,
    title: "Performance Incentives",
    description:
      "Your results are rewarded. We offer competitive performance-based incentives that recognise hard work and celebrate every milestone you hit.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    hoverBorder: "hover:border-yellow-500/25",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Career Growth",
    description:
      "We grow together. Take on bigger roles, build new skills, and advance your career at a pace that matches your ambition.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    hoverBorder: "hover:border-blue-500/25",
  },
  {
    icon: UserGroupIcon,
    title: "Collaborative Culture",
    description:
      "Work alongside talented, driven people in an environment that values ideas, open communication, and genuine teamwork.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    hoverBorder: "hover:border-purple-500/25",
  },
  {
    icon: GlobeAltIcon,
    title: "Diverse Industry Exposure",
    description:
      "Engage with clients across retail, healthcare, education, and tech — gaining versatile experience that sets your profile apart.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    hoverBorder: "hover:border-green-500/25",
  },
  {
    icon: LightBulbIcon,
    title: "Always Learning",
    description:
      "Stay ahead with access to new tools, trends, and strategies in an ever-evolving digital landscape — we invest in your growth.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    hoverBorder: "hover:border-orange-500/25",
  },
  {
    icon: HeartIcon,
    title: "Impactful Work",
    description:
      "Build real digital solutions that help businesses grow. Every project you touch creates a tangible impact for real clients.",
    color: "text-red-400",
    bg: "bg-red-500/10",
    hoverBorder: "hover:border-red-500/25",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CareersWhyJoin() {
  return (
    <section className="bg-black text-white px-4 md:px-12 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5"
          >
            Life at Urbanzi
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-light leading-tight mb-5"
          >
            Why Join{" "}
            <span className="text-blue-300 italic">Urbanzi?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re more than a digital agency — we&apos;re a team that cares about
            your growth, values your contribution, and celebrates every win together.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`group relative bg-gradient-to-br from-[#0a1a35] to-[#02060f] border border-white/8 rounded-2xl p-8 ${b.hoverBorder} hover:-translate-y-2 transition-all duration-300 cursor-default`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${b.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${b.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {b.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {b.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-base italic max-w-xl mx-auto leading-relaxed">
            &ldquo;We are building impactful digital solutions — and we want people
            who are passionate about being part of that journey.&rdquo;
          </p>
          <p className="text-gray-600 text-sm mt-3">— Urbanzi Solutions Team</p>
        </motion.div>

      </div>
    </section>
  );
}
