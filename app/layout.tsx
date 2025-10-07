import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Study in Austria - Complete Guide for International Students",
//   description:
//     "Comprehensive guide for prospective students coming to Austria. Find everything you need to know about applications, visas, accommodation, and student life.",
//   generator: "v0.app",
// };
export const metadata: Metadata = {
  title: "Study in Austria 🇦🇹 | Complete Guide for International Students",
  description:
    "Your ultimate guide to studying in Austria: applications, visas, universities, scholarships, and student life . Everything you need to start your journey.",
  generator: "Next.js & v0.app",
  keywords: [
    "study in Austria",
    "Austrian universities",
    "international students",
    "Austrian visa",
    "Austrian scholarships",
    "study abroad Europe",
    "Residence permit process",
    "Visa D Checklist",
    "Indian Community in Austria",
  ],
  openGraph: {
    title: "Study in Austria - Complete Guide for International Students",
    description:
      "Everything you need to study in Austria: applications, visas, accommodation, and student life.",
    url: "https://studyinaustriaguide.onrender.com",
    siteName: "Study in Austria",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-22BD3183LY"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-22BD3183LY');
            `,
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6144787726207338"
          crossOrigin="anonymous"
        ></script>

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
