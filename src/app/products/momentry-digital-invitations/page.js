import "./momentry.css";
import React from 'react';
import MomentryContent from './MomentryContent';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Momentry by Urbanzi | Premium Digital Invitations for Weddings, Birthdays & All Events",
  description: "Create stunning custom digital invitations for weddings, birthdays, engagements and all celebrations. RSVP tracking, WhatsApp sharing, maps, countdowns & premium custom designs by Momentry by Urbanzi.",
  keywords: "digital invitation website, wedding invitation website, birthday invitation online, custom wedding invite India, RSVP invitation website, WhatsApp wedding invitation, premium digital invitation, event invitation website, invitation website Kerala, online wedding invitation India",
  openGraph: {
    title: "Momentry by Urbanzi | Premium Digital Invitations for Every Celebration",
    description: "Custom digital invitation websites for weddings, birthdays, engagements, and all celebrations. RSVP, WhatsApp sharing, countdown, maps — beautifully designed for your story.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.urbanzi.in/products/momentry-digital-invitations",
  },
};

export default function MomentryPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />

      <div className="momentry text-left pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28">
        <MomentryContent />
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Momentry by Urbanzi",
            "serviceType": "Digital Invitation Design",
            "description": "Custom digital invitation websites for weddings, birthdays, engagements, and all celebrations. Includes RSVP management, WhatsApp sharing, venue maps, countdown timers, and personalized story sections.",
            "provider": {
              "@type": "Organization",
              "name": "Urbanzi Solution LLP",
              "url": "https://www.urbanzi.in"
            },
            "areaServed": "India",
            "offers": [
              {
                "@type": "Offer",
                "name": "Essential",
                "price": "2999",
                "priceCurrency": "INR",
                "description": "Custom invitation page with WhatsApp sharing, RSVP form, mobile responsive design, and event schedule."
              },
              {
                "@type": "Offer",
                "name": "Premium",
                "price": "4999",
                "priceCurrency": "INR",
                "description": "Multi-event schedule, maps, countdown timer, story gallery, and guest RSVP dashboard."
              },
              {
                "@type": "Offer",
                "name": "Signature",
                "price": "9999",
                "priceCurrency": "INR",
                "description": "Fully custom cinematic design, VIP guest flows, advanced RSVP, multi-language support, and priority delivery."
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Event Types",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Digital Invitations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Birthday Digital Invitations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engagement Digital Invitations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Baby Shower Digital Invitations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Housewarming Digital Invitations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Event Digital Invitations" } }
              ]
            }
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
                "name": "What is a Momentry digital invitation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Momentry invitation is a live website built specifically for your event. It includes event details, RSVP form, venue map, schedule, countdown timer, and personal story — all accessible via a single shareable link."
                }
              },
              {
                "@type": "Question",
                "name": "How is Momentry different from a template invitation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Momentry does not use templates. Every invitation is custom-designed from scratch based on your event type, family style, colors, theme, language, cultural requirements, and personal story. No two invitations ever look the same."
                }
              },
              {
                "@type": "Question",
                "name": "Can guests RSVP through the digital invitation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every Momentry invite includes a built-in RSVP form. Guests confirm attendance directly through the invite and you can see all responses in real time."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to create a Momentry invitation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most invitations are delivered within 3 to 5 business days after we receive your event details, content, and preferences."
                }
              },
              {
                "@type": "Question",
                "name": "Can I share the invitation on WhatsApp?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. You receive a single link that opens instantly on any phone — no app required, no download needed. Share it directly on WhatsApp, SMS, or email."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
