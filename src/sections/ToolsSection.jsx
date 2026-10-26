import { useEffect, useState } from "react";
import { BackendIcon } from "../components/icon/BackendIcon";
import { FrontendIcon } from "../components/icon/FrontendIcon";
import { OtherIcon } from "../components/icon/OtherIcon";
import ToolsCard from "../components/ToolsCard";

export default function ToolsSection() {
    
const cards = [
    {
        title: "FRONT-END",
        icon: (
            <FrontendIcon className="transition-all duration-300 group-hover:scale-110" />
        ),
        desc: "Building responsive and interactive user interfaces with React and modern web technologies, with a focus on usability, maintainability, and seamless integration with backend services.",
        tags: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "React Native",
            "Tailwind CSS",
            "Bootstrap",
        ],
    },
    {
        title: "BACK-END",
        icon: (
            <BackendIcon className="transition-all duration-300 group-hover:scale-110" />
        ),
        desc: "Specialized in backend development, designing RESTful APIs, database architectures, authentication systems, and maintainable server-side applications using modern frameworks and development patterns.",
        tags: [
            "PHP",
            "Laravel",
            "Node.js",
            "Express.js",
            "Go",
            "PostgreSQL",
            "MySQL",
            "Prisma",
            "REST API",
            "Redis",
        ],
    },
    {
        title: "TOOLS & OTHERS",
        icon: (
            <OtherIcon className="transition-all duration-300 group-hover:scale-110" />
        ),
        desc: "Experienced in collaborative development workflows, version control, database management, package management, and UI prototyping using industry-standard development tools.",
        tags: [
            "Git",
            "GitHub",
            "NPM",
            "Composer",
            "Figma",
            "VS Code",
            "Visual Studio",
            "Android Studio",
            "Postman",
            "Docker",
        ],
    },
];


    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (isHovering || media.matches) return;

        const interval = setInterval(() => {
            if (media.matches || document.hidden || !document.getElementById("skills")?.getBoundingClientRect().height) return;
            const rect = document.getElementById("skills").getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) return;
            setActiveIndex((prev) => (prev + 1) % cards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovering, cards.length]);

    return (
        <section id="skills" aria-labelledby="skills-heading" className="section-space relative bg-white">
            <div className="absolute inset-0 bg-grid opacity-40" />

            <div className="section-shell relative z-10">
                <div data-reveal="up" className="mb-12">
                    <h2 id="skills-heading" className="section-title text-[48px] md:text-[96px] font-extrabold font-baloo leading-none text-stroke-white text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                        Exploring the tools
                    </h2>
                    <p className="section-subtitle mt-2 text-[32px] font-semibold font-baloo leading-none text-stroke-white-md text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                        behind my website
                    </p>
                </div>

                <div className="tools-grid">
                    {cards.map((card, index) => (
                        <ToolsCard
                            key={card.title}
                            {...card}
                            delay={index * 80}
                            active={index === activeIndex}
                            onHover={() => {
                                setIsHovering(true);
                                setActiveIndex(index);
                            }}
                            onLeave={() => setIsHovering(false)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
