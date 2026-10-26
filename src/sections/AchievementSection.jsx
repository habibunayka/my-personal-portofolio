import { useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AssetImage from "../components/AssetImage";
import AchievementDetailsModal from "../components/AchievementDetailsModal";

// Usage: drop this file into your React project and import <AchievementSection /> where needed.
// This component uses Tailwind CSS (same utility classes as your ToolsSection) and
// re-uses the title styling from the ToolsSection example to keep fonts and stroke.

// dummy image placeholder
const achievementPhoto = "https://placehold.co/400x500?text=Documentation"; // update path as needed

function TrophyIcon({ className = "w-12 h-12" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 3h10v2a3 3 0 01-3 3h-4A3 3 0 017 5V3z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 9v2a5 5 0 005 5h6a5 5 0 005-5V9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function Pill({ children, variant = "solid" }) {
    if (variant === "dashed")
        return (
            <div className="inline-block rounded-full border-2 border-dashed border-amber-300 px-4 py-2 text-sm font-medium text-amber-600">
                {children}
            </div>
        );

    return (
        <div className="inline-block rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-white">
            {children}
        </div>
    );
}

function AchievementRow({ data, expanded, onToggle, delay, onPreview }) {
    const detailsId = useId();
    const images = data.images?.length
        ? data.images
        : Array.isArray(data.image)
          ? data.image
          : [data.image || achievementPhoto];
    const [activeImage, setActiveImage] = useState(0);
    const showPrevious = () =>
        setActiveImage(
            (current) => (current - 1 + images.length) % images.length,
        );
    const showNext = () =>
        setActiveImage((current) => (current + 1) % images.length);

    return (
        <div
            data-reveal="up"
            style={{ "--reveal-delay": `${delay}ms` }}
            className="rounded-2xl border-4 border-amber-400 overflow-hidden bg-white shadow-sm"
        >
            <div className="achievement-header items-center">
                <div className="flex-shrink-0 text-amber-600">
                    <TrophyIcon className="w-14 h-14" />
                </div>

                <div className="min-w-0">
                    <h3 className="achievement-heading text-[24px] md:text-[32px] font-extrabold font-baloo leading-none text-stroke-white text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                        {data.title}
                    </h3>
                    <p className="mt-1 text-amber-600 font-semibold">
                        {data.subtitle}
                    </p>
                </div>

                <div className="contents">
                    <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={detailsId}
                        onClick={onToggle}
                        className="px-6 py-2 rounded-full bg-amber-400 text-white font-medium"
                    >
                        {expanded ? "Close" : "Details"}
                    </button>
                </div>
            </div>

            <div
                id={detailsId}
                aria-hidden={!expanded}
                className={`achievement-content border-t border-amber-200 ${expanded ? "is-open" : ""}`}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <Pill variant="dashed">Description</Pill>
                            <p className="mt-3 text-sm text-amber-700">
                                {data.description}
                            </p>
                        </div>

                        <div className="mb-4">
                            <Pill>Tech Stack</Pill>
                            <p className="mt-3 text-sm text-amber-700">
                                {data.tech}
                            </p>
                        </div>

                        <div>
                            <Pill variant="dashed">Event Date</Pill>
                            <p className="mt-3 text-sm text-amber-700">
                                {data.date}
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex flex-col items-center gap-4">
                        <div className="self-start">
                            <Pill>Documentation</Pill>
                        </div>

                        <div className="achievement-slider">
                            <button
                                type="button"
                                className="achievement-documentation-trigger"
                                aria-label={`Preview documentation ${activeImage + 1} of ${images.length} for ${data.title}`}
                                onClick={(event) =>
                                    onPreview(event, images[activeImage])
                                }
                            >
                                <AssetImage
                                    src={images[activeImage]}
                                    alt={`${data.title} documentation ${activeImage + 1}`}
                                    className="w-full max-w-xs aspect-[4/5] object-contain rounded-2xl ring-4 ring-amber-50"
                                />
                            </button>
                            {images.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        className="achievement-slider-button achievement-slider-previous"
                                        aria-label="Previous documentation image"
                                        onClick={showPrevious}
                                    >
                                        <ChevronLeft
                                            size={20}
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="achievement-slider-button achievement-slider-next"
                                        aria-label="Next documentation image"
                                        onClick={showNext}
                                    >
                                        <ChevronRight
                                            size={20}
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <div
                                        className="achievement-slider-dots"
                                        aria-label="Documentation image selector"
                                    >
                                        {images.map((image, index) => (
                                            <button
                                                key={image}
                                                type="button"
                                                className="achievement-slider-dot"
                                                data-active={
                                                    index === activeImage
                                                }
                                                aria-label={`Show documentation image ${index + 1}`}
                                                aria-current={
                                                    index === activeImage
                                                        ? "true"
                                                        : undefined
                                                }
                                                onClick={() =>
                                                    setActiveImage(index)
                                                }
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AchievementSection() {
    const [openIndex, setOpenIndex] = useState(2); // show third as expanded like the design
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const openerRef = useRef(null);

    const items = [
        {
            title: "2nd Place – LCGN AI 2025",
            subtitle: "National Game Development Competition",
            description:
                "Achieved 2nd place nationally in LCGN AI 2025 through GoPlants!, a pixel art farming simulation game featuring plant cultivation, growth progression, in-game currency, and interactive gameplay mechanics. The project combined creative game design with programming to deliver an engaging player experience, demonstrating problem-solving skills, gameplay development, and the ability to transform an idea into a playable digital product.",
            tech: "HTML, CSS, JavaScript, Pixel Art, Game Development",
            date: "2025",
            images: [
                "/assets/achievements/lcgn-ai-2025.png",
                "/assets/achievements/lcgn-ai-2025_2.png",
            ],
        },
        {
            title: "3rd Place – LKS Web Development",
            subtitle: "West Java Provincial Skills Competition",
            description:
                "Achieved 3rd place in the Web Development category at the 2025 Lomba Kompetensi Siswa (LKS) tingkat Provinsi Jawa Barat. The competition involved practical web development challenges covering client-side programming, application interfaces, API integration, and server-side development. The provided project modules included building an interactive browser-based game using HTML, CSS, and JavaScript; developing a React-based mobile service interface with features for events, weather, and parking information; and working with a Laravel backend for authentication, installment management, application processing, and validation workflows. This experience strengthened my ability to understand existing codebases, implement application features, integrate frontend and backend components, and solve technical problems under competition time constraints.",
            tech: "HTML, CSS, JavaScript, React, PHP, Laravel, REST API, Axios, MySQL",
            date: "2025",
            images: ["/assets/achievements/lks-web-development-2025.png"],
        },
        {
            title: "Reviewer of the Month — Dicoding Elite",
            subtitle: "Elite of The Month July 2025",
            description:
                "Recognized as Reviewer of the Month at Dicoding Elite Meetup 2025 for contributions to the developer learning community through code reviews and technical feedback. This recognition reflects a commitment to maintaining code quality, applying programming best practices, and helping fellow developers improve their coding skills. Being selected for this recognition highlights my involvement in the Dicoding developer ecosystem and my contribution to fostering a collaborative learning environment.",
            tech: "Code Review, Code Quality, Programming Best Practices, Technical Feedback",
            date: "2025",
            images: [
              "/assets/achievements/reviewer-of-the-month.png",
              "/assets/achievements/reviewer-of-the-month_2.png"

            ],
        },
    ];

    return (
        <section
            id="achievements"
            aria-labelledby="achievement-heading"
            className="section-space relative overflow-hidden bg-white"
        >
            <div className="absolute inset-0 bg-grid opacity-40" />

            <div className="section-shell relative z-10 space-y-8">
                <div>
                    <h2
                        id="achievement-heading"
                        data-reveal="up"
                        className="section-title text-[48px] md:text-[96px] font-extrabold font-baloo leading-none text-stroke-white text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]"
                    >
                        ACHIEVEMENT
                    </h2>
                </div>

                <div className="grid gap-6">
                    {items.map((it, idx) => (
                        <AchievementRow
                            key={idx}
                            data={it}
                            delay={idx * 80}
                            expanded={openIndex === idx}
                            onToggle={() =>
                                setOpenIndex(openIndex === idx ? -1 : idx)
                            }
                            onPreview={(event, image) => {
                                openerRef.current = event.currentTarget;
                                setSelectedAchievement({ ...it, image });
                            }}
                        />
                    ))}
                </div>
            </div>
            {selectedAchievement && (
                <AchievementDetailsModal
                    key={selectedAchievement.title}
                    achievement={selectedAchievement}
                    opener={openerRef}
                    onClosed={() => setSelectedAchievement(null)}
                />
            )}
        </section>
    );
}
