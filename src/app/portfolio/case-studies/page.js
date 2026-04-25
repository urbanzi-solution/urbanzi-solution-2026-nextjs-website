"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, Globe, Shield, Users, BarChart3, Monitor, Search, MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const caseStudies = [
  {
    slug: "joseco-furniture",
    client: "Joseco Furniture",
    industry: "Furniture Manufacturing & Retail",
    location: "Marthandam, Tamil Nadu",
    services: ["Website Development", "Digital Warranty System", "CRM", "Meta Ads", "Office Digitalization"],
    result: "27% increase in sales, 20–30 quality leads/day, customers traveling from Kozhikode & Malappuram",
    preview:
      "Joseco Furniture had 35 years of excellence but was invisible online. We rebuilt their website, created the industry's first OTP-based digital warranty system, and launched Meta Ads that expanded their reach from a local area to all of Tamil Nadu and Kerala — including a new experience showroom in Trivandrum.",
    img: "/Joseco Funiture Case study photo.webp",
    tag: "Digital Transformation",
    tagColor: "bg-blue-900/60 text-blue-300",
    date: "Aug 2025 – Ongoing",
  },
  {
    slug: "arrow-cabs",
    client: "Arrow Cabs",
    industry: "Car Rental & Transportation",
    location: "Trivandrum, Kerala",
    services: ["Website Development", "SEO", "Google My Business"],
    result: "Page 1 rankings from a fresh domain in 16 months — avg. position 8.4, 2,670 total clicks, 172K impressions",
    preview:
      "Arrow Cabs came to us with a near-zero domain, a dormant GMB, and one of Trivandrum's most competitive markets to crack. Through technical SEO, a calculated 4-page foundation, and a bold full-site rebuild, we took them from page 2 to page 1 — while navigating a client nervous about losing real bookings and a geopolitical crisis that hit their NRI customer base.",
    img: "/car.webp",
    tag: "SEO & Web Development",
    tagColor: "bg-green-900/60 text-green-300",
    date: "Mar 2025 – Ongoing",
  },
];

const SERVICE_ICONS = {
  "Website Development": Globe,
  "Digital Warranty System": Shield,
  "CRM": Users,
  "Meta Ads": BarChart3,
  "Office Digitalization": Monitor,
  "SEO": Search,
  "Google My Business": MapPin,
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease },
  }),
};

export default function CaseStudiesIndex() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white min-h-screen">

        {/* ── HERO ── */}
        <section className="relative pt-36 pb-16 px-4 md:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />

          <div className="relative max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              className="flex items-center gap-2 text-xs text-gray-500 mb-8"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              <Link href="/" className="hover:text-gray-300 transition">Home</Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">Case Studies</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="inline-block bg-white/10 text-gray-300 text-[10px] tracking-widest px-4 py-2 rounded-full uppercase mb-5">
                Portfolio · Real Results
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-5">
                Case <span className="text-blue-400 italic">Studies</span>
              </h1>

              <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
                In-depth looks at how we've helped businesses transform digitally. Real challenges, real solutions, real numbers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── LIST ── */}
        <section className="pb-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">

            <motion.div
              className="border-t border-neutral-800"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              style={{ originX: 0 }}
            />

            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className={`group relative ${i < caseStudies.length - 1 ? "border-b border-neutral-800" : ""}`}
              >
                <div className="absolute inset-0 bg-neutral-900/40 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 items-start">

                  {/* Date col */}
                  <div className="hidden md:block md:col-span-2 text-gray-500 text-sm pt-1">
                    {cs.date}
                  </div>

                  {/* Image col */}
                  <div className="md:col-span-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={cs.img}
                        alt={cs.client}
                        width={600}
                        height={400}
                        className="w-full h-52 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    <div className="text-gray-500 text-xs mt-3 md:hidden">{cs.date}</div>
                  </div>

                  {/* Content col */}
                  <div className="md:col-span-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${cs.tagColor}`}>
                        {cs.tag}
                      </span>
                      <span className="text-xs text-gray-500">{cs.industry}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold mb-1 leading-snug">
                      {cs.client}
                    </h2>
                    <p className="text-xs text-gray-500 mb-4">{cs.location}</p>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cs.services.map((s) => {
                        const Icon = SERVICE_ICONS[s];
                        return (
                          <span key={s} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/8 text-gray-400 text-xs px-2.5 py-1 rounded-full">
                            {Icon && <Icon size={11} className="text-gray-500 shrink-0" />}
                            {s}
                          </span>
                        );
                      })}
                    </div>

                    {/* Standout result */}
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl px-4 py-3 mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-blue-400 block mb-1">Standout Result</span>
                      <p className="text-sm text-blue-100">{cs.result}</p>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {cs.preview}
                    </p>

                    <Link
                      href={`/portfolio/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Read case study <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}

            {/* More coming soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="border-t border-neutral-800 pt-14 text-center"
            >
              <p className="text-gray-600 text-sm mb-2">More case studies coming soon</p>
              <p className="text-gray-500 text-xs">Kerala Pest · Skill Haara · Alpha Tours</p>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
