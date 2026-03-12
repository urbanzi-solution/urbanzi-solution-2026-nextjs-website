"use client";

import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiWordpress,
  SiWix,
  SiShopify,
} from "react-icons/si";

const stack = [
  { icon: <SiReact size={34} className="text-sky-400" />, name: "React" },
  { icon: <SiNextdotjs size={34} className="text-white" />, name: "Next.js" },
  { icon: <SiPython size={34} className="text-yellow-400" />, name: "Python" },
  { icon: <SiNodedotjs size={34} className="text-green-400" />, name: "Node.js" },
  { icon: <SiTailwindcss size={34} className="text-sky-400" />, name: "Tailwind CSS" },

  { icon: <SiHtml5 size={34} className="text-orange-500" />, name: "HTML" },
  { icon: <SiJavascript size={34} className="text-yellow-300" />, name: "JavaScript" },
  { icon: <SiWordpress size={34} className="text-sky-500" />, name: "WordPress" },
  { icon: <SiWix size={34} className="text-yellow-400" />, name: "Wix" },
  { icon: <SiShopify size={34} className="text-green-400" />, name: "Shopify" },
];

export default function OurWebExpertiseSection() {
  return (
    <section className="bg-black py-28 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Our Expertise
        </h2>

        <div className="w-24 h-[3px] bg-gradient-to-r from-white to-white mx-auto mt-4 rounded-full" />

        <h3 className="mt-8 text-xl md:text-2xl font-semibold">
          Technology – Simplified for Your Success
        </h3>

        <p className="text-white/70 mt-3">
          Our experts utilize the latest tools, including:
        </p>

        {/* Gradient bordered panel */}
        <div className="mt-16 rounded-3xl p-[2px] bg-gradient-to-r">
          <div className="rounded-3xl bg-gradient-to-br from-[#0b1628] to-[#060b16] px-8 py-12">

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-12">
              {stack.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    className="
                      w-16 h-16
                      rounded-xl
                      bg-white/5
                      border border-white/10
                      flex items-center justify-center
                      mb-3
                    "
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm text-white">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <p className="mt-16 text-white/60">
          Ready to leverage these technologies for your project?
        </p>

        <button
          className="
            mt-6
            px-8 py-3
            rounded-full
            font-medium
            text-black
            bg-gradient-to-r from-white to-white
            hover:scale-105
            transition
          "
        >
          Get Started Today
        </button>

      </div>
    </section>
  );
}
