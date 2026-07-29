"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, BriefcaseIcon, ArrowRightIcon, FireIcon } from "@heroicons/react/24/outline";

const STORAGE_KEY = "urbanzi_hiring_popup_dismissed";
const DISMISS_DAYS = 7;

export default function HiringPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/careers") return;

    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const daysPassed = (Date.now() - parseInt(dismissed, 10)) / (1000 * 60 * 60 * 24);
      if (daysPassed < DISMISS_DAYS) return;
    }

    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, [pathname]);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.94 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-[340px] z-[200]"
          role="dialog"
          aria-label="We're Hiring"
        >
          <div className="relative bg-[#0b1220] border border-white/12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.75)] overflow-hidden">

            {/* Top gradient bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-blue-400 to-green-400" />

            {/* Dismiss */}
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors duration-200"
            >
              <XMarkIcon className="w-4 h-4 text-gray-400" />
            </button>

            <div className="p-5">

              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                  <BriefcaseIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="pr-6">
                  <p className="text-white font-semibold text-sm leading-tight">
                    We&apos;re Hiring — Join Our Team!
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Urbanzi Solutions · Trivandrum, Kerala
                  </p>
                </div>
              </div>

              {/* Open role card */}
              <div className="bg-gradient-to-br from-[#0d1e38] to-[#07101f] border border-blue-500/20 rounded-xl p-4 mb-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">
                      Sales Executive
                    </p>
                    <p className="text-gray-500 text-xs">
                      Sales & Business Development · Full Time
                    </p>
                  </div>
                  {/* Urgency badge */}
                  <div className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/25 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 uppercase tracking-wide">
                    <FireIcon className="w-3 h-3" />
                    2 left
                  </div>
                </div>

                {/* Vacancy slots visual */}
                <div className="mt-3 pt-3 border-t border-white/6">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-gray-500 text-[11px]">Vacancies</span>
                    <span className="text-green-400 text-[11px] font-semibold">2 of 2 open</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="flex-1 h-1.5 rounded-full bg-green-500/70" />
                    <div className="flex-1 h-1.5 rounded-full bg-green-500/70" />
                  </div>
                </div>
              </div>

              {/* Filled roles notice */}
              <p className="text-gray-600 text-[11px] text-center mb-4">
                2 other positions filled · Only Sales role accepting applications
              </p>

              {/* CTA */}
              <Link
                href="/careers"
                onClick={dismiss}
                className="flex items-center justify-between w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group"
              >
                <span>Apply Now — 2 Slots Left</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
