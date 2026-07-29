"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "100+", label: "Projects Delivered" },
  { value: "8+", label: "Industries Served" },
  { value: "Kerala", label: "Trivandrum, India" },
];

export default function CareersHero() {
  return (
    <section className="relative min-h-screen bg-[#050816] text-white flex items-center justify-center overflow-hidden px-4 md:px-12 pt-28 pb-20">

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-indigo-800/10 rounded-full blur-[80px]" />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 bg-blue-500/10 border border-blue-500/25 px-5 py-2.5 rounded-full mb-10"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium tracking-widest uppercase">
              Now Hiring · Thiruvananthapuram, Kerala
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Build Your
            <br />
            <span className="text-blue-400 italic font-light">Career at Urbanzi.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Join a team of passionate digital innovators in Trivandrum.
            Grow your skills, unlock your potential, and help businesses thrive
            across Kerala and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#openings"
              className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
            >
              View Open Roles ↓
            </a>
            <a
              href="/about"
              className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full text-white font-medium text-base transition-all duration-300"
            >
              Learn About Us
            </a>
          </motion.div>

        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/8"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#050816] px-8 py-8 text-center hover:bg-white/3 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
