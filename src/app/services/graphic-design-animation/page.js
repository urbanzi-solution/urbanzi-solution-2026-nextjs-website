import GraphicsHero from "@/components/GraphicsHero";
import GraphicsWhoWeAre from "@/components/GraphicsWhoWeAre";
import GraphicsServicesSection from "@/components/GraphicsServicesSection";
import GraphicsProcessSection from "@/components/GraphicsProcessSection";
import GraphicsExpertise from "@/components/GraphicsExpertise";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyChooseGraphics from "@/components/WhyChooseGraphics";
import GraphicsFaq from "@/components/GraphicsFaq";
import GraphicsCTA from "@/components/GraphicsCTA";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Graphic Design & Animation Services in Kerala | Urbanzi Solutions",
  description:
    "Urbanzi Solutions offers professional graphic designing, brand identity, motion graphics, and animation services in Trivandrum, Kerala. Visuals built to capture attention and convert.",
  alternates: {
    canonical: "https://urbanzi.in/services/graphic-design-animation",
  },
};

export default function GraphicDesigningAnimationPage() {
 return (
    <>
    <GraphicsHero />
    <GraphicsWhoWeAre />
    <GraphicsServicesSection />
    <GraphicsProcessSection />
    <GraphicsExpertise />
    <CaseStudiesSection />
    <WhyChooseGraphics />
    <GraphicsFaq />
    <GraphicsCTA />
    <Footer />
    </>
 );
 }