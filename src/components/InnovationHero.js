"use client";
import { useLeadModal } from "@/context/LeadContext";

export default function InnovationHero() {
  const { openModal } = useLeadModal();
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl min-h-[520px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/innovation-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* content */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-semibold text-[#9fd0ff]">
              Digital Marketing Agency in Trivandrum, Kerala – Grow Traffic, Leads & Sales
            </h1>

            <p className="mt-6 max-w-[720px] mx-auto text-white/90 text-[16px] md:text-[18px] leading-relaxed">
             A digital marketing agency helps your business attract customers online using SEO, social media, paid ads, and content. At Urbanzi, we design measurable growth systems that turn attention into leads, and leads into revenue for businesses across Kerala.
            </p>

            <div className="mt-10">
              <button 
                onClick={() => openModal("Digital Marketing Hero")}
                className="px-8 py-3 rounded-full  bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition"
              >
                Get a Free Growth Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
