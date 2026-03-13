"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  // Prevent page scroll when menu opens
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 ">

        {/* NAV CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white z-50"
          >
            <Menu size={28} />
        </button>

        {/* LOGO */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 text-white text-lg md:text-xl font-semibold text-center leading-tight hover:opacity-80 transition-opacity">
          URBANZI <br className="hidden sm:block" /> SOLUTIONS
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-white transition">
            About Us
          </Link>

          {/* SERVICES */}
          <div className="relative group">

            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-white transition"
            >
              Services
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </Link>

            {/* Dropdown */}
            <div
              className="
              absolute left-0 top-[calc(100%+12px)]
              bg-[#0b1220]/90 backdrop-blur-xl
              border border-white/10
              rounded-2xl
              w-60
              opacity-0 invisible
              translate-y-2
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all duration-300
              shadow-[0_8px_32px_rgba(0,0,0,0.5)]
              overflow-hidden
              "
            >
              <div className="px-4 py-2 text-[10px] uppercase tracking-widest text-gray-500 border-b border-white/5">
                Our Services
              </div>

              <Link href="/services/software-development" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                Software Development
              </Link>

              <Link href="/services/web-development" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                Web Development
              </Link>

              <Link href="/services/app-development" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                App Development
              </Link>

              <Link href="/services/seo" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                SEO Services
              </Link>

              <Link href="/services/digital-marketing" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                Digital Marketing
              </Link>

              <Link href="/services/graphic-design-animation" className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                Graphic Design & Animation
              </Link>

            </div>

          </div>

          <Link href="/clients" className="hover:text-white transition">
            Clients
          </Link>

          <Link href="/careers" className="hover:text-white transition">
            Careers
          </Link>

          <Link href="/blogs" className="hover:text-white transition">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact Us
          </Link>
        </div>

        {/* DESKTOP BUTTON */}
        <Link href="/contact" className="hidden md:block bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Start a Project
        </Link>

      </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0b1220] transform transition-transform duration-300 md:hidden flex flex-col ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >

        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10 shrink-0 bg-[#0b1220]">

          <Link href="/" onClick={closeMenu} className="text-white text-lg font-semibold hover:opacity-80 transition-opacity">
            URBANZI SOLUTIONS
          </Link>

          <button onClick={closeMenu} className="text-white p-2">
            <X size={28} />
          </button>

        </div>

        {/* MOBILE LINKS */}
        <div className="flex-1 overflow-y-auto flex flex-col px-6 py-8 space-y-7 bg-sky-950 text-gray-300 text-lg">

          <Link href="/" onClick={closeMenu}>Home</Link>

          <Link href="/about" onClick={closeMenu}>About Us</Link>

          {/* SERVICES */}
          <div>

            <div className="flex items-center justify-between">

              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>

              <button onClick={() => setServicesOpen(!servicesOpen)}>
                <ChevronDown
                  className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

            </div>

            <div
              className={`flex flex-col ml-4 mt-4 space-y-4 text-base text-gray-400 overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96" : "max-h-0"
                }`}
            >

              <Link href="/services/software-development" onClick={closeMenu}>
                Software Development
              </Link>

              <Link href="/services/web-development" onClick={closeMenu}>
                Web Development
              </Link>

              <Link href="/services/app-development" onClick={closeMenu}>
                App Development
              </Link>

              <Link href="/services/seo" onClick={closeMenu}>
                SEO Services
              </Link>

              <Link href="/services/digital-marketing" onClick={closeMenu}>
                Digital Marketing
              </Link>

              <Link href="/services/graphic-design-animation" onClick={closeMenu}>
                Graphic Design
              </Link>

            </div>

          </div>

          <Link href="/clients" onClick={closeMenu}>Clients</Link>

          <Link href="/careers" onClick={closeMenu}>Careers</Link>

          <Link href="/blogs" onClick={closeMenu}>Blogs</Link>

          <Link href="/contact" onClick={closeMenu}>Contact Us</Link>

          <Link href="/contact" onClick={closeMenu} className="mt-8 bg-white text-black py-3 rounded-full font-medium text-center">
            Start a Project
          </Link>

        </div>

      </div>

    </>
  );
}
