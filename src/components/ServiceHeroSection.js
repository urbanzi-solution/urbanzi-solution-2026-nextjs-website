"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceHeroSection() {
  return (
    <section className="bg-black px-4 sm:px-6 md:px-12 pt-20 md:pt-24 pb-16 md:pb-20 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Rounded Hero Container */}
        <div className="bg-[#111] rounded-3xl p-6 sm:p-8 md:p-14">

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center mb-10 md:mb-12">

            {/* Left Heading */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-semibold tracking-wide leading-tight text-blue-300">
                Kerala’s Trusted Web
                <br />
                Development Experts
              </h1>
            </div>

            {/* Right Content */}
            <div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                Custom-built websites engineered for performance, visibility,
                and long-term digital success.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 transition px-5 sm:px-6 py-3 rounded-full text-white font-medium"
              >
                Start Your Project
              </Link>
            </div>

          </div>

          {/* Bottom Image */}
          <div className="relative w-full h-[200px] sm:h-[240px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/services-hero.webp"
              alt="Web Development"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}