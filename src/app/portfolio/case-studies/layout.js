export const metadata = {
  title: "Case Studies",
  description:
    "In-depth case studies showing how Urbanzi Solutions helped businesses transform digitally — SEO, web development, Google My Business, and digital marketing. Real challenges, real strategies, real numbers.",
  keywords: [
    "digital marketing case studies",
    "SEO case studies India",
    "web development case studies Kerala",
    "Urbanzi Solutions portfolio",
    "digital transformation case studies",
    "Google My Business success stories",
  ],
  alternates: {
    canonical: "https://urbanzi.in/portfolio/case-studies",
  },
  openGraph: {
    title: "Case Studies | Urbanzi Solutions",
    description:
      "Real results from real projects. See how Urbanzi Solutions took businesses from invisible to page 1 — with zero paid ads.",
    url: "https://urbanzi.in/portfolio/case-studies",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Urbanzi Solutions Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Urbanzi Solutions",
    description:
      "Real results from real projects. See how Urbanzi Solutions took businesses from invisible to page 1.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
