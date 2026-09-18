import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FloatingActions from "@/components/FloatingActions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedabadmedicaldirectory.com"),
  title: {
    default: "Ahmedabad Medical Directory | Spine Surgeon & Diagnostic Lab",
    template: "%s | Ahmedabad Medical Directory",
  },
  description:
    "Independent healthcare directory for Sarkhej-Makarba, Ahmedabad. Find Dr. Nasir Salar (MBBS, MS Orthopedics, Spine Fellowship) for Endoscopic & Minimally Invasive Spine Surgery, and Unity Pathology Laboratory for verified clinical diagnostic testing & home sample collection.",
  keywords: [
    "Dr Nasir Salar",
    "Spine Surgeon Sarkhej Ahmedabad",
    "Endoscopic Spine Surgery Ahmedabad",
    "Minimally Invasive Spine Surgery Makarba",
    "Slip disc treatment Sarkhej",
    "Sciatica doctor Ahmedabad",
    "Joint replacement surgeon Sarkhej",
    "Unity Pathology Laboratory",
    "Pathology lab Makarba Ahmedabad",
    "Blood test home collection Sarkhej",
    "CBC test Makarba",
    "Orthopedic doctor near me Sarkhej"
  ],
  authors: [{ name: "Dr. Nasir Salar" }, { name: "Unity Pathology Laboratory" }],
  creator: "Ahmedabad Medical Directory",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ahmedabadmedicaldirectory.com",
    title: "Ahmedabad Medical Directory | Spine Surgeon & Diagnostic Lab",
    description:
      "Independent listings for Endoscopic Spine Surgery, Joint Care & 5.0★ Rated Diagnostic Pathology Services in Sarkhej & Makarba, Ahmedabad.",
    siteName: "Ahmedabad Medical Directory",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-slate-900 bg-white selection:bg-sky-500 selection:text-white`}
      >
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingActions />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
