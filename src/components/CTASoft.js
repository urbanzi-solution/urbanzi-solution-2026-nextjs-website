"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASoft() {
  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden -mt-20">

      {/* Glow Background */}
      <div className="absolute w-[90vw] max-w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>
      <div className="absolute w-[90vw] max-w-[400px] h-[400px] rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Ready to build software that
          <span className="bg-blue-400 text-transparent bg-clip-text">
            {" "}actually fits your business?
          </span>
        </h2>

        {/* Sub Text */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Work with a trusted{" "}
          <span className="text-blue-400 font-semibold">
            software development company in Trivandrum
          </span>{" "}
          and build scalable, secure, and high-performance software tailored
          to your business needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          {/* Main CTA */}
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-blue-500 font-semibold text-lg hover:scale-105 transition"
          >
            Book a Free Software Strategy Call
            <ArrowRight size={20}/>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/contact"
            className="flex items-center justify-center px-10 py-5 rounded-full border border-white/20 text-lg hover:bg-white/5 transition"
          >
            Get a Custom Software Quote in 24 Hours
          </Link>

        </div>

      </div>

    </section>
  )
}
