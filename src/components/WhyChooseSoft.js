"use client"

import { CheckCircle } from "lucide-react"

export default function WhyChooseSoft() {
  const features = [
    "Kerala-based software development team",
    "Business-first approach (not just code)",
    "Scalable, future-ready architecture",
    "Secure development practices",
    "Transparent pricing & milestone delivery",
    "Long-term support & maintenance"
  ]

  return (
    <section className="relative py-28 px-6 bg-black text-white overflow-hidden -mt-20">

      {/* Glow Background */}
      <div className="absolute w-[90vw] max-w-[500px] h-[500px] blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Why Choose 
            <span className="bg-blue-400 text-transparent bg-clip-text">
              {" "}Urbanzi
            </span>{" "}
            as Your Software Development Partner in Kerala?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We build powerful software solutions designed to solve real business
            problems, improve efficiency, and scale with your company.
          </p>

        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/10 hover:border-blue-500/40 transition"
            >

              <CheckCircle className="text-blue-400 mt-1" size={22} />

              <p className="text-gray-300 text-lg leading-relaxed">
                {item}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center">

          <div className="max-w-3xl mx-auto bg-[#0f1629]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md">

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Your software should grow with your business — 
              <br />
              <span className="text-blue-400 font-semibold">
                not limit it.
              </span>
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}
