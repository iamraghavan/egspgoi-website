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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
