export const metadata = {
  title: "Our Clients",
  description:
    "Businesses Urbanzi Solutions has partnered with across SEO, web development, digital marketing, Google My Business, CRM, and software development. Real partnerships delivering measurable results.",
  keywords: [
    "Urbanzi Solutions clients",
    "digital marketing agency Kerala clients",
    "SEO agency Trivandrum portfolio",
    "web development clients India",
    "Urbanzi Solutions portfolio",
    "digital agency client list Kerala",
  ],
  alternates: {
    canonical: "https://urbanzi.in/portfolio/clients",
  },
  openGraph: {
    title: "Our Clients | Urbanzi Solutions",
    description:
      "Businesses we've partnered with to build, grow, and transform their digital presence — SEO, web development, digital marketing, and more.",
    url: "https://urbanzi.in/portfolio/clients",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Urbanzi Solutions Clients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients | Urbanzi Solutions",
    description:
      "Businesses we've partnered with to build, grow, and transform their digital presence.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ClientsLayout({ children }) {
  return children;
}
