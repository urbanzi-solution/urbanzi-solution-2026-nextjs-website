"use client"

import Link from "next/link"
import { Mail, ArrowLeft, Sparkles } from "lucide-react"

export default function UnderDevelopment() {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-24">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[180px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>
      <div className="absolute w-[500px] h-[500px]  blur-[160px] rounded-full bottom-0 right-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Top Icon Badge */}
        <div className="flex justify-center mb-10">

          <div className="relative px-10 py-5 rounded-full bg-[#1c2235] border border-white/10 shadow-lg">

            <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-blue-500 opacity-30"></div>

            <div className="relative flex items-center gap-6 text-yellow-400 text-3xl">
              🚧 <Sparkles size={32}/> 🚧
            </div>

          </div>

        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">

          Page Under
          <br />

          <span className="bg-white text-transparent bg-clip-text">
            Development
          </span>

        </h1>

        {/* Line */}
        <div className="w-24 h-[3px] mx-auto mt-6 mb-10 bg-white rounded-full"></div>

        {/* Info Card */}
        <div className="bg-[#0f1629]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">

          <div className="flex justify-center items-center gap-2 text-blue-400 mb-4">
            <Sparkles size={18}/>
            <span className="font-medium">Coming Soon</span>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            We're working on something <span className="text-yellow-400 font-semibold">amazing!</span>.
            Stay tuned as we bring this page to life with exciting content
            and valuable insights.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">

          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-500 font-medium hover:scale-105 transition"
          >
            <ArrowLeft size={18}/>
            Go to Home Page
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition"
          >
            <Mail size={18}/>
            Need Assistance? Contact Us
          </Link>

        </div>

        {/* Footer */}
        <p className="text-gray-500 mt-12 text-sm">
          Expected completion: <span className="text-blue-400">Coming Soon</span>
        </p>

      </div>

    </section>
  )
}