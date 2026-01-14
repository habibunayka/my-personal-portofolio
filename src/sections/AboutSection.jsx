export default function AboutSection() {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden w-full">
            <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:flex-row md:gap-16 lg:gap-28 lg:py-24">
                <div className="relative flex-1 rounded-3xl border-2 border-orange-400 bg-white p-6 shadow-lg sm:p-8">
                    <div className="mb-6 flex flex-wrap gap-4 sm:gap-8">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <span
                                key={i}
                                className="h-5 w-5 rounded-full border-2 border-orange-400 sm:h-7 sm:w-7"
                            />
                        ))}
                    </div>

                    <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-baloo font-extrabold leading-tight text-orange-500">
                        Hi, I’m Habib —
                        <br />A Fullstack Developer.
                    </h1>

                    <p className="mt-6 text-base font-fredoka leading-relaxed text-orange-500 sm:text-lg">
                        <span className="relative inline-block">
                            <span className="relative z-10">A Developer</span>
                            <span className="absolute -left-0 bottom-[-3px] -z-0 h-[1.8em] w-full rotate-[-1.8deg] border-primary border-dashed border-2 bg-[#FFE313] opacity-60" />
                        </span>{" "}
                        Focused On Building End-To-End Web Solutions With Strong
                        Architecture, Clean Code, And Scalable Systems.
                    </p>

                    <p className="mt-4 text-base font-fredoka leading-relaxed text-orange-500 sm:text-lg">
                        Experienced In{" "}
                        <span className="bg-primary text-white">
                            Frontend And Backend
                        </span>{" "}
                        Development, I Transform Ideas Into Functional,
                        High-Performance Applications With Attention To Detail
                        And Long-Term Maintainability.
                    </p>
                </div>

                <div className="relative flex justify-center md:justify-end">
                    <div className="relative">
                        <img
                            src="/assets/habib.png"
                            alt="Habib"
                            className="h-auto w-[min(80vw,378px)] max-w-full aspect-[3/4] object-cover grayscale contrast-125 filter drop-shadow-[12px_-14px_0_#FFA113] md:drop-shadow-[22px_-25px_0_#FFA113]"
                        />
                        <div className="absolute inset-0 bg-orange-400 opacity-80 mix-blend-multiply" />
                    </div>

                    <div className="relative mt-6 w-[min(90vw,420px)] sm:w-[min(80vw,480px)] lg:absolute lg:top-80 lg:-right-28 lg:w-[574px]">
                        <svg viewBox="0 0 574 252" className="w-full">
                            <path
                                d="M531.689 3.12695L5.28027 156.691L119.245 249.127L570.28 156.691L531.689 3.12695Z"
                                fill="#FFA113"
                                stroke="white"
                                strokeWidth="5"
                            />
                        </svg>

                        <span className="absolute inset-0 top-6 flex rotate-[-15deg] items-center justify-center font-baloo text-[clamp(1.4rem,4.5vw,3rem)] font-bold text-white opacity-90 sm:top-10">
                            ABOUT ME
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
