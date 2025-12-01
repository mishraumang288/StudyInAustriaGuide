import { Metadata } from "next"

const baseUrl = "https://studyinaustriaguide.onrender.com"
const siteName = "Study Austria Guide"

interface PageMetadata {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function generateMetadata({ title, description, path, keywords = [] }: PageMetadata): Metadata {
  const fullTitle = `${title} | ${siteName}`
  const url = `${baseUrl}${path}`

  const defaultKeywords = [
    "study in Austria",
    "Austrian universities",
    "international students",
    "student visa Austria",
    "residence permit Austria",
    "study abroad Europe",
  ]

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/titleIcon.png`,
          width: 512,
          height: 512,
          alt: `${siteName} - Complete guide for international students`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}/titleIcon.png`],
    },
    alternates: {
      canonical: url,
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
  }
}

// Home page metadata
export const homeMetadata: Metadata = generateMetadata({
  title: "Complete Guide for International Students",
  description:
    "Your ultimate guide to studying in Austria: university applications, student visa process, accommodation, living costs, and student communities. Free comprehensive resources for Indian students.",
  path: "/",
  keywords: [
    "Indian students Austria",
    "visa D checklist",
    "OEAD",
    "blocked account Austria",
    "student accommodation Vienna",
  ],
})

// Visa page metadata
export const visaMetadata: Metadata = generateMetadata({
  title: "Student Visa & Residence Permit Guide",
  description:
    "Complete step-by-step guide to Austrian student visa (Visa-D) and residence permit application. Embassy appointments, document checklist, blocked account requirements, and post-arrival procedures for Indian students.",
  path: "/visa",
  keywords: [
    "Austria visa D",
    "residence permit student",
    "embassy appointment",
    "blocked account",
    "VFS Austria",
    "OEAD checklist",
  ],
})

// Living page metadata
export const livingMetadata: Metadata = generateMetadata({
  title: "Living in Austria - Student Life Guide",
  description:
    "Complete guide to living in Austria as an international student: monthly costs, accommodation options, student dorms, part-time work, healthcare, transportation, and practical tips for settling in Vienna, Graz, and other cities.",
  path: "/living",
  keywords: [
    "cost of living Austria",
    "student accommodation Austria",
    "WG-gesucht",
    "student dorms Vienna",
    "part-time work Austria",
    "student life Austria",
  ],
})

// Universities page metadata
export const universitiesMetadata: Metadata = generateMetadata({
  title: "Austrian Universities - Complete List",
  description:
    "Comprehensive directory of Austrian universities for international students: University of Vienna, TU Wien, TU Graz, JKU Linz, and more. Find programs, admission requirements, and direct links to all major universities.",
  path: "/universities",
  keywords: [
    "University of Vienna",
    "TU Wien",
    "TU Graz",
    "Austrian universities list",
    "Fachhochschule Austria",
    "public universities Austria",
  ],
})

// About page metadata
export const aboutMetadata: Metadata = generateMetadata({
  title: "About Us - Our Mission & Story",
  description:
    "Learn about Study Austria Guide: created by current students for aspiring international students. Our mission to provide free, accurate, and up-to-date information about studying in Austria. Join our community of 1000+ Indian students.",
  path: "/about",
  keywords: ["about study austria guide", "student community", "Umang Mishra", "University of Vienna student"],
})

// Contact page metadata
export const contactMetadata: Metadata = generateMetadata({
  title: "Contact Us - Get in Touch",
  description:
    "Have questions about studying in Austria? Contact us through WhatsApp community (1000+ members), email, or social media. Get instant support from current students and comprehensive guidance for your Austria journey.",
  path: "/contact",
  keywords: ["WhatsApp community", "student support", "Austria student help", "contact study guide"],
})
