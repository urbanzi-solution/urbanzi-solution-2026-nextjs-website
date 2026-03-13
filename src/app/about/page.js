import AboutPage from "@/components/AboutPage";
import PerformanceSection from "@/components/PerformanceSection";
import MissionSection from "@/components/MissionSection";
import ValuesSection from "@/components/ValuesSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
export const metadata = {
  title: "About Us | Urbanzi Solutions — Digital Agency in Trivandrum, Kerala",
  description:
    "Learn about Urbanzi Solutions — a passionate team of developers, designers, and marketers based in Trivandrum, Kerala. Building digital solutions that help businesses grow.",
  alternates: {
    canonical: "https://urbanzi.in/about",
  },
};

export default function About() {
 return (
    <> 
      <AboutPage />
      <PerformanceSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </>
  );
}