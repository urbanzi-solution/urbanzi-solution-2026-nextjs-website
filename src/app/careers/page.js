import CareersHero from "@/components/CareersHero";
import CareersWhyJoin from "@/components/CareersWhyJoin";
import JobOpenings from "@/components/JobOpenings";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Careers — Join Our Team | Urbanzi Solutions, Trivandrum",
  description:
    "Join Urbanzi Solutions in Thiruvananthapuram, Kerala. We're hiring passionate people who want to build impactful digital solutions and grow their careers. Explore open positions now.",
  alternates: {
    canonical: "https://www.urbanzi.in/careers",
  },
  openGraph: {
    title: "Careers at Urbanzi Solutions — Now Hiring in Trivandrum, Kerala",
    description:
      "We're hiring a Sales Executive and more. Join a team building impactful digital solutions across Kerala.",
    url: "https://www.urbanzi.in/careers",
    siteName: "Urbanzi Solutions",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersWhyJoin />
      <JobOpenings />
      <CTASection />
      <Footer />
    </>
  );
}
