import { NavLink, Outlet } from "react-router-dom";
import { navigation } from "../data/site";
import { useEffect, useRef } from "react";

const navLinkClass = ({ isActive }) =>
    [
        "px-4 py-2 text-[20px] font-kumbh transition",
        isActive ? "text-accent" : "text-muted hover:text-ink",
    ].join(" ");

export default function RootLayout() {
    const lastScrollY = useRef(0);
    const isHovering = useRef(false);

    useEffect(() => {
        const header = document.querySelector("header");

        const onScroll = () => {
            if (isHovering.current) return;

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                header.style.transform = "translateY(-90px)";
            } else {
                header.style.transform = "translateY(0)";
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-canvas text-primary">
            <header className="pointer-events-none fixed top-12 left-0 right-0 z-50 transition-transform duration-300">
                <nav className="pointer-events-auto mx-auto w-fit rounded-full bg-white/80 px-16 py-3 shadow-soft backdrop-blur">
                    <div className="flex items-center gap-6">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={navLinkClass}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            </header>

            <div
                className="fixed left-56 right-56 h-28 z-40 rounded-full"
                onMouseEnter={() => {
                    isHovering.current = true;
                    document.querySelector("header").style.transform =
                        "translateY(0)";
                }}
                onMouseLeave={() => {
                    isHovering.current = false;
                }}
            />

            <main className="relative flex min-h-[100svh] m-0 p-0 items-center justify-center flex-col overflow-hidden bg-canvas">
                <Outlet />
            </main>
        </div>
    );
}
