"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "How much does mobile app development cost in Kerala?",
    a: "App development cost depends on features, platforms (Android/iOS), design complexity, and integrations. Simple apps cost less, while custom platforms cost more. Urbanzi provides a clear cost breakdown after understanding your requirements.",
  },
  {
    q: "How long does it take to develop a mobile app?",
    a: "Basic apps take 4–8 weeks. Complex apps may take 2–4 months depending on features and integrations.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We provide long-term maintenance, updates, bug fixes, and performance optimization.",
  },
];

export default function MobileAppFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black pb-30 md:pt-10 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-light text-center mb-14">
          Frequently Asked{" "}
          <span className="text-sky-400 italic font-normal">Questions</span>
        </h2>

        {/* FAQ list */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-700/60 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 md:px-8 py-5 text-left text-base md:text-lg"
                >
                  <span>{item.q}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-6 text-sm md:text-base text-white/70 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
