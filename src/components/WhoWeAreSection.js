"use client";

import Link from "next/link";

export default function WhoWeAreSection() {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-12 py-8 md:py-10 -mt-25">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">

          {/* Left Content */}
          <div className="md:col-span-2">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 md:mb-6 leading-tight">
              Who <span className="text-blue-300 italic">We Are</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Welcome! At Urbanzi Solutions, we believe your business deserves
              to be seen and celebrated online. Proudly based in Trivandrum and
              serving all of Kerala, our team combines creativity, empathy, and
              advanced technology to help real businesses like yours grow,
              connect, and succeed on the web. We know that navigating the
              digital world can be stressful, so we walk beside you at every
              step—making the journey simple and rewarding.
            </p>

          </div>

          {/* Right Button */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <Link
              href="/contact"
              className="bg-gray-200 text-orange-600 hover:bg-white transition px-6 py-3 rounded-full font-medium"
            >
              Contact Us
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
