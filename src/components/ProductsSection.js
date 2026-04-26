"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductsSection() {
  const products = [

    {
      title: "GYM MANAGEMENT",
      desc: "Our Gym Management Software helps fitness centers across Kerala manage memberships, payments, and schedules from one simple dashboard. Save time and grow your business.",
      img: "/Product-images/Gym managment software.webp",
      alt: "Urbanzi Solutions Gym Management Software - Comprehensive dashboard for fitness center operations",
      href: "/product/gym-application"
    },
    {
      title: "WHATSAPP AUTOMATION",
      desc: "Send instant updates, confirmations, and offers directly to your customers on WhatsApp. Our official API tool helps businesses stay connected without extra effort.",
      img: "/Product-images/Whatsapp Bulk Reach image.webp",
      alt: "Urbanzi Solutions WhatsApp Automation Tool - Official API integration for automated business messaging",
      href: "/products/whatsapp-marketing-software-india"
    },
    {
      title: "MOMENTRY INVITES",
      desc: "Premium digital invitation websites for weddings, birthdays, and celebrations. Custom-built stories with RSVP, maps, and countdowns that leave a lasting impression.",
      img: "/Product-images/Momentry image.webp",
      alt: "Momentry Digital Invitations by Urbanzi - Premium wedding and event invitation websites",
      href: "/products/momentry-digital-invitations"
    },
    {
      title: "HRMS & PAYROLL",
      desc: "Urbanzi's HRMS simplifies your entire HR process — from attendance and payroll to leave management. Built for Kerala businesses, it reduces manual work and keeps your team organized.",
      img: "/hrms.webp",
      alt: "Urbanzi Solutions HRMS and Payroll Software - Streamlined HR processes and leave management for Kerala businesses",
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
                {product.href ? (
                  <Link href={product.href} className="inline-block group/link">
                    <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white group-hover/link:text-blue-400">
                      {product.title} <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                    </h2>
                  </Link>
                ) : (
                  <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
                    {product.title}
                  </h2>
                )}
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
