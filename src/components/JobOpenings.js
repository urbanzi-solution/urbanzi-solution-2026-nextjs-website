"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  BriefcaseIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChevronDownIcon,
  SparklesIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const ease = [0.22, 1, 0.36, 1];

const jobs = [
  {
    id: 1,
    title: "Sales Executive",
    department: "Sales & Business Development",
    location: "Thiruvananthapuram, Kerala",
    type: "Full Time",
    experience: "6 Months – 1 Year",
    vacancies: 2,
    filled: false,
    Icon: BriefcaseIcon,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    intro:
      "We are looking for a passionate and energetic Sales Executive to join our growing team. If you enjoy talking to people, building relationships, and closing deals — this is an excellent opportunity to grow your career while working with clients across multiple industries.",
    requirements: [
      "6 Months – 1 Year of Sales Experience",
      "Excellent English Communication (Mandatory)",
      "Malayalam, Tamil & Hindi are an added advantage",
      "Confident in phone calls, meetings & presentations",
      "Self-motivated and target-oriented",
      "Willing to learn and grow",
    ],
    perks: [
      "Performance-based incentives",
      "Career growth opportunities",
      "Friendly & collaborative work culture",
      "Exposure to diverse industries and clients",
    ],
    email: "hr@urbanzi.in",
    whatsapp: "917012050812",
    whatsappDisplay: "+91 70120 50812",
  },
  {
    id: 2,
    title: "Digital Marketing Executive",
    department: "Marketing & Growth",
    location: "Thiruvananthapuram, Kerala",
    type: "Full Time",
    experience: "Fresher – 1 Year",
    vacancies: 0,
    filled: true,
    Icon: MegaphoneIcon,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    intro:
      "We were looking for a creative and driven Digital Marketing Executive to help grow our clients' online presence. This position has now been filled.",
    requirements: [
      "Basic knowledge of SEO, Google Ads & Meta Ads",
      "Familiarity with social media platforms & content strategy",
      "Good English communication & copywriting skills",
      "Creative thinking and a keen eye for trends",
      "Basic knowledge of Canva or similar design tools",
      "Self-driven, eager to learn, and open to feedback",
    ],
    perks: [
      "Hands-on experience with real client campaigns",
      "Performance-based incentives",
      "Learn from industry experts in a collaborative team",
      "Exposure to SEO, paid ads, and content marketing",
    ],
    email: "hr@urbanzi.in",
    whatsapp: "917012050812",
    whatsappDisplay: "+91 70120 50812",
  },
  {
    id: 3,
    title: "UI/UX & Graphic Designer",
    department: "Design & Creative",
    location: "Thiruvananthapuram, Kerala",
    type: "Full Time",
    experience: "Fresher – 1 Year",
    vacancies: 0,
    filled: true,
    Icon: PaintBrushIcon,
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
    intro:
      "We were hiring a talented UI/UX & Graphic Designer to craft stunning visuals and digital experiences. This position has now been filled.",
    requirements: [
      "Proficiency in Figma, Adobe Photoshop, or Illustrator (Mandatory)",
      "Portfolio demonstrating design work (Mandatory)",
      "Strong creative eye and attention to detail",
      "Understanding of UI/UX design principles",
      "Video editing skills (After Effects / Premiere Pro) are a plus",
      "Ability to handle multiple projects and meet deadlines",
    ],
    perks: [
      "Work on diverse creative projects across industries",
      "Performance-based incentives",
      "Build a strong professional portfolio",
      "Collaborative and creative-first work culture",
    ],
    email: "hr@urbanzi.in",
    whatsapp: "917012050812",
    whatsappDisplay: "+91 70120 50812",
  },
];

const openJobs = jobs.filter((j) => !j.filled);
const totalOpenSlots = openJobs.reduce((sum, j) => sum + j.vacancies, 0);

export default function JobOpenings() {
  const [expanded, setExpanded] = useState(1);

  function toggle(id, isFilled) {
    if (isFilled) return;
    setExpanded((prev) => (prev === id ? null : id));
  }

  return (
    <section
      id="openings"
      className="bg-[#050816] text-white px-4 md:px-12 py-16 md:py-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5"
          >
            Open Positions
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-light"
            >
              Current{" "}
              <span className="text-blue-300 italic">Openings</span>
            </motion.h2>

            {/* Live slot counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 px-4 py-2.5 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-green-300 text-sm font-semibold">
                  {totalOpenSlots} slot{totalOpenSlots !== 1 ? "s" : ""} open
                </span>
              </div>
              <div className="text-gray-600 text-sm">
                {jobs.length} roles listed
              </div>
            </motion.div>
          </div>

          {/* Slot breakdown bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border ${
                  job.filled
                    ? "border-white/6 text-gray-600 bg-white/2"
                    : "border-green-500/25 text-green-400 bg-green-500/8"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    job.filled ? "bg-gray-600" : "bg-green-400 animate-pulse"
                  }`}
                />
                {job.title}
                {job.filled ? (
                  <span className="text-gray-600">· Filled</span>
                ) : (
                  <span className="text-green-500 font-semibold">
                    · {job.vacancies} open
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {jobs.map((job, i) => {
            const Icon = job.Icon;
            const isOpen = expanded === job.id && !job.filled;

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease }}
                className={`border rounded-3xl overflow-hidden transition-colors duration-300 ${
                  job.filled
                    ? "border-white/6 opacity-55"
                    : isOpen
                    ? "border-blue-500/30"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Summary Row */}
                <button
                  onClick={() => toggle(job.id, job.filled)}
                  disabled={job.filled}
                  className={`w-full text-left px-6 md:px-10 py-7 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-5 ${
                    job.filled
                      ? "bg-[#080d18] cursor-default"
                      : "bg-gradient-to-r from-[#0a1220] to-[#050816]"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className={`rounded-xl flex items-center justify-center flex-shrink-0 p-3 ${
                        job.filled ? "bg-white/5" : job.iconBg
                      }`}
                    >
                      {job.filled ? (
                        <LockClosedIcon className="w-6 h-6 text-gray-600" />
                      ) : (
                        <Icon className={`w-6 h-6 ${job.iconColor}`} />
                      )}
                    </div>

                    <div>
                      {/* Title + badges */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-1">
                        <h3
                          className={`text-xl md:text-2xl font-semibold ${
                            job.filled ? "text-gray-500" : "text-white"
                          }`}
                        >
                          {job.title}
                        </h3>

                        {job.filled ? (
                          <span className="bg-white/6 text-gray-500 text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide border border-white/8">
                            Position Filled
                          </span>
                        ) : (
                          <>
                            <span className="bg-green-600/80 text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                              Hiring
                            </span>
                            <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 text-[11px] font-semibold px-3 py-1 rounded-full">
                              {job.vacancies} Vacanc{job.vacancies === 1 ? "y" : "ies"}
                            </span>
                          </>
                        )}
                      </div>

                      <p
                        className={`text-sm mb-4 ${
                          job.filled ? "text-gray-600" : job.iconColor
                        }`}
                      >
                        {job.department}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <span
                          className={`flex items-center gap-1.5 text-sm ${
                            job.filled ? "text-gray-600" : "text-gray-400"
                          }`}
                        >
                          <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                          {job.location}
                        </span>
                        <span
                          className={`flex items-center gap-1.5 text-sm ${
                            job.filled ? "text-gray-600" : "text-gray-400"
                          }`}
                        >
                          <ClockIcon className="w-4 h-4 flex-shrink-0" />
                          {job.type}
                        </span>
                        <span
                          className={`flex items-center gap-1.5 text-sm ${
                            job.filled ? "text-gray-600" : "text-gray-400"
                          }`}
                        >
                          <SparklesIcon className="w-4 h-4 flex-shrink-0" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expand / filled indicator */}
                  {job.filled ? (
                    <div className="text-gray-600 text-xs font-medium self-start md:self-center flex-shrink-0">
                      No vacancies
                    </div>
                  ) : (
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 self-start md:self-center ${
                        isOpen
                          ? "rotate-180 border-blue-500/40 bg-blue-500/10"
                          : "border-white/10"
                      }`}
                    >
                      <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </button>

                {/* Expanded Content — only for open roles */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/8 bg-black/50">

                        {/* Intro */}
                        <div className="px-6 md:px-10 pt-8 pb-4">
                          <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
                            {job.intro}
                          </p>
                        </div>

                        {/* Two-column details */}
                        <div className="px-6 md:px-10 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">

                          {/* Requirements */}
                          <div>
                            <h4 className="text-white font-semibold text-base mb-6 flex items-center gap-2.5">
                              <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                              What We&apos;re Looking For
                            </h4>
                            <ul className="space-y-3.5">
                              {job.requirements.map((req, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-[7px] flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Perks + Apply */}
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-white font-semibold text-base mb-6 flex items-center gap-2.5">
                                <StarIcon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                                What You&apos;ll Get
                              </h4>
                              <ul className="space-y-3.5">
                                {job.perks.map((perk, j) => (
                                  <li
                                    key={j}
                                    className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                                  >
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-[7px] flex-shrink-0" />
                                    {perk}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Apply card */}
                            <div className="bg-gradient-to-br from-blue-950/50 to-[#02060f] border border-blue-500/20 rounded-2xl p-6">
                              <h4 className="text-white font-semibold text-lg mb-1.5">
                                Ready to Apply?
                              </h4>
                              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                                Send your resume + a short introduction via email or WhatsApp.
                              </p>

                              <div className="space-y-3 mb-6">
                                <a
                                  href={`mailto:${job.email}`}
                                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors flex-shrink-0">
                                    <EnvelopeIcon className="w-4 h-4 text-blue-400" />
                                  </div>
                                  <span className="text-sm">{job.email}</span>
                                </a>
                                <a
                                  href={`https://wa.me/${job.whatsapp}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 flex items-center justify-center transition-colors flex-shrink-0">
                                    <PhoneIcon className="w-4 h-4 text-green-400" />
                                  </div>
                                  <span className="text-sm">
                                    WhatsApp: {job.whatsappDisplay}
                                  </span>
                                </a>
                              </div>

                              <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                  href={`mailto:${job.email}?subject=Application%20for%20${encodeURIComponent(job.title)}%20Position`}
                                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-all duration-300"
                                >
                                  Apply via Email
                                </a>
                                <a
                                  href={`https://wa.me/${job.whatsapp}?text=Hi%20Urbanzi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(job.title)}%20position.%20Please%20find%20my%20resume%20attached.`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-all duration-300"
                                >
                                  Apply on WhatsApp
                                </a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* General application CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 border border-white/8 rounded-3xl p-10 md:p-14 text-center bg-gradient-to-br from-[#0a1220] to-transparent"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">
            Don&apos;t see a matching role?
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Send us your resume anyway.
          </h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            We&apos;re always on the lookout for talented people. Drop your profile
            to{" "}
            <a
              href="mailto:hr@urbanzi.in"
              className="text-blue-400 hover:underline"
            >
              hr@urbanzi.in
            </a>{" "}
            and we&apos;ll reach out when the right opportunity arises.
          </p>
          <a
            href="mailto:hr@urbanzi.in?subject=General%20Application%20%E2%80%93%20Urbanzi%20Solutions"
            className="inline-block bg-white text-black hover:bg-gray-100 px-8 py-3.5 rounded-full font-semibold text-sm transition-colors duration-300"
          >
            Drop Your Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}
