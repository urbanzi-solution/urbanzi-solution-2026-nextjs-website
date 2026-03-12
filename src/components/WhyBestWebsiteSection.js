"use client";

export default function WhyBestWebsiteSection() {
  return (
    <section className="bg-black py-28 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Why We Are Best in Website Development and Design
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="border border-white/20 rounded-xl p-8 bg-black">
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">
              Expertise Across Platforms
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              We have deep experience building websites on WordPress, Shopify,
              React, Next.js, and more—so you get the ideal solution, every time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-white/20 rounded-xl p-8 bg-black">
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">
              Tailored to Your Needs
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Every project is uniquely designed to reflect your brand and meet
              your specific business goals, never a cookie-cutter approach.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-white/20 rounded-xl p-8 bg-black">
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">
              User-Centered Design
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              We focus on intuitive navigation, engaging experiences, and
              visually appealing layouts that turn visitors into loyal
              customers.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-white/20 rounded-xl p-8 bg-black">
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">
              SEO-Driven From Day One
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Our sites are built with the latest SEO best practices, ensuring
              your business gets found on Google and reaches more potential
              customers.
            </p>
          </div>

          {/* Card 5 */}
          <div className="border border-white/20 rounded-xl p-8 bg-black">
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">
              Reliable, End-to-End Support
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              From discovery to launch and ongoing maintenance, you always have
              a dedicated team beside you.
            </p>
          </div>

          {/* Card 6 */}
          <div className="border border-white/20 rounded-xl p-8 bg-black">
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">
              Transparent Communication
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              We keep you in the loop at every step, providing clear updates,
              honest advice, and a stress-free experience.
            </p>
          </div>

          {/* Full width card */}
          <div className="md:col-span-2 border border-white/20 rounded-xl p-10 bg-black text-center">
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">
              Proven Results
            </h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-3xl mx-auto">
              Our portfolio speaks for itself—businesses across India trust
              Urbanzi Solutions for websites that drive growth and deliver real
              value.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
