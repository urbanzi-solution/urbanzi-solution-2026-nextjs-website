import { Geist, Geist_Mono } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000002] text-white overflow-x-hidden`}
      >
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