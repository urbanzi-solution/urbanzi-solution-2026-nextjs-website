"use client";

import {
  ChartBarIcon,
  ShareIcon,
  BuildingStorefrontIcon,
  CursorArrowRaysIcon,
  PencilSquareIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useLeadModal } from "@/context/LeadContext";

const services = [
  {
    icon: ChartBarIcon,
    title: "Digital Marketing Strategy & Consulting",
    desc: "Lost in the digital maze? We create clear, step-by-step marketing strategies that align with your goals, budget, and timeline.",
  },
  {
    icon: ShareIcon,
    title: "Social Media Marketing",
    desc: "Struggling to get noticed on social platforms? We create engaging content and manage your social presence to build loyalty and real connections.",
  },
  {
    icon: BuildingStorefrontIcon,
    title: "Digital Marketing Services for Small Businesses",
    desc: "Feeling overwhelmed as a small business owner? Our tailored digital marketing packages help you compete and grow locally.",
  },
  {
    icon: CursorArrowRaysIcon,
    title: "Google Ads & Online Advertising",
    desc: "Tired of spending on ads that don’t convert? We create and manage high-performing Google Ads campaigns for real ROI.",
  },
  {
    icon: PencilSquareIcon,
    title: "Content Marketing & SEO",
    desc: "Want to be found when customers search? We create optimized content that improves rankings and organic traffic.",
  },
  {
    icon: EnvelopeIcon,
    title: "Email Marketing",
    desc: "Still not using email marketing? We create automated email campaigns that nurture leads, re-engage past customers, and drive consistent sales for your business.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Digital Marketing Consulting Services",
    desc: "Need expert guidance without long-term commitments? Our consultants analyze your current performance and recommend clear actions.",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Analytics & Reporting",
    desc: "Confused by numbers? We provide clear, easy-to-understand reports so you always know what’s working.",
  },
];

export default function DigitalMarketingServices() {
  const { openModal } = useLeadModal();
  return (
    <section className="bg-[#050914] text-white py-10 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Our Digital Marketing Services
          </h2>

          <div className="flex justify-center mt-3 mb-3">
            <span className="h-[2px] w-16 bg-white/30" />
          </div>

          <p className="text-xs sm:text-sm text-white/70">
            Everything You Need to Grow Your Business Online
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  aspect-auto sm:aspect-square
                  min-h-[260px] md:min-h-[340px]
                  rounded-xl
                  border border-white/10
                  bg-gradient-to-br from-[#0a1a35] to-[#02060f]
                  p-6 md:p-10
                  flex flex-col items-center justify-center text-center
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/5 mb-5 md:mb-6">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white/80" />
                </div>

                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white">
                  {service.title}
                </h3>

                <p className="text-xs md:text-sm leading-relaxed text-white/70 max-w-[260px]">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10 md:mt-12">
          <button
            onClick={() => openModal("Digital Marketing Services Section")}
            className="bg-white text-black px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-medium hover:bg-gray-200 transition"
          >
            Get Your Marketing Strategy →
          </button>
        </div>

      </div>
    </section>
  );
}
