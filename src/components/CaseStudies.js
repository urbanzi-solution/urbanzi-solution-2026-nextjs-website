"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <section className="bg-black py-8 lg:py-15 px-4 md:px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block bg-white/10 text-gray-300 text-[10px] md:text-xs tracking-widest px-4 md:px-5 py-2 rounded-full uppercase mb-4 md:mb-6">
            Innovation. Implementation. Success.
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4">
            Our{" "}
            <span className="text-blue-400 italic">
              Case Studies
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl text-sm md:text-base">
            We help organizations overcome their biggest business challenges.
            Discover how our clients improved their performance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          {/* CARD 1: Joseco Furniture */}
          <Link href="/portfolio/case-studies/joseco-furniture" className="block group">
            <motion.div
              className="relative group rounded-3xl overflow-hidden cursor-pointer h-full"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/Joseco Funiture Case study photo.webp"
                alt="Joseco Furniture"
                width={800}
                height={600}
                className="w-full h-[360px] md:h-[500px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/75 transition duration-500" />

              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 transition duration-500 group-hover:opacity-0">
                <div className="h-[1px] bg-white/60 w-16 md:w-24 mb-4 md:mb-6" />
                <h3 className="text-2xl md:text-4xl font-bold">Joseco Furniture</h3>
                <p className="text-gray-300 mt-1 md:mt-2 text-sm md:text-base">E-commerce · Custom CRM · Marketing</p>
              </div>

              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                  Transforming traditional furniture retail
                </h3>

                <p className="text-gray-300 mb-6 md:mb-8 max-w-md text-sm md:text-base">
                  We built a digital ecosystem for Joseco — including an e-commerce platform and a custom digital warranty system. This transformation led to 27% sales growth and expansion into new geographic markets.
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Stat number="27%" label="Sales Growth" />
                  <Stat number="550+" label="Warranty Users" />
                  <Stat number="70%" label="Paper Reduced" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* CARD 2: Arrow Cabs */}
          <Link href="/portfolio/case-studies/arrow-cabs" className="block group">
            <motion.div
              className="relative group rounded-3xl overflow-hidden cursor-pointer h-full"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/Arrowcabs Case study image.webp"
                alt="Arrow Cabs"
                width={800}
                height={600}
                className="w-full h-[360px] md:h-[500px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/75 transition duration-500" />

              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 transition duration-500 group-hover:opacity-0">
                <div className="h-[1px] bg-white/60 w-16 md:w-24 mb-4 md:mb-6" />
                <h3 className="text-2xl md:text-4xl font-bold">Arrow Cabs</h3>
                <p className="text-gray-300 mt-1 md:mt-2 text-sm md:text-base">Website · SEO · GMB</p>
              </div>

              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                  From Page 10 to Page 1 in Trivandrum
                </h3>

                <p className="text-gray-300 mb-6 md:mb-8 max-w-md text-sm md:text-base">
                  Arrow Cabs partnered with Urbanzi to rebuild their digital presence. Through strategic SEO and GMB optimization, we took them from zero online visibility to dominating local searches and driving 200+ monthly calls.
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Stat number="172K" label="Impressions" />
                  <Stat number="200+" label="GMB Calls/mo" />
                  <Stat number="Page 1" label="Search Ranking" />
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}

/* Small Stat Component */
function Stat({ number, label }) {
  return (
    <div className="bg-white/90 text-black px-4 md:px-6 py-3 md:py-4 rounded-2xl text-center min-w-[110px] md:min-w-[140px]">
      <div className="text-lg md:text-xl font-bold text-orange-600">
        {number}
      </div>
      <div className="text-[10px] md:text-xs font-medium mt-1">
        {label}
      </div>
    </div>
  );
}
