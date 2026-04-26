"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Gym Management Software",
    desc: "Custom-branded app to manage members, billing, and attendance for fitness centers.",
    href: "/product/gym-application",
    img: "/gym.webp"
  },
  {
    title: "WhatsApp Marketing Tool",
    desc: "Official API-based bulk messaging and automation platform for business growth.",
    href: "/products/whatsapp-marketing-software-india",
    img: "/whatsapp.webp"
  },
  {
    title: "Momentry Digital Invites",
    desc: "Premium digital invitation websites with RSVP, maps, and countdowns for any event.",
    href: "/products/momentry-digital-invitations",
    img: "/img5.webp"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Our Featured Software Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready-to-use platforms built to solve specific business challenges instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src={product.img} 
                  alt={"Urbanzi Solutions - " + product.title + ": " + product.desc} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {product.desc}
                </p>
                <Link 
                  href={product.href}
                  className="text-blue-400 font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
