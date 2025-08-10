export function WhyEgspgoi() {
    const processSteps = [
        {
            number: "01",
            title: "Legacy of Excellence",
            description: "With a long history of success, we give you a strong start for your career."
        },
        {
            number: "02",
            title: "Expert Teachers",
            description: "Learn from dedicated teachers who are masters in their subjects."
        },
        {
            number: "03",
            title: "Modern Campus",
            description: "Use the best labs, libraries, and classrooms to help you learn better."
        },
        {
            number: "04",
            title: "Overall Development",
            description: "We focus on your complete growth, helping you build both academic and personal skills."
        }
    ];

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose EGS Pillay Group of Institutions?</h2>
                    <p className="lead fs-lg mx-auto mt-2 max-w-2xl text-muted-foreground">
                        Find out why studying at our top colleges is the best choice for you. We help you succeed.
                    </p>
                </div>
                <div className="relative">
                    <div className="grid gap-12 md:grid-cols-4 md:gap-8 relative">
                        {processSteps.map((step, index) => (
                            <div key={step.number} className="relative text-center">
                                <div className="relative z-10">
                                    <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 ${index % 2 === 0 ? 'bg-primary border-primary/20 text-primary-foreground' : 'bg-accent border-accent/20 text-accent-foreground'} text-2xl font-bold mb-4`}>{step.number}</span>
                                    <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
