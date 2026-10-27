import { useEffect, useRef, useState } from "react";
import CursorTooltip from "../components/CursorTooltip";
import useHeroCardOpening from "../hooks/useHeroCardOpening";

const annotationContent = {
    bootstrap: {
        title: "Bootstrap",
        description: "A responsive UI toolkit for building consistent layouts quickly.",
        code: '<button class="btn btn-primary">Start</button>',
        accent: "bootstrap",
    },
    css: {
        title: "CSS",
        description: "The styling language that shapes responsive, expressive interfaces.",
        code: ".card { display: grid; }",
        accent: "css",
    },
    typescript: {
        title: "TypeScript",
        description: "JavaScript with types for safer, clearer, scalable applications.",
        code: "const greeting: string = 'Hello';",
        accent: "typescript",
    },
};

function HeroAnnotation({ type, children }) {
    const content = annotationContent[type];
    return <CursorTooltip
        className={`hero-decoration ${type === "css" ? "css-icon" : type} relative cursor-default`}
        label={content.title}
        popupClassName={`hero-annotation-${type}`}
        content={<><strong>{content.title}</strong><span>{content.description}</span><code>{content.code}</code></>}>
        {children}
    </CursorTooltip>;
}

function PaletteAnnotation() {
    const [status, setStatus] = useState("");
    const resetRef = useRef(0);
    const mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;
        return () => { mountedRef.current = false; clearTimeout(resetRef.current); };
    }, []);
    const copyColor = async () => {
        clearTimeout(resetRef.current);
        try {
            await navigator.clipboard.writeText("#FFA113");
            if (!mountedRef.current) return;
            setStatus("Copied");
        } catch {
            if (!mountedRef.current) return;
            setStatus("Copy unavailable — #FFA113");
        }
        resetRef.current = setTimeout(() => setStatus(""), 1800);
    };
    return <CursorTooltip className="hero-decoration palette relative cursor-default" label="Palette accent" interactive
        popupClassName="hero-annotation-palette"
        content={<>
            <strong>Mahiru's Warmth</strong>
            <span>A warm orange accent inspired by Mahiru's gentle, angelic charm.</span>
            <div className="hero-color-value my-1"><i aria-hidden="true" />#FFA113 <small>RGB 255, 161, 19</small></div>
            <button type="button" onClick={copyColor}>Copy HEX</button>
            <span role="status">{status}</span>
        </>}>
        <img src="/assets/color-palette.png" alt="Color palette"
            className="hero-decoration-art absolute -right-[220px] top-[200px] rotate-[16.04deg]" />
    </CursorTooltip>;
}

export default function HeroSection() {
    const cardRef = useRef(null);
    const cursorRef = useRef(null);
    useHeroCardOpening(cardRef, cursorRef);

    return (
        <section id="home" aria-labelledby="portfolio-title" className="hero-section relative flex items-center justify-center">    
            <div className="hero-composition relative mx-auto select-none text-center">
                <HeroAnnotation type="bootstrap">
                    <img
                        src="/assets/icons/bootstrap.svg"
                        alt=""
                        className="hero-decoration-art absolute w-24 h-24 -left-[280px] top-[-50px] rotate-[-19.11deg]"
                    />
                </HeroAnnotation>
                <HeroAnnotation type="css" >
                    <img
                        src="/assets/icons/css.svg"
                        alt=""
                        className="hero-decoration-art absolute w-40 h-40 -right-[280px] top-[-70px] rotate-[16.04deg]"
                    />
                </HeroAnnotation>
                <HeroAnnotation type="typescript">
                    <img
                        src="/assets/icons/typescript.svg"
                        alt=""
                        className="hero-decoration-art absolute w-24 h-24 -left-[270px] top-[420px] rotate-[27.19deg]"
                    />
                </HeroAnnotation>
                <PaletteAnnotation />

                <h1 id="portfolio-title" aria-label="Portfolio" data-reveal="fade" className="hero-title relative w-[820px] h-[300px] z-20 mx-auto font-baloo font-extrabold leading-none text-primary text-stroke-white drop-shadow-[0_4px_20px_rgba(255,161,19,0.63)]">
                    <span className="hero-letter" aria-hidden="true" style={{ left: "0.00000000%", top: "0.00000000%", fontSize: "2.34375em", transform: "rotate(0.21deg)" }}>P</span>
                    <span className="hero-letter" aria-hidden="true" style={{ left: "15.85365854%", top: "40.00000000%", fontSize: "1em", transform: "rotate(3.17deg)" }}>o</span>
                    <span className="hero-letter" aria-hidden="true" style={{ left: "24.39024390%", top: "46.66666667%", fontSize: "1em", transform: "rotate(4.25deg)" }}>R</span>
                    <span className="hero-letter" aria-hidden="true" style={{ left: "28.04878049%", top: "-3.33333333%", fontSize: "2.34375em", transform: "rotate(2.56deg)" }}>T</span>
                    <span className="hero-letter" aria-hidden="true" style={{ left: "42.07317073%", top: "43.33333333%", fontSize: "1em", transform: "rotate(8.02deg)" }}>o</span>
                    <span className="hero-letter" aria-hidden="true" style={{ left: "51.21951220%", top: "48.33333333%", fontSize: "1em", transform: "rotate(-5.45deg)" }}>f</span>
                    <span className="hero-letter" aria-hidden="true" style={{ left: "57.92682927%", top: "48.33333333%", fontSize: "1em", transform: "rotate(2.43deg)" }}>o</span>
                    <span className="hero-letter" aria-hidden="true" style={{ left: "65.85365854%", top: "0.00000000%", fontSize: "2.34375em", transform: "rotate(-3.84deg)" }}>L</span>
                    <span className="hero-letter" aria-hidden="true" style={{ left: "84.75609756%", top: "46.66666667%", fontSize: "1em", transform: "rotate(2.43deg)" }}>i</span>
                    <span className="hero-letter" aria-hidden="true" style={{ left: "89.63414634%", top: "48.33333333%", fontSize: "1em", transform: "rotate(-5.45deg)" }}>o</span>
                </h1>

                <CursorTooltip data-card-phase="closed" inert className="hero-profile absolute left-[-290px] bottom-[-10px] rotate-[-3.63deg] z-10"
                    label="Fullstack developer, Web developer with an Angelic touch" popupClassName="hero-annotation-profile"
                    content={<><strong>Shiina Mahiru</strong><span>Inspired by Mahiru's gentle warmth, bringing a thoughtful touch to every line of code and every user experience.</span></>}>
                    <div className="hero-profile-glow absolute inset-0 rounded-xl bg-primary blur-[14px] opacity-60" />
                    <div ref={cardRef} className="hero-profile-card relative flex gap-4 items-center rounded-xl bg-white px-5 py-6 border-2 border-primary">
                        <div className="hero-profile-content w-24 h-24 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                            <img
                                src="/assets/mahiru.svg"
                                alt="Mahiru illustration" width="96" height="96"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="hero-profile-content font-fredoka pr-11 text-left">
                            <p className="text-2xl font-semibold text-primary leading-tight">
                                Fullstack
                                <br />
                                developer
                            </p>
                            <p className="hero-tagline text-md text-primary mt-1">
                                Web developer with
                                <br />
                                an Angelic touch
                            </p>
                        </div>

                        {[
                            "top-[-8px] left-[-8px]",
                            "top-[-8px] left-1/2 translate-x-[-50%]",
                            "top-[-8px] right-[-8px]",
                            "bottom-[-8px] left-[-8px]",
                            "bottom-[-8px] left-1/2 translate-x-[-50%]",
                            "bottom-[-8px] right-[-8px]",
                        ].map((pos, i) => (
                            <span
                                key={i}
                                className={`absolute ${pos} w-4 h-4 rounded-full bg-white border-2 border-primary`}
                            />
                        ))}

                        <img
                            ref={cursorRef}
                            src="/assets/cursor.svg"
                            alt=""
                            className="hero-profile-cursor absolute -bottom-8 -right-8 w-8 h-8"
                        />
                    </div>
                </CursorTooltip>

                <div data-reveal="fade" style={{ "--reveal-delay": "80ms" }} className="hero-name flex justify-center items-center gap-7 font-baloo font-extrabold text-[45px] leading-none text-primary text-stroke-white drop-shadow-[0_4px_20px_rgba(255,161,19,0.63)] mt-2">
                    <div>Habib</div>
                    <div>Shiina</div>
                </div>
            </div>
            
        </section>
    );
}
