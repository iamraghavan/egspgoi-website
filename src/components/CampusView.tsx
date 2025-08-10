import { Video, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import { ImageWithFallback } from "./ImageWithFallback";

interface Institution {
    name: string;
    description: string;
    image: string;
    hint: string;
    href: string;
}

interface CampusViewProps {
    institutions: Institution[];
}

export function CampusView({ institutions }: CampusViewProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div role="button" aria-label="Take a virtual tour of our campus" className="group relative block h-full w-full cursor-pointer rounded-lg border border-black/10 bg-white p-6 transition-all duration-300 hover:bg-accent/5">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-accent/20 via-accent/5 to-transparent"></div>
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-4 inline-block rounded-full bg-accent p-3 text-accent-foreground">
                      <Video className="h-6 w-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground">360° Campus View</h3>
                      <p className="mt-2 text-muted-foreground">Take a virtual tour of our sprawling, state-of-the-art campus.</p>
                    </div>
                    <div className="mt-4 flex items-center font-semibold text-accent">
                      Take a Tour
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle>Explore Our Campuses</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 max-h-[60vh] overflow-y-auto">
                    {institutions.map((inst) => (
                        <a 
                            key={inst.name} 
                            href={inst.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-lg border p-2 text-center transition-all hover:border-primary hover:bg-primary/5"
                        >
                            <div className="relative h-24 w-full mb-2">
                                <ImageWithFallback 
                                    src={inst.image}
                                    fallbackSrc="/assets/egspgoi___logo.webp"
                                    alt={`${inst.name} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary">{inst.name}</p>
                        </a>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}
