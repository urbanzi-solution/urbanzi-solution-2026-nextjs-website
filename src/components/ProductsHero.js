"use client";

export default function ProductsHero() {
  return (
    <section className="bg-black text-white py-23 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Badge */}
        <div className="inline-block bg-white/10 text-gray-300 text-xs tracking-widest px-5 py-2 rounded-full uppercase mb-8">
          Our Products
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl font-light leading-snug mb-6 max-w-4xl">
        Powerful products built to simplify and scale your{" "}
        <span className="text-blue-400 italic font-normal">
         business.
        </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
          Our products are designed to solve real business problems through
          automation, clarity, and performance. Each solution is built with
          scalability, security, and ease of use at its core so you can focus
          on growth while we handle the complexity.
        </p>

      </div>
    </section>
  );
}
