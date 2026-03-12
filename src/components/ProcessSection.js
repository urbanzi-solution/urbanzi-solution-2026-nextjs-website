"use client";

const steps = [
  {
    no: "1",
    title: "Design & Prototype",
    desc:
      "Worried that you’ll hate the look or feel? We show you every step, gather your input, and make sure the experience matches your brand AND your users’ needs.",
  },
  {
    no: "2",
    title: "Development",
    desc:
      "Our coders quietly handle every detail—so you don’t have to worry about bugs or slowdowns.",
  },
  {
    no: "3",
    title: "Test & Launch",
    desc:
      "Launching doesn’t need to be scary. We ensure your app is smooth, secure, and ready for every device—then walk you through the big day.",
  },
  {
    no: "4",
    title: "Support & Grow",
    desc:
      "We’re here even after launch—resolving issues quickly, helping with updates, and working with you to grow your app’s reach.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-black text-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-light mb-12 md:mb-16">
          Our <span className="font-semibold">Process</span>
        </h2>

        <div className="border-t border-white/10">
          {steps.map((step, index) => (
            <div key={index} className="border-b border-white/10">

              <div className="grid grid-cols-1 md:grid-cols-[80px_240px_1fr] gap-4 md:gap-6 py-8 md:py-12 items-start text-center md:text-left">

                {/* Number */}
                <div className="text-sky-400 text-2xl md:text-3xl font-semibold">
                  {step.no}
                </div>

                {/* Title */}
                <div className="text-white font-semibold text-base md:text-base">
                  {step.title}
                </div>

                {/* Description */}
                <div className="text-white/40 text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
                  {step.desc}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
