import ProjectBackground from "../components/ProjectBackground";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Laravel Project",
            subtitle: "Ecommerce web solution",
            image: "/images/project-1.jpg",
            stacks: ["Laravel", "MySQL", "Tailwind", "Stripe"],
        },
        {
            title: "Laravel Project",
            subtitle: "Ecommerce web solution",
            image: "/images/project-2.jpg",
            stacks: ["Laravel", "MySQL", "Tailwind", "Stripe"],
        },
        {
            title: "Laravel Project",
            subtitle: "Ecommerce web solution",
            image: "/images/project-3.jpg",
            stacks: ["Laravel", "MySQL", "Tailwind", "Stripe"],
        },
        {
            title: "Laravel Project",
            subtitle: "Ecommerce web solution",
            image: "/images/project-4.jpg",
            stacks: ["Laravel", "MySQL", "Tailwind", "Stripe"],
        },
        {
            title: "Laravel Project",
            subtitle: "Ecommerce web solution",
            image: "/images/project-5.jpg",
            stacks: ["Laravel", "MySQL", "Tailwind", "Stripe"],
        },
        {
            title: "Laravel Project",
            subtitle: "Ecommerce web solution",
            image: "/images/project-6.jpg",
            stacks: ["Laravel", "MySQL", "Tailwind", "Stripe"],
        },
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <ProjectBackground />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

            <div className="relative z-10 px-6 md:px-16">
                <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-[48px] md:text-[72px] font-extrabold font-baloo leading-none text-primary text-stroke-white drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                            My Latest Project
                        </h2>
                        <p className="mt-2 text-[24px] md:text-[32px] font-semibold font-baloo text-primary text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                            and tools techstack
                        </p>
                    </div>

                    <button className="self-start md:self-auto rounded-full bg-primary px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105">
                        View All Project
                    </button>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
