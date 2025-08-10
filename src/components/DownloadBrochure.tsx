import { Download, ArrowRight } from "lucide-react";

export function DownloadBrochure() {
    return (
        <a href="#" className="group relative block h-full w-full">
            <div className="relative flex h-full items-end rounded-lg border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
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
    )
}
