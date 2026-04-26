"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductInternalLinks({ currentProduct }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Gym Management", href: "/product/gym-application" },
    { name: "WhatsApp Automation", href: "/products/whatsapp-marketing-software-india" },
    { name: "Momentry Invites", href: "/products/momentry-digital-invitations" },
  ];

  return (
    <section className="bg-black py-12 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-2">Continue Exploring</h4>
            <p className="text-gray-500 text-sm">Discover more products and services from Urbanzi.</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {links.filter(l => l.href !== currentProduct).map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  href={link.href} 
                  className="text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
