"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does graphic designing and animation cost in Kerala?",
    a: "Pricing depends on the scope, complexity, and volume of creatives or animations. Simple design packages cost less, while brand identity systems and animations require higher investment. Urbanzi provides clear, project-based or monthly pricing.",
  },
  {
    q: "Do you offer monthly design support?",
    a: "Yes. We offer monthly creative retainers for brands that need ongoing social media creatives, ad designs, and video edits.",
  },
  {
    q: "Can you design for ads and performance marketing?",
    a: "Absolutely. Our creatives are designed specifically to improve CTR, engagement, and conversion rates for paid campaigns.",
  },
  {
    q: "Do you create content for Instagram Reels and YouTube Shorts?",
    a: "Yes. We design and edit short-form video content optimized for Reels, Shorts, and Stories — tailored to your brand tone and platform best practices.",
  },
  {
    q: "Can you redesign our existing logo or brand identity?",
    a: "Absolutely. We regularly help businesses in Kerala refresh outdated logos and build complete brand identity systems that feel modern and trustworthy.",
  },
  {
    q: "What file formats do you deliver?",
    a: "We deliver all final assets in the formats you need — PNG, JPEG, SVG, PDF for print, MP4 for video, and editable source files on request.",
  },
];

export default function GraphicsFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-white py-10 pb-20 lg:pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10 md:mb-14 leading-tight">
          Frequently Asked{" "}
          <span className="text-blue-400 italic">Questions</span>
        </h2>

        {/* FAQ list */}
        <div className="space-y-4 md:space-y-6">
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
                  className="w-full flex items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 py-4 md:py-5 text-left"
                >
                  <span className="text-base sm:text-lg font-medium leading-snug">
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
                  <div className="overflow-hidden px-4 sm:px-6 pb-4 md:pb-5 text-white/70 text-sm leading-relaxed">
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
