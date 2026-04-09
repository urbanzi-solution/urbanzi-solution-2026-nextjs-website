import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsappButton from "@/components/WhatsappButton"
import { LeadProvider } from "@/context/LeadContext";
import LeadCaptureModal from "@/components/LeadCaptureModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Urbanzi Solutions",
    template: "%s | Urbanzi Solutions",
  },
  description: "Urbanzi Solutions Official Website",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Urbanzi Solutions Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000002] text-white`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HH76NSBHCW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HH76NSBHCW');
          `}
        </Script>
        <LeadProvider>
          <Navbar />
          {children}
          <LeadCaptureModal />
        </LeadProvider>
        <WhatsappButton />
      </body>
    </html>
  );
}
