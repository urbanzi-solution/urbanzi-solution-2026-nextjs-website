import Navbar from "@/components/Navbar";
import HeroGlobeSection from "@/components/HeroGlobeSection";
import HeroSection from "@/components/HeroSection";
import StackedImagesSection from "@/components/StackedImagesSection";
import HeroCard from "@/components/HeroCard";
import ServicesGrid from "@/components/ServicesGrid";
import ProductsHero from "@/components/ProductsHero";
import ProductsSection from "@/components/ProductsSection";
import CaseStudies from "@/components/CaseStudies";
import TransformSection from "@/components/TransformSection";
import BlogSection from "@/components/BlogSection";
import RunningText from "@/components/RunningText";
import TestimonialSection from "@/components/TestimonialSection";

import Footer from "@/components/Footer";
export const metadata = {
  title: "Digital Growth Agency in Kerala | Urbanzi Solutions - Scaling Businesses",
  description: "Urbanzi Solutions is Kerala's leading digital agency based in Trivandrum. We build mobile apps, websites, and offer SEO & digital marketing services to help your business grow online.",
  alternates: {
    canonical: "https://urbanzi.in/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroGlobeSection />
      <HeroSection />
      <StackedImagesSection />
      <HeroCard />
      <ServicesGrid />
      <ProductsHero />
      <ProductsSection />
      <CaseStudies />
      <TransformSection />
      <BlogSection />
      <RunningText />
      <TestimonialSection />
    
      <Footer />
    </>
  );
}
