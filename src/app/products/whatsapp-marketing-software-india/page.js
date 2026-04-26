import "./bulkreach.css";
import React from 'react';
import BulkReachContent from './BulkReachContent';
import Footer from '@/components/Footer';

export const metadata = {
  title: "WhatsApp Marketing Software for Businesses in India | BulkReach by Urbanzi",
  description: "Send bulk WhatsApp campaigns, automate Meta leads, manage chats, track delivery, and grow faster with BulkReach by Urbanzi. Official WhatsApp API platform built for Indian businesses.",
  keywords: "whatsapp marketing software india, whatsapp bulk sender for business, whatsapp crm software, facebook lead automation whatsapp, instagram lead auto reply, whatsapp software for real estate, whatsapp campaign software india, bulk whatsapp marketing software",
  openGraph: {
    title: "WhatsApp Marketing Software India | BulkReach by Urbanzi",
    description: "Grow sales with BulkReach — WhatsApp marketing software for Indian businesses. Send campaigns, automate Meta leads, manage chats, and convert faster.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.urbanzi.in/products/whatsapp-marketing-software-india",
  },
};

export default function BulkReachPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div className="bulkReachContainer text-left pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32">
        <BulkReachContent />
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "BulkReach by Urbanzi",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": [
              {
                "@type": "Offer",
                "name": "Starter",
                "price": "1999",
                "priceCurrency": "INR",
                "billingIncrement": "P1M"
              },
              {
                "@type": "Offer",
                "name": "Growth",
                "price": "4999",
                "priceCurrency": "INR",
                "billingIncrement": "P1M"
              },
              {
                "@type": "Offer",
                "name": "Pro",
                "price": "9999",
                "priceCurrency": "INR",
                "billingIncrement": "P1M"
              }
            ],
            "provider": {
              "@type": "Organization",
              "name": "Urbanzi Solution LLP"
            },
            "description": "WhatsApp marketing software for Indian businesses. Send bulk campaigns, automate Meta lead ads, manage customer conversations, and track conversions from one platform.",
            "featureList": "Bulk WhatsApp Campaigns, Meta Lead Ads Automation, Shared Team Inbox, Contact CRM, Reporting & Analytics, Template Builder, Workflow Automation"
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
                "name": "What is WhatsApp marketing software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "WhatsApp marketing software helps businesses run bulk campaigns, automate replies to leads, manage customer conversations, and track conversions through WhatsApp."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a WhatsApp API account to use BulkReach?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. BulkReach works through the official Meta WhatsApp Business API. The Urbanzi team guides you through connecting your account during onboarding."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use BulkReach for Facebook and Instagram leads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Meta Lead Ads automation is a core BulkReach feature. Every new Facebook or Instagram lead automatically receives a WhatsApp message within seconds."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a free trial for BulkReach?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. BulkReach includes a 7-day free trial with full feature access. No credit card is required to start."
                }
              },
              {
                "@type": "Question",
                "name": "Can agencies use BulkReach for multiple clients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. BulkReach has dedicated Agency and white-label plans for resellers managing multiple client accounts."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
