import { Video } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function CampusView() {
    return (
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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
    )
}
