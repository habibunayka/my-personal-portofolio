import React, { useState } from "react";

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

function AchievementRow({ data, expanded, onToggle }) {
  return (
    <div
      className={`rounded-2xl border-4 border-amber-400 overflow-hidden bg-white shadow-sm transition-all duration-300 ${
        expanded ? "h-auto" : "h-36"
      }`}
    >
      <div className="flex items-center gap-6 px-6 py-4">
        <div className="flex-shrink-0 text-amber-600">
          <TrophyIcon className="w-14 h-14" />
        </div>

        <div className="flex-1">
          <h3 className="text-[24px] md:text-[32px] font-extrabold font-baloo leading-none text-stroke-white text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
            {data.title}
          </h3>
          <p className="mt-1 text-amber-600 font-semibold">{data.subtitle}</p>
        </div>

        <div className="flex-shrink-0">
          <button
            onClick={onToggle}
            className="px-6 py-2 rounded-full bg-amber-400 text-white font-medium"
          >
            {expanded ? "Close" : "Details"}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-amber-200 px-8 py-6">
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
                <p className="mt-3 text-sm text-amber-700">{data.tech}</p>
              </div>

              <div>
                <Pill variant="dashed">Event Date</Pill>
                <p className="mt-3 text-sm text-amber-700">{data.date}</p>
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col items-center gap-4">
              <div className="self-start">
                <Pill>Documentation</Pill>
              </div>

              <img
                src={data.image || achievementPhoto}
                alt="achievement"
                className="w-full max-w-xs rounded-2xl ring-4 ring-amber-50"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AchievementSection() {
  const [openIndex, setOpenIndex] = useState(2); // show third as expanded like the design

  const items = [
    {
      title: "1st Place – Web Development Competition",
      subtitle: "Web Development Competition",
      description:
        "Won first place for building a fullstack web application with a modern user interface and an efficient backend system.",
      tech: "Laravel (backend framework), PHP, MySQL, HTML, CSS, JavaScript.",
      date: "27 September 2024",
      image: achievementPhoto,
    },
    {
      title: "1st Place – Web Development Competition",
      subtitle: "Web Development Competition",
      description: "Short description for the second item.",
      tech: "React, Tailwind, Vite",
      date: "10 August 2024",
    },
    {
      title: "1st Place – Web Development Competition",
      subtitle: "Web Development Competition",
      description:
        "This project focused on creating a responsive UI and a stable backend that handled fingerprint-based attendance and reporting.",
      tech: "Laravel, React, MySQL",
      date: "27 September 2024",
      image: achievementPhoto,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 flex max-w-6xl mx-auto flex-col justify-center px-6 md:px-16 py-12 space-y-8">
        <div>
          <h1 className="text-[48px] md:text-[96px] font-extrabold font-baloo leading-none text-stroke-white text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
            ACHIEVEMENT
          </h1>
        </div>

        <div className="grid gap-6">
          {items.map((it, idx) => (
            <AchievementRow
              key={idx}
              data={it}
              expanded={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
