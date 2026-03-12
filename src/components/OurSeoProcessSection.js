"use client";

const steps = [
  {
    title: "Discovery & Goal Setting",
    desc: "We get to know you—your market, competition, and the business results you want, not just keywords.",
  },
  {
    title: "Keyword Research & Market Study",
    desc: "Our experts find the best phrases your customers actually use, analyze local search trends, and study what your competitors are doing right and wrong.",
  },
  {
    title: "Strategy Planning",
    desc: "We create a clear, custom roadmap for on-page SEO, Google My Business, link building, and content—showing you what to expect.",
  },
  {
    title: "On-Page & Technical SEO",
    desc: "We tune your site structure, fix page issues, speed up load times, and optimize every detail for search engines and real visitors.",
  },
  {
    title: "Local SEO & Google My Business Optimization",
    desc: "We polish your profiles, connect your details everywhere, and help you win in “local pack” searches that drive the most relevant leads.",
  },
  {
    title: "Backlink Building & Authority Growth",
    desc: "We earn high-quality, topic-relevant links, boost your reputation, and protect your rankings with ethical, Google-approved strategies.",
  },
  {
    title: "Review, Report & Continuous Improvement",
    desc: "Get clear, honest monthly reports—see what’s improved, where you stand, and our next moves to keep you winning.",
  },
];

export default function OurSeoProcessSection() {
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
