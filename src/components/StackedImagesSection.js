"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const imagePairs = [
  {
    images: ["/img1.webp", "/img2.webp"],
    positions: [
      "top-20 left-10 md:left-20 w-40 md:w-60",
      "bottom-24 right-10 md:right-24 w-44 md:w-72",
    ],
  },
  {
    images: ["/img3.webp", "/img4.webp"],
    positions: [
      "top-28 right-10 md:right-16 w-44 md:w-64",
      "bottom-20 left-10 md:left-32 w-40 md:w-56",
    ],
  },
  {
    images: ["/img5.webp", "/img6.webp"],
    positions: [
      "top-24 left-1/4 md:left-1/3 w-44 md:w-72",
      "bottom-28 right-1/4 w-40 md:w-60",
    ],
  },
  {
    images: ["/img7.webp", "/img8.webp"],
    positions: [
      "top-1/4 right-1/4 md:right-1/3 w-44 md:w-64",
      "bottom-1/4 left-1/4 w-40 md:w-56",
    ],
  },
];

export default function FloatingStackSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end end"],
  });

  /* SMOOTH SPRING SCROLL */
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.15,
  });

  return (
    <section
      ref={ref}
      className="relative h-[600vh] bg-black text-white"
      style={{ perspective: "1400px" }}
    >
      <div
        className="sticky top-[30vh] md:top-[12vh] overflow-hidden"
        style={{ height: "calc(100vh - 64px)" }}
      >

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center z-30 text-center px-6 pointer-events-none">
          <div>
            <h2 className="text-3xl md:text-6xl font-light">
              Future-Ready Systems.
            </h2>
            <p className="text-2xl md:text-5xl text-gray-500 mt-4">
              Built by Urbanzi
            </p>
          </div>
        </div>

        {imagePairs.map((pair, pairIndex) => {
          const segment = 1 / imagePairs.length;
          const start = pairIndex * segment;
          const end = start + segment;

          const nextPair = imagePairs[pairIndex + 1];

          /* FRONT */
          const frontOpacity = useTransform(
            smoothScroll,
            [start, start + 0.15, end - 0.15, end],
            [0, 1, 1, 0]
          );

          const frontScale = useTransform(
            smoothScroll,
            [start, end],
            [0.96, 1.2]
          );

          /* BACK */
          const backOpacity = useTransform(
            smoothScroll,
            [start, start + 0.1],
            [0.3, 0.7]
          );

          const backScale = useTransform(
            smoothScroll,
            [start, end],
            [0.9, 1]
          );

          return (
            <div key={pairIndex}>

              {/* BACK PREVIEW */}
              {nextPair && (
                <motion.div
                  style={{
                    opacity: backOpacity,
                    scale: backScale,
                  }}
                  className="absolute inset-0 z-10"
                >
                  {nextPair.images.map((src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      className={`absolute ${nextPair.positions[i]} rounded-xl blur-sm opacity-70`}
                    />
                  ))}
                </motion.div>
              )}

              {/* FRONT ACTIVE */}
              <motion.div
                style={{
                  opacity: frontOpacity,
                  scale: frontScale,
                }}
                className="absolute inset-0 z-20"
              >
                {pair.images.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    className={`absolute ${pair.positions[i]} rounded-xl shadow-2xl`}
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