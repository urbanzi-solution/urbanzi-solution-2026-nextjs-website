"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Can you update my old website?",
      a: "Yes! We can redesign and modernize your existing website with fresh design, better functionality, and improved performance to meet current standards.",
    },
    {
      q: "I don't know anything about websites. Can you guide me?",
      a: "Definitely! We love helping beginners and we manage all the technical stuff so you can focus on your business.",
    },
    {
      q: "Will my website work on mobile phones and tablets?",
      a: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops to ensure a great user experience across all platforms.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Typically 2–6 weeks depending on the complexity and features required. We'll provide a detailed timeline during our initial consultation based on your specific needs.",
    },
    {
      q: "Is there ongoing support that you provide?",
      a: "Yes! We provide ongoing support including regular updates, security monitoring, backups, and technical assistance to keep your website running smoothly.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-black text-white py-20 md:py-32 px-4 md:px-[75px] -mt-28">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">

        {/* Left title */}
        <div className="md:col-span-5 text-center md:text-left">
          <h2 className="text-[36px] sm:text-[44px] md:text-[64px] leading-tight font-light">
            Frequently
            <br />
            Asked
            <br />
            Questions
            <br />
            <span className="italic text-blue-300">(FAQ)</span>
          </h2>

          <p className="text-white/60 mt-4 md:mt-6 max-w-sm mx-auto md:mx-0 text-sm md:text-base">
           Everything you need to know about our web development services.
          </p>
        </div>

        {/* Right dropdowns */}
        <div className="md:col-span-7 space-y-4 md:space-y-5">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="rounded-2xl
                bg-gradient-to-b from-[#1c1f26] to-[#12141a]
                border border-white/5
                shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 md:gap-6 p-5 md:p-8 text-left"
                >
                  <span className="text-[18px] md:text-[26px] font-light leading-snug">
                    {item.q}
                  </span>

                  <span className="text-2xl md:text-3xl leading-none text-white/70">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-8 pb-5 md:pb-8 text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                      {item.a}
                    </p>
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
