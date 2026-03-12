"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const pairs = [
  {
    images: ["/img1.webp", "/img2.webp"],
    pos: [
      { top: "8%",    left: "4%",  right: "auto", bottom: "auto" },
      { bottom: "8%", right: "4%", top: "auto",   left: "auto"  },
    ],
  },
  {
    images: ["/img3.webp", "/img4.webp"],
    pos: [
      { top: "8%",    right: "4%", left: "auto",  bottom: "auto" },
      { bottom: "8%", left: "4%",  top: "auto",   right: "auto"  },
    ],
  },
  {
    images: ["/img5.webp", "/img6.webp"],
    pos: [
      { top: "14%",   left: "7%",  right: "auto", bottom: "auto" },
      { bottom: "14%",right: "7%", top: "auto",   left: "auto"  },
    ],
  },
  {
    images: ["/img7.webp", "/img8.webp"],
    pos: [
      { top: "14%",   right: "7%", left: "auto",  bottom: "auto" },
      { bottom: "14%",left: "7%",  top: "auto",   right: "auto"  },
    ],
  },
];

export default function FloatingStackSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end end"],
  });

  /* BUTTERY SMOOTH SPRING SCROLL */
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 70, // Softer for luxury feel
    damping: 35,
    mass: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative h-[600vh] bg-black text-white"
      style={{ perspective: "1500px" }}
    >
      <div
        className="sticky top-[30vh] md:top-[12vh] overflow-hidden"
        style={{ height: "calc(100vh - 64px)" }}
      >

        {/* ── CENTER TEXT ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-6 pointer-events-none gap-4">
          <h2 className="text-3xl md:text-6xl font-light tracking-tight leading-tight">
            Future-Ready <br className="md:hidden" /> Systems.
          </h2>
          <p className="text-xl md:text-4xl text-gray-500 font-light">
            Built by Urbanzi
          </p>
        </div>

        {/* ── IMAGE PAIRS ── */}
        {pairs.map((pair, pi) => {
          const seg   = 1 / pairs.length;
          const start = pi * seg;
          const end   = start + seg;
          
          // Safety check: "next" will be undefined on the final pair.
          const next  = pairs[pi + 1];

          // Active pair: Wider fade window for cinematic overlap
          const opacity = useTransform(
            smoothScroll,
            [start, start + 0.15, end - 0.15, end],
            [0, 1, 1, 0]
          );
          
          // Subtle scale and blur-to-clear effect
          const scale = useTransform(smoothScroll, [start, end], [0.94, 1.08]);
          const blurValue = useTransform(
            smoothScroll,
            [start, start + 0.1, end - 0.1, end],
            ["12px", "0px", "0px", "12px"]
          );

          // Vertical parallax drift
          const driftUp   = useTransform(smoothScroll, [start, end], [25, -25]);
          const driftDown = useTransform(smoothScroll, [start, end], [-25, 25]);

          // Ghost preview of next pair
          const ghostOpacity = useTransform(smoothScroll, [start, start + 0.15], [0, 0.35]);
          const ghostScale   = useTransform(smoothScroll, [start, end], [0.88, 1.0]);

          return (
            <div key={pi}>

              {/* GHOST (rendered only if there is a next pair) */}
              {next && (
                <motion.div
                  style={{ opacity: ghostOpacity, scale: ghostScale }}
                  className="absolute inset-0 z-10"
                >
                  {next.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      style={{ ...next.pos[i], position: "absolute" }}
                      className="w-32 md:w-52 rounded-3xl blur-xl opacity-40 object-cover aspect-[4/3]"
                    />
                  ))}
                </motion.div>
              )}

              {/* ACTIVE */}
              <motion.div
                style={{ opacity, scale, filter: blurValue }}
                className="absolute inset-0 z-20"
              >
                {pair.images.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    style={{
                      ...pair.pos[i],
                      position: "absolute",
                      y: i === 0 ? driftUp : driftDown,
                      rotate: i === 0 ? -4 : 4,
                      filter: blurValue
                    }}
                    className="w-60 md:w-72 rounded-2xl md:rounded-3xl object-cover aspect-[4/3] shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
                  />
                ))}
              </motion.div>

            </div>
          );
        })}

      </div>
    </section>
  );
}

