"use client";

const steps = [
  {
    title: "Brief & Discovery",
    desc: "We understand your brand, your audience, and what feeling you want your visuals to create.",
  },
  {
    title: "Concept & Moodboard",
    desc: "We share visual directions, color palettes, and style references before anything is designed — so we're fully aligned from the start.",
  },
  {
    title: "Design & Creation",
    desc: "Our designers bring the concept to life with precision, creativity, and attention to every visual detail.",
  },
  {
    title: "Review & Refine",
    desc: "You review, we refine. We work through feedback until the output is exactly what you envisioned.",
  },
  {
    title: "Deliver & Support",
    desc: "Final files delivered in all formats you need — print, web, social — with ongoing support for future updates.",
  },
];

export default function GraphicsProcessSection() {
  return (
    <section className="bg-black md:py-20 py-16 px-5 md:px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white/70">
            Our <span className="font-semibold text-white">Process</span>
          </h2>
        </div>

        <div className="space-y-10 md:space-y-16">

          {steps.map((step, index) => (
            <div key={index}>

              <div className="grid grid-cols-1 md:grid-cols-[80px_220px_1fr] gap-4 md:gap-10 items-start md:items-center py-6 md:py-10 text-center md:text-left">

                {/* Number */}
                <div className="text-3xl md:text-4xl font-semibold text-sky-400">
                  {index + 1}
                </div>

                {/* Title */}
                <div className="text-lg md:text-base font-semibold text-white">
                  {step.title}
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 max-w-xl mx-auto md:mx-0">
                  {step.desc}
                </p>

              </div>

              {/* Divider */}
              {index !== steps.length - 1 && (
                <div className="h-px bg-white/10 w-full" />
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
