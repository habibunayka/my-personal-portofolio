import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { projects } from "../data/projects";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import ProjectBackground from "../components/ProjectBackground";
import ProjectCard from "../components/ProjectCard";

function GithubConfirmationModal({ opener, onClose }) {
    const dialogRef = useRef(null);
    const cancelRef = useRef(null);

    useLayoutEffect(() => {
        const dialog = dialogRef.current;
        const returnFocus = opener.current;
        dialog.showModal();
        cancelRef.current.focus({ preventScroll: true });
        return () => {
            if (dialog.open) dialog.close();
            if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
        };
    }, [opener]);

    const openGithub = () => {
        window.open("https://github.com/habibunayka", "_blank", "noopener,noreferrer");
        onClose();
    };

    return createPortal(
        <dialog ref={dialogRef} className="project-modal project-confirmation-modal"
            aria-modal="true" aria-labelledby="github-confirmation-title"
            onCancel={event => { event.preventDefault(); onClose(); }}>
            <div className="project-modal-header">
                <h2 id="github-confirmation-title">Open GitHub projects?</h2>
                <button type="button" className="project-modal-close project-confirmation-close" aria-label="Close confirmation" onClick={onClose}>
                    <X size={28} strokeWidth={3.5} aria-hidden="true" />
                </button>
            </div>
            <div className="project-modal-content">
                <p>View all projects on Habibunayka&apos;s GitHub profile in a new tab?</p>
                <div className="project-confirmation-actions">
                    <button ref={cancelRef} type="button" className="project-confirmation-cancel" onClick={onClose}>Cancel</button>
                    <button type="button" className="project-confirmation-open" onClick={openGithub}>Open GitHub</button>
                </div>
            </div>
        </dialog>,
        document.body
    );
}

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [githubConfirmationOpen, setGithubConfirmationOpen] = useState(false);
    const openerRef = useRef(null);
    const githubOpenerRef = useRef(null);
    const openProject = (project, event) => {
        openerRef.current = event.currentTarget;
        setSelectedProject(project);
    };

    return (
        <section id="projects" aria-labelledby="projects-heading" className="section-space relative bg-white overflow-hidden">
            <ProjectBackground />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

            <div className="section-shell relative z-10">
                <div data-reveal="up" className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 id="projects-heading" className="section-title text-[48px] md:text-[72px] font-extrabold font-baloo leading-none text-primary text-stroke-white drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                            My Latest Project
                        </h2>
                        <p className="section-subtitle mt-2 text-[24px] md:text-[32px] font-semibold font-baloo text-primary text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                            and tools techstack
                        </p>
                    </div>

                    <button type="button" onClick={event => {
                        githubOpenerRef.current = event.currentTarget;
                        setGithubConfirmationOpen(true);
                    }}
                        className="self-start md:self-auto rounded-full bg-primary px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105">
                        View All Project
                    </button>
                </div>

                <div id="project-list" className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} {...project} delay={(index % 3) * 80} onOpen={(event) => openProject(project, event)} />
                    ))}
                </div>
            </div>
            {selectedProject && <ProjectDetailsModal key={selectedProject.id} project={selectedProject}
                opener={openerRef} onClosed={() => setSelectedProject(null)} />}
            {githubConfirmationOpen && <GithubConfirmationModal opener={githubOpenerRef} onClose={() => setGithubConfirmationOpen(false)} />}
        </section>
    );
}
