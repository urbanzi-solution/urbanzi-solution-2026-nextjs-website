"use client";

import Image from "next/image";

export default function OurProcessSection() {
  return (
    <section className="bg-black text-white py-20 md:py-32 px-6 md:px-[75px] -mt-25">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 md:gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[350px] md:h-[800px] md:w-130 rounded-3xl overflow-hidden">
          <Image
            src="/process.webp"
            alt="Process"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-[54px] text-center font-light mb-10 md:mb-16">
            Our <span className="text-blue-300 italic">Process</span>
          </h2>

          <div className="space-y-8 md:space-y-10 md:-ml-14">

            {/* ITEM */}
            <div>
              <div className="grid grid-cols-[50px_1fr] md:grid-cols-[80px_200px_1fr] items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-[32px] font-semibold">01</span>
                <h3 className="text-lg md:text-[26px]">Discover</h3>
                <p className="text-white/70 leading-relaxed col-span-2 md:col-span-1 text-sm md:text-base">
                  We sit down with you virtually or in person to listen,
                  understand your challenges, and learn about your audience
                  and goals.
                </p>
              </div>
              <div className="border-b border-dashed border-blue-300/40 mt-6 md:mt-10" />
            </div>

            {/* ITEM */}
            <div>
              <div className="grid grid-cols-[50px_1fr] md:grid-cols-[80px_200px_1fr] items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-[32px] font-semibold">02</span>
                <h3 className="text-lg md:text-[26px]">Design</h3>
                <p className="text-white/70 leading-relaxed col-span-2 md:col-span-1 text-sm md:text-base">
                  We sit down with you virtually or in person to listen,
                  understand your challenges, and learn about your audience
                  and goals.
                </p>
              </div>
              <div className="border-b border-dashed border-blue-300/40 mt-6 md:mt-10" />
            </div>

            {/* ITEM */}
            <div>
              <div className="grid grid-cols-[50px_1fr] md:grid-cols-[80px_200px_1fr] items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-[32px] font-semibold">03</span>
                <h3 className="text-lg md:text-[26px]">Development</h3>
                <p className="text-white/70 leading-relaxed col-span-2 md:col-span-1 text-sm md:text-base">
                  We sit down with you virtually or in person to listen,
                  understand your challenges, and learn about your audience
                  and goals.
                </p>
              </div>
              <div className="border-b border-dashed border-blue-300/40 mt-6 md:mt-10" />
            </div>

            {/* ITEM */}
            <div>
              <div className="grid grid-cols-[50px_1fr] md:grid-cols-[80px_200px_1fr] items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-[32px] font-semibold">04</span>
                <h3 className="text-lg md:text-[26px] leading-tight">
                  Launch &<br />Support
                </h3>
                <p className="text-white/70 leading-relaxed col-span-2 md:col-span-1 text-sm md:text-base">
                  We sit down with you virtually or in person to listen,
                  understand your challenges, and learn about your audience
                  and goals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}