import React from "react";

export default function ExperienceSection() {
    const experiences = [
        {
            role: "Student",
            company: "SDIT Misbahussudur",
            date: "May 2023 – June 2026",
        },
        {
            role: "Student",
            company: "SMPN 2 Cibinong",
            date: "May 2023 – June 2026",
        },
        {
            role: "Software Engineering Student",
            company: "SMKN 1 Cibinong",
            date: "May 2023 – June 2026",
        },
        {
            role: "External Reviewer",
            company: "Dicoding Indonesia",
            date: "June 2025 – Now",
        },
        {
            role: "Intern backend Engineer",
            company: "PT. Neo One Global Innovasi",
            date: "Oct 2025 – May 2026",
        },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            <div className="absolute inset-0 bg-grid opacity-40" />

            <div className="relative z-10 flex flex-col items-center px-6 md:px-16 py-12">
                <h1 className="mb-20 text-[48px] md:text-[96px] font-extrabold font-baloo leading-none text-stroke-white text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                    My Journey
                </h1>

                <div className="relative w-full max-w-3xl">
                    <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-amber-400 rounded-full" />

                    <div className="flex flex-col gap-16">
                        {experiences.map((exp, index) => {
                            const isLeft = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex w-full items-center ${
                                        isLeft ? "justify-start" : "justify-end"
                                    }`}
                                >
                                    <div
                                        className={`w-full md:w-1/2 ${
                                            isLeft
                                                ? "text-right pr-12"
                                                : "text-left pl-12"
                                        }`}
                                    >
                                        <h3 className="text-[28px] font-extrabold font-baloo text-primary text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                                            {exp.role}
                                        </h3>
                                        <p className="mt-1 font-kumbh font-semibold text-amber-500">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm font-kumbh text-amber-500">
                                            {exp.date}
                                        </p>
                                    </div>

                                    <div className="absolute left-1/2 -translate-x-1/2">
                                        <div className="h-6 w-6 rounded-full bg-amber-400 ring-4 ring-white shadow-md" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
