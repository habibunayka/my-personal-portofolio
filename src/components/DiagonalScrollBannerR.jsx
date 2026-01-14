import { useEffect, useRef } from "react";
import { animate } from "animejs";
import StarIcon from "./icon/StarIcon";

export default function DiagonalScrollBannerR() {
    const textRef = useRef(null);
    const currentX = useRef(0);
    const lastScrollY = useRef(window.scrollY);
    const animRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const contentWidth = el.scrollWidth / 2;

        const onScroll = () => {
            const delta = window.scrollY - lastScrollY.current;
            lastScrollY.current = window.scrollY;

            currentX.current -= delta * 0.6;

            if (currentX.current >= contentWidth) {
                currentX.current = 0;
            }
            if (currentX.current <= 0) {
                currentX.current = contentWidth;
            }

            if (animRef.current) animRef.current.pause();

            animRef.current = animate(el, {
                translateX: -currentX.current,
                duration: 250,
                easing: "ease-out",
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="relative h-40 z-20 mt-10 py-10">
            <div className="absolute left-[-10%] w-[120%] rotate-[-4deg] bg-primary py-6">
                <div
                    ref={textRef}
                    className="flex gap-20 whitespace-nowrap text-white text-lg font-semibold"
                >
                    {/* 🔁 DUPLIKASI KONTEN */}
                    {[...Array(2)].map((_, group) =>
                        Array.from({ length: 10 }).map((_, i) => (
                            <span
                                key={`${group}-${i}`}
                                className="flex font-kumbh items-center gap-2"
                            >
                                <StarIcon />
                                Fullstack Developer
                            </span>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

