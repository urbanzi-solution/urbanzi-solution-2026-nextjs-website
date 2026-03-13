"use client";

export default function WhoWeAre() {
  return (
    <section className="bg-black pb-10 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="flex justify-center">
            <img
              src="/who-we-are.webp"
              alt="Who we are"
              className="max-w-full"
            />
          </div>

          {/* Content side */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[52px] font-semibold text-[#9fd0ff]">
              Who We Are
            </h2>

            {/* small underline – color matched */}
            <div className="w-20 h-[3px] bg-[#9fd0ff] mt-4 mb-8" />

            <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              Urbanzi is a full-service digital marketing agency in Trivandrum, Kerala, helping startups, SMEs, and growing brands build predictable online growth. We combine data, creativity, and performance marketing to create campaigns that don’t just look good — they convert.
              If your website isn’t bringing leads, your ads aren’t profitable, or your social media isn’t moving the needle, we fix the system — not just the surface.
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
