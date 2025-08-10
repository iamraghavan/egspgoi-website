import { Video } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

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
                <Card className="cursor-pointer transition-colors duration-300 hover:bg-primary/5">
                    <CardHeader className="flex-row items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Video className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>360° Campus View</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">Take a virtual tour of our sprawling, state-of-the-art campus.</p>
                        <Button variant="outline">Take a Tour</Button>
                    </CardContent>
                </Card>
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
                                <Image 
                                    src={inst.image}
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
