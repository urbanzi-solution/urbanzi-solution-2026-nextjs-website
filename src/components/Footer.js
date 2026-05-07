"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#8EA6D9] overflow-hidden">

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-20 md:pb-28">

        {/* NEWSLETTER SECTION */}
        <div className="mb-10 md:mb-16 border-b border-[#1F3A6D]/10 pb-10 md:pb-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A6D] leading-tight mb-6 md:mb-8">
              Get our beautiful newsletter straight to your inbox.
            </h2>
            <div className="relative max-w-md group">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-7 py-5 rounded-full bg-white/40 border border-[#1F3A6D]/10
                placeholder:text-[#1F3A6D]/50 outline-none text-base focus:bg-white/60 focus:border-[#1F3A6D]/30 transition-all shadow-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 px-8 bg-[#1F3A6D] text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition shadow-lg active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>
 
        {/* LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
 
          {/* PAGES */}
          <div className="col-span-1">
            <h3 className="text-base font-bold text-[#1F3A6D] mb-6 uppercase tracking-wider">
              Pages
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li><Link href="/" className="hover:text-blue-700 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-700 transition">About us</Link></li>
              <li><Link href="/portfolio/case-studies" className="hover:text-blue-700 transition">Case studies</Link></li>
              <li><Link href="/clients" className="hover:text-blue-700 transition">Our clients</Link></li>
              <li><Link href="/contact" className="hover:text-blue-700 transition">Contact us</Link></li>
            </ul>
          </div>
 
          {/* SERVICES */}
          <div className="col-span-1">
            <h3 className="text-base font-bold text-[#1F3A6D] mb-4 md:mb-6 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li><Link href="/services/web-development" className="hover:text-blue-700 transition">Web Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-blue-700 transition">Digital Marketing</Link></li>
              <li><Link href="/services/software-development" className="hover:text-blue-700 transition">Software Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-blue-700 transition">App Development</Link></li>
              <li><Link href="/services/seo" className="hover:text-blue-700 transition">SEO</Link></li>
              <li><Link href="/services/graphic-design-animation" className="hover:text-blue-700 transition">Graphics & Animation</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-blue-700 transition">Cybersecurity</Link></li>
            </ul>
          </div>
 
          {/* PRODUCTS */}
          <div className="col-span-1">
            <h3 className="text-base font-bold text-[#1F3A6D] mb-4 md:mb-6 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li><Link href="/product/gym-application" className="hover:text-blue-700 transition">Gym Management</Link></li>
              <li><Link href="/products/whatsapp-marketing-software-india" className="hover:text-blue-700 transition">WhatsApp Automation</Link></li>
              <li><Link href="/products/momentry-digital-invitations" className="hover:text-blue-700 transition">Momentry Invites</Link></li>
            </ul>
          </div>
 
          {/* COMPANY */}
          <div className="col-span-1">
            <h3 className="text-base font-bold text-[#1F3A6D] mb-4 md:mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li>
                <a href="tel:+917012050812" className="hover:text-blue-700 transition">+91 7012050812</a>
              </li>
              <li>
                <a href="tel:+919074496405" className="hover:text-blue-700 transition">+91 9074496405</a>
              </li>
              <li>
                <a href="mailto:contact@urbanzi.in" className="hover:text-blue-700 transition">contact@urbanzi.in</a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/Yp4Uu2Yp2Wp2Wp2W9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-700 transition"
                >
                  Trivandrum, Kerala
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4">

          <p className="text-sm text-gray-900">
            © 2026 Urbanzi Solutions LLP. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61573639366321#" className="w-9 h-9 bg-[#1F3A6D] rounded-full flex items-center justify-center text-white text-sm hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="https://share.google/7RpQytS6Mlpham3Bi" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#1F3A6D] rounded-full flex items-center justify-center text-white text-sm hover:scale-110 transition shadow-md">
              <FaGoogle />
            </a>
            <a href="https://www.linkedin.com/company/urbanzi-solutions-llp" className="w-9 h-9 bg-[#1F3A6D] rounded-full flex items-center justify-center text-white text-sm hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/urbanzi_solutions/" className="w-9 h-9 bg-[#1F3A6D] rounded-full flex items-center justify-center text-white text-sm hover:scale-110 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* SMALLER BACKGROUND TEXT */}
      <div className="absolute bottom-0 left-0 text-[80px] md:text-[130px] font-extrabold text-blue-500/20 leading-none select-none pointer-events-none">
        URBANZI
      </div>
    </footer>
  );
}
