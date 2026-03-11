"use client";

export default function GraphicsWhoWeAre() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="flex justify-center">
            <img
              src="/graphics.webp"
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
              At <span className="font-semibold text-white">Urbanzi Solutions</span>, is a creative graphic design and animation company in Kerala, trusted by growing businesses that want more than ordinary visuals. With strong roots in Trivandrum and clients across India, our team understands your brand story and transforms it into stunning designs and engaging animations. From brand graphics to motion visuals, we create creative solutions that capture attention, communicate your message clearly, and help your business stand out in today’s fast-moving digital world.
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