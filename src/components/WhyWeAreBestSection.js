"use client";

export default function WhyWeAreBestSection() {
  return (
    <section className="bg-black text-white py-20 md:py-32 px-6 md:px-[75px] -mt-10 md:-mt-28">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-light leading-tight mb-12 md:mb-20 max-w-[1100px]">
          Why We Are Best in Website{" "}
          <span className="text-blue-300 italic">
            Development and Design
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-2">

          {/* Row 1 */}
          <div className="md:col-span-7">
            <Card
              title="Expertise Across Platforms"
              text="We have deep experience building websites on WordPress, Shopify, React, Next.js, and more so you get the ideal solution, every time."
            />
          </div>

          <div className="md:col-span-5">
            <Card
              title="Tailored to Your Needs"
              text="Every project is uniquely designed to reflect your brand and meet your specific business goals, never a cookie-cutter approach."
            />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-4">
            <Card
              title="User-Centered Design"
              text="We focus on intuitive navigation, engaging experiences, and visually appealing layouts that turn visitors into loyal customers."
            />
          </div>

          <div className="md:col-span-4">
            <Card
              title="SEO-Driven From Day One"
              text="Our sites are built with the latest SEO best practices, ensuring your business gets found on Google and reaches more potential customers."
            />
          </div>

          <div className="md:col-span-4">
            <Card
              title="Reliable, End-to-End Support"
              text="From discovery to launch and ongoing maintenance, you always have a dedicated team beside you."
            />
          </div>

          {/* Row 3 */}
          <div className="md:col-span-6">
            <Card
              title="Transparent Communication"
              text="We keep you in the loop at every step, providing clear updates, honest advice, and a stress-free experience."
            />
          </div>

          <div className="md:col-span-6">
            <Card
              title="Proven Results"
              text="Our portfolio speaks for itself—businesses across India trust Urbanzi Solutions for websites that drive growth and deliver real value."
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* Card */
function Card({ title, text }) {
  return (
    <div className="relative h-full rounded-3xl p-6 md:p-10 bg-gradient-to-br from-[#0e1c3a] via-[#0b162e] to-[#070c18] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">

      {/* fade at bottom of each box */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-24 bg-gradient-to-t from-black/80 to-transparent" />

      <h3 className="relative z-10 text-xl md:text-[26px] font-medium mb-3 md:mb-4 leading-snug">
        {title}
      </h3>

      <p className="relative z-10 text-white/70 leading-relaxed text-sm md:text-[15px] max-w-[520px]">
        {text}
      </p>
    </div>
  );
}