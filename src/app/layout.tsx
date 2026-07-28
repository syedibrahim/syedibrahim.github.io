import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: "Syed Ibrahim | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in large-scale data platforms, streaming systems, data lineage, and cloud-native engineering. Building data infrastructure at Wayfair.",
  keywords: [
    "Syed Ibrahim",
    "Software Engineer",
    "Data Engineering",
    "Apache Beam",
    "Kafka",
    "Flink",
    "Data Lineage",
    "Wayfair",
    "Cloud Native",
    "Kubernetes",
  ],
  authors: [{ name: "Syed Ibrahim" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syed Ibrahim | Senior Software Engineer",
    description:
      "Building large-scale data platforms, streaming systems & data lineage at scale.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Syed Ibrahim",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syed Ibrahim — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Ibrahim | Senior Software Engineer",
    description:
      "Building large-scale data platforms, streaming systems & data lineage at scale.",
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  worksFor: {
    "@type": "Organization",
    name: personalInfo.company,
  },
  url: SITE_URL,
  sameAs: [personalInfo.linkedin, personalInfo.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Data Engineering",
    "Streaming Systems",
    "Data Lineage",
    "Data Governance",
    "Cloud-Native Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
