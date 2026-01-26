import React from "react";

function SocialIcon({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 backdrop-blur-md shadow-md transition hover:scale-110"
        >
            {children}
        </a>
    );
}

export default function ContactSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            <div className="absolute inset-0 bg-grid opacity-40" />

            <div className="relative z-10 flex items-center justify-center px-6 md:px-16 py-20">
                <div className="w-full max-w-6xl rounded-[40px] bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 p-2 shadow-xl">
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 rounded-[36px] bg-white/40 backdrop-blur-xl p-10 md:p-14">
                        {/* LEFT */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h1 className="text-[40px] md:text-[64px] font-extrabold font-baloo leading-none text-stroke-white text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                                    My Social Media
                                </h1>

                                <p className="mt-6 max-w-md text-sm md:text-base font-kumbh text-amber-700">
                                    I’m open to being contacted and will use the
                                    information you provide to connect with you
                                    and discuss ideas, projects, or
                                    collaboration opportunities.
                                </p>

                                <p className="mt-4 font-kumbh font-semibold text-amber-800">
                                    gmail: habibunayka@gmail.com
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <SocialIcon href="#">
                                    <img
                                        src="/icons/whatsapp.svg"
                                        alt="whatsapp"
                                        className="h-7 w-7"
                                    />
                                </SocialIcon>
                                <SocialIcon href="#">
                                    <img
                                        src="/icons/linkedin.svg"
                                        alt="linkedin"
                                        className="h-7 w-7"
                                    />
                                </SocialIcon>
                                <SocialIcon href="#">
                                    <img
                                        src="/icons/instagram.svg"
                                        alt="instagram"
                                        className="h-7 w-7"
                                    />
                                </SocialIcon>
                                <SocialIcon href="#">
                                    <img
                                        src="/icons/facebook.svg"
                                        alt="facebook"
                                        className="h-7 w-7"
                                    />
                                </SocialIcon>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="rounded-3xl bg-white/50 backdrop-blur-lg p-8 shadow-lg">
                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-xl border border-white/60 bg-white/70 px-4 py-3 font-kumbh text-sm outline-none focus:ring-2 focus:ring-amber-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-xl border border-white/60 bg-white/70 px-4 py-3 font-kumbh text-sm outline-none focus:ring-2 focus:ring-amber-400"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full resize-none rounded-xl border border-white/60 bg-white/70 px-4 py-3 font-kumbh text-sm outline-none focus:ring-2 focus:ring-amber-400"
                                />

                                <button
                                    type="submit"
                                    className="mt-2 rounded-full bg-amber-400 py-3 font-kumbh font-semibold text-white transition hover:bg-amber-500"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
