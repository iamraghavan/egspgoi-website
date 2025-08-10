import Script from "next/script";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "EGS Pillay Group of Institutions | Admissions 2025-2026",
  description: "Apply for admissions 2025-2026 at E.G.S. Pillay Group of Institutions, offering courses in engineering, arts, pharmacy, education, and nursing in Nagapattinam, Tamil Nadu.",
  keywords: "E.G.S. Pillay Engineering College, E.G.S. Pillay Engineering College admission, E.G.S. Pillay Engineering College B.E. courses, E.G.S. Pillay Engineering College B.Tech courses, E.G.S. Pillay Engineering College Mechanical Engineering, E.G.S. Pillay Engineering College Civil Engineering, E.G.S. Pillay Engineering College Computer Science and Engineering, E.G.S. Pillay Engineering College Electrical and Electronics Engineering, E.G.S. Pillay Engineering College Electronics and Communication Engineering, E.G.S. Pillay Engineering College Artificial Intelligence and Data Science, E.G.S. Pillay Engineering College Biomedical Engineering, E.G.S. Pillay Engineering College Computer Science and Business Systems, E.G.S. Pillay Engineering College Information Technology, E.G.S. Pillay Engineering College MCA, E.G.S. Pillay Engineering College M.Tech, E.G.S. Pillay Engineering College MBA, E.G.S. Pillay Engineering College Postgraduate programs, E.G.S. Pillay Engineering College M.E., E.G.S. Pillay Engineering College placement, E.G.S. Pillay Arts and Science College, E.G.S. Pillay Arts and Science College admission, E.G.S. Pillay Arts and Science College B.A. Tamil, E.G.S. Pillay Arts and Science College B.A. English, E.G.S. Pillay Arts and Science College B.Sc. Mathematics, E.G.S. Pillay Arts and Science College B.Sc. Biotechnology, E.G.S. Pillay Arts and Science College B.Sc. Biochemistry, E.G.S. Pillay Arts and Science College B.Sc. Computer Science, E.G.S. Pillay Arts and Science College B.Sc. Physics, E.G.S. Pillay Arts and Science College B.Sc. Chemistry, E.G.S. Pillay Arts and Science College B.Sc. Nutrition and Dietetics, E.G.S. Pillay Arts and Science College B.Sc. Visual Communication, E.G.S. Pillay Arts and Science College B.Com, E.G.S. Pillay Arts and Science College B.Com Computer Applications, E.G.S. Pillay Arts and Science College BBA, E.G.S. Pillay Arts and Science College M.Sc. Information Technology, E.G.S. Pillay Arts and Science College M.Sc. Mathematics, E.G.S. Pillay Arts and Science College M.Sc. Biotechnology, E.G.S. Pillay Arts and Science College M.Sc. Biochemistry, E.G.S. Pillay Arts and Science College M.Com, E.G.S. Pillay Arts and Science College MBA, E.G.S. Pillay Arts and Science College M.Phil, E.G.S. Pillay Arts and Science College Ph.D. Management, E.G.S. Pillay Arts and Science College Postgraduate programs, E.G.S. Pillay Polytechnic College, E.G.S. Pillay Polytechnic College admission, E.G.S. Pillay Polytechnic College Diploma Mechanical Engineering, E.G.S. Pillay Polytechnic College Diploma Civil Engineering, E.G.S. Pillay Polytechnic College Diploma Electronics and Communication Engineering, E.G.S. Pillay Polytechnic College Diploma Electrical and Electronics Engineering, E.G.S. Pillay Polytechnic College Diploma Computer Engineering, E.G.S. Pillay Polytechnic College MBA, E.G.S. Pillay Polytechnic College After 10th Diploma, E.G.S. Pillay Polytechnic College engineering programs, E.G.S. Pillay College of Pharmacy, E.G.S. Pillay College of Pharmacy admission, E.G.S. Pillay College of Pharmacy B.Pharm, E.G.S. Pillay College of Pharmacy M.Pharm, E.G.S. Pillay College of Pharmacy course fees, E.G.S. Pillay Pharmacy courses, E.G.S. Pillay College of Education, E.G.S. Pillay College of Education admission, E.G.S. Pillay College of Education B.Ed, E.G.S. Pillay College of Education M.Ed, E.G.S. Pillay College of Education programs, E.G.S. Pillay College and School of Nursing, E.G.S. Pillay College and School of Nursing B.Sc. Nursing, E.G.S. Pillay College and School of Nursing B.Sc. Nursing admission, E.G.S. Pillay College and School of Nursing nursing programs, E.G.S. Pillay College and School of Nursing B.Sc. Nursing course, E.G.S. Pillay Nursing College B.Sc. Nursing eligibility, E.G.S. Pillay Nursing College B.Sc. Nursing fees, E.G.S. Pillay College of Education teaching courses, E.G.S. Pillay Pharmacy undergraduate programs, E.G.S. Pillay Nursing B.Sc. Nursing syllabus, E.G.S. Pillay Nursing B.Sc. Nursing hospital internship, E.G.S. Pillay Pharmacy M.Pharm specializations, E.G.S. Pillay Pharmacy career opportunities, E.G.S. Pillay Engineering College scholarships, E.G.S. Pillay Arts and Science College scholarships, E.G.S. Pillay Polytechnic College scholarships, E.G.S. Pillay Engineering College facilities, E.G.S. Pillay Arts and Science College infrastructure, E.G.S. Pillay Pharmacy admission process, E.G.S. Pillay College of Education student life, E.G.S. Pillay College of Nursing facilities, E.G.S. Pillay Engineering College hostel, E.G.S. Pillay Arts and Science College student services, E.G.S. Pillay Polytechnic College fees, E.G.S. Pillay Arts and Science College fees structure, E.G.S. Pillay College of Pharmacy fees, E.G.S. Pillay Nursing B.Sc. Nursing hostel, Admission Open 2025, Admission 2025-2026, College Admission 2025, University Admission 2025, Courses Admission 2025, Application Form 2025, Admission Portal 2025, Undergraduate Admission 2025, Postgraduate Admission 2025, Online Admission 2025, Admission Process 2025, Admission Criteria 2025, Admission Guidelines 2025, Admission Open 2025-2026, Admission Requirements 2025, Admission Notification 2025, Application Deadline 2025, Admission Schedule 2025, Admission Fees 2025, Admission Procedure 2025, Apply for Admission 2025, Entrance Exam Admission 2025, Direct Admission 2025, Campus Admission 2025, College Application Form 2025, Admission Application Process, Admission Eligibility 2025, Entrance Exam Registration 2025, Admission Fee Structure 2025, B.Tech Admission 2025, MBA Admission 2025, B.Sc. Admission 2025, B.Com Admission 2025, M.Tech Admission 2025, M.Sc. Admission 2025, M.Com Admission 2025, B.Ed Admission 2025, Ph.D. Admission 2025, Nursing Admission 2025, Pharmacy Admission 2025, Polytechnic Admission 2025, Engineering Admission 2025, Medical Admission 2025, Distance Education Admission 2025, Online Courses Admission 2025, Campus Tour 2025, College Campus Visit 2025, Campus Life 2025, Campus Facilities 2025, Admission to Engineering College 2025, Admission to Medical College 2025, Admission to Arts and Science College 2025, Scholarship for Admission 2025, Admission Without Entrance Exam, Admission Eligibility Criteria 2025, Merit-Based Admission 2025, Application Process for Admission 2025, How to Apply for Admission 2025, Admission to Top Colleges 2025, Admission to Top Universities 2025, Best College for Admission 2025, College Admission Eligibility 2025, Admission Online Portal 2025, Admission FAQs 2025, Course Selection 2025, Admission Acceptance 2025, Course Fees 2025, Admission Confirmation 2025, Admission Status 2025, Application Deadline for Admission 2025, Admission Notification for 2025-2026, Postgraduate Courses Admission 2025, Undergraduate Courses Admission 2025, PhD Admission Process 2025, Admission in Top Colleges 2025",
  openGraph: {
    title: "E.G.S. Pillay Group of Institutions - Admission 2025-2026",
    description: "Join E.G.S. Pillay Group of Institutions for 2025-2026 admissions. Explore programs in engineering, arts, pharmacy, education, and nursing in Nagapattinam, Tamil Nadu.",
    url: "https://egspgroup.in",
    siteName: "E.G.S. Pillay Group of Institutions",
    images: [
      {
        url: "/Admission_img_02.png",
        width: 800,
        height: 600,
        alt: "E.G.S. Pillay Group of Institutions Campus"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "E.G.S. Pillay Group of Institutions - Admission 2025-2026",
    description: "Join E.G.S. Pillay Group of Institutions for 2025-2026 admissions in Nagapattinam, Tamil Nadu. Apply now for engineering, arts, pharmacy, and more.",
    images: ["/Admission_img_02.png"],
    site: "@EGSPillayGroup"
  },
  authors: [{ name: "E.G.S. Pillay Group of Institutions" }],
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Nagapattinam, Tamil Nadu",
    "geo.position": "10.7667;79.8333",
    "ICBM": "10.7667, 79.8333",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "E.G.S. Pillay Group of Institutions Admissions",
    "theme-color": "#001b70"
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://egspgroup.in"
  }
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NTCJ08TSVC"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NTCJ08TSVC');

            document.addEventListener('DOMContentLoaded', () => {
              const applyButton = document.querySelector('.btn-admission');
              if (applyButton) {
                applyButton.addEventListener('click', () => {
                  gtag('event', 'apply_now_click', {
                    'event_category': 'Engagement',
                    'event_label': 'Apply Now Button',
                    'page_path': window.location.pathname,
                    'button_text': applyButton.textContent.trim() || 'Apply Now'
                  });
                });
              } else {
                console.warn('Apply Now button not found on this page.');
              }
            });
          `}
        </Script>

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
