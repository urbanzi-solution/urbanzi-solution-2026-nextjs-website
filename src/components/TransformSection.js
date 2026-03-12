"use client";

export default function TransformSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Top Badge */}
        <div className="inline-block bg-white/10 text-gray-300 text-[11px] tracking-widest px-4 py-1.5 rounded-full uppercase mb-6">
          Accelerating Business Success
        </div>

        {/* Smaller Heading */}
        <h2 className="text-3xl md:text-4xl font-light leading-snug mb-14">
          How Urbanzi Solutions{" "}
          <span className="text-blue-400 italic">
            Transforms Businesses
          </span>
        </h2>

        {/* Steps */}
        <div className="space-y-12">

          <ProcessRow
            title="Understand"
            description="We analyze your business workflows and challenges"
          />

          <ProcessRow
            title="Design"
            description="We craft optimized, user-focused digital systems"
          />

          <ProcessRow
            title="Build"
            description="We develop scalable, secure, high-performance software"
          />

          <ProcessRow
            title="Scale"
            description="We support and evolve your system as you grow"
            isLast
          />

        </div>
      </div>
    </section>
  );
}

function ProcessRow({ title, description, isLast }) {
  return (
    <div>
      <div className="grid md:grid-cols-2 items-center gap-6">

        {/* Smaller Title */}
        <h3 className="text-2xl md:text-3xl font-light">
          {title}
        </h3>

        {/* Smaller Description */}
        <p className="text-gray-400 text-base md:text-lg text-left md:text-right">
          {description}
        </p>
      </div>

      {!isLast && (
        <div className="border-b border-dashed border-blue-400/40 mt-8"></div>
      )}
    </div>
  );
}
