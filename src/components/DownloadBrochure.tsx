import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function DownloadBrochure() {
    return (
        <a href="#" className="block h-full w-full">
            <Card className="cursor-pointer transition-colors duration-300 hover:bg-primary/5 w-full h-full text-left">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Download className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Download Brochure</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Get detailed information about our courses, facilities, and admission process.</p>
                    <div className="text-primary font-semibold">Download Now</div>
                </CardContent>
            </Card>
        </a>
    )
}
