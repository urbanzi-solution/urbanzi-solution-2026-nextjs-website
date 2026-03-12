"use client";

const steps = [
  {
    title: "Discover & Listen",
    desc: "We talk with you—what’s your business, who are your customers, and what would success look like ?",
  },
  {
    title: "Research & Plan",
    desc: "We study your competition, market trends, and discover the gaps. Then we build a marketing plan based on facts, not “hype.”",
  },
  {
    title: "Create & Launch",
    desc: "Our team creates eye-catching ads, content, and campaigns- launching them at exactly the right time and place.",
  },
  {
    title: "Track & Improve",
    desc: "We monitor your results weekly, make smart tweaks, and keep you updated. You see growth in real numbers, not just promises.",
  },
];

export default function TheProcess() {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-light mb-12 md:mb-16">
          The <span className="font-semibold">Process</span>
        </h2>

        <div className="border-t border-white/10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[80px_240px_1fr] items-start md:items-center py-10 md:py-16 border-b border-white/10 gap-4 md:gap-0 text-center md:text-left"
            >
              {/* Number */}
              <div className="text-3xl md:text-4xl font-semibold text-[#2db4ff] ml-0 md:ml-14">
                {index + 1}
              </div>

              {/* Title */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white ml-0 md:ml-22">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto md:mx-0 ml-0 md:ml-30">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
