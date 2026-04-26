"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Shield,
  Users,
  BarChart3,
  Monitor,
  Search,
  MapPin,
  TrendingUp,
  MousePointer,
  Eye,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const CATEGORIES = [
  "All",
  "SEO",
  "Web Development",
  "Digital Marketing",
  "Software Development",
  "Google My Business",
  "CRM"
];

const CATEGORY_ICONS = {
  "SEO": Search,
  "Web Development": Globe,
  "Digital Marketing": BarChart3,
  "Software Development": Shield,
  "Google My Business": MapPin,
  "CRM": Users,
};

const caseStudies = [
  {
    slug: "joseco-furniture",
    num: "01",
    client: "Joseco Furniture",
    industry: "Furniture Manufacturing & Retail",
    location: "Marthandam, Tamil Nadu",
    since: "Aug 2025 – Ongoing",
    tag: "Digital Transformation",
    tagColor: "from-blue-500/20 to-purple-500/10 border-blue-500/30 text-blue-300",
    accentColor: "blue",
    categories: ["Web Development", "Digital Marketing", "Software Development", "CRM"],
    services: [
      { label: "Website Development", icon: Globe,    color: "blue"   },
      { label: "Digital Warranty",    icon: Shield,   color: "purple" },
      { label: "CRM",                 icon: Users,    color: "green"  },
      { label: "Meta Ads",            icon: BarChart3, color: "orange" },
      { label: "Office Digital.",     icon: Monitor,  color: "pink"   },
    ],
    metrics: [
      { value: "27%",    label: "Sales Growth" },
      { value: "20-30",  label: "Leads / Day"  },
      { value: "550+",   label: "CRM Customers"},
    ],
    preview:
      "35 years of craft, invisible online. We rebuilt their website, created the industry's first OTP-based digital warranty system, and launched Meta Ads that expanded reach from a single town to all of Tamil Nadu and Kerala.",
    img: "/Joseco Funiture Case study photo.webp",
  },
  {
    slug: "arrow-cabs",
    num: "02",
    client: "Arrow Cabs",
    industry: "Car Rental & Transportation",
    location: "Trivandrum, Kerala",
    since: "Mar 2025 – Ongoing",
    tag: "SEO & Web Development",
    tagColor: "from-green-500/20 to-teal-500/10 border-green-500/30 text-green-300",
    accentColor: "green",
    categories: ["SEO", "Web Development", "Google My Business"],
    services: [
      { label: "Website Development", icon: Globe,   color: "blue"  },
      { label: "SEO",                 icon: Search,  color: "green" },
      { label: "Google My Business",  icon: MapPin,  color: "red"   },
    ],
    metrics: [
      { value: "8.1",   label: "Avg. Position" },
      { value: "300+",   label: "Clicks / Month" },
      { value: "₹0",    label: "Ad Spend"       },
    ],
    preview:
      "A 20-year-old cab company was invisible online. From a fresh domain with zero authority, we fought to page 1 — surviving a migration dip, algorithm updates, and an NRI travel crisis that hit their core customer base.",
    img: "/Arrowcabs Case study image.webp",
  },
];

const iconColorMap = {
  blue:   "bg-blue-500/15 border-blue-500/25 text-blue-400",
  purple: "bg-purple-500/15 border-purple-500/25 text-purple-400",
  green:  "bg-green-500/15 border-green-500/25 text-green-400",
  orange: "bg-orange-500/15 border-orange-500/25 text-orange-400",
  pink:   "bg-pink-500/15 border-pink-500/25 text-pink-400",
  red:    "bg-red-500/15 border-red-500/25 text-red-400",
};

const accentGlow = {
  blue:  "rgba(59,130,246,0.08)",
  green: "rgba(34,197,94,0.08)",
};

const upcomingClients = [
  { name: "Kerala Pest",   industry: "Pest Control",      icon: "🐛" },
  { name: "Skill Haara",  industry: "EdTech",             icon: "🎓" },
  { name: "Alpha Tours",  industry: "Travel & Tourism",   icon: "✈️" },
];

export default function CaseStudiesIndex() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === "All") return caseStudies;
    return caseStudies.filter((cs) => cs.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white min-h-screen overflow-hidden">

        {/* ── HERO ── */}
        <section className="relative pt-28 pb-8 px-4 md:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.10),transparent)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-48 bg-gradient-to-b from-blue-500/30 to-transparent" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              className="flex items-center gap-2 text-xs text-gray-500 mb-10"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              <Link href="/" className="hover:text-gray-300 transition">Home</Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">Case Studies</span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
              >
                <motion.div
                  className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-gray-400 text-[10px] tracking-widest px-4 py-2 rounded-full uppercase mb-6"
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  {filteredCaseStudies.length} Projects · Measurable Results
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight">
                  Case{" "}
                  <span className="italic text-blue-400">Studies</span>
                </h1>
              </motion.div>

              <motion.p
                className="text-gray-500 max-w-sm text-sm leading-relaxed md:text-right"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                Real challenges. Real solutions. Real numbers — no vanity metrics,
                no retouched screenshots.
              </motion.p>
            </div>

            {/* Filter Bar */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease }}
            >
              {CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat];
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-250 ${
                      isActive
                        ? "bg-blue-500 border-blue-400 text-white shadow-[0_0_16px_rgba(59,130,246,0.35)]"
                        : "bg-white/4 border-white/10 text-gray-400 hover:bg-white/8 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {Icon && <Icon size={11} className="shrink-0" />}
                    {cat}
                  </button>
                );
              })}
            </motion.div>

            {/* Animated rule */}
            <motion.div
              className="mt-4 h-px bg-gradient-to-r from-blue-500/50 via-white/10 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1, ease }}
            />
          </div>
        </section>

        {/* ── CARDS ── */}
        <section className="pb-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredCaseStudies.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center py-24 text-gray-600 text-sm"
                >
                  No case studies in this category yet.
                </motion.div>
              ) : (
                filteredCaseStudies.map((cs, i) => (
                  <motion.div
                    key={cs.slug}
                    layout
                    initial={{ opacity: 0, y: 48 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease }}
                  >
                    <Link href={`/portfolio/case-studies/${cs.slug}`} className="group block">
                      <div
                        className="relative rounded-3xl border border-white/8 overflow-hidden transition-all duration-500 group-hover:border-white/16"
                        style={{ background: `radial-gradient(ellipse 80% 60% at 100% 0%, ${accentGlow[cs.accentColor]}, transparent), #080e1f` }}
                      >
                        {/* Large faded number — always on the content side */}
                        <div className={`absolute top-2 ${i % 2 !== 0 ? "right-6" : "left-4"} text-[120px] md:text-[160px] font-black text-white/[0.06] leading-none select-none pointer-events-none z-0`}>
                          {cs.num}
                        </div>

                        <div className={`relative z-10 grid md:grid-cols-2 gap-0 ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>

                          {/* ── content ── */}
                          <div className="p-8 md:p-10 flex flex-col justify-between md:[direction:ltr]">
                            {/* Top row */}
                            <div>
                              <div className="flex items-center gap-3 mb-6">
                                <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${cs.tagColor} border text-[10px] tracking-widest px-3 py-1.5 rounded-full uppercase font-medium`}>
                                  {cs.tag}
                                </span>
                                <span className="text-[10px] text-gray-600 uppercase tracking-widest">{cs.since}</span>
                              </div>

                              <h2 className="text-3xl md:text-4xl font-light leading-tight mb-1 group-hover:text-blue-200 transition-colors duration-300">
                                {cs.client}
                              </h2>
                              <p className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
                                <MapPin size={12} className="shrink-0" />
                                {cs.location} · {cs.industry}
                              </p>

                              {/* Metrics */}
                              <div className="grid grid-cols-3 gap-3 mb-6">
                                {cs.metrics.map(({ value, label }) => (
                                  <div
                                    key={label}
                                    className="bg-white/[0.04] border border-white/8 rounded-2xl p-4 text-center"
                                  >
                                    <div className="text-xl md:text-2xl font-bold text-white mb-0.5">{value}</div>
                                    <div className="text-[10px] text-gray-500 leading-snug">{label}</div>
                                  </div>
                                ))}
                              </div>

                              {/* Services */}
                              <div className="flex flex-wrap gap-2 mb-7">
                                {cs.services.map(({ label, icon: Icon, color }) => (
                                  <span
                                    key={label}
                                    className={`inline-flex items-center gap-1.5 border text-xs px-3 py-1.5 rounded-full ${iconColorMap[color]}`}
                                  >
                                    <Icon size={11} className="shrink-0" />
                                    {label}
                                  </span>
                                ))}
                              </div>

                              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {cs.preview}
                              </p>
                            </div>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-4 transition-all duration-300">
                              <span>Read case study</span>
                              <div className="w-8 h-8 rounded-full bg-white/8 border border-white/15 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>

                          {/* ── image ── */}
                          <div className="relative min-h-[280px] md:min-h-0 overflow-hidden md:[direction:ltr]">
                            <Image
                              src={cs.img}
                              alt={"Urbanzi Solutions Case Study - " + cs.client + " (" + cs.industry + "): " + cs.tag}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Gradient — always fade toward the content side */}
                            <div className={`absolute inset-0 ${i % 2 !== 0 ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#080e1f] via-[#080e1f]/30 to-transparent`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080e1f]/60 via-transparent to-transparent" />

                            {/* Floating industry badge */}
                            <div className={`absolute bottom-6 ${i % 2 !== 0 ? "left-6" : "right-6"} bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5`}>
                              <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">Industry</div>
                              <div className="text-xs font-medium text-white">{cs.industry}</div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── COMING SOON ── */}
        <section className="pb-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-8"
            >
              <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Up next</div>
              <h3 className="text-xl font-light text-gray-400">More case studies in progress</h3>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              {upcomingClients.map(({ name, industry, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-4 bg-white/[0.03] border border-white/6 rounded-2xl px-5 py-4"
                >
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-400">{name}</div>
                    <div className="text-xs text-gray-600">{industry}</div>
                  </div>
                  <span className="ml-auto text-[10px] uppercase tracking-widest text-gray-700 border border-white/5 rounded-full px-2.5 py-1">Soon</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
