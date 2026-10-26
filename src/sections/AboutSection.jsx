import CursorTooltip from "../components/CursorTooltip";

export default function AboutSection() {
    return (
        <section id="about" aria-labelledby="about-heading" className="relative flex min-h-screen items-center justify-center overflow-hidden w-full">
            <div className="about-layout section-shell section-space relative flex flex-col-reverse xl:flex-row">
                <div data-reveal="up" style={{ "--reveal-delay": "80ms" }} className="about-copy relative flex-1 rounded-2xl md:rounded-3xl border-2 border-orange-400 bg-white p-5 sm:p-6 md:p-8 md:mx-20 xl:mx-0 shadow-lg">
                    <div className="notebook-holes mb-4 md:mb-6 grid w-full grid-cols-12 overflow-hidden">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="flex justify-center">
                                <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-orange-400" />
                            </div>
                        ))}
                    </div>

                    <h2 id="about-heading"
                        className="about-heading mt-8 font-baloo font-extrabold leading-tight text-orange-500
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        Hi, I’m Habib —
                        <br className="hidden sm:block" />
                        <span className="block sm:inline">
                            A Fullstack Developer.
                        </span>
                    </h2>

                    <p
                        className="mt-4 sm:mt-5 md:mt-6 font-fredoka leading-relaxed text-orange-500
        text-base sm:text-lg"
                    >
                        <span className="relative inline-block">
                            <span className="relative z-10">A Developer</span>
                            <span className="absolute left-0 bottom-[-2px] sm:bottom-[-3px] -z-0 h-[1.6em] sm:h-[1.8em] w-full rotate-[-1.8deg] border-primary border-dashed border-2 bg-[#FFE313] opacity-60" />
                        </span>{" "}
                        Focused On Building End-To-End Web Solutions With Strong
                        Architecture, Clean Code, And Scalable Systems.
                    </p>

                    <p
                        className="mt-3 sm:mt-4 font-fredoka leading-relaxed text-orange-500
        text-base sm:text-lg"
                    >
                        Experienced In{" "}
                        <span className="bg-primary px-1 text-white">
                            Frontend And Backend
                        </span>{" "}
                        Development, I Transform Ideas Into Functional,
                        High-Performance Applications With Attention To Detail
                        And Long-Term Maintainability.
                    </p>
                </div>

                <div data-reveal="up" className="about-portrait relative flex justify-center xl:justify-end">
                    <CursorTooltip className="about-photo relative cursor-default" label="About Habib" popupClassName="about-photo-tooltip"
                        content={<><strong>Hi, I’m Habib</strong><span>A Fullstack Developer. Focused On Building End-To-End Web Solutions With Strong Architecture, Clean Code, And Scalable Systems.</span></>}>
                        <img
                            src="/assets/habib.png"
                            alt="Habib" width="378" height="495" loading="lazy" decoding="async"
                            className="h-[495px] w-[378px] object-cover grayscale contrast-125 filter drop-shadow-[22px_-25px_0_#FFA113] cursor-default"
                        />
                        <div className="about-photo-tint pointer-events-none absolute inset-0 bg-orange-400 opacity-80 mix-blend-multiply" />
                    </CursorTooltip>

                    <div data-reveal="upper-right" className="about-ribbon absolute top-80 -right-28 w-[574px]">
                        <svg viewBox="0 0 574 252" className="w-full">
                            <path
                                d="M531.689 3.12695L5.28027 156.691L119.245 249.127L570.28 156.691L531.689 3.12695Z"
                                fill="#FFA113"
                                stroke="white"
                                strokeWidth="5"
                            />
                        </svg>

                        <span className="absolute inset-0 top-10 flex rotate-[-15deg] items-center justify-center font-baloo text-5xl font-bold text-white opacity-90">
                            ABOUT ME
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
