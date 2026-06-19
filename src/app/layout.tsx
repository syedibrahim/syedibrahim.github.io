import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  openGraph: {
    title: "Syed Ibrahim | Senior Software Engineer",
    description:
      "Building large-scale data platforms, streaming systems & data lineage at scale.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Ibrahim | Senior Software Engineer",
    description:
      "Building large-scale data platforms, streaming systems & data lineage at scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
