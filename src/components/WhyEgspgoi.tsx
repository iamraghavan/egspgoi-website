export function WhyEgspgoi() {
    const processSteps = [
        {
            number: "01",
            title: "Legacy of Excellence",
            description: "With a rich history of academic achievements, we provide a strong foundation for your success."
        },
        {
            number: "02",
            title: "Expert Faculty",
            description: "Learn from experienced and dedicated educators who are experts in their fields."
        },
        {
            number: "03",
            title: "State-of-the-Art Infrastructure",
            description: "Access modern labs, libraries, and facilities that enhance your learning experience."
        },
        {
            number: "04",
            title: "Holistic Development",
            description: "We focus on your overall growth, nurturing both your academic and personal skills."
        }
    ];

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why EGS Pillay Group?</h2>
                    <p className="lead fs-lg mx-auto mt-2 max-w-2xl text-muted-foreground">
                        Discover the advantages of studying at one of our esteemed institutions.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-200 hidden md:block" aria-hidden="true"></div>
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
