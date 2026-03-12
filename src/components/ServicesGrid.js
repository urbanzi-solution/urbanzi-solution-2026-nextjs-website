"use client";

import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  CloudIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  PencilIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: DevicePhoneMobileIcon,
    title: "App Development",
    desc: "Empower your ideas with seamless mobile experiences.",
    hover: "hover:bg-[#2563EB]",
    link: "/app-development",
  },
  {
    icon: GlobeAltIcon,
    title: "Web Development",
    desc: "Transform your vision into engaging digital experiences.",
    hover: "hover:bg-white",
    whiteHover: true,
    link: "/web-development",
  },
  {
    icon: PaintBrushIcon,
    title: "UI/UX Design",
    desc: "Craft intuitive and beautiful user interfaces.",
    hover: "hover:bg-[#853500]",
    link: "/services/ui-ux-design",
  },

  {
    icon: CloudIcon,
    title: "Cloud Solutions",
    desc: "Secure cloud platforms that scale with your ambitions.",
    hover: "hover:bg-[#853500]",
    link: "/services/cloud-solutions",
  },
  {
    icon: MegaphoneIcon,
    title: "Digital Marketing",
    desc: "Campaigns that build strong brand relationships.",
    hover: "hover:bg-[#2563EB]",
    link: "/digital-marketing",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "SEO",
    desc: "Smart strategies that improve your search visibility.",
    hover: "hover:bg-white",
    whiteHover: true,
    link: "/seo",
  },

  {
    icon: ShoppingCartIcon,
    title: "E-commerce Solutions",
    desc: "Effortless shopping experiences for customers.",
    hover: "hover:bg-[#2563EB]",
    link: "/services/ecommerce-solutions",
  },
  {
    icon: PencilIcon,
    title: "Graphics & Animation",
    desc: "Stunning visuals and motion storytelling.",
    hover: "hover:bg-white",
    whiteHover: true,
    link: "/graphics-animation",
  },
  {
    icon: ShieldCheckIcon,
    title: "Cybersecurity",
    desc: "Robust protection for digital assets.",
    hover: "hover:bg-[#853500]",
    link: "/services/cybersecurity",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#050914] text-white py-10 px-0">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <a
                key={index}
                href={service.link}
                className="block"
              >
                <div
                  className={`
                    group
                    aspect-square
                    p-12
                    border border-white/10
                    bg-gradient-to-br from-[#0a1a35] to-[#02060f]
                    transition-all duration-500
                    flex flex-col justify-center
                    hover:-translate-y-2
                    hover:bg-none
                    ${service.hover}
                  `}
                >
                  <Icon
                    className={`
                      h-12 w-12 mb-8 transition-colors duration-300
                      ${
                        service.whiteHover
                          ? "text-white/80 group-hover:text-[#2563EB]"
                          : "text-white/80"
                      }
                    `}
                  />

                  <h3
                    className={`
                      text-2xl font-semibold mb-5 transition-colors duration-300
                      ${
                        service.whiteHover
                          ? "text-white group-hover:text-[#2563EB]"
                          : "text-white"
                      }
                    `}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`
                      text-sm leading-relaxed transition-colors duration-300
                      ${
                        service.whiteHover
                          ? "text-white/70 group-hover:text-[#2563EB]"
                          : "text-white/70"
                      }
                    `}
                  >
                    {service.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
