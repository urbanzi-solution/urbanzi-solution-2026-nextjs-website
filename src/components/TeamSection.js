"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Govardhan",
    role: "Co-Founder · Project Head",
    image: "/team1.jpg",
  },
  {
    name: "Abhijith",
    role: "Co-Founder · Project Manager (Operational Lead)",
    image: "/team2.jpg",
  },
  {
    name: "Abhishek",
    role: "Co-Founder · Design Head",
    image: "/team3.jpg",
  },
  {
    name: "Shuhaib",
    role: "Founding Member · Project Development Head",
    image: "/team4.jpg",
  },
  {
    name: "Anoop",
    role: "Co-Founder · Partner",
    image: "/team5.jpg",
  },
  {
    name: "Sajin",
    role: "Co-Founder · Partner",
    image: "/team6.jpg",
  },
  {
    name: "Abhiram",
    role: "Founding Member · Designer",
    image: "/team7.jpg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {teamMembers.map((member, index) => {
            const isLast = index === teamMembers.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group w-full max-w-sm ${
                  isLast ? "md:col-span-3 flex justify-center" : ""
                }`}
              >
                <div className="relative bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 w-full">

                  {/* Image */}
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.role}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
