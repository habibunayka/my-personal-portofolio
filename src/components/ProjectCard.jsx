import { ArrowRight } from "lucide-react";

export default function ProjectCard({ title, subtitle, image, stacks = [] }) {
    return (
        <div className="group relative rounded-[28px] border-4 border-primary bg-white p-4 shadow-[0_8px_0_#FFA113] transition hover:-translate-y-2">
            {/* IMAGE */}
            <div className="overflow-hidden rounded-[20px]">
                <img
                    src={image}
                    alt={title}
                    className="h-[260px] w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            <div className="mt-4 flex flex-col gap-4">
                {/* STACK */}
                <div className="flex flex-wrap gap-2">
                    {stacks.map((stack, i) => (
                        <span
                            key={i}
                            className="
                                rounded-full
                                bg-primary
                                px-3
                                py-1
                                text-xs
                                font-bold
                                font-baloo
                                text-white
                                shadow
                                transition
                                group-hover:scale-105
                            "
                        >
                            {stack}
                        </span>
                    ))}
                </div>

                {/* TITLE + CTA */}
                <div className="flex items-end justify-between">
                    <div>
                        <h3 className="font-bold text-xl font-baloo text-primary text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                            {title} :
                        </h3>
                        <p className="text-md font-semibold font-baloo text-primary text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                            {subtitle}
                        </p>
                    </div>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:scale-110">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
