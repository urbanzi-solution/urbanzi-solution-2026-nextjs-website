"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Govardhan",
    role: "Co-Founder · Project Head",
    image: "/govardhan.webp",
    website: "#", // Placeholder
  },
  {
    name: "Abhijith",
    role: "Co-Founder · Project Manager (Operational Lead)",
    image: "/abhijith.webp",
    website: "https://abhijith.urbanzi.in", // Placeholder
  },
  {
    name: "Abhishek",
    role: "Co-Founder · Design Head",
    image: "/abhishek.webp",
    website: "#", // Placeholder
  },
  {
    name: "Anoop",
    role: "Co-Founder · Partner",
    image: "/annop.webp",
    website: "#", // Placeholder
  },
  {
    name: "Sajin",
    role: "Co-Founder · Partner",
    image: "/sajin.webp",
    website: "#", // Placeholder
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-24 -mt-25">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Those Who Make Up{" "}
            <span className="text-blue-300 italic">
              Our Talented Team
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-27px)] max-w-sm"
              >
                <Link 
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 w-full group"
                >

                  {/* Image */}
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20">
                        View Website
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.role}
                    </p>
                  </div>

                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
