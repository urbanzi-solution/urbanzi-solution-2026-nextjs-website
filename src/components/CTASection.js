"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-black px-4 md:px-12 py-16 md:py-24 -mt-25">
      <div className="max-w-7xl mx-auto">

        <div className="relative rounded-3xl overflow-hidden">

          {/* Background Image */}
          <Image
            src="/cta-bg.webp"
            alt="CTA Background"
            fill
            className="object-cover"
          />

          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-blue-950/70"></div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-20 items-center text-white">

            {/* Left */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Ready to Get
                <br />
                Started
              </h2>
            </div>

            {/* Right */}
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6 md:mb-8">
                Take the next step with Urbanzi Solutions. Whether you're a
                visionary entrepreneur or a growing business, our team is
                dedicated to building digital experiences that inspire,
                connect, and help you achieve more. Let’s create something
                extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start">

                {/* Contact Button */}
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium transition duration-300"
                >
                  Contact Us
                </Link>

                {/* Learn More Button */}
                <Link
                  href="/services"
                  className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition duration-300"
                >
                  Learn More
                </Link>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
