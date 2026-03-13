"use client";

const steps = [
  {
    title: "Discovery",
    desc: "Tired of vendors who just sell you what they know? We start by listening — learning your business and your biggest pain points.",
  },
  {
    title: "Plan & Design",
    desc: "Together, we map out what success looks like and design workflows your team will actually love using—no technical confusion",
  },
  {
    title: "Development",
    desc: "Our experienced engineers build your solution, with regular feedback loops—so you’re never left guessing.",
  },
  {
    title: "Launch & Support",
    desc: "We deliver and integrate your software, provide hands-on training, and offer ongoing support and improvements as your needs grow.",
  },
];

export default function SoftProcess() {
  return (
    <section className="bg-black py-20 md:py-28 px-5 md:px-6 text-white">
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
