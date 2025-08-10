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
  Building,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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

const institutions = [
  {
    name: "EGS Pillay Engineering College",
    description: "B.Tech, BE, MBA, MCA, ME Programs.",
    image: "https://placehold.co/600x400",
    hint: "modern campus",
  },
  {
    name: "EGS Pillay Arts & Science College",
    description: "Courses in various arts and science disciplines.",
    image: "https://placehold.co/600x400",
    hint: "university library",
  },
  {
    name: "EGS Pillay Polytechnic College",
    description: "Offering various diploma programs.",
    image: "https://placehold.co/600x400",
    hint: "workshop students",
  },
  {
    name: "EGS Pillay College of Education",
    description: "Focused on high-quality teacher training.",
    image: "https://placehold.co/600x400",
    hint: "lecture hall",
  },
  {
    name: "EGS Pillay College and School of Nursing",
    description: "Comprehensive nursing education programs.",
    image: "https://placehold.co/600x400",
    hint: "medical students",
  },
  {
    name: "EGS Pillay College of Pharmacy",
    description: "Specialized education in pharmaceutical sciences.",
    image: "https://placehold.co/600x400",
    hint: "science laboratory",
  },
  {
    name: "EGS Pillay International School",
    description: "CBSE curriculum for a world-class education.",
    image: "https://placehold.co/600x400",
    hint: "school children",
  },
  {
    name: "EGS Pillay Naturopathy and Yoga Medical College",
    description: "Holistic healthcare through naturopathy and yoga.",
    image: "https://placehold.co/600x400",
    hint: "yoga meditation",
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
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-primary">EGS Pillay Group</span>
          </Link>
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            <Link href="#admissions" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Admissions</Link>
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:ring-0">
                  Institutions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {institutions.map((inst) => (
                    <DropdownMenuItem key={inst.name} asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">{inst.name}</a>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Contact Us</Link>
          </nav>
          <div className="ml-auto flex items-center md:hidden">
              <Sheet>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Toggle Menu</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                      <div className="grid gap-4 py-6">
                           <Link href="#admissions" className="text-lg font-medium">Admissions</Link>
                           <p className="text-lg font-medium">Institutions</p>
                            <div className="flex flex-col gap-4 pl-4">
                                {institutions.map((inst) => (
                                    <Link key={inst.name} href="#" target="_blank" className="text-muted-foreground">{inst.name}</Link>
                                ))}
                            </div>
                           <Link href="#contact" className="text-lg font-medium">Contact Us</Link>
                      </div>
                  </SheetContent>
              </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative flex h-[70vh] w-full items-center justify-center bg-primary text-primary-foreground">
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
            <h1 className="text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Admissions Open 2025-2026
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-foreground/80">
              Your future starts here. Discover our wide range of programs and
              kickstart your career with us at one of our esteemed institutions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="#institutions">Explore Institutions</a>
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <a href="#contact">Apply Now</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
            <div className="container">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About EGS Pillay Group</h2>
                        <p className="mt-4 text-muted-foreground">The EGS Pillay Group of Institutions is a premier educational provider with a rich history of fostering academic excellence and innovation. We are dedicated to providing a transformative learning experience that prepares students for success in a rapidly changing world.</p>
                        <p className="mt-4 text-muted-foreground">Our group comprises a diverse range of colleges and schools, each specializing in different fields of study, from engineering and technology to arts, sciences, and holistic healthcare. We are committed to nurturing talent and empowering our students to become leaders in their chosen professions.</p>
                    </div>
                    <div className="h-80 w-full">
                        <Image src="https://placehold.co/600x400" alt="About us" data-ai-hint="students walking" width={600} height={400} className="h-full w-full rounded-lg object-cover shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
        
        <section id="admissions" className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Admission Highlights
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Key information for prospective students for the 2025-2026 academic year.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
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
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-3">
                    {requiredDocuments.map((doc) => (
                      <li key={doc} className="flex items-center gap-3">
                        <BookOpen className="h-4 w-4 text-accent" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
               <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building className="h-6 w-6 text-primary" />
                    Programs Offered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><GraduationCap className="h-4 w-4 flex-shrink-0 text-accent mt-1" /><div><span className="font-semibold">Engineering:</span> B.Tech, BE, MBA, MCA, ME</div></li>
                    <li className="flex items-start gap-3"><GraduationCap className="h-4 w-4 flex-shrink-0 text-accent mt-1" /><div><span className="font-semibold">Arts & Science:</span> Various UG & PG Degrees</div></li>
                    <li className="flex items-start gap-3"><GraduationCap className="h-4 w-4 flex-shrink-0 text-accent mt-1" /><div><span className="font-semibold">Polytechnic:</span> Diploma Programs</div></li>
                    <li className="flex items-start gap-3"><GraduationCap className="h-4 w-4 flex-shrink-0 text-accent mt-1" /><div><span className="font-semibold">And more...</span></div></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="institutions" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Our Institutions
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                A diverse group of colleges dedicated to quality education.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {institutions.map((inst) => (
                <Card key={inst.name} className="flex flex-col overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
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
                    <Button variant="link" className="p-0">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-primary text-primary-foreground">
        <div className="container grid grid-cols-1 gap-8 py-16 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl">EGS Pillay Group</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Committed to providing excellence in education since 1996.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
            <div>
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#admissions" className="text-primary-foreground/70 hover:text-primary-foreground">Admissions</Link></li>
                <li><Link href="#institutions" className="text-primary-foreground/70 hover:text-primary-foreground">Institutions</Link></li>
                <li><Link href="#about" className="text-primary-foreground/70 hover:text-primary-foreground">About Us</Link></li>
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
        <div className="bg-primary/90 py-4">
          <div className="container text-center text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} EGS Pillay Group of Institutions. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
