"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Globe,
  Search,
  MapPin,
  BarChart3,
  Shield,
  Users,
  Monitor,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import clientsData from "@/data/clients.json";

const ease = [0.22, 1, 0.36, 1];

const CATEGORY_ICONS = {
  "SEO":                  Search,
  "Web Development":      Globe,
  "Digital Marketing":    BarChart3,
  "Software Development": Shield,
  "Google My Business":   MapPin,
  "CRM":                  Users,
  "Office Digitalization":Monitor,
};

const CATEGORY_COLORS = {
  "SEO":                  "bg-green-500/15  border-green-500/25  text-green-400",
  "Web Development":      "bg-blue-500/15   border-blue-500/25   text-blue-400",
  "Digital Marketing":    "bg-orange-500/15 border-orange-500/25 text-orange-400",
  "Software Development": "bg-purple-500/15 border-purple-500/25 text-purple-400",
  "Google My Business":   "bg-red-500/15    border-red-500/25    text-red-400",
  "CRM":                  "bg-teal-500/15   border-teal-500/25   text-teal-400",
  "Office Digitalization":"bg-pink-500/15   border-pink-500/25   text-pink-400",
};

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return clientsData.clients;
    return clientsData.clients.filter((c) =>
      c.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  const totalIndustries = useMemo(
    () => new Set(clientsData.clients.map((c) => c.industry)).size,
    []
  );

  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white min-h-screen overflow-hidden">

        {/* ── HERO ── */}
        <section className="relative pt-36 pb-16 px-4 md:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(59,130,246,0.10),transparent)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-48 bg-gradient-to-b from-blue-500/30 to-transparent" />

          <div className="relative max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              className="flex items-center gap-2 text-xs text-gray-500 mb-10"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              <Link href="/" className="hover:text-gray-300 transition">Home</Link>
              <ChevronRight size={12} />
              <Link href="/portfolio/case-studies" className="hover:text-gray-300 transition">Portfolio</Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">Clients</span>
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
                  {clientsData.clients.length} Clients · {totalIndustries} Industries
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight">
                  Our{" "}
                  <span className="italic text-blue-400">Clients</span>
                </h1>
              </motion.div>

              <motion.p
                className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                Businesses we've partnered with to build, grow, and transform their digital presence.
              </motion.p>
            </div>

            {/* Stats bar */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease }}
            >
              {[
                { value: clientsData.clients.length,                          label: "Active Clients"    },
                { value: totalIndustries,                                      label: "Industries"        },
                { value: clientsData.clients.filter((c) => c.featured).length, label: "Published Studies" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/[0.03] border border-white/6 rounded-2xl px-5 py-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">{value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Rule */}
            <motion.div
              className="mt-10 h-px bg-gradient-to-r from-blue-500/50 via-white/10 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1, ease }}
            />
          </div>
        </section>

        {/* ── FILTER ── */}
        <section className="px-4 md:px-8 mb-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease }}
            >
              {clientsData.categories.map((cat) => {
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
          </div>
        </section>

        {/* ── GRID ── */}
        <section className="pb-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center py-24 text-gray-600 text-sm"
                >
                  No clients in this category yet.
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  layout
                >
                  {filtered.map((client, i) => (
                    <ClientCard key={client.id} client={client} index={i} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

function ClientCard({ client, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#080e1f] border border-white/8 rounded-3xl overflow-hidden hover:border-white/16 transition-all duration-400"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${client.logoColor}18, transparent)` }}
      />

      <div className="relative z-10 p-7 flex flex-col h-full gap-5">

        {/* Logo + since */}
        <div className="flex items-start justify-between">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold border border-white/10 shrink-0 group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: client.logoBg, color: client.logoColor }}
          >
            {client.logo ? (
              <Image src={client.logo} alt={client.name} width={48} height={48} className="object-contain rounded-xl" />
            ) : (
              client.logoText
            )}
          </div>
          <span className="text-[10px] uppercase tracking-widest text-gray-600 border border-white/6 rounded-full px-2.5 py-1 mt-1">
            Since {client.since}
          </span>
        </div>

        {/* Name + tagline */}
        <div>
          <h2 className="text-lg font-semibold text-white leading-snug mb-1 group-hover:text-blue-200 transition-colors duration-300">
            {client.name}
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed">{client.tagline}</p>
        </div>

        {/* Location + industry */}
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <MapPin size={11} className="shrink-0 text-gray-600" />
            {client.location}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <Globe size={11} className="shrink-0 text-gray-600" />
            {client.industry}
          </span>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-1.5">
          {client.categories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat];
            const colorClass = CATEGORY_COLORS[cat] ?? "bg-white/8 border-white/10 text-gray-400";
            return (
              <span
                key={cat}
                className={`inline-flex items-center gap-1 border text-[10px] px-2.5 py-1 rounded-full ${colorClass}`}
              >
                {Icon && <Icon size={9} className="shrink-0" />}
                {cat}
              </span>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Links */}
        <div className="flex items-center justify-between mt-auto">
          {client.caseStudy ? (
            <Link
              href={client.caseStudy}
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <BookOpen size={12} />
              Case study
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          ) : (
            <span className="text-xs text-gray-700 italic">Study coming soon</span>
          )}

          {client.url && (
            <a
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] text-gray-500 hover:text-gray-300 transition-colors border border-white/8 rounded-full px-2.5 py-1 hover:border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              Visit site <ExternalLink size={9} />
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}
