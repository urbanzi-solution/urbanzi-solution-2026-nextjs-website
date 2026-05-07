"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ALL_SERVICES = {
  "web-development": {
    label: "Web Development",
    desc: "Fast, SEO-friendly websites and web apps built to convert visitors into customers.",
    href: "/services/web-development",
  },
  "seo": {
    label: "SEO Services",
    desc: "Rank higher on Google and drive consistent organic traffic from Kerala and beyond.",
    href: "/services/seo",
  },
  "digital-marketing": {
    label: "Digital Marketing",
    desc: "Meta Ads, Google Ads, and social campaigns that generate quality leads every day.",
    href: "/services/digital-marketing",
  },
  "software-development": {
    label: "Software Development",
    desc: "Custom software, CRM systems, and digital tools built around your exact workflow.",
    href: "/services/software-development",
  },
  "app-development": {
    label: "App Development",
    desc: "iOS and Android apps that put your business directly on your customers' phones.",
    href: "/services/app-development",
  },
  "graphic-design-animation": {
    label: "Graphic Design & Animation",
    desc: "Brand identities, motion graphics, and visual content that make you unforgettable.",
    href: "/services/graphic-design-animation",
  },
  "cybersecurity": {
    label: "Cybersecurity",
    desc: "VAPT, network security, compliance audits, and incident response to protect your business from cyber threats.",
    href: "/services/cybersecurity",
  },
};

const RELATED_MAP = {
  "web-development":          ["seo", "digital-marketing", "app-development"],
  "seo":                      ["web-development", "digital-marketing", "software-development"],
  "digital-marketing":        ["seo", "web-development", "graphic-design-animation"],
  "software-development":     ["web-development", "app-development", "cybersecurity"],
  "app-development":          ["software-development", "digital-marketing", "cybersecurity"],
  "graphic-design-animation": ["web-development", "digital-marketing", "app-development"],
  "cybersecurity":            ["software-development", "web-development", "app-development"],
};

const ease = [0.22, 1, 0.36, 1];

export default function RelatedServices({ current }) {
  const keys = RELATED_MAP[current] ?? [];
  const services = keys.map((k) => ALL_SERVICES[k]).filter(Boolean);

  if (!services.length) return null;

  return (
    <section className="bg-black py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease }}
          className="mb-10"
        >
          <span className="text-[10px] md:text-xs tracking-widest px-3 md:px-4 py-2 bg-neutral-800 rounded-full text-neutral-300">
            EXPLORE MORE SERVICES
          </span>
          <h2 className="text-2xl md:text-3xl font-light mt-6 leading-snug">
            Services that work <span className="text-blue-400 italic">better together</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <Link
                href={s.href}
                className="group flex flex-col justify-between h-full bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-neutral-900 transition-all duration-300"
              >
                <div>
                  <h3 className="text-base font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 group-hover:text-blue-400 transition-colors mt-5">
                  Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
