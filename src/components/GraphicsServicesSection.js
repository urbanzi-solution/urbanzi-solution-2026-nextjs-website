"use client";

import {
  Palette,
  Megaphone,
  Clapperboard,
  Box,
  Film,
  Layout
} from "lucide-react";

const services = [
  {
    icon: <Palette size={26} />,
    title: "Brand Identity & Visual Design",
    desc: "Logos, brand systems, typography, color palettes, and brand guidelines that build trust and recognition.",
  },
  {
    icon: <Megaphone size={26} />,
    title: "Social Media Creatives & Ad Designs",
    desc: "High-converting creatives for Instagram, Facebook, YouTube, LinkedIn, and performance ads",
  },
  {
    icon: <Clapperboard size={26} />,
    title: "Motion Graphics & Explainer Videos",
    desc: "Short-form animations, explainer videos, reels, and ad creatives designed to communicate complex ideas simply.",
  },
  {
    icon: <Box size={26} />,
    title: "2D & 3D Animation",
    desc: "Character animation, product visualization, 3D motion graphics, and cinematic brand visuals.",
  },
  {
    icon: <Film size={26} />,
    title: "Video Editing & Post-Production",
    desc: "Professional editing for ads, YouTube, reels, corporate videos, and brand films.",
  },
  {
    icon: <Layout size={26} />,
    title: "Website & UI Visual Assets",
    desc: "Custom illustrations, banners, icons, and animations optimized for websites, landing pages, and product pages.",
  },
];

export default function GraphicsServicesSection() {
  return (
    <section className="bg-[#020617] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading (unchanged) */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Our Graphic Designing & Animation Services
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-white to-white mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(236,72,153,0.6)]" />

          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Everything You Need to{" "}
            <span >
              Bring Your Brand Visuals to Life
            </span>
          </p>
        </div>

        {/* Grid (layout untouched – only colors changed) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                rounded-xl
                border border-white/10
                bg-gradient-to-br from-[#0a1a35] to-[#02060f]
                p-8
                flex flex-col items-center text-center
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Icon box – same style as above grid */}
              <div
                className="
                  flex items-center justify-center
                  w-16 h-16
                  rounded-xl
                  bg-white/5
                  mb-6
                  text-white/80
                "
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold mb-4 text-white leading-snug">
                {service.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button (unchanged) */}
        <div className="text-center mt-20">
          <button className="px-8 py-3 bg-gradient-to-r from-white to-white text-black font-medium rounded-full hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)]">
            See More Services →
          </button>
        </div>

      </div>
    </section>
  );
}
