"use client"
import Image from "next/image";
import Link from "next/link";
import {
  BookMarked,
  Download,
  Video,
  ArrowRight,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Menu,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React, { useState, useEffect } from "react";
import { ProgrammesOffered } from "@/components/ProgrammesOffered";
import { CampusView } from "@/components/CampusView";
import { DownloadBrochure } from "@/components/DownloadBrochure";
import { WhyEgspgoi } from "@/components/WhyEgspgoi";
import { ContactUs } from "@/components/ContactUs";


const colleges = [
  {
    name: "EGS Pillay Engineering College",
    description: "Top BE, B.Tech, ME, MBA & MCA courses.",
    image: "/assets/institutions/eng.webp",
    hint: "modern campus",
    href: "#",
  },
  {
    name: "EGS Pillay Arts & Science College",
    description: "A wide range of courses in arts and science.",
    image: "/assets/institutions/arts.webp",
    hint: "university library",
    href: "#",
  },
  {
    name: "EGS Pillay Polytechnic College",
    description: "Practical diploma programs for technical skills.",
    image: "/assets/institutions/poly.webp",
    hint: "workshop students",
    href: "#",
  },
  {
    name: "EGS Pillay College of Education",
    description: "Training the next generation of great teachers.",
    image: "/assets/institutions/edu.webp",
    hint: "lecture hall",
    href: "#",
  },
  {
    name: "EGS Pillay College and School of Nursing",
    description: "Quality education for a career in nursing.",
    image: "/assets/institutions/nursing.webp",
    hint: "medical students",
    href: "#",
  },
  {
    name: "EGS Pillay College of Pharmacy",
    description: "Expert training in pharmaceutical sciences.",
    image: "/assets/institutions/pharmacy.webp",
    hint: "science laboratory",
    href: "#",
  },
  {
    name: "EGS Pillay Naturopathy and Yoga Medical College",
    description: "Learn about natural health and wellness.",
    image: "/assets/institutions/naturopathy.webp",
    hint: "yoga meditation",
    href: "#",
  },
];

const schools = [
    {
    name: "EGS Pillay International School",
    description: "CBSE curriculum for excellent school education.",
    image: "/assets/institutions/school.webp",
    hint: "school children",
    href: "#",
  },
]

const institutions = [...colleges, ...schools];

function Copyright() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (currentYear === null) {
    return null; 
  }

  return (
    <div className="bg-gray-800 py-4 text-center text-sm text-gray-300">
      <p>Copyright © 2006 - {currentYear} All Rights Reserved by EGS Pillay Group of Institutions</p>
      <p className="mt-1">Developed By Raghavan Jeeva</p>
    </div>
  );
}


export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold" aria-label="EGS Pillay Group of Institutions Home">
            <Image src="/assets/egspgoi___logo.webp" alt="EGS Pillay Group of Institutions Logo" width={150} height={40} className="h-10 w-auto" priority />

          </Link>
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            <Link href="#admissions" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Admissions</Link>
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-transparent focus-visible:ring-0">
                  Institutions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {institutions.map((inst) => (
                    <DropdownMenuItem key={inst.name} asChild>
                        <a href={inst.href} target="_blank" rel="noopener noreferrer">{inst.name}</a>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
             <a href="https://ac.egspgroup.in/ERP" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">ERP Portal</a>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Contact Us</Link>
          </nav>
          <div className="ml-auto flex items-center md:hidden">
              <Sheet>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Toggle Menu</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                      <div className="grid gap-4 py-6">
                           <Link href="#admissions" className="text-lg font-medium">Admissions</Link>
                           <h2 className="text-lg font-medium">Institutions</h2>
                            <div className="flex flex-col gap-4 pl-4">
                                {institutions.map((inst) => (
                                    <Link key={inst.name} href={inst.href} target="_blank" className="text-muted-foreground">{inst.name}</Link>
                                ))}
                            </div>
                           <a href="https://ac.egspgroup.in/ERP" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">ERP Portal</a>
                           <Link href="#contact" className="text-lg font-medium">Contact Us</Link>
                      </div>
                  </SheetContent>
              </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
       <section className="relative w-full overflow-hidden bg-[#F8F9FA] py-24 md:py-32">
          <div className="absolute inset-0 z-0">
              <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]"></div>
              <div className="absolute right-[-10%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]"></div>
          </div>
          <div className="container relative z-10 grid grid-cols-1 items-center gap-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl" style={{ fontWeight: 600 }}>
                A Legacy of Educational Excellence
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                The EGS Pillay Group is a leader in education, dedicated to creating the next generation of leaders and thinkers. We provide a top-quality educational experience that helps students reach their full potential.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="#institutions">Discover Our Institutions</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
            <div className="container">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Us</h2>
                        <h3 className="text-xl font-semibold tracking-tight text-primary mt-2">EGS Pillay Group of Institutions</h3>
                        <p className="mt-4 text-muted-foreground">
                            Founded by the visionary Chevalier. Dr. G.S. Pillay, our journey began with a simple dream: to make quality education accessible to all. Our mission is to provide excellent teaching that helps students from all backgrounds succeed in life. Today, we are proud to be one of the top educational groups in the region.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            We offer a wide range of courses across our colleges, from Engineering and Technology to Arts, Science, and Health Sciences. Our main goal is to empower our students with the skills and knowledge they need to become future leaders and build successful careers.
                        </p>
                    </div>
                    <div className="w-full aspect-[4/5] relative">
                        <Image src="/assets/about/1.webp" alt="Founder of EGS Pillay Group, Chevalier. Dr. G.S. Pillay" fill className="rounded-lg object-cover" priority />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                <div role="button" aria-label="Explore our programmes" className="group relative block h-full w-full cursor-pointer">
                    <div className="relative flex h-full items-end rounded-lg border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 group-hover:bg-primary/5">
                        <div className="relative z-10">
                            <div className="mb-4 inline-block rounded-full bg-primary p-3 text-primary-foreground">
                                <BookMarked className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Programmes Offered</h3>
                            <p className="mt-2 text-muted-foreground">Explore our wide range of undergraduate and postgraduate programmes.</p>
                            <div className="mt-4 flex items-center font-semibold text-primary">
                                View Programmes
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <CampusView institutions={institutions} />
                <a href="#" className="group relative block h-full w-full">
                    <div className="relative flex h-full items-end rounded-lg border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 group-hover:bg-primary/5">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/20 via-primary/5 to-transparent"></div>
                        <div className="relative z-10">
                            <div className="mb-4 inline-block rounded-full bg-primary/10 p-3 text-primary">
                                <Download className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Download Brochure</h3>
                            <p className="mt-2 text-muted-foreground">Get detailed information about our courses, facilities, and admission process.</p>
                            <div className="mt-4 flex items-center font-semibold text-primary">
                                Download Now
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
        
        <WhyEgspgoi />
        
        <section id="institutions" className="bg-background py-16 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Our Institutions
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                We have many colleges, each offering high-quality education in different fields. Find the right course and college for you.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {institutions.map((inst) => (
                <Card key={inst.name} className="flex flex-col overflow-hidden transition-shadow duration-300">
                  <div className="relative h-48 w-full">
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      fill
                      data-ai-hint={inst.hint}
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <CardTitle className="text-lg">{inst.name}</CardTitle>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {inst.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="p-0">
                      <a href="#">Learn More<span className="sr-only"> about {inst.name}</span></a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ContactUs />
      </main>

      <footer id="contact" className="bg-primary text-primary-foreground">
        <div className="container grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block rounded-lg bg-white p-2" aria-label="EGS Pillay Group of Institutions Home">
                <Image src="/assets/egspgoi___logo.webp" alt="EGS Pillay Group of Institutions Logo" width={120} height={30} className="h-auto w-auto" />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Providing excellent education and building futures since 1996.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground" aria-label="LinkedIn"><Linkedin className="h-6 w-6" /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground" aria-label="Facebook"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground" aria-label="Twitter"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground" aria-label="Instagram"><Instagram className="h-6 w-6" /></Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3">
             <div>
              <h4 className="font-semibold">Institutions</h4>
              <ul className="mt-4 space-y-2 text-sm">
                 {colleges.map((inst) => (
                  <li key={inst.name}><a href={inst.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground">{inst.name}</a></li>
                 ))}
                 {schools.map((inst) => (
                    <li key={inst.name}><a href={inst.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground">{inst.name}</a></li>
                 ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Admissions</h4>
               <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2 text-primary-foreground/70"><Phone className="h-4 w-4" /> +91 99768 88999</li>
                <li className="flex items-center gap-2 text-primary-foreground/70"><Phone className="h-4 w-4" /> +91 86809 54537</li>
                <li className="flex items-center gap-2 text-primary-foreground/70"><Mail className="h-4 w-4" /> admission@egspec.org</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact Us</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2 text-primary-foreground/70">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-1" /> 
                  <span>Old, Nagore Main Rd, Thethi village, Nagore, Nagapattinam, Tamil Nadu 611002</span>
                </li>
                <li className="flex items-center gap-2 text-primary-foreground/70"><Mail className="h-4 w-4" /> enquiry@egspec.org</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </div>
  );
}
