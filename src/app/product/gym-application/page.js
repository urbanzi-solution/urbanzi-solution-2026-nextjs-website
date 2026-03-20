import "./gym.css";
import React from 'react';
import GymContent from './GymContent';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Gym Management Software | Custom Gym App for Your Business — Urbanzi Solution LLP",
  description: "Custom-branded gym management software that works on any device. Manage members, trainers, attendance, billing & more. Start your free 1-month trial today — no credit card needed.",
  keywords: "gym management software, gym app, fitness center management, member management, gym billing software, gym attendance tracking, gym CRM, fitness business software, PWA gym app",
  openGraph: {
    title: "Gym Management Software — Built for Your Gym, Ready to Use | Urbanzi Solution LLP",
    description: "Stop waiting months for custom software. Get a fully branded gym management app — your logo, your name, your way. Try free for 30 days.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.urbanzi.in/product/gym-application",
  }
};

export default function GymApplicationPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div className="gymContainer text-left pt-0 md:pt-12 lg:pt-20">
        <GymContent />
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Urbanzi Gym Management Software",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web (PWA — Android, iOS, Windows, macOS)",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "description": "30-day free trial, no credit card required"
            },
            "provider": {
              "@type": "Organization",
              "name": "Urbanzi Solution LLP"
            },
            "description": "Custom-branded gym management software with member management, trainer tracking, attendance, billing, and financial reports. Works on any device.",
            "featureList": "Member Management, Trainer Tracking, Attendance Tracking, Financial Reports, Biometric Integration, Member Portal, Online Payments, Magnetic Lock Access"
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the gym software free trial really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, completely free. You get full access to your chosen plan for 30 days. No credit card is required, no security deposit, and no automatic billing."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to install the gym management app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. The app is a Progressive Web App (PWA) that runs directly in your browser on any device — Android, iOS, tablet, laptop, or desktop."
                }
              },
              {
                "@type": "Question",
                "name": "Will the gym app have my gym's name and logo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every gym gets a completely custom-branded version of the app with their own logo and business name."
                }
              },
              {
                "@type": "Question",
                "name": "Can I request custom features for my gym software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. If your gym needs specific features, Urbanzi will customise the app for you — giving you tailor-made software without the time and cost of building from scratch."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
