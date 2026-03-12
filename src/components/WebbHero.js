"use client";

export default function WebbHero() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl min-h-[520px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/Webhero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* content */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-[12vw] sm:text-[42px] md:text-[15vw] md:text-[56px] lg:text-[18vw] lg:text-[64px] leading-[1.1] font-semibold text-[#9fd0ff]">
              
               Web Development Company in Trivandrum, Kerala 
              <br />
             High-Performance Websites That Convert

            </h1>

            <p className="mt-6 max-w-[720px] mx-auto text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              Urbanzi is a professional web development company in Trivandrum, Kerala, building fast, secure, SEO-optimized websites and e-commerce platforms. Custom WordPress, Shopify, React & Next.js solutions for businesses that want more leads and sales.

            </p>

            <div className="mt-10">
              <button className="px-8 py-3 rounded-full  bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
