import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseFinder } from "@/components/course-finder";

const institutions = [
  {
    name: "EGS Pillay Engineering College",
    description: "Fostering technical brilliance and innovation since 1996.",
    image: "https://placehold.co/600x400/001B70/FFFFFF",
    hint: "modern campus",
  },
  {
    name: "EGS Pillay Arts & Science College",
    description: "Nurturing creative minds and scholarly pursuits in various disciplines.",
    image: "https://placehold.co/600x400/AF005F/FFFFFF",
    hint: "university library",
  },
  {
    name: "EGS Pillay Polytechnic College",
    description: "Providing hands-on technical education and vocational training.",
    image: "https://placehold.co/600x400/001B70/FFFFFF",
    hint: "workshop students",
  },
  {
    name: "EGS Pillay College of Pharmacy",
    description: "Dedicated to excellence in pharmaceutical education and research.",
    image: "https://placehold.co/600x400/AF005F/FFFFFF",
    hint: "science laboratory",
  },
];

const requiredDocuments = [
  "10th & 12th Mark Sheets",
  "Transfer Certificate (TC)",
  "Community Certificate",
  "Passport Size Photos (4)",
  "Aadhaar Card",
  "Bachelor's Degree (for PG courses)",
];

const importantDates = [
  { event: "Application Start Date", date: "June 1st, 2025" },
  { event: "Application End Date", date: "August 15th, 2025" },
  { event: "Entrance Exam (if applicable)", date: "August 20th, 2025" },
  { event: "First Merit List", date: "August 25th, 2025" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-primary">
            <GraduationCap className="h-6 w-6" />
            <span className="text-lg">EGS Pillay Group</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <Button asChild>
              <a href="#course-finder">Find Your Course</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative flex h-[60vh] w-full items-center justify-center bg-primary text-primary-foreground">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080"
              alt="EGS Pillay Campus"
              data-ai-hint="university campus"
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-primary" />
          </div>
          <div className="container relative text-center">
            <h1 className="font-headline text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Admissions Open 2025-2026
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Your future starts here. Discover our wide range of programs and
              kickstart your career with us.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="#institutions">Explore Institutions</a>
              </Button>
              <Button size="lg" style={{ backgroundColor: "var(--accent)" }} asChild>
                <a href="#course-finder">Apply Now</a>
              </Button>
            </div>
          </div>
        </section>
        
        <section id="admissions" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Admission Highlights
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Everything you need to know to join our esteemed institutions.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Important Dates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {importantDates.map((item) => (
                      <li key={item.event} className="flex justify-between">
                        <span>{item.event}</span>
                        <span className="font-semibold">{item.date}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                    {requiredDocuments.map((doc) => (
                      <li key={doc} className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-accent" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="institutions" className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Our Institutions
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                A diverse group of colleges dedicated to quality education.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {institutions.map((inst) => (
                <Card key={inst.name} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      width={600}
                      height={400}
                      data-ai-hint={inst.hint}
                      className="h-48 w-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <CardTitle className="text-lg">{inst.name}</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {inst.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="course-finder" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Personalized Course Finder
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Let our AI guide you to the perfect course based on your profile and interests.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <CourseFinder />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl">EGS Pillay Group</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Committed to providing excellence in education since 1996.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#admissions" className="text-primary-foreground/70 hover:text-primary-foreground">Admissions</Link></li>
                <li><Link href="#institutions" className="text-primary-foreground/70 hover:text-primary-foreground">Institutions</Link></li>
                <li><Link href="#course-finder" className="text-primary-foreground/70 hover:text-primary-foreground">Course Finder</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact Us</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2 text-primary-foreground/70"><Mail className="h-4 w-4" /> admissions@egspillay.ac.in</li>
                <li className="flex items-center gap-2 text-primary-foreground/70"><Phone className="h-4 w-4" /> +91-4632-220-179</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Follow Us</h4>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground"><Linkedin className="h-6 w-6" /></Link>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground"><Facebook className="h-6 w-6" /></Link>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground"><Twitter className="h-6 w-6" /></Link>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground"><Instagram className="h-6 w-6" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary/80 py-4">
          <div className="container text-center text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} EGS Pillay Group of Institutions. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
