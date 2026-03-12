"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does custom software development cost in Kerala?",
    a: "The cost depends on features, integrations, complexity, and scale. Simple internal tools cost less, while enterprise and SaaS platforms require larger investment. Urbanzi provides transparent estimates after requirement analysis.",
  },
  {
    q: "How long does software development take?",
    a: " Small business software can take 4–6 weeks. Large enterprise or SaaS systems may take 2–4 months or more, depending on scope.",
  },
  {
    q: "Do you provide long-term support?",
    a: " Yes. We offer ongoing maintenance, performance optimization, security updates, and feature upgrades",
  },
];

export default function SoftFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-14">
          Frequently Asked{" "}
          <span className="text-blue-400 italic">Questions</span>
        </h2>

        {/* FAQ list */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-white/15 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-white/70 text-sm leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
