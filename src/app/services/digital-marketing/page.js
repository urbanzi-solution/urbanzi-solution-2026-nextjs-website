import InnovationHero from "@/components/InnovationHero";
import WhoWeAre from "@/components/WhoWeAre";
import DigitalMarketingServices from "@/components/DigitalMarketingServices";
import OurProcess from "@/components/OurProcess";
import WhyWeAreBest from "@/components/WhyWeAreBest";
import WhyChooseMarketing from "@/components/WhyChooseMarketing";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import DigitalMarketingFAQSection from "@/components/DigitalMarketingFAQSection";
import DigitCTA from "@/components/DigitCTA";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Digital Marketing Agency in Trivandrum, Kerala | Urbanzi Solutions",
  description:
    "Urbanzi Solutions is a full-service digital marketing agency in Trivandrum, Kerala. We offer social media marketing, Google Ads, SEO, and content marketing to grow your business online.",
  alternates: {
    canonical: "https://urbanzi.in/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
 return (
    <> 
      <InnovationHero />
      <WhoWeAre />
      <DigitalMarketingServices />
      <OurProcess />
      <WhyWeAreBest />
      <WhyChooseMarketing />
      <CaseStudiesSection />
      <DigitalMarketingFAQSection />
      <DigitCTA />
      <Footer />
    </>
  );
}