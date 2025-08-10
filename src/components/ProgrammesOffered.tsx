import { BookMarked } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function ProgrammesOffered() {
    return (
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <BookMarked className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Programmes Offered</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Explore our wide range of undergraduate and postgraduate programmes.</p>
                <Button variant="outline">View Programmes</Button>
            </CardContent>
        </Card>
    )
}
