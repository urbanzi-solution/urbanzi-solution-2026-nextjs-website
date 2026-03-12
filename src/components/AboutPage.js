"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="pt-24 md:pt-32 px-4 md:px-12 bg-black min-h-screen">
      <div className="relative w-full h-[420px] md:h-[600px] rounded-3xl overflow-hidden">

        {/* Background Image */}
        <Image
          src="/marketin.webp"
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-blue-300 leading-tight">
            Let’s Go On An Innovation <br className="hidden md:block" /> Journey Together
          </h1>

          <p className="mt-4 md:mt-6 max-w-3xl text-gray-300 text-sm sm:text-base md:text-lg">
            At Urbanzi, we redefine how people manage and interact with money by
            empowering businesses with smart tools that create a positive impact.
          </p>

        </div>
      </div>
    </section>
  );
}
