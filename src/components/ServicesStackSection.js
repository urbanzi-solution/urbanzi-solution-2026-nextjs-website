"use client";

import {
  Code2,
  Paintbrush,
  Settings,
  ShoppingCart,
  Search,
  Database,
  User,
  Palette,
  Wrench,
} from "lucide-react";

import { SiWordpress, SiShopify, SiNextdotjs } from "react-icons/si";

const services = [
  {
    title: "Website Design",
    description:
      "Impress your visitors at first glance with beautiful visuals and layout that works for you. We'll make sure your website looks unique, matches your brand, and is easy to navigate even for first-time users.",
    icon: Paintbrush,
  },
  {
    title: "Website Development",
    description:
      "We handle all the behind-the-scenes building of your website so it's fast, secure, and reliable. No jargon, just results you can see and a site you'll be proud to share.",
    icon: Code2,
  },
  {
    title: "Custom Web App Development",
    description:
      "Need more than a standard site? We build custom online tools and applications like booking forms, dashboards, or unique features that are tailored to your specific business needs and workflows.",
    icon: Settings,
  },
  {
    title: "E-commerce",
    description:
      "Want to sell online? We set up secure, easy-to-manage stores that make buying and selling simple for you and your customers. Grow your business with a digital shop that runs 24/7.",
    icon: ShoppingCart,
  },
  {
    title: "WordPress Website Development",
    description:
      "WordPress makes updating your site a breeze. We set up flexible websites you can manage yourself, whether you want to post blogs, share updates, or add new pages with ease.",
    icon: SiWordpress,
  },
  {
    title: "SEO-Friendly Websites",
    description:
      "Your website shouldn't just exist it should be found. We follow best practices so Google and other search engines can find your business easily, helping you reach more potential customers.",
    icon: Search,
  },
  {
    title: "CMS Web Apps",
    description:
      "Want control over your content? Our Content Management Systems (CMS) put the power in your hands, so you can add, edit, or remove text and images anytime, no technical skills required.",
    icon: Database,
  },
  {
    title: "Portfolio Website",
    description:
      "Make your work shine! We design striking online portfolios so service providers, artists, and businesses can showcase what they do best and attract new clients.",
    icon: User,
  },
  {
    title: "UI/UX Design",
    description:
      "We create websites that aren't just good-looking, but also easy and enjoyable to use. Your visitors will find what they need without confusion or frustration, keeping them coming back.",
    icon: Palette,
  },
  {
    title: "Shopify Website Development",
    description:
      "Prefer Shopify for your online store? We set up and customize your Shopify shop, handling everything from design to payment gateways, so you can focus on your products.",
    icon: SiShopify,
  },
  {
    title: "Next.js Full Framework Development",
    description:
      "Build modern, scalable, and lightning-fast web applications with Next.js. From SSR to API routes, we deliver robust solutions using the latest features for your business.",
    icon: SiNextdotjs,
  },
  {
    title: "Website Maintenance & Support",
    description:
      "We don't just launch your website and disappear. Our friendly support team keeps your site updated, secure, and running smoothly, so you never have to worry about a thing.",
    icon: Wrench,
  },
];

export default function ServicesStackSection() {

  const rows = [];
  for (let i = 0; i < services.length; i += 2) {
    rows.push(services.slice(i, i + 2));
  }

  return (
    <section className="bg-black text-white py-20 md:py-40 px-6 md:px-[95px] -mt-25">

      <div className="max-w-[1400px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-16">

        {/* LEFT SIDE */}
        <div className="lg:col-span-5 md:sticky md:top-32 self-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[58px] leading-[1.15] font-light">
            Our Web <br className="hidden md:block"/>
            Development <br className="hidden md:block"/>
            <span className="text-blue-300 italic font-normal">
              Services
            </span>
          </h2>

          <button className="mt-8 md:mt-12 bg-white text-orange-600 px-7 py-3 rounded-full text-base md:text-lg font-medium hover:scale-105 transition-all duration-300">
            See More Services
          </button>
        </div>

        {/* RIGHT SIDE */}

        <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
          <div className="w-full md:w-[820px]">

            {/* MOBILE STACK */}
            <div className="block md:hidden">

              {services.map((service, index) => {

                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="sticky top-24 mb-10 transition-all duration-500 ease-out"
                    style={{ zIndex: index + 1 }}
                  >
                    <div className="rounded-3xl p-7 flex flex-col justify-center items-center text-center shadow-xl bg-[#173070] transform-gpu transition-all duration-500 ease-out hover:scale-[1.02] will-change-transform">

                      <div className="bg-blue-600 p-4 rounded-xl mb-6 shadow-lg shadow-black/30">
                        <Icon size={28}/>
                      </div>

                      <h3 className="text-lg font-semibold mb-3">
                        {service.title}
                      </h3>

                      <p className="text-sm leading-relaxed opacity-90 max-w-[260px]">
                        {service.description}
                      </p>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* DESKTOP STACK */}
            <div className="hidden md:block">

              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="mb-8 md:sticky md:top-28 transition-all duration-500 ease-out"
                  style={{ zIndex: rowIndex + 1 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-3">

                    {row.map((service, index) => {

                      const Icon = service.icon;

                      return (
                        <div
                          key={index}
                          className="rounded-3xl p-12 flex flex-col justify-center items-center text-center shadow-xl bg-[#173070] transform-gpu transition-all duration-500 ease-out hover:scale-[1.03] will-change-transform"
                        >

                          <div className="bg-blue-600 p-5 rounded-xl mb-8 shadow-lg shadow-black/30">
                            <Icon size={28}/>
                          </div>

                          <h3 className="text-[24px] font-semibold mb-4">
                            {service.title}
                          </h3>

                          <p className="text-[14px] leading-relaxed opacity-90 max-w-[260px]">
                            {service.description}
                          </p>

                        </div>
                      );
                    })}

                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}