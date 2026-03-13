import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Expert Digital Solutions & IT Services | Urbanzi Solutions",
  description: "Explore our full range of digital services in Trivandrum, Kerala. From enterprise software and mobile apps to SEO and digital marketing, we provide end-to-end solutions for your business.",
  alternates: {
    canonical: "https://urbanzi.in/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <TestimonialSection />
      <Footer />
    </>
  );
}
