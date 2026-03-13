"use client";

import {
  SiNextdotjs,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiReact,
  SiHtml5,
  SiJavascript,
  SiWordpress,
  SiWix,
  SiShopify,
} from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "React", icon: SiReact, color: "#61DAFB" },

  { name: "Wix", icon: SiWix, color: "#ffffff" },
  { name: "Shopify", icon: SiShopify, color: "#95BF47" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
];

export default function OurExpertiseSection() {
  const firstRow = techStack.slice(0, 5);
  const secondRow = techStack.slice(5);

  return (
    <section className="bg-black text-white py-16 md:py-32 px-6 md:px-[75px] overflow-hidden -mt-25">
      <div className="max-w-[1400px] mx-auto relative md:-mt-28">

        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-light mb-3">
          Our <span className="text-blue-300 italic">Expertise</span>
        </h2>

        <p className="text-white/70 mb-10 md:mb-20 text-sm sm:text-base md:text-lg max-w-xl">
          Technology Simplified for Your Success Our experts utilize the latest
          tools, including:
        </p>

        {/* ROW 1 */}
        <div className="relative overflow-hidden mb-10 md:mb-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex gap-8 md:gap-24 w-max animate-marquee-left">
            {[...firstRow, ...firstRow].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center min-w-[80px] md:min-w-[140px]"
                >
                  <Icon
                    size={36}
                    className="md:w-[72px] md:h-[72px] mb-2 md:mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                    style={{ color: item.color }}
                  />
                  <span className="text-xs md:text-base text-white/90">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex pb-10 gap-8 md:gap-24 w-max animate-marquee-right">
            {[...secondRow, ...secondRow].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center min-w-[80px] md:min-w-[140px]"
                >
                  <Icon
                    size={36}
                    className="md:w-[72px] md:h-[72px] mb-2 md:mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                    style={{ color: item.color }}
                  />
                  <span className="text-xs md:text-base text-white/90">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 8s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 8s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-marquee-left {
            animation: marquee-left 4s linear infinite;
          }

          .animate-marquee-right {
            animation: marquee-right 4s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
