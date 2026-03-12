"use client";

import {
  MapPin,
  Search,
  FileText,
  Link2,
  BarChart3,
} from "lucide-react";

const services = [
  {
    title: "SEO Google My Business",
    desc:
      "Appear at the top when customers search nearby. We optimize your Google My Business listing so more local customers discover, trust, and contact you.",
    icon: MapPin,
  },
  {
    title: "Local SEO Marketing Services",
    desc:
      "Want more phone calls, visits, and leads from your city? We make sure your business shows up in the right searches and local maps without breaking the bank.",
    icon: Search,
  },
  {
    title: "On-Page SEO Service",
    desc:
      "We fix your text, images, speed, and all website details—so search engines love your site and people find what they need in seconds.",
    icon: FileText,
  },
  {
    title: "Backlink Building Agency",
    desc:
      "Boost your website's authority safely. We help you earn high-quality, trustworthy links that Google values, pushing you above your rivals.",
    icon: Link2,
  },
  {
    title: "SEO Consulting Services",
    desc:
      "Not sure why you're not ranking? Our experts review your site, explain things simply, and show you the clearest, smartest way forward.",
    icon: BarChart3,
  },
];

export default function SeoServicesSection() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our{" "}
            <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              SEO
            </span>{" "}
            Services
          </h2>

          <div className="flex justify-center mt-4">
            <span className="h-[2px] w-24 bg-gradient-to-r from-white to-white rounded-full" />
          </div>

          <p className="text-white/70 mt-6">
            Everything You Need to Get Found and Grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isSecondRow = index >= 3;

            return (
              <div
                key={index}
                className={`
                  rounded-2xl bg-[#0b1220]
                  px-8 py-10 text-center
                  flex flex-col items-center
                  border border-white/10
                  ${isSecondRow ? "lg:col-span-3" : "lg:col-span-2"}
                `}
              >
                {/* icon */}
                <div
                  className="
                    mb-6 h-14 w-14 rounded-xl
                    bg-white/5 border border-white/10
                    flex items-center justify-center
                  "
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ---------- Added section from image ---------- */}
        <div className="mt-28 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
            We "Speak Google" —{" "}
            <span className="bg-[#9fd0ff] bg-clip-text text-transparent">
              So You Don't Have To
            </span>
          </h3>

          <p className="mt-6 text-white/70 leading-relaxed">
            From deep keyword research to technical audits and content
            optimization, our team knows the formulas behind real, safe, and
            lasting SEO results. Whether you run a shop, a clinic, or a global
            B2B brand, we have proven playbooks to move you up the rankings.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              className="
                px-8 py-3 rounded-full font-medium text-black
                bg-white
                hover:opacity-90 transition
                inline-flex items-center gap-2
              "
            >
              Get Your SEO Audit
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
        {/* ---------- End added section ---------- */}

      </div>
    </section>
  );
}
