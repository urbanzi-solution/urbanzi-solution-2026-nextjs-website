"use client";

import {
  SiAdobe,
  SiBlender,
  SiDavinciresolve
} from "react-icons/si";

import { MdVideoLibrary } from "react-icons/md";

const stack = [
  { icon: <SiAdobe size={34} className="text-red-500" />, name: "Adobe Creative Suite" },
  { icon: <SiBlender size={34} className="text-orange-500" />, name: "Blender" },
  { icon: <SiDavinciresolve size={34} className="text-blue-400" />, name: "DaVinci Resolve" },
  { icon: <MdVideoLibrary size={34} className="text-white" />, name: "CapCut" },
];

export default function GraphicsExpertise() {
  return (
    <section className="bg-black py-20 md:py-28 px-4 md:px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-semibold">
          Our Expertise
        </h2>

        <div className="w-16 md:w-24 h-[3px] bg-white mx-auto mt-3 md:mt-4 rounded-full" />

        <h3 className="mt-6 md:mt-8 text-lg md:text-2xl font-semibold">
          Technology – Simplified for Your Success
        </h3>

        <p className="text-white/70 mt-2 md:mt-3 text-sm md:text-base">
          Our experts utilize the latest tools, including:
        </p>

        <div className="mt-10 md:mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1628] to-[#060b16] px-5 md:px-8 py-8 md:py-12">

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 justify-items-center">
            {stack.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  {item.icon}
                </div>

                <span className="text-xs md:text-sm text-white">
                  {item.name}
                </span>

              </div>
            ))}
          </div>

        </div>

        <p className="mt-12 md:mt-16 text-white/60 text-sm md:text-base">
          Ready to leverage these technologies for your project?
        </p>

        <button className="mt-5 md:mt-6 px-6 md:px-8 py-3 rounded-full font-medium text-black bg-white hover:scale-105 transition text-sm md:text-base">
          Get Started Today
        </button>

      </div>
    </section>
  );
}
