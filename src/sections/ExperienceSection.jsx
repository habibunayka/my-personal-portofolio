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
        <section className="relative min-h-screen overflow-hidden w-full bg-white">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <svg
                width="755"
                height="845"
                viewBox="0 0 755 845"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0"
            >
                <g opacity="0.27" filter="url(#filter0_f_185_39)">
                    <path
                        d="M-186.677 140.291C-74.9654 5.2597 151.823 263.291 372.323 140.291C592.823 17.291 877.323 200.791 372.323 551.291C-132.677 901.79 49.3228 695.293 -186.677 551.291C-422.677 407.29 -298.389 275.323 -186.677 140.291Z"
                        fill="#FFE313"
                        fill-opacity="0.8"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_185_39"
                        x="-421"
                        y="0"
                        width="1175.15"
                        height="844.219"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="50"
                            result="effect1_foregroundBlur_185_39"
                        />
                    </filter>
                </defs>
            </svg>

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
                <svg
                    width="600"
                    height="845"
                    viewBox="0 0 600 845"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 -bottom-12"
                >
                    <g opacity="0.26" filter="url(#filter0_f_124_251)">
                        <path
                            d="M234.323 140.291C346.035 5.2597 572.823 263.291 793.323 140.291C1013.82 17.291 1298.32 200.791 793.323 551.291C288.323 901.79 470.323 695.293 234.323 551.291C-1.67694 407.29 122.611 275.323 234.323 140.291Z"
                            fill="#FFE313"
                            fill-opacity="0.8"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_124_251"
                            x="0"
                            y="0"
                            width="1175.15"
                            height="844.219"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="50"
                                result="effect1_foregroundBlur_124_251"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    );
}
