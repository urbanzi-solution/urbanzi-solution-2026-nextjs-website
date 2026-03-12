"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does digital marketing cost in Kerala?",
    answer:
      "Costs depend on channels, ad spend, competition, and goals. Urbanzi offers flexible digital marketing packages based on your business growth stage and ROI targets.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Paid ads can generate leads within weeks. SEO and content marketing typically take 3–6 months to build sustainable long-term growth.",
  },
  {
    question: "Do you provide monthly reporting?",
    answer:
      "Yes. You receive clear monthly reports covering traffic, leads, conversions, campaign performance, and ROI insights.",
  },
];

export default function DigitalMarketingFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 md:py-32 px-4 md:px-[75px]">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-light mb-10 md:mb-16 text-center">
          Frequently Asked <span className="text-blue-300 italic">Questions</span>
        </h2>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left"
              >
                <h3 className="text-base md:text-xl font-medium pr-4">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-5 md:px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 pb-5 md:pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
