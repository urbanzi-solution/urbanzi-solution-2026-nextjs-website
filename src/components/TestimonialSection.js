"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

export default function TestimonialSection() {
  return (
    <section className="bg-[#000002] py-16 md:py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <span className="text-xs tracking-widest px-4 py-2 bg-neutral-800 rounded-full text-neutral-300">
          REAL STORIES. REAL RESULTS
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 md:mt-8 leading-tight">
          Customer <span className="text-blue-400 italic">Testimonials</span>
        </h2>

        <p className="text-neutral-400 mt-4 md:mt-6 max-w-3xl text-sm sm:text-base">
          Every dream deserves a chance to grow. At Urbanzi, we turn your ambitions into reality building digital solutions that connect and inspire.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-20">

          {/* COLUMN 1 */}
          <div className="space-y-6 md:space-y-2 md:mt-6 md:-space-x-5">
            <Card
              text="Working with Urbanzi Solution has been a wonderful experience. They took the time to understand our needs and delivered a solution that was both effective and user-friendly."
              name="Arjun"
            />

            <Card
              text="Urbanzi Solution didn’t just build us a website, they helped us shape our brand online. The team is approachable and creative."
              name="Akshay"
            />

            {/* Hidden on mobile */}
            <div className="hidden md:block">
              <FadeCard text="Working with Urbanzi Solution has been a wonderful experience. They took the time to understand our needs." />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-6 md:space-y-2 md:-mt-10">
            <Card
              text="Urbanzi Solution blends technical expertise with a human touch. They not only delivered a top-quality application but also supported us patiently."
              name="Wazim"
            />

            <Card
              text="What I appreciate most about Urbanzi Solution is their honesty and dedication. Truly a team you can trust."
              name="Jeril"
            />

            {/* Hidden on mobile */}
            <div className="hidden md:block">
              <FadeCard text="Working with Urbanzi Solution has been a wonderful experience. They took the time to understand our needs." />
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-6 md:space-y-2 md:mt-6 md:-ml-5">
            <Card
              text="The team genuinely cares about their clients’ success. Their work has been transformative and built long-term trust."
              name="Samad"
            />

            <Card
              text="Working with Urbanzi solutions has transformed the way our business operates online. A perfect blend of expertise and care."
              name="Mathew"
            />

            {/* Hidden on mobile */}
            <div className="hidden md:block">
              <FadeCard text="Working with Urbanzi Solution has been a wonderful experience. They took the time to understand our needs." />
            </div>
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none"></div>

      </div>
    </section>
  );
}

/* CARD */

function Card({ text, name }) {
  return (
    <div className="bg-neutral-200 text-black rounded-2xl p-5 md:p-6 shadow-lg">

      <div className="flex gap-1 text-orange-500">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4" />
        ))}
      </div>

      <p className="text-sm mt-4 leading-relaxed text-neutral-700">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Image
          src="/avatar.jpg"
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-blue-700">{name}</p>
          <p className="text-xs text-neutral-500">Startup Founder</p>
        </div>
      </div>

    </div>
  );
}

/* FADE CARD */

function FadeCard({ text }) {
  return (
    <div className="relative bg-neutral-200 text-black rounded-2xl p-5 md:p-6 shadow-lg overflow-hidden">

      <div className="flex gap-1 text-orange-500">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4" />
        ))}
      </div>

      <p className="text-sm mt-4 leading-relaxed text-neutral-700">
        {text}
      </p>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent"></div>

    </div>
  );
}
