"use client";

export default function StillHaveQuestions() {
  return (
    <section className="bg-black py-16 md:py-24 px-5 md:px-[75px] -mt-10 md:-mt-25">
      <div className="max-w-[1400px] mx-auto">

        <div
          className="relative overflow-hidden rounded-[22px] md:rounded-[28px] min-h-[260px] md:min-h-[320px] flex items-center justify-center text-center"
          style={{
            backgroundImage: "url('/ct-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* dark orange overlay */}
          <div className="absolute inset-0 bg-[#8a3b1a]/70" />

          {/* content */}
          <div className="relative z-10 px-4 md:px-6 max-w-3xl">
            <h2 className="text-white text-[30px] sm:text-[36px] md:text-[48px] leading-tight font-semibold mb-3 md:mb-4">
              Still have questions?
            </h2>

            <p className="text-white/90 text-[15px] sm:text-base md:text-lg mb-6 md:mb-8">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>

            <button
              className="
                bg-white text-[#e14a14]
                px-6 md:px-8 py-2.5 md:py-3 rounded-full
                text-sm md:text-base
                font-medium
                transition
                hover:scale-105
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              "
            >
              Get in Touch
            </button>
          </div>

          {/* soft vignette */}
          <div className="pointer-events-none absolute inset-0 rounded-[22px] md:rounded-[28px] shadow-[inset_0_0_120px_rgba(0,0,0,0.45)]" />
        </div>

      </div>
    </section>
  );
}