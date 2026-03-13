"use client";

import Link from "next/link";

export default function HeroGlobeSection() {
  return (
    <section className="relative bg-[#050816] text-white overflow-hidden ">

      {/* HERO CONTENT */}
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-6 pt-24 pb-8 relative z-20">
        <div className="max-w-4xl mx-auto">

          <div className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-sm text-gray-300 mb-8">
            Kerala's #1 Digital Agency — Based in Trivandrum
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 leading-tight">
            Your Strategic Partner for Digital Growth
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We build powerful apps, websites, and digital solutions
            for businesses across Kerala and beyond.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition"
            >
              Get Your Free Quote
            </Link>

            <Link 
              href="#services"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-medium transition"
            >
              Explore Our Services
            </Link>
          </div>

        </div>
      </div>

      {/* ================= GLOBE SECTION ================= */}

      <div className="relative flex items-center justify-center">

        {/* Rotating Globe */}
        <div className="
        absolute
        left-1/2
        -translate-x-1/2
        transform-gpu
        will-change-transform
        w-[480px] h-[480px]
        sm:w-[650px] sm:h-[650px]
        md:w-[900px] md:h-[900px]
        animate-rotateSlow
        opacity-70
        ">

          <img
            src="/globe.webp"
            alt="Globe"
            className="w-full h-full object-contain select-none"
          />

        </div>

        {/* Top Blue Glow */}
        <div className="
        absolute
        left-1/2
        -translate-x-1/2
        w-[300px]
        sm:w-[500px]
        md:w-[700px]
        h-[250px]
        bg-blue-600/30
        blur-[140px]
        rounded-full
        top-6
        " />

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />

        {/* TEXT ON GLOBE */}3
        <div className="relative z-30 text-center px-4 md:px-6 py-15 md:py-20 max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Urbanzi Delivers</span>
            <span className="block text-gray-200">B2B Virtual</span>
            <span className="block text-gray-300">Characters</span>
            <span className="block text-gray-400">Solutions</span>
            <span className="block text-gray-500">
              Customized For Businesses
            </span>
          </h2>
        </div>

      </div>

    </section>
  );
}