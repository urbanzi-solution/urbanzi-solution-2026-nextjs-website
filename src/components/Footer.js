"use client";

import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#8EA6D9] overflow-hidden">

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-28">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* NEWSLETTER */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1F3A6D] leading-snug mb-6">
              Get our beautiful newsletter
              <br />
              straight to your inbox.
            </h2>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full sm:w-[320px] px-5 py-3 rounded-full bg-white/30 
                placeholder:text-gray-600 outline-none text-sm"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* PAGES */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-[#1F3A6D] mb-4">
              Pages
            </h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>Home</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Our clients</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-[#1F3A6D] mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Software Development</li>
              <li>Mobile App Development</li>
              <li>SEO</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-[#1F3A6D] mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>+91 7012050812</li>
              <li>+91 9074496405</li>
              <li>contact@urbanzi.in</li>
              <li>Trivandrum, Kerala</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4">

          <p className="text-sm text-gray-900">
            © 2025 Urbanzi Solutions LLP. All rights reserved.
          </p>

          <div className="flex gap-4">
            <div className="w-9 h-9 bg-[#1F3A6D] rounded-full flex items-center justify-center text-white text-sm">
              <FaFacebookF />
            </div>
            <div className="w-9 h-9 bg-[#1F3A6D] rounded-full flex items-center justify-center text-white text-sm">
              <FaPinterestP />
            </div>
            <div className="w-9 h-9 bg-[#1F3A6D] rounded-full flex items-center justify-center text-white text-sm">
              <FaLinkedinIn />
            </div>
            <div className="w-9 h-9 bg-[#1F3A6D] rounded-full flex items-center justify-center text-white text-sm">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      {/* SMALLER BACKGROUND TEXT */}
      <h1 className="absolute bottom-0 left-0 text-[80px] md:text-[130px] font-extrabold text-blue-500/20 leading-none select-none pointer-events-none">
        URBANZI
      </h1>
    </footer>
  );
}
