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
  const educationalOrganization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EGS Pillay Group of Institutions",
    "url": "https://www.egspgroup.in",
    "logo": "https://www.egspgroup.in/assets/egspgoi___logo.webp",
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
      // "https://www.facebook.com/your-page",
      // "https://www.twitter.com/your-profile",
      // "https://www.instagram.com/your-profile",
      // "https://www.linkedin.com/company/your-company"
    ]
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EGS Pillay Group of Institutions",
    "image": "https://www.egspgroup.in/assets/egspgoi___logo.webp",
    "@id": "https://www.egspgroup.in",
    "url": "https://www.egspgroup.in",
    "telephone": "+91-99768-88999",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Old, Nagore Main Rd, Thethi village",
      "addressLocality": "Nagapattinam",
      "addressRegion": "TN",
      "postalCode": "611002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.8037224,
      "longitude": 79.8332637
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.egspgroup.in"
    }]
  };

  const courseList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "name": "BE, B.Tech, ME, MBA & MCA courses",
          "description": "Top engineering and management courses offered at EGS Pillay Engineering College.",
          "provider": {
            "@type": "Organization",
            "name": "EGS Pillay Engineering College"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Course",
          "name": "Arts & Science Courses",
          "description": "A wide range of courses in arts and science at EGS Pillay Arts & Science College.",
          "provider": {
            "@type": "Organization",
            "name": "EGS Pillay Arts & Science College"
          }
        }
      }
    ]
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "When do admissions for the 2025-2026 academic year start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Admissions for the 2025-2026 academic year are now open. You can apply online through our admissions portal."
      }
    }, {
      "@type": "Question",
      "name": "What courses are offered at EGS Pillay Group of Institutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a wide range of courses including Engineering, Arts & Science, Nursing, Pharmacy, Education, Polytechnic, and Naturopathy & Yoga. Please visit the individual institution pages for detailed course information."
      }
    }]
  };
  
  const eduQA = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "mainEntity": [{
      "@context": "https://schema.org",
      "@type": "Question",
      "name": "Which college offers BE, B.Tech, and MBA programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EGS Pillay Engineering College offers top BE, B.Tech, ME, MBA & MCA courses."
      }
    },{
      "@context": "https://schema.org",
      "@type": "Question",
      "name": "Where can I study Naturopathy and Yoga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EGS Pillay Naturopathy and Yoga Medical College provides education in natural health and wellness."
      }
    }]
  };

  const imageObject = {
     "@context": "https://schema.org",
     "@type": "ImageObject",
     "contentUrl": "https://www.egspgroup.in/assets/egspgoi___logo.webp",
     "name": "EGS Pillay Group of Institutions Logo",
     "description": "The official logo of EGS Pillay Group of Institutions.",
     "acquireLicensePage": "https://www.egspgroup.in/contact"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/egs_favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/egs_favicon.png" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseList) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eduQA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObject) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
