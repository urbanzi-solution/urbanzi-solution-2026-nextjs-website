"use client";

const reasons = [
  {
    title: "Local SEO Focus & Kerala-Wide Expertise",
    desc: "We get Trivandrum and Kerala markets, and what works for your unique audience.",
  },
  {
    title: "Clear, Measurable Results",
    desc: "We don’t just promise—every campaign comes with simple reports showing calls.",
  },
  {
    title: "White-Hat, Sustainable Tactic",
    desc: "Only safe, Google-endorsed methods—no risky shortcuts or tricks.",
  },
  {
    title: "Transparent, Honest Support",
    desc: "We explain every step and never leave you guessing.",
  },
  {
    title: "Google My Business Masters",
    desc: "More reviews, top-3 map visibility, and higher local trust.",
  },
  {
    title: "Smart, Safe Link-Building",
    desc: "Backlinks that last and never put your site at risk.",
  },
  {
    title: "Flexible Help & Training",
    desc: "We’ll train you or your team if wanted, and we’re always available for any question—big or small.",
    full: true,
  },
];

export default function WhyBestSeoSection() {
  return (
    <section className="bg-black py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16">
          Why We Are Best In SEO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-white/10 bg-black px-8 py-8 text-center
                ${item.full ? "md:col-span-2" : ""}
              `}
            >
              <h3 className="text-lg md:text-xl font-semibold text-yellow-200 mb-3">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-white/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
