"use client";

const features = [
  {
    title: "Real Multi-Platform Know-How",
    desc: "We help you reach both Android and iOS users, so no opportunity is missed.",
  },
  {
    title: "Truly Custom Solutions",
    desc: "Every app is uniquely shaped around your business—not copied from someone else’s.",
  },
  {
    title: "User-Focused Results",
    desc: "We create apps that people actually want to use—reducing frustration, boosting engagement, and earning loyal fans.",
  },
  {
    title: "Strong App Store & SEO Support",
    desc: "Not just development. We optimize your listings so people actually find and download your app.",
  },
  {
    title: "Constant Communication",
    desc: "No silence, no worry—you always know what’s happening and why.",
  },
  {
    title: "Full-Circle Partner",
    desc: "From that first idea to every update down the road—you get the same caring team.",
  },
];

export default function WhyBestMobileDevelopment() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16">
          Why We Are Best In Mobile Development
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 px-10 py-8 text-center"
            >
              <h3 className="text-lg font-semibold text-yellow-200 mb-3">
                {item.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Last full width card */}
          <div className="md:col-span-2 rounded-2xl border border-white/10 px-10 py-10 text-center">
            <h3 className="text-lg font-semibold text-yellow-200 mb-3">
              Proven Results
            </h3>

            <p className="text-white/80 text-sm leading-relaxed max-w-3xl mx-auto">
              Businesses across India trust us to build apps that delight users and deliver value.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
