"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react";

const cases = [
  {
    id: "joseco",
    title: "Joseco Furniture",
    subtitle: "Digital transformation for a 35-year furniture brand",
    description: "We rebuilt their entire digital ecosystem, from a high-converting e-commerce site to a custom CRM and the industry's first digital warranty portal.",
    work: "E-commerce · Custom CRM · Digital Warranty · Meta Ads",
    image: "/Joseco Funiture Case study photo.webp",
    href: "/portfolio/case-studies/joseco-furniture",
    services: ["web-development", "software-development", "digital-marketing", "ecommerce-solutions", "graphic-design-animation"],
    accent: "blue",
    stats: [
      { value: "27%", label: "Sales Growth" },
      { value: "550+", label: "Warranty Users" },
      { value: "20–30", label: "Leads / Day" },
    ],
  },
  {
    id: "arrow-cabs",
    title: "Arrow Cabs",
    subtitle: "Best car rental service in Trivandrum",
    description: "Surviving algorithm updates and migration dips to move from page 10 to page 1 of Google, driving consistent organic bookings without ad spend.",
    work: "SEO Strategy · Local SEO · Web Redesign",
    image: "/Arrowcabs Case study image.webp",
    href: "/portfolio/case-studies/arrow-cabs",
    services: ["web-development", "seo"],
    accent: "emerald",
    stats: [
      { value: "Top 3", label: "Google Rankings" },
      { value: "8.1", label: "Avg. Position" },
      { value: "260+", label: "Monthly Clicks" },
    ],
  },
];

export default function CaseStudiesSection({ service }) {
  const filteredCases = useMemo(() => {
    if (!service) return cases;
    return cases.filter((c) => c.services.includes(service));
  }, [service]);

  const [index, setIndex] = useState(0);

  if (filteredCases.length === 0) return null;

  const safeIndex = index >= filteredCases.length ? 0 : index;
  const data = filteredCases[safeIndex];

  const next = () => setIndex((p) => (p + 1) % filteredCases.length);
  const prev = () => setIndex((p) => (p - 1 + filteredCases.length) % filteredCases.length);

  return (
    <section className="bg-black py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-3">Portfolio</div>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Real Results for<br />
              <span className="italic text-gray-500">Real Businesses</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-4">
            <Link 
              href="/portfolio/case-studies"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 mr-4"
            >
              View All <ArrowRight size={14} />
            </Link>
            {filteredCases.length > 1 && (
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={data.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Side: Image Content */}
              <div className="lg:col-span-7 group relative">
                <Link href={data.href} className="block relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Featured Case Study</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">{data.title}</h3>
                  </div>
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={20} />
                  </div>
                </Link>
              </div>

              {/* Right Side: Stats & Info */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Focus: {data.work}</div>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                      {data.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {data.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className={`text-2xl md:text-3xl font-bold mb-1 ${data.accent === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`}>
                            {stat.value}
                          </div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex gap-1">
                      {filteredCases.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 transition-all duration-300 rounded-full ${i === safeIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/20'}`}
                        />
                      ))}
                    </div>
                    <Link
                      href={data.href}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 ${data.accent === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`}
                    >
                      View Case Study <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
