"use client";

import { useLeadModal } from "@/context/LeadContext"
import { ArrowRight } from "lucide-react"

export default function DigitCTA() {
  const { openModal } = useLeadModal();
  return (
    <section className="relative py-14 md:py-20 px-6 bg-black text-white overflow-hidden -mt-20">

      {/* Glow Background */}
      <div className="absolute w-[90vw] max-w-[500px] h-[500px] blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>
      <div className="absolute w-[90vw] max-w-[400px] h-[400px] blur-[150px] rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Ready to grow your business with
          <span className="bg-blue-400 text-transparent bg-clip-text">
            {" "}digital marketing that actually works?
          </span>
        </h2>

        {/* Sub Text */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Partner with a trusted{" "}
          <span className="text-blue-400 font-semibold">
            digital marketing agency in Trivandrum
          </span>{" "}
          and discover strategies that increase traffic, generate qualified
          leads, and grow your business online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          {/* Main CTA */}
          <button
            onClick={() => openModal("Digital Marketing Audit Section")}
            className="flex items-center justify-center gap-2 px-5 py-5 rounded-full bg-blue-500 font-semibold hover:scale-105 transition w-full md:w-auto"
          >
            Get a Free Marketing Audit
            <ArrowRight size={20}/>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => openModal("Digital Marketing Strategy Section")}
            className="flex items-center justify-center px-10 py-5 rounded-full border border-white/20 hover:bg-white/5 transition w-full md:w-auto"
          >
            Book a Strategy Call
          </button>

        </div>

      </div>

    </section>
  )
}
