"use client";

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Top Badge */}
        <span className="text-[10px] md:text-xs tracking-widest px-3 md:px-4 py-2 bg-neutral-800 rounded-full text-neutral-300">
          INSIGHTS THAT DRIVE DIGITAL GROWTH.
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 md:mt-8 leading-tight">
          Latest Post and{" "}
          <span className="text-blue-400 italic">Insights</span>
        </h2>

        {/* Description */}
        <p className="text-neutral-400 mt-4 md:mt-6 max-w-3xl text-sm md:text-base">
          Stay ahead with expert insights, emerging industry trends, and practical growth strategies designed to elevate your digital presence and accelerate business success.
        </p>

        {/* Top Divider */}
        <div className="border-t border-neutral-800 mt-12 md:mt-16" />

        {/* ================= POST 1 ================= */}
        <div className="group relative border-b border-neutral-800">

          <div className="absolute inset-0 bg-neutral-900 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div className="relative z-10 grid grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 items-start">

            <div className="col-span-12 md:col-span-2 text-neutral-400 text-sm">
              Oct 20, 2025
            </div>

            <div className="col-span-12 md:col-span-4">
              <img
                src="/img7.webp"
                alt="Post"
                className="w-full h-52 md:h-64 object-cover"
              />
            </div>

            <div className="col-span-12 md:col-span-6">
              <span className="text-xs px-3 py-1 rounded-full bg-purple-900 text-purple-300">
                Tools
              </span>

              <h3 className="text-xl md:text-2xl font-semibold mt-4 md:mt-5 leading-snug">
                Why One-Click Deployment Is a Game Changer for AI-Powered Apps
              </h3>

              <p className="text-neutral-400 mt-3 md:mt-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <button className="mt-5 md:mt-6 text-sm">
                Read more
              </button>
            </div>

          </div>
        </div>

        {/* ================= POST 2 ================= */}
        <div className="group relative border-b border-neutral-800">

          <div className="absolute inset-0 bg-neutral-900 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div className="relative z-10 grid grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 items-start">

            <div className="col-span-12 md:col-span-2 text-neutral-400 text-sm">
              Oct 20, 2025
            </div>

            <div className="col-span-12 md:col-span-4">
              <img
                src="/img3.webp"
                alt="Post"
                className="w-full h-52 md:h-64 object-cover"
              />
            </div>

            <div className="col-span-12 md:col-span-6">
              <span className="text-xs px-3 py-1 rounded-full bg-green-900 text-green-300">
                Business
              </span>

              <h3 className="text-xl md:text-2xl font-semibold mt-4 md:mt-5 leading-snug">
                Collaborative Coding at Scale: Supporting Developers in Real-Time
              </h3>

              <p className="text-neutral-400 mt-3 md:mt-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <button className="mt-5 md:mt-6 text-sm">
                Read more
              </button>
            </div>

          </div>
        </div>

        {/* ================= POST 3 ================= */}
        <div className="group relative">

          <div className="absolute inset-0 bg-neutral-900 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div className="relative z-10 grid grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 items-start">

            <div className="col-span-12 md:col-span-2 text-neutral-400 text-sm">
              Oct 20, 2025
            </div>

            <div className="col-span-12 md:col-span-4">
              <img
                src="/post3.webp"
                alt="Post"
                className="w-full h-52 md:h-64 object-cover"
              />
            </div>

            <div className="col-span-12 md:col-span-6">
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-900 text-cyan-300">
                Ideas
              </span>

              <h3 className="text-xl md:text-2xl font-semibold mt-4 md:mt-5 leading-snug">
                Seamless Integrations: Connecting Your SaaS to the Modern Stack
              </h3>

              <p className="text-neutral-400 mt-3 md:mt-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <button className="mt-5 md:mt-6 text-sm">
                Read more
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}