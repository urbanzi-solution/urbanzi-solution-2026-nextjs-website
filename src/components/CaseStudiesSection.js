"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Digital Marketing Pro",
    subtitle: "Leading marketing agency",
    work: "Branding / Marketing",
    image: "/market.webp",
    stats: [
      { value: "3000+", label: "Campaigns Delivered" },
      { value: "75%", label: "Conversion Rate" },
      { value: "95+", label: "Client Satisfaction" },
    ],
  },
  {
    title: "Arrow Cabs",
    subtitle: "Best car rental in Trivandrum",
    work: "Website / SEO",
    image: "/car.webp",
    stats: [
      { value: "5000+", label: "Leads Delivered" },
      { value: "50%", label: "Organic Traffic Increase" },
      { value: "90+", label: "SEO Score" },
    ],
  },
];

export default function CaseStudiesSection() {
  const [index, setIndex] = useState(0);
  const data = cases[index];

  const next = () => setIndex((p) => (p + 1) % cases.length);
  const prev = () =>
    setIndex((p) => (p - 1 + cases.length) % cases.length);

  return (
    <section className="bg-black pt-30 md:pt-30 lg:pt-20 px-4 md:px-6 -mt-20">
      <div className="max-w-6xl mx-auto rounded-[28px] p-6 md:p-10
        bg-gradient-to-br from-[#030303] via-[#000000] to-[#020202]
        text-white shadow-[0_15px_40px_rgba(0,0,0,0.35)]">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-light leading-tight">
           Real Results for
            <br />
            <span className="italic text-white/70">
               Real Businesses
            </span>
          </h2>

          {/* Navigation */}
          <div className="flex gap-2 md:gap-3">
            <button
              onClick={prev}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="h-px bg-white/15 mb-8 md:mb-10" />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_0.9fr] gap-6 items-stretch">

          {/* IMAGE CARD */}
          <div
            className="rounded-2xl overflow-hidden relative min-h-[240px] md:min-h-[340px] bg-cover bg-center"
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative p-5 md:p-6 flex flex-col justify-end h-full">
              <h3 className="text-lg md:text-xl font-semibold">
                {data.title}
              </h3>
              <p className="text-white/80 text-xs md:text-sm">
                {data.subtitle}
              </p>
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md border border-white/10 flex flex-col justify-between">

            <div>
              <p className="text-white/70 text-xs md:text-sm mb-8 md:mb-10">
                Work: {data.work}
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {data.stats.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-xl p-3 md:p-4 border border-white/10 text-center"
                  >
                    <h4 className="text-lg md:text-xl font-semibold text-emerald-300 mb-1">
                      {item.value}
                    </h4>
                    <p className="text-[10px] md:text-xs text-white/70">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-5 md:mt-6">
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* SIDE SELECTOR */}
          <div className="flex flex-col gap-3 md:gap-4">
            {cases.map((item, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`flex justify-between items-center rounded-xl p-4 md:p-5 cursor-pointer transition border
                ${
                  i === index
                    ? "bg-white/15 border-white/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <span className="text-xs md:text-sm">
                  {item.title}
                </span>
                <ArrowUpRight size={14} />
              </div>
            ))}
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-10 md:mt-12 flex justify-between text-xs text-white/40">
          <span>{index + 1} / {cases.length}</span>
        </div>

      </div>
    </section>
  );
}
