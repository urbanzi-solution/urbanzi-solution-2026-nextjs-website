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
  Globe,
  BarChart3,
  CheckCircle2,
  Quote,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  MousePointer,
  Eye,
  Shield,
  Search,
  Users,
  Clock,
  RefreshCw,
  Compass,
  Award,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function ImgSlot({ label, hint, src, onImageClick }) {
  if (src) {
    return (
      <div 
        className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col group h-full cursor-zoom-in transition-all hover:border-blue-500/30"
        onClick={() => onImageClick && onImageClick({ src, label, hint })}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
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
      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-500">📸</div>
      <div className="text-sm font-medium text-gray-300">{label}</div>
      {hint && <div className="text-xs text-gray-600 max-w-xs">{hint}</div>}
      <div className="text-[10px] uppercase tracking-widest text-gray-700 mt-1">Image placeholder — replace with actual asset</div>
    </div>
  );
}

const gmbData = [
  {
    location: "Killippalam",
    color: "blue",
    weeks: [
      { week: "Mar 22–28",     views: 76,  searches: 34 },
      { week: "Mar 29–Apr 04", views: 92,  searches: 48 },
      { week: "Apr 05–11",     views: 97,  searches: 54 },
      { week: "Apr 12–18",     views: 159, searches: 83 },
    ],
  },
  {
    location: "Poojappura",
    color: "purple",
    weeks: [
      { week: "Mar 22–28",     views: 58, searches: 24 },
      { week: "Mar 29–Apr 04", views: 56, searches: 34 },
      { week: "Apr 05–11",     views: 51, searches: 27 },
      { week: "Apr 12–18",     views: 60, searches: 32 },
    ],
  },
  {
    location: "Vattappara",
    color: "green",
    weeks: [
      { week: "Mar 22–28",     views: 30, searches: 6  },
      { week: "Mar 29–Apr 04", views: 12, searches: 7  },
      { week: "Apr 05–11",     views: 15, searches: 8  },
      { week: "Apr 12–18",     views: 33, searches: 12 },
    ],
  },
];

const colorMap = {
  blue:   { badge: "bg-blue-500/15 text-blue-300 border-blue-500/20",     row: "bg-blue-500/10 text-blue-200"   },
  purple: { badge: "bg-purple-500/15 text-purple-300 border-purple-500/20", row: "bg-purple-500/10 text-purple-200" },
  green:  { badge: "bg-green-500/15 text-green-300 border-green-500/20",   row: "bg-green-500/10 text-green-200"  },
};

const gscWeekly = [
  { week: "Mar 22–28",     clicks: 59, impressions: "3.26K", ctr: "1.8%", pos: "8.9" },
  { week: "Mar 29–Apr 04", clicks: 58, impressions: "3.45K", ctr: "1.7%", pos: "7.7" },
  { week: "Apr 05–11",     clicks: 69, impressions: "3.71K", ctr: "1.9%", pos: "7.6" },
  { week: "Apr 12–18",     clicks: 77, impressions: "3.74K", ctr: "2.1%", pos: "8.2" },
];

export default function ArrowCabsCaseStudy() {
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
        <section className="relative min-h-[90vh] flex items-end pb-16 pt-32 px-4 md:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#050816] to-[#050816]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.10),transparent)]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <motion.div
              className="flex items-center gap-2 text-xs text-gray-500 mb-8"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              <Link href="/" className="hover:text-gray-300 transition">Home</Link>
              <ChevronRight size={12} />
              <Link href="/portfolio/case-studies" className="hover:text-gray-300 transition">Case Studies</Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">Arrow Cabs</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] tracking-widest px-4 py-2 rounded-full uppercase mb-6"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  Case Study · Transportation & Car Rental
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6"
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  From Page 10 to Page 1 —<br />
                  <span className="text-blue-400 italic">20 Years Invisible, Now Found</span>
                </motion.h1>

                <motion.p
                  className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                >
                  How a 20-year-old Trivandrum cab company rebuilt their digital presence from scratch — after a failed agency, a new domain, a full site rebuild, a migration dip, and a geopolitical crisis that hit their core customer base.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 text-sm text-gray-400 mb-10"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                >
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-blue-400" /> Trivandrum, Kerala</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-400" /> March 2025 – Ongoing</span>
                  <span className="flex items-center gap-1.5"><Globe size={14} className="text-blue-400" /><a href="https://arrowcabs.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">arrowcabs.co.in</a><ExternalLink size={10} /></span>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                >
                  {[
                    { label: "Website Development", href: "/services/web-development", icon: Globe },
                    { label: "SEO", href: "/services/seo", icon: Search },
                    { label: "Google My Business", href: "/services/seo", icon: MapPin },
                  ].map(({ label, href, icon: TagIcon }) => (
                    <Link key={label} href={href} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors">
                      <TagIcon size={11} className="text-gray-400 shrink-0" />
                      {label}
                    </Link>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[10px] uppercase tracking-widest text-gray-500 text-center">
                  Last 28 days · Organic Search + GMB
                </div>
                {[
                  { number: "267",  label: "Clicks",        sub: "Google Search Console", icon: MousePointer },
                  { number: "14.2K", label: "Impressions",  sub: "Google Search Console", icon: Eye },
                  { number: "8.1",  label: "Avg. Position", sub: "Page 1",                icon: TrendingUp },
                  { number: "739",  label: "GMB Views",     sub: "3 locations combined",  icon: MapPin },
                ].map(({ number, label, sub, icon: Icon }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <Icon size={18} className="text-blue-400 mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{number}</div>
                    <div className="text-sm font-medium text-gray-200">{label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                  </div>
                ))}
                <div className="col-span-2 bg-green-500/8 border border-green-500/20 rounded-xl px-4 py-2.5 flex items-center justify-center gap-2">
                  <CheckCircle2 size={13} className="text-green-400" />
                  <span className="text-xs text-green-300">100% organic — zero paid Google Ads, ever</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── THE BACKGROUND ── */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              <motion.div
                className="lg:col-span-2"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">The Background</div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  20 years of service.<br />
                  <span className="text-blue-400 italic">Zero online visibility.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Arrow Cabs has been serving Trivandrum's transportation needs since <strong className="text-white">2005</strong> — two decades of building relationships, maintaining a quality fleet, and earning customer trust through reliable service. But by 2024, the market had moved online and they were invisible to anyone searching on Google.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Their first attempt at going digital didn't go well. They had invested in a website on <strong className="text-white">arrow-cabs.com</strong> and hired an SEO agency — but rankings never moved past page 10. Organic traffic was near zero. The agency relationship ended badly, with work abandoned mid-project.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Frustrated but determined, they started fresh in <strong className="text-white">August 2024</strong>: new domain — arrowcabs.co.in — and a simple website built by a freelancer. Still no SEO, still no strategy. Just a clean slate.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  By March 2025, they needed a real SEO partner. That's when they found Urbanzi — coincidentally, the same month we were officially registered as a company. Arrow Cabs became our very first client.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="space-y-4"
              >
                {[
                  { label: "Client", value: "Arrow Cabs" },
                  { label: "Established", value: "2005 — 20 years in business" },
                  { label: "Industry", value: "Car Rental & Transportation" },
                  { label: "Previous domain", value: "arrow-cabs.com (page 10, abandoned)" },
                  { label: "New domain purchased", value: "August 2024" },
                  { label: "Urbanzi engaged", value: "March 2025" },
                  { label: "GMB status at handover", value: "3 listings existed — unoptimized" },
                  { label: "GMB locations", value: "Killippalam · Poojappura · Vattappara" },
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
        <section className="py-20 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">The Problem</div>
              <h2 className="text-3xl md:text-4xl font-light">
                Five obstacles between us<br />
                <span className="text-blue-400 italic">and page 1</span>
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-5"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              {[
                { number: "01", icon: Shield,    title: "Trust Deficit from a Failed Agency",      desc: "Arrow Cabs had already been burned once. A previous agency took their money, delivered page 10 rankings, and abandoned the project. Getting them to trust a new team — especially a brand-new one — required honesty, not promises." },
                { number: "02", icon: Globe,     title: "New Domain, Zero Authority",              desc: "arrowcabs.co.in was purchased in August 2024 with no SEO history. Despite Arrow Cabs' 20-year track record offline, Google had no reason to trust this domain yet. Authority takes time to earn." },
                { number: "03", icon: Search,    title: "Trivandrum's Most Competitive Keywords",  desc: '"Taxi service Trivandrum," "car rental Trivandrum," "tempo traveller hire" — dominated by platforms like Ola and Uber, aggregators, and companies running aggressive Google Ads campaigns. Getting to page 2 was already a real achievement.' },
                { number: "04", icon: BarChart3, title: "Minimal Budget vs. Heavy Competition",    desc: "Competitors were spending on ads, link-building campaigns, and content teams at scale. Every decision had to be efficient and strategic — there was no room for experimentation." },
                { number: "05", icon: Users,     title: "Client Fear of Losing Real Customers",   desc: "Once the site started generating real bookings — 20–30 customers/month from combined website and GMB — the client became protective of what was working. Any proposed change carried real financial risk. That fear was completely valid." },
              ].map(({ number, icon: ChalIcon, title, desc }) => (
                <motion.div
                  key={number}
                  variants={fadeUp}
                  className="bg-[#0a1628]/60 border border-white/8 rounded-2xl p-6 hover:border-blue-500/20 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl font-bold text-white/5 leading-none">{number}</div>
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <ChalIcon size={15} className="text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PHASE 1: FOUNDATION ── */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Phase 1 · March – May 2025</div>
              <h2 className="text-3xl md:text-4xl font-light">
                Build small.<br />
                <span className="text-blue-400 italic">Rank smart.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-8">
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="md:col-span-5"
              >
                <p className="text-gray-400 leading-relaxed mb-5">
                  With a domain carrying no real authority, we chose quality over quantity. Four excellent pages would outperform forty mediocre ones at this stage. We rebuilt the website on WordPress with technical SEO baked into every element — and turned our full attention to the three GMB listings across Trivandrum.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  Each GMB profile was treated individually: service areas completed, categories corrected, photo library built, posts and Q&A management started across Killippalam, Poojappura, and Vattappara. The GMB listings had existed before we arrived but were unoptimized — potential sitting unused.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Website delivered within 2 weeks of project start. By month 2, position 18. By month 3, top of page 2. Ahead of schedule for a domain this new in this market.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="md:col-span-7 grid sm:grid-cols-2 gap-4"
              >
                {[
                  { heading: "Website", items: ["4-page WordPress site", "Home · About · Contact · Tempo Traveller", "Mobile-first responsive design", "PageSpeed Insights: 95+ score"] },
                  { heading: "On-Page SEO", items: ["Keyword-optimized titles & meta", "H1–H6 heading structure", "Alt text on all images", "Internal linking across all pages"] },
                  { heading: "Technical SEO", items: ["LocalBusiness schema markup", "XML sitemap + robots.txt", "HTTPS / SSL", "Clean URL structure"] },
                  { heading: "GMB (3 Locations)", items: ["Killippalam · Poojappura · Vattappara", "NAP + service areas configured", "Categories corrected", "Posts & Q&A management started"] },
                ].map(({ heading, items }) => (
                  <div key={heading} className="bg-[#0a1628]/60 border border-white/8 rounded-2xl p-5">
                    <div className="text-xs uppercase tracking-widest text-blue-400 mb-3">{heading}</div>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FIRST RESULTS ── */}
        <section className="py-20 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">First Victory · June 2025</div>
              <h2 className="text-3xl md:text-4xl font-light">
                Page 2 in 3 months.<br />
                <span className="text-blue-400 italic">Real customers. Real revenue.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <p className="text-gray-400 leading-relaxed mb-5">
                  By June 2025, Arrow Cabs was ranking on page 2 — average position 14.9. For a domain with no prior SEO in a market this competitive, that was ahead of schedule.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  The GMB optimization was generating <strong className="text-white">200+ calls a month</strong> across the three listings. The website was contributing its share of inquiries. Combined — <strong className="text-white">20–30 real paying customers every month</strong> from channels that had produced nothing a few months earlier.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  This was the moment the client's mindset shifted from "let's try this" to "this is working — don't touch it." A completely rational response to real revenue. Which made our next proposal — a full site rebuild — the hardest conversation of the engagement.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="space-y-3"
              >
                {[
                  { label: "Avg. position (June 2025)", value: "14.9", note: "Top of page 2 — within 3 months of start" },
                  { label: "Monthly organic visitors", value: "150+", note: "Organic search traffic established" },
                  { label: "GMB calls / month", value: "200+", note: "Across Killippalam, Poojappura, Vattappara" },
                  { label: "Combined customers / month", value: "20–30", note: "Website inquiries + GMB bookings combined" },
                  { label: "Paid ad spend", value: "₹0", note: "100% organic — no Google Ads ever" },
                ].map(({ label, value, note }) => (
                  <div key={label} className="flex items-center justify-between py-2.5 border-b border-white/5">
                    <div>
                      <div className="text-xs text-gray-500">{label}</div>
                      <div className="text-xs text-gray-600 mt-0.5">{note}</div>
                    </div>
                    <div className="text-sm font-semibold text-blue-300 text-right">{value}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── THE DILEMMA ── */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-orange-400 mb-3">The Dilemma · Mid-2025</div>
              <h2 className="text-3xl md:text-4xl font-light">
                It's working. Now we want<br />
                <span className="text-orange-400 italic">to rebuild everything.</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <p className="text-gray-400 leading-relaxed mb-5">
                  We brought the client a proposal: to reach page 1, we needed to expand from 4 pages to 40+ — dedicated service pages, location-specific landing pages, a blog section, and a complete architecture rebuild. More pages means more keyword coverage, more internal authority, and more pathways for Google to rank.
                </p>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-5 mb-5">
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    "We're getting 20–30 customers every month. If you rebuild everything and rankings drop — even for two weeks — we lose real bookings. Real money. I can't take that risk."
                  </p>
                  <p className="text-gray-500 text-xs mt-2">— Arrow Cabs</p>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  That wasn't stubbornness — it was a business owner protecting real revenue. We adapted: pivot to content expansion through blogging while leaving the core site untouched until the client was ready.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">Client's position</div>
                {[
                  { point: "Willing to invest more", positive: true, note: "Saw the results, trusted the direction" },
                  { point: "Afraid of losing 20–30 customers/month", positive: false, note: "Real monthly revenue at stake" },
                  { point: "Skeptical of beating top players", positive: false, note: "Competitors spending 10× our budget" },
                  { point: "Previous agency burned them once", positive: false, note: "Understandable trust barrier" },
                ].map(({ point, positive, note }) => (
                  <div key={point} className={`flex items-start gap-3 rounded-xl p-4 border ${positive ? "bg-green-500/8 border-green-500/15" : "bg-white/3 border-white/5"}`}>
                    <div className={`mt-0.5 shrink-0 text-sm ${positive ? "text-green-400" : "text-red-400"}`}>{positive ? "✓" : "✕"}</div>
                    <div>
                      <div className={`text-sm font-medium ${positive ? "text-green-300" : "text-gray-300"}`}>{point}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{note}</div>
                    </div>
                  </div>
                ))}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mt-2">
                  <p className="text-sm text-blue-200"><strong>Decision:</strong> No major structural changes. Pivot to blog content strategy — build authority without touching what's working.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PHASE 2: BLOG STRATEGY ── */}
        <section className="py-20 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Phase 2 · June – December 2025</div>
              <h2 className="text-3xl md:text-4xl font-light">
                Can't rebuild the site.<br />
                <span className="text-blue-400 italic">So we built authority another way.</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <p className="text-gray-400 leading-relaxed mb-5">
                  When the client said no to a full rebuild, we pivoted to a blog strategy. Instead of service page expansion, we created informational content around what Arrow Cabs' customers were actually searching for — travel guides, destination content, Kerala trip planning.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  The standout piece was <strong className="text-white">"Hidden Places in Trivandrum"</strong> — a comprehensive local guide that captured high-volume informational searches from tourists and NRIs planning Kerala trips. It ranked <strong className="text-white">#1 in its category</strong> and drove significant brand awareness beyond direct car rental searches.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Other blogs performed well too — building domain authority, earning topical signals, and positioning Arrow Cabs as a local expert rather than just another cab company. This phase kept momentum going while we waited for the right moment to propose the rebuild.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="space-y-3 mb-4">
                  {[
                    { label: '"Hidden Places in Trivandrum"', note: "Ranked #1 in its blog category — high-volume informational traffic from tourists and NRIs" },
                    { label: "Kerala travel guides", note: "Trip-planning searches — future Arrow Cabs customers early in their journey" },
                    { label: "Car rental tips & safety guides", note: "Built trust and reduced pre-booking hesitation for first-time customers" },
                    { label: "Local destination guides", note: "Keyword diversity and domain-wide topical authority" },
                  ].map(({ label, note }) => (
                    <div key={label} className="bg-[#0a1628]/60 border border-white/8 rounded-xl p-4">
                      <div className="text-sm font-medium text-white mb-1">{label}</div>
                      <div className="text-xs text-gray-500">{note}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <p className="text-sm text-blue-200"><strong>Impact:</strong> Maintained steady traffic growth, built domain authority, and grew brand awareness — without touching a single core service page.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ALGORITHM CHALLENGE ── */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-[#1a1000] border border-orange-900/30 rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle size={22} className="text-orange-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-orange-400 mb-3">The Algorithm Strike · January 2026</div>
                  <h3 className="text-xl md:text-2xl font-light text-white mb-4">Google's E-E-A-T update made the rebuild unavoidable.</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    In January 2026, Google rolled out an algorithm update targeting thin-content sites across competitive industries. Sites without comprehensive, value-rich content were penalized. Arrow Cabs' traffic dropped — not because our SEO was failing, but because a 4-page website could only go so far against competitors with 40+ pages of depth.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    We had warned the client for months that this ceiling existed. The blog strategy had bought time and built authority — but it couldn't substitute for proper service and location page coverage. The algorithm update made the case for us: it was time to rebuild properly.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    After many calls and meetings — and with the client finally seeing the data — they agreed. We had their word. Now we needed to deliver on ours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── REBUILD ── */}
        <section className="py-20 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Phase 3 · February 2026</div>
              <h2 className="text-3xl md:text-4xl font-light">
                From 4 pages to 40+.<br />
                <span className="text-blue-400 italic">All or nothing.</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <p className="text-gray-400 leading-relaxed mb-5">February 2026. The client's condition was direct:</p>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-5 mb-5">
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    "We'll do this. But you have to guarantee we rank better than current levels by March 2026. If we lose rankings, we lose business."
                  </p>
                  <p className="text-gray-500 text-xs mt-2">— Arrow Cabs</p>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  We gave our word. Migration dips are real — even with perfect execution, Google often temporarily drops rankings when site structure changes dramatically. But we believed in the quality of the new build. Several days of meetings, multiple calls, then approval.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="space-y-2">
                  {[
                    "40+ pages with unique, keyword-optimized content",
                    "Service pages: Airport Taxi, Outstation, Wedding Cars, Corporate Travel, Tempo Traveller",
                    "Location pages: Trivandrum Airport, Kovalam, Technopark + more",
                    "Blog section preserved and expanded",
                    "301 redirects from all old URLs — no ranking signals lost",
                    "Enhanced schema markup across all new pages",
                    "PageSpeed Insights: 95+ score maintained",
                    "Improved internal linking architecture",
                    "XML sitemap resubmitted to Google Search Console",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MIGRATION DIP ── */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-orange-400 mb-3">Implementation Challenge · February 2026</div>
              <h2 className="text-3xl md:text-4xl font-light">
                Impressions dropped 50%.<br />
                <span className="text-orange-400 italic">The client called.</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="bg-orange-500/8 border border-orange-500/20 rounded-2xl p-6 mb-5">
                  <div className="text-sm font-semibold text-orange-300 mb-3">The Dip — February 2026</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Impressions collapsed from 2,000–3,000 per week to 1,000 per week. Rankings fluctuated across the board. Google was re-indexing 40+ new pages and re-evaluating the entire domain structure.
                  </p>
                  <p className="text-gray-300 text-sm italic">"You said this would work. We're losing impressions, losing rankings. Should we roll back?"</p>
                </div>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
                  <div className="text-sm font-semibold text-gray-200 mb-3">Our response</div>
                  <p className="text-gray-300 text-sm italic mb-3">
                    "This is a migration dip — exactly what we warned about. Google is re-indexing the new structure. Give us 3–4 weeks. Rankings will not just recover — they'll exceed where we were."
                  </p>
                  <p className="text-gray-400 text-sm">The client trusted us. Barely. But they did.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="bg-green-500/8 border border-green-500/20 rounded-2xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-semibold text-green-300 mb-4">March 2026: The Breakthrough</div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      By mid-March 2026 the data shifted dramatically. Page 1 rankings across multiple keywords. Highest traffic in the site's history.
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: "Avg. position", before: "14.9 (page 2)", after: "8.1 (page 1)" },
                        { label: "Weekly impressions", before: "~500 (pre-rebuild)", after: "3.5K–3.7K (current)" },
                        { label: "Daily clicks", before: "~5", after: "~9.5" },
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
                  <div className="mt-5 bg-white/4 rounded-xl p-3">
                    <p className="text-sm text-gray-300 italic">"I was wrong to doubt you. Do whatever you think is best — I trust you completely."</p>
                    <p className="text-gray-500 text-xs mt-1">— Arrow Cabs, March 2026</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WAR ── */}
        <section className="py-20 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-[#1a0a0a] border border-red-900/30 rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle size={22} className="text-red-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-red-400 mb-3">External Factor · 2025–2026</div>
                  <h3 className="text-xl md:text-2xl font-light text-white mb-4">The ongoing conflict hit harder than any algorithm update.</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    A significant share of Arrow Cabs' customers are <strong className="text-white">NRIs returning to Kerala</strong> — people living abroad who travel back for family visits, property management, or events. Airport pickups, outstation trips, and long-distance travel for this group represent high-value bookings.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    When the ongoing conflict escalated, NRI flights to Kerala dropped sharply. Bookings fell — not because the SEO was failing or the GMB was underperforming, but because the demand itself had contracted. Customers who would have searched "taxi service Trivandrum airport" simply weren't arriving.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    No SEO strategy can manufacture demand that isn't there. We maintained our work, continued optimizations, held our rankings, and waited alongside the client. The situation is beginning to settle — NRI flights to Kerala are recovering, and with them, the bookings that make up a meaningful part of Arrow Cabs' business.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── GSC RESULTS ── */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Search Performance</div>
              <h2 className="text-3xl md:text-4xl font-light">
                16 months of organic growth —<br />
                <span className="text-blue-400 italic">and where we stand today</span>
              </h2>
            </motion.div>

            {/* 16-month totals */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              {[
                { number: "2,670", label: "Total Clicks",            sub: "16 months cumulative" },
                { number: "172K",  label: "Total Impressions",       sub: "16 months cumulative" },
                { number: "12.8",  label: "16-Month Avg. Position",  sub: "Blended across all phases" },
                { number: "₹0",    label: "Ad Spend",                sub: "100% organic — zero Google Ads" },
              ].map(({ number, label, sub }) => (
                <motion.div key={label} variants={fadeUp} className="bg-[#0a1628] border border-white/8 rounded-2xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{number}</div>
                  <div className="text-sm font-semibold text-white mb-1">{label}</div>
                  <div className="text-xs text-gray-500">{sub}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* 16-month graph placeholder */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-10">
              <ImgSlot
                label="Google Search Console — 16-Month Performance Graph"
                hint="Full chart March 2025 – April 2026 showing clicks, impressions, rebuild dip + recovery"
                src="/arrow cabs 16 months metrics - April 2026.webp"
                onImageClick={setSelectedImg}
              />
            </motion.div>

            {/* Last 28 days summary cards */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-6">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-5">Last 28 Days · April 2026</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { number: "267",   label: "Clicks",        icon: MousePointer },
                  { number: "14.2K", label: "Impressions",   icon: Eye },
                  { number: "1.9%",  label: "Avg. CTR",      icon: BarChart3 },
                  { number: "8.1",   label: "Avg. Position", icon: TrendingUp },
                ].map(({ number, label, icon: Icon }) => (
                  <div key={label} className="bg-white/4 border border-white/8 rounded-2xl p-5 flex items-center gap-4">
                    <Icon size={18} className="text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xl font-bold text-white">{number}</div>
                      <div className="text-xs text-gray-400">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Weekly breakdown table */}
              <div className="bg-[#0a1628]/60 border border-white/8 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-5 px-5 py-3 border-b border-white/5 text-[10px] uppercase tracking-widest text-gray-500">
                  <div>Week</div>
                  <div className="text-right">Clicks</div>
                  <div className="text-right">Impressions</div>
                  <div className="text-right">CTR</div>
                  <div className="text-right">Avg. Pos</div>
                </div>
                {gscWeekly.map(({ week, clicks, impressions, ctr, pos }) => (
                  <div key={week} className="grid grid-cols-5 px-5 py-3 border-b border-white/5 last:border-0">
                    <div className="text-xs text-gray-400">{week}</div>
                    <div className="text-xs font-semibold text-white text-right">{clicks}</div>
                    <div className="text-xs text-gray-300 text-right">{impressions}</div>
                    <div className="text-xs text-gray-300 text-right">{ctr}</div>
                    <div className="text-xs text-blue-300 font-medium text-right">{pos}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Last 28 days screenshot placeholder */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-8">
              <ImgSlot
                label="Google Search Console — Last 28 Days Screenshot"
                hint="267 clicks · 14.2K impressions · 1.9% CTR · avg position 8.1"
                src="/arrow cabs 28 days metrics - April 2026.webp"
                onImageClick={setSelectedImg}
              />
            </motion.div>

            {/* Callout */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-7"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">14.9 → 8.1</div>
                  <div className="text-sm text-gray-400">Avg. position — page 2 to page 1 over 16 months</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">~5 → ~9.5</div>
                  <div className="text-sm text-gray-400">Daily clicks before rebuild vs. current average</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">₹0 ads</div>
                  <div className="text-sm text-gray-400">All growth earned organically — no paid campaigns, ever</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── GMB DATA ── */}
        <section className="py-20 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Google My Business · 3 Locations</div>
              <h2 className="text-3xl md:text-4xl font-light">
                GMB as a separate<br />
                <span className="text-blue-400 italic">traffic and customer channel</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mt-4 text-sm leading-relaxed">
                Arrow Cabs runs three GMB listings across Trivandrum — Killippalam, Poojappura, and Vattappara. Each generates its own stream of calls, direction requests, and bookings, entirely separate from the website's organic search traffic. Combined, these listings generate <strong className="text-white">200+ calls per month</strong>.
              </p>
            </motion.div>

            {/* 3-location tables */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {gmbData.map(({ location, color, weeks }) => {
                const c = colorMap[color];
                return (
                  <motion.div
                    key={location}
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                    className="bg-[#0a1628]/60 border border-white/8 rounded-2xl overflow-hidden"
                  >
                    <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${c.badge}`}>{location}</span>
                      <span className="text-xs text-gray-500">Views · Searches</span>
                    </div>

                    <div className="divide-y divide-white/5">
                      {weeks.map(({ week, views, searches }) => (
                        <div key={week} className="px-5 py-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">{week}</span>
                            <span className="text-sm font-semibold text-white">{views} · {searches}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="px-5 py-4 border-t border-white/10 bg-white/3">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Total views</span>
                        <span className="font-semibold text-white">{weeks.reduce((s, w) => s + w.views, 0)}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Total searches</span>
                        <span className="font-semibold text-white">{weeks.reduce((s, w) => s + w.searches, 0)}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Killippalam April image placeholders */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-8">
              <div className="text-xs uppercase tracking-widest text-blue-400 mb-4">Killippalam · April 1–22, 2026</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ImgSlot 
                  label="Killippalam — Calls Made" 
                  hint="April 1–22, 2026" 
                  src="/April 2026 GMB Calls.webp"
                  onImageClick={setSelectedImg}
                />
                <ImgSlot 
                  label="Killippalam — Profile Views" 
                  hint="April 1–22, 2026" 
                  src="/April 2026 GMB Views.webp"
                  onImageClick={setSelectedImg}
                />
              </div>
            </motion.div>

            {/* Combined totals */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6"
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">739</div>
                  <div className="text-sm text-gray-400">Combined views (4 weeks · 3 locations)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">369</div>
                  <div className="text-sm text-gray-400">Combined searches — intent-driven visibility</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">200+ calls</div>
                  <div className="text-sm text-gray-400">Monthly across 3 listings — separate from website traffic</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── REDIRECT MILESTONE ── */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-gradient-to-r from-green-500/8 to-transparent border border-green-500/20 rounded-2xl p-8 md:p-10"
            >
              <div className="text-xs uppercase tracking-widest text-green-400 mb-4">Trust Milestone · April 2026</div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-4">
                arrow-cabs.com now redirects to arrowcabs.co.in
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                This was the final signal that the relationship had fully transformed. The old domain — the one attached to a failed agency, page 10 rankings, and years of invisible effort — now redirects cleanly to the new site. Not because we asked for it. Because the client chose to do it.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When a client consolidates their digital identity around work you've built for them, it means they don't just trust the results — they trust the foundation. That's a different kind of milestone than any ranking number.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm flex-wrap">
                <span className="bg-red-500/15 border border-red-500/20 text-red-400 px-3 py-1.5 rounded-full line-through">arrow-cabs.com</span>
                <ArrowRight size={16} className="text-green-400" />
                <span className="bg-green-500/15 border border-green-500/20 text-green-400 px-3 py-1.5 rounded-full">arrowcabs.co.in</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="py-20 px-4 md:px-8 bg-white/[0.02]">
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
                  "After our previous agency relationship ended badly and we were stuck on page 10, we were skeptical about hiring another SEO team. Urbanzi was different from day one — they didn't promise overnight results, they explained the challenge honestly and showed us a realistic timeline. Now we're on page 1 for keywords we never thought we could rank for. The phone calls from Google Business Profile have transformed our business. They're not just our SEO agency — they're our growth partners."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">A</div>
                  <div>
                    <div className="font-semibold text-white">Arrow Cabs Management Team</div>
                    <div className="text-sm text-gray-400">Trivandrum, Kerala</div>
                    <div className="text-xs text-gray-500 mt-0.5">Car Rental & Transportation · Est. 2005</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── LESSONS ── */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12">
              <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-3">Lessons</div>
              <h2 className="text-3xl md:text-4xl font-light">
                What this project proved —<br />
                <span className="text-blue-400 italic">about SEO and trust</span>
              </h2>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              {[
                { icon: Clock,      title: "20 years in business means nothing online — until you act",  desc: "Arrow Cabs had two decades of reputation and a loyal customer base. Google didn't know they existed. Domain authority is earned through digital signals, not real-world history." },
                { icon: RefreshCw,  title: "Previous failures don't define future results",               desc: "A bad agency experience left them skeptical and hesitant. The right partner changes that. Transparency about timelines, risks, and process rebuilds trust faster than any promised result." },
                { icon: Compass,    title: "Pivoting when blocked is strategy, not failure",              desc: 'When the client said no to a site rebuild, we pivoted to blogs. "Hidden Places in Trivandrum" ranked #1. Authority was built. When the rebuild finally happened, the domain was stronger for it.' },
                { icon: TrendingUp, title: "Migration dips are temporary — reverting is not",             desc: "Impressions dropped 50% during the rebuild. The client panicked. We held the line. Within 4 weeks, performance exceeded every previous benchmark. Trust the process." },
                { icon: Globe,      title: "External factors are real — strategy is how you respond",     desc: "The NRI travel disruption was outside anyone's control. We maintained positions, held quality, and positioned the site to capture demand as it recovers. SEO is a long game." },
                { icon: Award,      title: "₹0 in ads is proof of concept, not a limitation",            desc: "Every ranking, every click, every customer call came from organic search and optimized GMB profiles. No paid shortcuts. That's sustainable growth with compounding returns." },
              ].map(({ icon: LessonIcon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="bg-[#0a1628]/60 border border-white/8 rounded-2xl p-6">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <LessonIcon size={16} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 md:px-8 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              className="relative bg-gradient-to-br from-[#0d1f3c] to-[#0a1628] border border-blue-500/20 rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
              <div className="relative z-10">
                <div className="text-[10px] uppercase tracking-widest text-blue-400 mb-4">Ready to rank?</div>
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                  Stuck on page 2 — or page 10?<br />
                  <span className="text-blue-400 italic">We know the way to page 1.</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
                  Whether you're launching fresh or have a website that's plateaued, we build <Link href="/services/seo" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 decoration-blue-400/40 transition-colors">SEO strategies</Link> around your actual competitive landscape — not templates. No paid ads required.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition text-sm">
                    Let's talk <ArrowRight size={16} />
                  </Link>
                  <Link href="/portfolio/case-studies" className="inline-flex items-center gap-2 border border-white/20 text-gray-300 px-7 py-3.5 rounded-full hover:bg-white/5 transition text-sm">
                    View more case studies
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "SEO for new domains", href: "/services/seo", icon: Search, color: "blue" },
                    { label: "Website development", href: "/services/web-development", icon: Globe, color: "purple" },
                    { label: "Google My Business", href: "/services/seo", icon: MapPin, color: "green" },
                    { label: "Digital marketing", href: "/services/digital-marketing", icon: TrendingUp, color: "orange" },
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
