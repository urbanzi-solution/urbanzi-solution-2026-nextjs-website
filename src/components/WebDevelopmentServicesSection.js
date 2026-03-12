"use client";

import { motion } from "framer-motion";
import { Paintbrush, Code, Settings, ShoppingCart, Globe, Search, Database, User, Palette, Store, Rocket, Wrench } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const services = [
  { icon: <Paintbrush size={26} />, title: "Website Design", desc: "Impress your visitors at first glance with beautiful visuals and layouts made just for you. We'll make sure your website looks unique, matches your brand, and is easy to navigate — even for first-time users." },
  { icon: <Code size={26} />, title: "Website Development", desc: "We handle all the behind-the-scenes building of your website so it's fast, secure, and reliable. No jargon — just results you can see and a site you'll be proud to share." },
  { icon: <Settings size={26} />, title: "Custom Web App Development", desc: "Need more than a standard site? We build custom online tools and applications — like booking forms, dashboards, or unique features — tailored to your specific business needs and workflows." },
  { icon: <ShoppingCart size={26} />, title: "E-commerce", desc: "Want to sell online? We set up secure, easy-to-manage stores that make buying and selling simple for you and your customers. Grow your business with a digital shop that runs 24/7." },
  { icon: <Globe size={26} />, title: "WordPress Website Development", desc: "WordPress makes updating your site a breeze. We set up flexible websites you can manage yourself — whether you want to post blogs, share updates, or add new pages with ease." },
  { icon: <Search size={26} />, title: "SEO-Friendly Websites", desc: "Your website shouldn't just exist — it should be found. We follow best practices so Google and other search engines can find your business easily, helping you reach more potential customers." },
  { icon: <Database size={26} />, title: "CMS Web Apps", desc: "Want control over your content? Our Content Management Systems (CMS) put the power in your hands, so you can add, edit, or remove text and images anytime — no technical skills required." },
  { icon: <User size={26} />, title: "Portfolio Website", desc: "Make your work shine! We design striking online portfolios so service providers, artists, and businesses can showcase what they do best and attract new clients." },
  { icon: <Palette size={26} />, title: "UI/UX Design", desc: "We create websites that aren't just good-looking, but also easy and enjoyable to use. Your visitors will find what they need without confusion or frustration, keeping them coming back." },
  { icon: <Store size={26} />, title: "Shopify Website Development", desc: "Prefer Shopify for your online store? We set it up and customize your Shopify shop, handling everything from design to payment gateways, so you can focus on your products." },
  { icon: <Rocket size={26} />, title: "Next.js Full Framework Development", desc: "Build modern, scalable, and lightning-fast web applications with Next.js. From SSR to API routes, we deliver robust solutions using the latest features for your business." },
  { icon: <Wrench size={26} />, title: "Website Maintenance & Support", desc: "We don't just launch your website and leave. Our friendly support team keeps your site updated, secure, and running smoothly — so you never have to worry about a thing." },
];

export default function WebDevelopmentServicesSection() {
  return (
    <section className="bg-[#020617] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Our Web Development Services</h2>
          <div className="w-20 h-[3px] bg-white mx-auto mt-4 rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">Everything You Need for a <span>Standout Web Presence</span></p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#0a1a35] to-[#02060f] p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 mb-6 text-white/80">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4 text-white leading-snug">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
        >
          <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:scale-105 transition duration-300">
            See More Services →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
