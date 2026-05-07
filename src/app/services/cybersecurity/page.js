import Script from "next/script";
import CyberHero from "@/components/CyberHero";
import CyberWhoWeAre from "@/components/CyberWhoWeAre";
import CyberServicesSection from "@/components/CyberServicesSection";
import CyberThreatStats from "@/components/CyberThreatStats";
import CyberProcessSection from "@/components/CyberProcessSection";
import CyberWhyBest from "@/components/CyberWhyBest";
import CyberFaq from "@/components/CyberFaq";
import PartnersCarousel from "@/components/PartnersCarousel";
import RelatedServices from "@/components/RelatedServices";
import CyberCTA from "@/components/CyberCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cybersecurity Services in Trivandrum, Kerala | Urbanzi Solutions",
  description:
    "Urbanzi Solutions provides elite cybersecurity services in Trivandrum, Kerala. We specialize in VAPT, network security, web application security, compliance audits, and incident response. Protect your business with Kerala's top security experts.",
  keywords: "Cybersecurity services Trivandrum, VAPT Kerala, Network security Trivandrum, Web application security Kerala, Cybersecurity company Trivandrum",
  alternates: {
    canonical: "https://www.urbanzi.in/services/cybersecurity",
  },
  openGraph: {
    title: "Cybersecurity Services in Trivandrum, Kerala | Urbanzi Solutions",
    description: "Urbanzi Solutions provides elite cybersecurity services in Trivandrum, Kerala. We specialize in VAPT, network security, web application security, compliance audits, and incident response.",
    url: "https://www.urbanzi.in/services/cybersecurity",
    siteName: "Urbanzi Solutions",
    images: [
      {
        url: "/innovation-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Services in Trivandrum, Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function CybersecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cybersecurity Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Urbanzi Solutions",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Trivandrum",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Trivandrum"
      },
      {
        "@type": "State",
        "name": "Kerala"
      }
    ],
    "description": "Professional cybersecurity services including VAPT, network security, web app security, and compliance audits in Trivandrum, Kerala.",
    "serviceType": "Cybersecurity"
  };

  return (
    <main className="bg-black min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <Script
        id="cybersecurity-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Subtle global background gradients for premium feel */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/15 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>
      
      <div className="relative z-10">
        <CyberHero />
        <CyberWhoWeAre />
        <CyberServicesSection />
        <CyberThreatStats />
        <CyberProcessSection />
        <CyberWhyBest />
        <CyberFaq />
        <PartnersCarousel />
        <RelatedServices current="cybersecurity" />
        <CyberCTA />
        <Footer />
      </div>
    </main>
  );
}
