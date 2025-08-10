import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "EGS Pillay Group of Institutions | Admissions 2025-2026",
  description:
    "Explore a wide range of courses and find your perfect fit at EGS Pillay Group of Institutions. Admissions are open for the 2025-2026 academic year.",
  keywords: "EGS Pillay, admissions, engineering, arts, science, nursing, pharmacy, education, polytechnic, international school, naturopathy, yoga, college, university",
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
