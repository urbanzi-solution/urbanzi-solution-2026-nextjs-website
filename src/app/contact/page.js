import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Contact Us | Urbanzi Solutions — Digital Agency in Trivandrum, Kerala",
  description: "Connect with Urbanzi Solutions, the best digital agency in Trivandrum, Kerala. Reach out for expert web development, mobile apps, and SEO services to grow your business.",
  alternates: {
    canonical: "https://urbanzi.in/contact",
  },
};

export default function Contact() {
 return (
    <> 
    <ContactSection />
    <Footer />
    </>
 );
}