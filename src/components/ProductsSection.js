"use client";

import Image from "next/image";

export default function ProductsSection() {
  const products = [
    {
      title: "HRMS",
      desc: "Urbanzi's HRMS simplifies your entire HR process — from attendance and payroll to leave management.Built for Kerala businesses, it reduces manual work and keeps your team organized every single day.",
      img: "/hrms.webp",
      alt: "HRMS",
    },
    {
      title: "GYM",
      desc: "Our Gym Management Software helps fitness centers across Kerala manage memberships, payments, and schedules from one simple dashboard. Save time and grow your business.",
      img: "/gym.webp",
      alt: "Gym",
    },
    {
      title: "WHATSAPP AUTOMATION",
      desc: "Send instant updates, confirmations, and offers directly to your customers on WhatsApp. Our automation tool helps Trivandrum businesses stay connected without extra effort.",
      img: "/whatsapp.webp",
      alt: "WhatsApp Automation",
    },
  ];

  return (
    <section className="bg-black px-6 text-white pt-20 pb-10 lg:pt-40 lg:pb-20">
      <div className="max-w-6xl mx-auto">
        {products.map((product, i) => (
          <div
            key={i}
            className="sticky top-24 lg:top-32 mb-12 transition-all duration-500 ease-out"
            style={{ zIndex: i + 1 }}
          >
            <div className="group bg-gradient-to-r from-[#111] to-[#0a0a0a]
              rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-10
              border border-white/5 shadow-2xl
              transform-gpu transition-all duration-500 ease-out
              hover:scale-[1.02]
              hover:border-white/20
              will-change-transform"
            >
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
                  {product.title}
                </h2>
                <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                  {product.desc}
                </p>
              </div>

              <div className="flex-1">
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={product.img}
                    alt={product.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
