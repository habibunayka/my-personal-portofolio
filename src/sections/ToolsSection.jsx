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
            desc: "Experienced in building responsive and interactive user interfaces using HTML5, CSS3, JavaScript, TypeScript, React, and Bootstrap, with a strong focus on usability and performance.",
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "TypeScript",
                "Bootstrap",
            ],
        },
        {
            title: "BACK-END",
            icon: (
                <BackendIcon className="transition-all duration-300 group-hover:scale-110" />
            ),
            desc: "Skilled in developing and maintaining server-side logic, RESTful APIs, and database systems using PHP, Laravel, MySQL, and Node.js to ensure scalability and system reliability.",
            tags: ["PHP", "Laravel", "MySQL", "Node.js"],
        },
        {
            title: "OTHER",
            icon: (
                <OtherIcon className="transition-all duration-300 group-hover:scale-110" />
            ),
            desc: "Proficient in modern development workflows using Figma for UI design, GitHub for version control, NPM for package management, and VS Code as the primary development environment.",
            tags: ["Figma", "GitHub", "NPM", "VS Code"],
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovering, cards.length]);

    return (
        <section className="relative h-screen overflow-hidden bg-white">
            <div className="absolute inset-0 bg-grid opacity-40" />

            <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16">
                <div className="mb-12">
                    <h1 className="text-[48px] md:text-[96px] font-extrabold font-baloo leading-none text-stroke-white text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                        Exploring the tools
                    </h1>
                    <p className="mt-2 text-[32px] font-semibold font-baloo leading-none text-stroke-white-md text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                        behind my website
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <ToolsCard
                            key={card.title}
                            {...card}
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
