import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "EGS Pillay Group of Institutions | Admissions 2025-2026",
  description:
    "Admissions open for 2025-2026 at EGS Pillay Group of Institutions. We offer top courses in Engineering, Arts, Science, Nursing, and more. Join us for a bright future.",
  keywords: "EGS Pillay admissions, engineering college, arts and science college, nursing college, pharmacy college, education college, polytechnic, international school, naturopathy and yoga, top colleges in Nagapattinam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EGS Pillay Group of Institutions",
    "url": "https://www.egspgroup.in", // Replace with your actual domain
    "logo": "https://www.egspgroup.in/assets/egspgoi___logo.webp", // Replace with your actual domain
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-99768-88999",
        "contactType": "admissions",
        "areaServed": "IN",
        "availableLanguage": ["en", "ta"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-86809-54537",
        "contactType": "admissions",
        "areaServed": "IN",
        "availableLanguage": ["en", "ta"]
      },
      {
        "@type": "ContactPoint",
        "email": "enquiry@egspec.org",
        "contactType": "customer support"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Old, Nagore Main Rd, Thethi village",
      "addressLocality": "Nagapattinam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "611002",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add links to your social media profiles here
      // "https://www.facebook.com/your-page",
      // "https://www.twitter.com/your-profile",
      // "https://www.instagram.com/your-profile",
      // "https://www.linkedin.com/company/your-company"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
