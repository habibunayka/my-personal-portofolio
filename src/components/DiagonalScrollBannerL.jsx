import { useEffect, useRef } from "react";
import { animate } from "animejs";
import StarIcon from "./icon/StarIcon";

export default function DiagonalScrollBannerL() {
    const textRef = useRef(null);
    const currentX = useRef(0);
    const lastScrollY = useRef(window.scrollY);
    const animRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            const delta = window.scrollY - lastScrollY.current;
            lastScrollY.current = window.scrollY;

            currentX.current -= delta * 0.6;

            if (animRef.current) animRef.current.pause();

            animRef.current = animate(textRef.current, {
                translateX: currentX.current,
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
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span
                            key={i}
                            className="flex font-kumbh items-center gap-2"
                        >
                            <StarIcon />
                            Fullstack Developer
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
