import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function DownloadBrochure() {
    return (
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Download className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Download Brochure</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Get detailed information about our courses, facilities, and admission process.</p>
                <Button variant="outline">Download Now</Button>
            </CardContent>
        </Card>
    )
}
