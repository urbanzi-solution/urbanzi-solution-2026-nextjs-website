"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import clientsData from "@/data/clients.json";
import Image from "next/image";
import { ExternalLink, MapPin, Hammer } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const SERVICE_COLORS = {
  "Web Development":      { bg: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.3)",  text: "#60a5fa" },
  "SEO":                  { bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.3)",  text: "#34d399" },
  "Digital Marketing":    { bg: "rgba(139,92,246,0.12)",  border: "rgba(139,92,246,0.3)",  text: "#a78bfa" },
  "Software Development": { bg: "rgba(6,182,212,0.12)",   border: "rgba(6,182,212,0.3)",   text: "#22d3ee" },
  "Google My Business":   { bg: "rgba(245,158,11,0.12)",  border: "rgba(245,158,11,0.3)",  text: "#fbbf24" },
  "CRM":                  { bg: "rgba(249,115,22,0.12)",  border: "rgba(249,115,22,0.3)",  text: "#fb923c" },
};

export default function ClientsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { clients, categories } = clientsData;

  const filtered = useMemo(
    () => activeFilter === "All" ? clients : clients.filter(c => c.categories?.includes(activeFilter)),
    [activeFilter, clients]
  );

  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white min-h-screen selection:bg-blue-500/30 selection:text-white">

        {/* HERO */}
        <section className="relative pt-32 pb-12 px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-b from-blue-500/40 to-transparent pointer-events-none" />

          <div className="relative max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-gray-400 text-[10px] tracking-[0.2em] px-5 py-2.5 rounded-full uppercase mb-10 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              Trusted by Industry Leaders
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-light leading-[1.1] tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
            >
              Our <span className="italic font-serif text-blue-400">Clients</span>
            </motion.h1>

            <motion.p
              className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
            >
              Fueling the growth of ambitious brands through{" "}
              <br className="hidden md:block" />
              cutting-edge digital transformation and strategic design.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease }}
            >
              {[
                { value: `${clients.length}+`, label: "Clients" },
                { value: "6+", label: "Services" },
                { value: "8+", label: "Industries" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-10">
                  {i > 0 && <div className="w-px h-10 bg-white/10" />}
                  <div className="text-center">
                    <div className="text-3xl font-light text-white">{stat.value}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="pb-10 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-[11px] font-medium tracking-wider uppercase transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1.5 opacity-50">
                      ({clients.filter(c => c.categories?.includes(cat)).length})
                    </span>
                  )}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CLIENT GRID */}
        <section className="pb-24 px-4 md:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((client, i) => (
                  <motion.div
                    key={client.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease }}
                    className="group relative flex flex-col"
                  >
                    <div className="relative flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                      {/* Logo area */}
                      <div className="relative h-56 w-full bg-[#080b18] overflow-hidden flex items-center justify-center p-10 shrink-0">
                        <div
                          className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40"
                          style={{ background: `radial-gradient(circle at center, ${client.logoColor}, transparent 70%)` }}
                        />

                        {client.status === "building" && (
                          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/35 text-amber-400 text-[9px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-full">
                            <Hammer size={9} className="shrink-0" />
                            In Progress
                          </div>
                        )}

                        <div className="relative w-full h-full flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">
                          {client.logo ? (
                            <div className="relative w-full h-full">
                              <Image
                                src={client.logo}
                                alt={"Urbanzi Solutions Client - " + client.name + " (" + client.location + "): " + client.tagline}
                                fill
                                className="object-contain p-4 drop-shadow-2xl"
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                            </div>
                          ) : (
                            <div
                              className="text-6xl font-black tracking-tighter drop-shadow-2xl"
                              style={{ color: client.logoColor }}
                            >
                              {client.logoText}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex flex-col flex-1 p-8 gap-5">

                        {/* Name & tagline */}
                        <div>
                          <h3 className="text-xl font-light text-white mb-1.5 group-hover:text-blue-400 transition-colors duration-300">
                            {client.name}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed italic">
                            &ldquo;{client.tagline}&rdquo;
                          </p>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
                          <MapPin size={10} className="text-blue-500 shrink-0" />
                          {client.location}
                        </div>

                        {/* Services */}
                        <div className="mt-auto">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 mb-2">Services</p>
                          <div className="flex flex-wrap gap-1.5">
                            {client.categories?.map(cat => {
                              const c = SERVICE_COLORS[cat] ?? { bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.15)", text: "#9ca3af" };
                              return (
                                <span
                                  key={cat}
                                  className="text-[10px] font-medium px-2.5 py-1 rounded-full border"
                                  style={{ backgroundColor: c.bg, borderColor: c.border, color: c.text }}
                                >
                                  {cat}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Footer row */}
                        <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest text-gray-600 font-medium">
                            Since {client.since}
                          </span>

                          {client.url ? (
                            <a
                              href={client.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-white transition-colors duration-300 group/link"
                            >
                              Visit Project
                              <ExternalLink size={12} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            </a>
                          ) : client.status === "building" ? (
                            <span className="text-[10px] text-amber-500/60 uppercase tracking-wider">
                              Coming Soon
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div
                      className="absolute -inset-1 rounded-[2.5rem] opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700 pointer-events-none"
                      style={{ backgroundColor: client.logoColor }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8 border-t border-white/5 bg-[#080b18]/50 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                Ready to transform <br /> your{" "}
                <span className="text-blue-400 italic">digital presence?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm tracking-wide"
                >
                  START A PROJECT
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-sm tracking-wide"
                >
                  EXPLORE SERVICES
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
