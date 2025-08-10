import { Mail, MapPin, Phone } from "lucide-react";

export function ContactUs() {
    return (
        <section id="contact-us" className="bg-secondary py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-5xl">
                    <div className="card overflow-hidden rounded-lg bg-card text-card-foreground">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="h-80 lg:h-auto">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0990892166815!2d79.8332637!3d10.8037224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a556ca2018f1961%3A0xa99f9848f54a5c9!2sEGS%20Pillay%20Engineering%20College(Autonomous)!5e0!3m2!1sen!2sin!4v1754818695667!5m2!1sen!2sin" 
                                    title="EGS Pillay Group of Institutions Location Map"
                                    style={{width: '100%', height: '100%', border: 0}}
                                    allowFullScreen
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="p-8 md:p-10">
                                <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 text-primary">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Address</h4>
                                            <address className="not-italic text-muted-foreground">
                                                Old, Nagore Main Rd, Thethi village, Nagore, Nagapattinam, Tamil Nadu 611002
                                            </address>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 text-primary">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Phone</h4>
                                            <p className="text-muted-foreground">+91 99768 88999</p>
                                            <p className="text-muted-foreground">+91 86809 54537</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 text-primary">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">E-mail</h4>
                                            <p><a href="mailto:admission@egspec.org" className="text-primary hover:underline">admission@egspec.org</a></p>
                                            <p><a href="mailto:enquiry@egspec.org" className="text-primary hover:underline">enquiry@egspec.org</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
