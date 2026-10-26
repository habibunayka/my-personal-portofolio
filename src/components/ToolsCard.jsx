export default function ToolsCard({
    delay = 0,
    title,
    desc,
    tags,
    icon,
    active = false,
    onHover,
    onLeave,
}) {
    return (
        <div
            data-reveal="up"
            style={{ "--reveal-delay": `${delay}ms` }}
            onTouchStart={onHover}
            onTouchEnd={onLeave}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={`tools-card ${active ? "is-active" : ""} group relative overflow-hidden rounded-xl border-2 p-5 py-8 sm:p-6 sm:py-12 cursor-default
                        border-primary transition-all duration-700 bg-white drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]
                        ${
                            active
                                ? "text-white shadow-[-17px_19px_0px_#FB8A2E]"
                                : "text-primary hover:shadow-[-17px_19px_0px_#FB8A2E]"
                        }`}
        >
            <div
                className={`absolute inset-0 bg-linear-orange transition-opacity duration-500
                ${active ? "opacity-100" : "opacity-0"}`}
            />

            <div className="relative z-10">
                <div
                    className={`mb-6 transition-all duration-300
                    ${
                        active
                            ? "text-white"
                            : "text-primary group-hover:text-white"
                    }`}
                >
                    {icon}
                </div>

                <h3 className="mb-6 text-2xl font-fredoka font-extrabold text-primary leading-none text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)] sm:text-3xl">
                    {title}
                </h3>

                <p
                    className={`mb-5 text-sm font-fredoka leading-relaxed sm:text-base
                    ${active ? "text-white" : ""}`}
                >
                    {desc}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`rounded-full px-3 py-1 text-xs font-fredoka transition-all sm:text-sm
                            ${
                                active
                                    ? "tool-tag border border-white text-white"
                                    : "tool-tag border border-primary text-primary"
                            }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
