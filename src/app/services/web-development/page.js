import WebHero from "@/components/WebbHero";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ServicesStackSection from "@/components/ServicesStackSection";
import OurExpertiseSection from "@/components/OurExpertiseSection";
import OurProcessSection from "@/components/OurProcessSection";
import WhyWeAreBestSection from "@/components/WhyWeAreBestSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import WebCTA from "@/components/WebCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Web Development Services in Kerala & Trivandrum",
  description: "Urbanzi Solutions offers professional web design and development services in Trivandrum, Kerala. We build fast, SEO-friendly websites, e-commerce stores, and custom web apps for businesses.",
  alternates: {
    canonical: "https://www.urbanzi.in/services/web-development",
  },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <WebHero />
      <WhoWeAreSection />
      <ServicesStackSection />
      <OurExpertiseSection />
      <OurProcessSection />
      <WhyWeAreBestSection />
      <CaseStudiesSection service="web-development" />
      <FAQSection />
      <RelatedServices current="web-development" />
      <WebCTA />
      <Footer />
    </>
  );
}
