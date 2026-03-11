"use client";

export default function WhoWeAre() {
  return (
    <section className="bg-black py-24 px-6">
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
            <h2 className="text-[42px] md:text-[52px] font-semibold text-[#9fd0ff]">
              Who We Are
            </h2>

            {/* small underline – color matched */}
            <div className="w-20 h-[3px] bg-[#9fd0ff] mt-4 mb-8" />

            <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              At <span className="font-semibold text-white">Urbanzi Solutions</span>, we're your digital
              growth partners who truly care about your success. As a dedicated
              digital marketing agency in Trivandrum and Kerala, we help
              businesses of all sizes navigate the online world with confidence.
              Our approach is personal, results-driven, and focused on turning
              your digital marketing challenges into real business growth. Let
              us help your brand shine in the crowded digital space.
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