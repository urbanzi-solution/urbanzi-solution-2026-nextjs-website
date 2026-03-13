import SeoHero from "@/components/SeoHero";
import SeoWebWhoWeAre from "@/components/SeoWhoWeAre";
import SeoServicesSection from "@/components/SeoServicesSection";
import OurSeoProcessSection from "@/components/OurSeoProcessSection";
import WhyBestSeoSection from "@/components/WhyBestSeoSection";
import WhyChooseSEO from "@/components/WhyChooseSEO";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SeoFaqSection from "@/components/SeoFaqSection";
import SEOCTAA from "@/components/SEOCTAA";
import Footer from "@/components/Footer";
export const metadata = {
  title: "SEO Services in Kerala & Trivandrum | Urbanzi Solutions",
  description: "Urbanzi Solutions is a trusted SEO company in Trivandrum, Kerala. We offer local SEO, Google My Business optimization, on-page SEO, and backlink building to help your business rank and grow.",
  alternates: {
    canonical: "https://urbanzi.in/services/seo",
  },
};

export default function SeoPage() {
 return (
    <>
    <SeoHero />
    <SeoWebWhoWeAre />
    <SeoServicesSection />
    <OurSeoProcessSection />
    <WhyBestSeoSection />
    <WhyChooseSEO />
    <CaseStudiesSection />
    <SeoFaqSection />
    <SEOCTAA />
    <Footer />
    </>
 );
}