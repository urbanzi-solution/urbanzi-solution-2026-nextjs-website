import GraphicsHero from "@/components/GraphicsHero";
import GraphicsWhoWeAre from "@/components/GraphicsWhoWeAre";
import GraphicsServicesSection from "@/components/GraphicsServicesSection";
import GraphicsExpertise from "@/components/GraphicsExpertise";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyChooseGraphics from "@/components/WhyChooseGraphics";
import GraphicsFaq from "@/components/GraphicsFaq";
import GraphicsCTA from "@/components/GraphicsCTA";
import Footer from "@/components/Footer";
export default function About() {
 return (
    <>
    <GraphicsHero />
    <GraphicsWhoWeAre />
    <GraphicsServicesSection />
    <GraphicsExpertise />
    <CaseStudiesSection />
    <WhyChooseGraphics />
    <GraphicsFaq />
    <GraphicsCTA />
    <Footer />
    </>
 );
 }