"use client";

export default function SoftHero() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl min-h-[520px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/softhero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* content */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-[12vw] sm:text-[42px] md:text-[15vw] md:text-[56px] lg:text-[18vw] lg:text-[64px] leading-[1.1] font-semibold text-[#9fd0ff]">
              Software Development Company in Trivandrum, Kerala 
              <br />
             Custom Business Software That Scales

            </h1>

            <p className="mt-6 max-w-[720px] mx-auto text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              Urbanzi is a leading software development company in Trivandrum, Kerala, delivering custom CRM, enterprise software, SaaS platforms & healthcare solutions. Build scalable, secure business software tailored to your workflows.

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
