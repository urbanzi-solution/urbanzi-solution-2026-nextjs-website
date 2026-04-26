"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  Shield,
  Globe,
  BarChart3,
  Smartphone,
  CheckCircle2,
  Quote,
  ExternalLink,
  ChevronRight,
  FileText,
  Search,
  Award,
  Monitor,
  Instagram,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function ImgSlot({ label, hint, src, videoId, localVideo, instagramId, aspect = "video", onImageClick }) {
  const aspectClass = aspect === "reel" ? "aspect-[9/16]" : "aspect-video";

  if (videoId) {
    return (
      <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col group h-full">
        <div className={`relative ${aspectClass} w-full overflow-hidden bg-black`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={label}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-white/[0.02] border-t border-white/5 flex-grow">
          <div className="text-xs font-medium text-gray-300">{label}</div>
          {hint && <div className="text-[10px] text-gray-500 mt-1 leading-relaxed">{hint}</div>}
        </div>
      </div>
    );
  }
  if (localVideo) {
    return (
      <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col group h-full">
        <div className={`relative ${aspectClass} w-full overflow-hidden bg-black`}>
          <video
            src={localVideo}
            controls
            className="absolute inset-0 w-full h-full border-0"
            poster={src}
          ></video>
        </div>
        <div className="p-4 bg-white/[0.02] border-t border-white/5 flex-grow">
          <div className="text-xs font-medium text-gray-300">{label}</div>
          {hint && <div className="text-[10px] text-gray-500 mt-1 leading-relaxed">{hint}</div>}
        </div>
      </div>
    );
  }
  if (instagramId) {
    return (
      <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col group h-full">
        <div className={`relative ${aspectClass} w-full overflow-hidden bg-black`}>
          <iframe
            src={`https://www.instagram.com/reel/${instagramId}/embed`}
            title={label}
            className="absolute inset-0 w-full h-full border-0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="p-4 bg-white/[0.02] border-t border-white/5 flex-grow">
          <div className="text-xs font-medium text-gray-300">{label}</div>
          {hint && <div className="text-[10px] text-gray-500 mt-1 leading-relaxed">{hint}</div>}
        </div>
      </div>
    );
  }
  if (src) {
    return (
      <div 
        className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col group h-full cursor-zoom-in transition-all hover:border-blue-500/30"
        onClick={() => onImageClick && onImageClick({ src, label, hint })}
      >
        <div className={`relative ${aspectClass} w-full overflow-hidden bg-gray-900`}>
          <Image 
            src={src} 
            alt={label}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white/[0.02] border-t border-white/5 flex-grow">
          <div className="text-xs font-medium text-gray-300">{label}</div>
          {hint && <div className="text-[10px] text-gray-500 mt-1 leading-relaxed">{hint}</div>}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-3 py-12 px-6 text-center">
      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 text-xl">
        📸
      </div>
      <div className="text-sm font-medium text-gray-300">{label}</div>
      {hint && <div className="text-xs text-gray-600 max-w-xs">{hint}</div>}
      <div className="text-[10px] uppercase tracking-widest text-gray-700 mt-1">Image placeholder — replace with actual asset</div>
    </div>
  );
}

export default function JosecoFurnitureCaseStudy() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Navbar />

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden">
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.label}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="text-center max-w-2xl">
                <h3 className="text-xl md:text-2xl font-light text-white mb-2">{selectedImg.label}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{selectedImg.hint}</p>
              </div>

              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-0 right-0 md:-top-4 md:-right-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="bg-[#050816] text-white overflow-hidden">

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex items-end pb-12 pt-28 px-4 md:px-8">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#050816] to-[#050816]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <motion.div
              className="flex items-center gap-2 text-xs text-gray-500 mb-8"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              <Link href="/" className="hover:text-gray-300 transition">Home</Link>
              <ChevronRight size={12} />
              <Link href="/portfolio/case-studies" className="hover:text-gray-300 transition">Case Studies</Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">Joseco Furniture</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                {/* Tag */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] tracking-widest px-4 py-2 rounded-full uppercase mb-6"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  Case Study · Furniture Industry
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6"
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Building Digital Trust in the{" "}
                  <span className="text-blue-400 italic">Furniture Industry</span>
                </motion.h1>

                <motion.p
                  className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                >
                  How Joseco Furniture — a 35-year-old furniture maker — broke through a growth plateau with a digital warranty system, CRM, Meta Ads, and a website that finally works for them.
                </motion.p>

                {/* Meta info */}
                <motion.div
                  className="flex flex-wrap gap-4 text-sm text-gray-400 mb-10"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                >
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-blue-400" /> Marthandam, Tamil Nadu</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-400" /> August 2025 – Ongoing</span>
                  <span className="flex items-center gap-1.5"><Globe size={14} className="text-blue-400" /><a href="https://josecofurniture.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">josecofurniture.com</a><ExternalLink size={10} /></span>
                </motion.div>

                {/* Service tags */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                >
                  {[
                    { label: "Website Dev",          href: "/services/web-development",    icon: Globe      },
                    { label: "Digital Warranty",     href: "/services/software-development", icon: Shield   },
                    { label: "CRM",                  href: "/services/software-development", icon: Users    },
                    { label: "Meta Ads",             href: "/services/digital-marketing",  icon: BarChart3  },
                    { label: "Graphics & Animation", href: "/services/graphic-design-animation", icon: Monitor },
                    { label: "Office Digitalization", href: "/services/software-development", icon: Monitor },
                    { label: "Brand Visibility",     href: "/services/digital-marketing",  icon: TrendingUp },
                  ].map(({ label, href, icon: TagIcon }) => (
                    <Link key={label} href={href} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors">
                      <TagIcon size={11} className="text-gray-400 shrink-0" />
                      {label}
                    </Link>
                  ))}
                </motion.div>
              </div>

              {/* Key stats */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {[
                  { number: "27%", label: "Sales Growth", sub: "Year-over-year increase", icon: TrendingUp },
                  { number: "20–30", label: "Leads / Day", sub: "Consistent quality leads", icon: BarChart3 },
                  { number: "550+", label: "Customers", sub: "In digital warranty system", icon: Users },
                  { number: "₹35–40", label: "Cost per Click", sub: "Meta Ads CPC", icon: Smartphone },
                ].map(({ number, label, sub, icon: Icon }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <Icon size={18} className="text-blue-400 mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{number}</div>
                    <div className="text-sm font-medium text-gray-200">{label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CLIENT OVERVIEW ── */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              <motion.div
                className="lg:col-span-2"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">The Client</div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  35 years of craft.<br />
                  <span className="text-blue-400 italic">Zero digital presence.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Joseco Furniture is a mid-sized furniture manufacturer and retailer with a 35-year legacy serving Kanyakumari and Trivandrum. Built on exceptional product quality and a unique lifetime warranty, they had earned fierce customer loyalty — but entirely through word-of-mouth.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  When owner Joye Alex Alexander approached Urbanzi in August 2025, the business had plateaued. Despite a stronger product than competitors, Joseco was invisible to the modern buyer. Their strongest selling point — the lifetime warranty — was being dismissed as "too good to be true." They needed digital transformation, not just a website.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="space-y-4"
              >
                {[
                  { label: "Client", value: "Joseco Furniture" },
                  { label: "Owner", value: "Joye Alex Alexander" },
                  { label: "Industry", value: "Furniture Mfg. & Retail" },
                  { label: "Founded", value: "~1990 (35 years)" },
                  { label: "Locations", value: "Marthandam · Kalluthotti · Kuzhithurai" },
                  { label: "Markets", value: "Kanyakumari · Trivandrum · All Tamil Nadu" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5 py-3 border-b border-white/5">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
                    <span className="text-sm text-gray-200">{value}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CHALLENGES ── */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">The Problem</div>
              <h2 className="text-3xl md:text-4xl font-light">
                Five interconnected challenges<br />
                <span className="text-blue-400 italic">holding growth back</span>
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  number: "01",
                  title: 'The "Too Good to Be True" Problem',
                  desc: "Joseco's lifetime warranty — their biggest differentiator — was being dismissed as a scam. In an industry where warranties live on paper and are easily lost, customers had no reason to believe a furniture shop would honor a lifetime commitment.",
                },
                {
                  number: "02",
                  title: "Outdated Website Infrastructure",
                  desc: "Their PHP website was difficult to navigate and impossible to update without technical help. Adding products or changing prices required developer intervention every time.",
                },
                {
                  number: "03",
                  title: "Paper-Based Operations",
                  desc: "Every sale, customer record, and visitor log lived in notebooks. Calculating conversion ratios from handwritten notes took hours of manual effort — valuable data trapped in paper.",
                },
                {
                  number: "04",
                  title: "Limited Geographic Reach",
                  desc: "Growth was capped by word-of-mouth radius. All-India sales were occasional, driven by personal referrals. No systematic way to reach new markets digitally.",
                },
                {
                  number: "05",
                  title: "Invisible to Modern Buyers",
                  desc: "Competitors with basic websites were capturing customers who researched furniture online before visiting stores. Joseco was losing potential buyers before the conversation even started.",
                },
              ].map(({ number, title, desc }) => (
                <motion.div
                  key={number}
                  variants={fadeUp}
                  className="bg-[#0a1628]/60 border border-white/8 rounded-2xl p-6 hover:border-blue-500/20 transition-colors duration-300"
                >
                  <div className="text-4xl font-bold text-white/5 mb-4 leading-none">{number}</div>
                  <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}

              {/* Insight card */}
              <motion.div
                variants={fadeUp}
                className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs uppercase tracking-widest text-blue-400 mb-4">The Root Cause</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Joseco's best assets — 35 years of quality, a lifetime warranty, loyal customers — were invisible to the digital world. The problem wasn't the product. It was the absence of a system to prove it.
                  </p>
                </div>
                <div className="h-px bg-blue-500/20 my-5" />
                <p className="text-blue-300 text-sm font-medium italic">"His strongest selling point was also his biggest credibility problem."</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── DISCOVERY ── */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Discovery</div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  A month of deep collaboration<br />
                  <span className="text-blue-400 italic">before a single line of code</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Our discovery phase wasn't a standard client kickoff — it was a month-long collaboration. Multiple meetings at the client's home, diving deep into operations, philosophy, and vision.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We explored blockchain-based warranties (too complex), PDF warranties via email (people don't check email), and paper warranties with stamps (still losable). Then came the breakthrough.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-widest text-blue-400 mb-2">The Breakthrough Idea</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A legally-binding digital warranty system tied to the customer's mobile number — something <strong className="text-white">no furniture business in the market had ever done</strong>. No documents needed. No passwords. Just OTP login from any phone, anytime.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="space-y-3"
              >
                {[
                  { approach: "Paper warranty with stamps", verdict: "rejected", reason: "Still losable, still unverifiable" },
                  { approach: "PDF warranty via email", verdict: "rejected", reason: "People don't check email regularly" },
                  { approach: "Blockchain-based warranty", verdict: "rejected", reason: "Too complex, unnecessary overhead" },
                  { approach: "OTP-based digital warranty portal", verdict: "chosen", reason: "Familiar to Indian users, permanent, verifiable" },
                ].map(({ approach, verdict, reason }) => (
                  <div
                    key={approach}
                    className={`flex items-start gap-4 rounded-xl p-4 border ${verdict === "chosen" ? "bg-green-500/10 border-green-500/20" : "bg-white/3 border-white/5"}`}
                  >
                    <div className={`mt-0.5 shrink-0 rounded-full p-1 ${verdict === "chosen" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                      {verdict === "chosen"
                        ? <CheckCircle2 size={14} />
                        : <span className="block w-3.5 h-3.5 flex items-center justify-center text-xs font-bold">✕</span>
                      }
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${verdict === "chosen" ? "text-green-300" : "text-gray-300"}`}>{approach}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{reason}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">The Solution</div>
              <h2 className="text-3xl md:text-4xl font-light">
                Four parallel tracks.<br />
                <span className="text-blue-400 italic">One integrated transformation.</span>
              </h2>
            </motion.div>

            <div className="space-y-6">

              {/* Track 1 */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-12 gap-6 bg-[#0a1628]/60 border border-white/8 rounded-2xl p-7 hover:border-blue-500/15 transition-colors duration-300"
              >
                <div className="md:col-span-1 flex md:flex-col items-center gap-3 md:gap-0">
                  <span className="text-3xl font-bold text-white/8">01</span>
                </div>
                <div className="md:col-span-5">
                  <div className="text-xs uppercase tracking-widest text-blue-400 mb-2">Track 1</div>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href="/services/web-development" className="hover:text-blue-400 transition-colors">Website Rebuild</Link>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Replaced the outdated PHP site with WordPress + WooCommerce. The client can now add products, update prices, and manage their catalog without any technical help. Mobile-responsive,{" "}
                    <Link href="/services/seo" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2 decoration-blue-400/40">SEO-friendly</Link>, and fast.
                  </p>
                  <a href="https://josecofurniture.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition">
                    Visit josecofurniture.com <ExternalLink size={12} />
                  </a>
                </div>
                <div className="md:col-span-6 grid grid-cols-2 gap-3">
                  {[
                    "WordPress + WooCommerce",
                    "Easy product management",
                    "Mobile-first design",
                    "SEO-friendly architecture",
                    "Contact & inquiry forms",
                    "Completed in 1 month",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Track 2 */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-12 gap-6 bg-[#0a1628]/60 border border-white/8 rounded-2xl p-7 hover:border-blue-500/15 transition-colors duration-300"
              >
                <div className="md:col-span-1">
                  <span className="text-3xl font-bold text-white/8">02</span>
                </div>
                <div className="md:col-span-5">
                  <div className="text-xs uppercase tracking-widest text-blue-400 mb-2">Track 2</div>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href="/services/software-development" className="hover:text-blue-400 transition-colors">Digital Warranty System</Link>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    The industry's first OTP-based digital warranty portal. Customers log in with their mobile number — no passwords, no lost documents. Every purchase, warranty status, and invoice lives permanently in their dashboard.
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-xs text-blue-300">
                    <strong className="text-blue-200">First in the industry</strong> — no furniture business had done this before.
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Customer Flow</div>
                  <div className="space-y-2">
                    {[
                      "Purchase furniture → receive physical warranty card with QR",
                      "Scan QR or visit portal → enter mobile number",
                      "Receive OTP → instant login",
                      "Dashboard: all purchases, warranty status, invoices",
                      "Submit warranty claims digitally — no phone calls",
                    ].map((step, i) => (
                      <div key={step} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] flex items-center justify-center font-bold mt-0.5">{i + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Track 2 — image row */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-3 gap-4"
              >
                <ImgSlot 
                  label="Joseco Furniture Digital Warranty Portal - OTP Login Screen" 
                  hint="OTP entry screen from josecofurniture.com warranty portal" 
                  src="/Warranty login screen screenshot.webp"
                  onImageClick={setSelectedImg}
                />
                <ImgSlot 
                  label="Joseco Furniture Customer Dashboard - Purchase History and Warranty Status" 
                  hint="Purchase history + warranty status view after login" 
                  src="/Customer dashboard showing purchase history.webp"
                  onImageClick={setSelectedImg}
                />
                <ImgSlot 
                  label="Joseco Furniture Physical Warranty Card with QR Code for Digital Registration" 
                  hint="Printed card with QR code given at point of sale" 
                  src="/Warranty card design - Mokup.webp"
                  onImageClick={setSelectedImg}
                />
              </motion.div>

              {/* Track 3 */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-12 gap-6 bg-[#0a1628]/60 border border-white/8 rounded-2xl p-7 hover:border-blue-500/15 transition-colors duration-300"
              >
                <div className="md:col-span-1">
                  <span className="text-3xl font-bold text-white/8">03</span>
                </div>
                <div className="md:col-span-5">
                  <div className="text-xs uppercase tracking-widest text-blue-400 mb-2">Track 3</div>
                  <h3 className="text-xl font-semibold mb-3">Visitor & Customer CRM</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A lightweight CRM integrated into the website backend at no extra charge. Walk-in visitors captured by showroom staff. Every warranty registration auto-populates the customer database. Full purchase history visible before every sales call.
                  </p>
                </div>
                <div className="md:col-span-6 grid grid-cols-2 gap-3">
                  {[
                    { label: "550+", desc: "Customers with full history" },
                    { label: "800+", desc: "Visitors captured" },
                    { label: "3 clicks", desc: "Max for any task" },
                    { label: "2 weeks", desc: "Full staff adoption" },
                  ].map(({ label, desc }) => (
                    <div key={label} className="bg-white/4 rounded-xl p-4">
                      <div className="text-xl font-bold text-blue-400 mb-1">{label}</div>
                      <div className="text-xs text-gray-400">{desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Track 3 — image row */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-2 gap-4"
              >
                <ImgSlot 
                  label="Urbanzi CRM for Joseco Furniture - Integrated Customer and Purchase History Database" 
                  hint="Backend view showing all registered customers with purchase history" 
                  src="/CRM dashboard screenshot - customer list view.webp"
                  onImageClick={setSelectedImg}
                />
                <ImgSlot 
                  label="Urbanzi CRM for Joseco Furniture - Showroom Visitor Log and Conversion Tracking" 
                  hint="Walk-in visitor log captured by showroom staff" 
                  src="/CRM dashboard - visitor tracking view.webp"
                  onImageClick={setSelectedImg}
                />
              </motion.div>

              {/* Track 4 */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-12 gap-6 bg-[#0a1628]/60 border border-white/8 rounded-2xl p-7 hover:border-blue-500/15 transition-colors duration-300"
              >
                <div className="md:col-span-1">
                  <span className="text-3xl font-bold text-white/8">04</span>
                </div>
                <div className="md:col-span-5">
                  <div className="text-xs uppercase tracking-widest text-blue-400 mb-2">Track 4</div>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href="/services/digital-marketing" className="hover:text-blue-400 transition-colors">Meta Ads (Facebook & Instagram)</Link>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    <Link href="/services/digital-marketing" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2 decoration-blue-400/40">Digital marketing</Link> was planned from day one — not an afterthought. Geo-targeted campaigns across Trivandrum, Kanyakumari, and Tamil Nadu. Carousel ads, video content featuring the owner, and the warranty system as the key differentiator in messaging.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-2 h-2 bg-orange-400 rounded-full" />
                    Campaign launch: September 15, 2025
                  </div>
                </div>
                <div className="md:col-span-6 space-y-3">
                  {[
                    { label: "Cost per Click", value: "₹35–40", note: "Within industry benchmark" },
                    { label: "Daily quality leads", value: "20–30", note: "Filtered through funnel" },
                    { label: "Geo reach", value: "All Kerala + Tamil Nadu", note: "Expanded from initial Trivandrum/KK" },
                    { label: "Platform", value: "Facebook & Instagram", note: "High penetration in target regions" },
                  ].map(({ label, value, note }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/5">
                      <div>
                        <div className="text-xs text-gray-500">{label}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{note}</div>
                      </div>
                      <div className="text-sm font-semibold text-white text-right">{value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-2 gap-4"
              >
                <ImgSlot 
                  label="Joseco Furniture Meta Ads Campaign Performance - 3000+ Total Leads Overview" 
                  hint="Combined dashboard showing 3,000+ total leads across all locations" 
                  src="/Joseco Meta Dashbaord screenshot all total.webp"
                  onImageClick={setSelectedImg}
                />
                <ImgSlot 
                  label="Joseco Furniture Optimized Meta Ads Dashboard - Daily Lead Generation and CPC Metrics" 
                  hint="High-performance ads achieving ₹35–40 CPC and consistent 20+ leads/day" 
                  src="/Joseco Meta Dashbaord screenshot Current campaign.webp"
                  onImageClick={setSelectedImg}
                />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── GRAPHICS & AI ANIMATIONS ── */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-[#0a1628]/30">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-10">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Graphics & AI Animations</div>
              <h2 className="text-3xl md:text-4xl font-light">
                Visual storytelling through<br />
                <span className="text-blue-400 italic">AI-powered animations</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mt-4 text-sm leading-relaxed">
                To bridge the gap between traditional craft and modern expectations, we leveraged AI animation to create engaging visual content. From explaining complex warranty steps to high-impact delivery announcements, these creatives brought a new level of professionalism to Joseco's digital presence.
              </p>
              <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl inline-block">
                <p className="text-xs text-blue-300 font-medium italic">
                  "Joseco all creative and edited by Urbanzi"
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-12"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp}>
                <ImgSlot
                  label="Free Kerala Delivery AI Video"
                  hint="AI-generated video announcement for state-wide free delivery"
                  localVideo="/Joseco Free Kerala Delivery AI Video creation.mp4"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ImgSlot
                  label="Warranty Claims AI Walkthrough"
                  hint="Step-by-step AI animation explaining the digital warranty process"
                  localVideo="/Warranty Claims Steps Ai Walkthrough.mp4"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex justify-center"
            >
              <Link 
                href="/services/graphic-design-animation"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all group"
              >
                Learn about our Graphics & Animation services
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── BRAND VISIBILITY ── */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-10">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Brand Visibility</div>
              <h2 className="text-3xl md:text-4xl font-light">
                Owner-led content that<br />
                <span className="text-blue-400 italic">actually converts</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mt-4 text-sm leading-relaxed">
                No anchor can replace the authenticity of an owner who truly knows their product. We created video and podcast content featuring Joye Alex Alexander — Malayalam-language storytelling that resonated deeply with local audiences and outperformed polished marketing creatives.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp}>
                <ImgSlot
                  label="Behind the Scenes Content Creation for Joseco Furniture - Owner-led Video Marketing"
                  hint="Photos from content shoot session with Joye Alex Alexander"
                  src="/Podcast Video creation photo 2.webp"
                  onImageClick={setSelectedImg}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ImgSlot
                  label="YouTube / Podcast Content"
                  hint='"കമ്മീഷൻ വേണ്ട എന്ന് വെച്ചപ്പോൾ കിട്ടിയ വിജയം! | Furniture Business Success Story Malayalam"'
                  videoId="FS_83owBWhs"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── ORGANIC REACH & REELS ── */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            {/* Reel Row 1: Warranty */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-24">
              <motion.div 
                className="lg:col-span-7"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Customer Trust</div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Building credibility through<br />
                  <span className="text-blue-400 italic">authentic storytelling</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Authenticity is the currency of social media. By sharing the "why" behind the lifetime warranty and showing the faces behind the brand, we humanized Joseco Furniture, making it the preferred choice for modern buyers.
                </p>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp size={80} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Smartphone size={20} className="text-green-400" />
                      </div>
                      <div className="text-base font-semibold text-white">Direct WhatsApp Leads</div>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed italic">
                      "By promoting or boosting this video, we are getting <strong className="text-blue-400">2–3 quality leads</strong> daily, delivered directly to the owner's WhatsApp."
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-5 flex justify-center"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              >
                <div className="w-full max-w-[320px]">
                  <ImgSlot
                    label="Organic Reel: Digital Warranty"
                    hint="How the digital system builds lifetime trust"
                    localVideo="/joseco-organic-reel-1.mp4"
                    aspect="reel"
                  />
                  <a 
                    href="https://www.instagram.com/reel/DWX55kMArs7/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <Instagram size={14} className="group-hover/link:text-pink-500 transition-colors" /> 
                    View on Instagram 
                    <ExternalLink size={10} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Reel Row 2: Craftsmanship */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <motion.div 
                className="lg:col-span-7 lg:order-2"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Organic Strategy</div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Short-form content for<br />
                  <span className="text-blue-400 italic">maximum engagement</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Our organic strategy involved cutting long-form podcasts into high-impact reels. These bite-sized pieces of content showcased Joye Alex Alexander's expertise and the 35-year craftsmanship of Joseco's furniture.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "40%", desc: "Profile Visit Increase" },
                    { label: "Daily", desc: "WhatsApp Inquiries" },
                    { label: "High", desc: "Retention & Trust" },
                    { label: "Organic", desc: "Market Reach" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="text-xl font-bold text-blue-400 mb-1">{stat.label}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-5 lg:order-1 flex justify-center"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              >
                <div className="w-full max-w-[320px]">
                  <ImgSlot
                    label="Organic Reel: Furniture Craftsmanship"
                    hint="Highlighting the 35-year legacy and quality"
                    localVideo="/joseco-organic-reel-2.mp4"
                    aspect="reel"
                  />
                  <a 
                    href="https://www.instagram.com/reel/DWRNZpFF6k_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <Instagram size={14} className="group-hover/link:text-pink-500 transition-colors" /> 
                    View on Instagram 
                    <ExternalLink size={10} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CHALLENGE: ANDROMEDA UPDATE ── */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-orange-400 mb-3">Implementation Challenge</div>
              <h2 className="text-3xl md:text-4xl font-light">
                The Andromeda setback —<br />
                <span className="text-orange-400 italic">and the turning point</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="bg-orange-500/8 border border-orange-500/20 rounded-2xl p-6 mb-5">
                  <div className="text-sm font-semibold text-orange-300 mb-3">September 2025: The Problem</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    When Meta Ads launched on September 15, results were discouraging. Funds were burning with minimal conversions. Meta's <strong className="text-gray-200">Andromeda update</strong> had disrupted lead quality and conversion rates across the industry — affecting marketers everywhere, not just Joseco.
                  </p>
                </div>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
                  <div className="text-sm font-semibold text-gray-200 mb-3">Our Response</div>
                  <ul className="space-y-2">
                    {[
                      "Transparent communication — explained Andromeda's impact to client",
                      "Requested time to iterate (client trusted and continued funding)",
                      "Countless rounds of ad creative and targeting optimization",
                      "Waited until warranty system launched to use it in ad messaging",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                        <ArrowRight size={14} className="text-blue-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="bg-green-500/8 border border-green-500/20 rounded-2xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-semibold text-green-300 mb-3">October 2025: The Turning Point</div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      Once we integrated the <strong className="text-white">digital warranty system</strong> into ad messaging, everything changed. Instead of curious browsers, we started attracting serious buyers who understood Joseco's unique value proposition.
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: "Lead quality", before: "Low (curious browsers)", after: "High (serious buyers)" },
                        { label: "Daily leads", before: "Negligible", after: "20–30 quality leads" },
                        { label: "Differentiator", before: "Just another furniture ad", after: "Industry-first warranty pitch" },
                      ].map(({ label, before, after }) => (
                        <div key={label} className="bg-white/3 rounded-xl p-3">
                          <div className="text-xs text-gray-500 mb-2">{label}</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-xs text-red-400 bg-red-500/10 rounded px-2 py-1">{before}</div>
                            <div className="text-xs text-green-400 bg-green-500/10 rounded px-2 py-1">{after}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── RESULTS ── */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Results</div>
              <h2 className="text-3xl md:text-4xl font-light">
                From plateau to<br />
                <span className="text-blue-400 italic">consistent growth</span>
              </h2>
            </motion.div>

            {/* Big stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              {[
                { number: "27%", label: "Sales Growth", sub: "2025–26 vs prior year" },
                { number: "550+", label: "Warranty Users", sub: "Active customer accounts" },
                { number: "800+", label: "Visitors Tracked", sub: "In CRM for follow-up" },
                { number: "70%", label: "Paper Reduced", sub: "Office digitalization" },
              ].map(({ number, label, sub }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="bg-[#0a1628] border border-white/8 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{number}</div>
                  <div className="text-sm font-semibold text-white mb-1">{label}</div>
                  <div className="text-xs text-gray-500">{sub}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Geographic expansion */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="bg-[#0a1628] border border-white/8 rounded-2xl p-7"
              >
                <div className="text-xs uppercase tracking-widest text-red-400 mb-4">Before · Pre-August 2025</div>
                <ul className="space-y-2">
                  {[
                    "Sales limited to Marthandam / Kuzhithurai area",
                    "Occasional all-India sales via personal referrals",
                    "Zero digital discovery channels",
                    "Customers had to physically visit the showroom",
                    "Lifetime warranty seen as 'too good to be true'",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-red-400/50 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="bg-[#0a1628] border border-green-500/15 rounded-2xl p-7"
              >
                <div className="text-xs uppercase tracking-widest text-green-400 mb-4">After · Post-September 2025</div>
                <ul className="space-y-2">
                  {[
                    "Systematic sales across all of Tamil Nadu",
                    "Strong presence in Trivandrum and all of Kerala",
                    "Customers traveling from Malappuram, Kozhikode to showroom",
                    "Furniture sold to Lakshadweep — new reach milestone",
                    "New Trivandrum experience showroom opened (Manacaud)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-green-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Time saved */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-7"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">15–20 hrs</div>
                  <div className="text-sm text-gray-400">Saved per week via office digitalization</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Zero</div>
                  <div className="text-sm text-gray-400">Warranty verification phone calls — complete self-service</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">2 weeks</div>
                  <div className="text-sm text-gray-400">For full staff adoption of the CRM system</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              className="relative bg-[#0a1628] border border-white/8 rounded-3xl p-8 md:p-12"
            >
              <div className="absolute top-8 left-8 md:top-10 md:left-10 text-blue-400/30">
                <Quote size={48} />
              </div>

              <div className="relative z-10 pt-8 md:pt-6">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 italic">
                  "Urbanzi didn't just build us a website — they transformed how we do business. The digital warranty system solved a credibility problem we'd struggled with for decades. Now, our lifetime warranty promise isn't just words; it's backed by technology that customers can verify anytime. The Meta Ads campaigns are bringing us quality leads from places we never reached before — customers are traveling from Kozhikode and Malappuram just to visit our showroom. More than just a vendor, Urbanzi has become our digital partner for growth. They understood our business deeply and delivered solutions that actually work."
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-white">Joye Alex Alexander</div>
                    <div className="text-sm text-gray-400">Owner, Joseco Furniture</div>
                    <div className="text-xs text-gray-500 mt-0.5">Marthandam, Tamil Nadu</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-10">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Technical Architecture</div>
              <h2 className="text-3xl font-light">Stack & approach</h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  layer: "Frontend",
                  items: ["WordPress (CMS)", "WooCommerce", "Custom warranty portal", "Responsive / mobile-first"],
                },
                {
                  layer: "Backend",
                  items: ["Custom warranty database", "CRM (website-integrated)", "OTP SMS gateway", "Google Sheets API"],
                },
                {
                  layer: "Marketing Stack",
                  items: ["Meta Ads Manager", "Facebook & Instagram", "Video / podcast hosting", "Lead funnel tracking"],
                },
                {
                  layer: "Security",
                  items: ["OTP auth (no passwords)", "SSL encryption", "Regular DB backups", "Secure data handling"],
                },
              ].map(({ layer, items }) => (
                <motion.div
                  key={layer}
                  variants={fadeUp}
                  className="bg-[#0a1628]/60 border border-white/8 rounded-2xl p-6"
                >
                  <div className="text-xs uppercase tracking-widest text-blue-400 mb-4">{layer}</div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1 h-1 bg-blue-400 rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── KEY LESSONS ── */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Lessons</div>
              <h2 className="text-3xl md:text-4xl font-light">
                What this project taught us —<br />
                <span className="text-blue-400 italic">and what it can teach you</span>
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-5"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  title: "Digital trust beats traditional promises",
                  desc: "A verifiable warranty system creates more trust than verbal guarantees. Technology can turn skepticism into your biggest competitive advantage.",
                },
                {
                  title: "Post-sale relationship is the real asset",
                  desc: "The CRM database (550+ customers with full history) became Joseco's most valuable digital asset. Customer lifetime value increased through systematic follow-up and targeted digital marketing.",
                },
                {
                  title: "Integrated solutions beat point solutions",
                  desc: "Web development + custom software + digital marketing working together created synergy that individual tools couldn't achieve. Data flowing between systems multiplied the value.",
                },
                {
                  title: "Owner authenticity wins in marketing",
                  desc: "Video content featuring Joye Alex Alexander explaining products outperformed polished marketing materials. No anchor can replace the trust of an owner who knows their product.",
                },
              ].map(({ title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-[#0a1628]/60 border border-white/8 rounded-2xl p-6"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              className="relative bg-gradient-to-br from-[#0d1f3c] to-[#0a1628] border border-blue-500/20 rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />

              <div className="relative z-10">
                <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-4">Ready to grow?</div>
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                  Want similar results<br />
                  <span className="text-blue-400 italic">for your business?</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
                  Do you have a unique selling proposition customers don't believe because it sounds "too good to be true"? We specialize in building integrated digital solutions that solve real business problems — not just websites.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition text-sm"
                  >
                    Let's talk <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/portfolio/case-studies"
                    className="inline-flex items-center gap-2 border border-white/20 text-gray-300 px-7 py-3.5 rounded-full hover:bg-white/5 transition text-sm"
                  >
                    View more case studies
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Custom warranty & CRM systems", href: "/services/software-development", icon: Shield, color: "blue" },
                    { label: "E-commerce that drives sales", href: "/services/web-development", icon: Globe, color: "purple" },
                    { label: "Meta Ads & Google Ads", href: "/services/digital-marketing", icon: BarChart3, color: "orange" },
                    { label: "SEO & organic growth", href: "/services/seo", icon: Search, color: "green" },
                  ].map(({ label, href, icon: ServiceIcon, color }) => (
                    <Link
                      key={label}
                      href={href}
                      className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-4 hover:border-blue-500/30 hover:bg-white/8 transition-all duration-300 text-center"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                        color === "blue"   ? "bg-blue-500/15 border border-blue-500/25" :
                        color === "purple" ? "bg-purple-500/15 border border-purple-500/25" :
                        color === "green"  ? "bg-green-500/15 border border-green-500/25" :
                                            "bg-orange-500/15 border border-orange-500/25"
                      }`}>
                        <ServiceIcon size={18} className={
                          color === "blue"   ? "text-blue-400" :
                          color === "purple" ? "text-purple-400" :
                          color === "green"  ? "text-green-400" :
                                              "text-orange-400"
                        } />
                      </div>
                      <span className="text-xs text-gray-300 group-hover:text-white transition-colors leading-snug">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
