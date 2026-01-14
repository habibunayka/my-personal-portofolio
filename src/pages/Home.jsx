import DiagonalScrollBannerL from "../components/DiagonalScrollBannerL";
import DiagonalScrollBannerR from "../components/DiagonalScrollBannerR";
import AboutSection from "../sections/AboutSection";
import CloudSection from "../sections/CloudSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectSection";
import ToolsSection from "../sections/ToolsSection";

export default function Home() {
    return (
        <div className="relative flex min-h-[100svh] m-0 p-0 items-center justify-center flex-col overflow-hidden bg-canvas">
            <span className="absolute -left-[clamp(100px,18vw,160px)] top-[30vh] -translate-y-1/2 w-[clamp(240px,60vw,627px)] h-[clamp(320px,70vw,790px)] rounded-full bg-primary/25 blur-[clamp(90px,18vw,200px)] pointer-events-none" />
            <span className="absolute -left-[clamp(130px,22vw,190px)] top-[32vh] -translate-y-1/2 w-[clamp(240px,60vw,627px)] h-[clamp(320px,70vw,790px)] rounded-full bg-primary/25 blur-[clamp(90px,18vw,200px)] pointer-events-none" />
            <span className="absolute -right-[clamp(60px,12vw,140px)] top-[36vh] -translate-y-1/2 w-[clamp(240px,60vw,627px)] h-[clamp(320px,70vw,790px)] rounded-full bg-primary/25 blur-[clamp(90px,18vw,200px)] pointer-events-none" />
            <span className="absolute -right-[clamp(120px,18vw,200px)] top-[42vh] -translate-y-[12%] w-[clamp(240px,60vw,627px)] h-[clamp(320px,70vw,790px)] rounded-full bg-primary/25 blur-[clamp(90px,18vw,200px)] pointer-events-none" />
            <HeroSection />
            <CloudSection />
            <div className="relative flex flex-col w-full">
                <div className="pointer-events-none absolute inset-0 bg-grid-fade translate-y-[1%]" />
                <AboutSection />
                <DiagonalScrollBannerL />
                <ToolsSection />
                <DiagonalScrollBannerR />
                <ProjectsSection />
            </div>
        </div>
    );
}
