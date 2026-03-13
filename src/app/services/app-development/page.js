import AppHero from "@/components/AppHero";
import Appwhoweare from "@/components/Appwhoweare";
import MobileAppServicesSection from "@/components/MobileAppServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyBestMobileDevelopment from "@/components/WhyBestMobileDevelopment";
import WhyChooseApp from "@/components/WhyChooseApp";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import MobileAppFAQ from "@/components/MobileAppFAQ";
import AppCTA from "@/components/AppCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mobile App Development in Kerala & Trivandrum | Urbanzi Solutions",
  description: "Urbanzi Solutions is a trusted mobile app development company in Trivandrum, Kerala. We build Android, iOS, Flutter & React Native apps for startups and businesses across India.",
  alternates: {
    canonical: "https://urbanzi.in/services/app-development",
  },
};

export default function AppDevelopmentPage() {
 return (
    <> 
    <AppHero />
    <Appwhoweare />
    <MobileAppServicesSection />
    <ProcessSection />
    <WhyBestMobileDevelopment />
    <WhyChooseApp />
    <CaseStudiesSection />
    <MobileAppFAQ />
    <AppCTA />
    <Footer />
    </>
 );
}