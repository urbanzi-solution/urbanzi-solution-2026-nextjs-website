import SoftHero from "@/components/SoftHero";
import SoftWhoWeAre from "@/components/SoftWhoWeAre";
import SoftwareServicesSection from "@/components/SoftwareServicesSection";
import SoftProcess from "@/components/SoftProcess";
import SoftWhyBest from "@/components/SoftWhyBest";
import WhyChooseSoftware from "@/components/WhyChooseSoft";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SoftFaq from "@/components/SoftFaq";
import CTASoft from "@/components/CTASoft";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Custom Software Development in Kerala & Trivandrum | Urbanzi Solutions",
  description:
    "Urbanzi Solutions builds custom software, CRM, ERP, and SaaS platforms for businesses in Trivandrum and Kerala. Scalable, secure, and built around your workflows.",
  alternates: {
    canonical: "https://urbanzi.in/services/software-development",
  },
};

export default function SoftwareDevelopmentPage() {
 return (
    <> 
    <SoftHero />
    <SoftWhoWeAre />
    <SoftwareServicesSection/>
    <SoftProcess />
    <SoftWhyBest />
    <WhyChooseSoftware />
    <CaseStudiesSection />
    <SoftFaq/>
   <CTASoft />
    <Footer />
    </>
 );
}