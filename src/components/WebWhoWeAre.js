"use client";

export default function WebWhoWeAre() {
  return (
    <section className="bg-black py-24 px-6 -mt-25">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="flex justify-center">
            <img
              src="/webare.webp"
              alt="Who we are"
              className="max-w-full"
            />
          </div>

          {/* Content side */}
          <div>
            <h2 className="text-[42px] md:text-[52px] font-semibold text-[#9fd0ff]">
              Who We Are
            </h2>

            {/* small underline – color matched */}
            <div className="w-20 h-[3px] bg-[#9fd0ff] mt-4 mb-8" />

            <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              At <span className="font-semibold text-white">Urbanzi Solutions</span>,  A professional web development company designs, builds, and optimizes websites that are fast, secure, mobile-friendly, SEO-ready, and conversion-focused. At Urbanzi, we help businesses in Trivandrum and across Kerala turn their websites into powerful digital assets that generate leads, sales, and long-term growth.

            </p>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
              >
                Contact Us
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
