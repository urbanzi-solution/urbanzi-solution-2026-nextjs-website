"use client";

const steps = [
  {
    title: "Discover",
    desc: "We sit down with you—virtually or in person—to listen, understand your challenges, and learn about your audience and goals.",
  },
  {
    title: "Design",
    desc: "Our creative team crafts stylish, easy-to-use layouts, previewing the look and feel before anything goes live.",
  },
  {
    title: "Development",
    desc: "We bring your website to life with secure coding and the latest technology—keeping things running fast and mobile-friendly.",
  },
  {
    title: "Launch & Support",
    desc: "Go live worry-free! We handle the details, train you on updates (if you want), and remain by your side for maintenance and new ideas.",
  },
];

export default function OurWebProcessSection() {
  return (
    <section className="bg-black py-20 md:py-28 px-5 md:px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white/70">
            The <span className="font-semibold text-white">Process</span>
          </h2>
        </div>

        <div className="space-y-10 md:space-y-16">

          {steps.map((step, index) => (
            <div key={index}>

              <div className="grid grid-cols-1 md:grid-cols-[80px_220px_1fr] items-start md:items-center gap-4 md:gap-10 py-6 md:py-10 text-center md:text-left">

                {/* Number */}
                <div className="text-3xl md:text-4xl font-semibold text-sky-400">
                  {index + 1}
                </div>

                {/* Title */}
                <div className="text-lg md:text-base font-semibold text-white">
                  {step.title}
                </div>

                {/* Description */}
                <p className="text-sm text-white/40 max-w-xl mx-auto md:mx-0">
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
