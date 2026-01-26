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
        <section className="relative min-h-[100vh] bg-white flex items-center justify-center">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <img src="/assets/background-contact.svg" alt="background" className="absolute inset-0 w-full h-fit object-cover" />
            <div className="relative z-10 flex w-full items-center justify-center px-6 md:px-16">
                <div className="w-full max-w-6xl rounded-[40px] bg-[#FFA11350]  p-2 shadow-xl">
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 rounded-[36px] backdrop-blur-xl p-10 md:p-14">
                        {/* LEFT */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h1 className="text-[40px] md:text-[64px] font-extrabold font-baloo leading-none text-stroke-white mb-8 text-primary drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                                    My Social Media
                                </h1>

                                <p className="mt-2 text-[16px] md:text-[20px] mb-6 font-semibold font-baloo text-primary text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                                    I’m open to being contacted and will use the
                                    information you provide to connect with you
                                    and discuss ideas, projects, or
                                    collaboration opportunities.
                                </p>

                                <p className="mt-2 text-[16px] md:text-[20px] font-semibold font-baloo text-primary text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">
                                    gmail: habibunayka@gmail.com
                                </p>
                            </div>

                            <div className="mt-6 flex gap-4">
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
                        <div className="rounded-3xl bg-white/15 backdrop-blur-lg p-8 shadow-lg">
                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-xl border-2 border-white/60 bg-white/15 px-4 py-3 font-kumbh text-sm font-semibold text-white placeholder-white outline-none focus:ring-2 focus:ring-amber-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-xl border-2 border-white/60 bg-white/15 px-4 py-3 font-kumbh font-semibold text-sm text-white placeholder-white outline-none focus:ring-2 focus:ring-amber-400"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full resize-none rounded-xl border-2 border-white/60 bg-white/15 px-4 py-3 font-kumbh text-sm placeholder-white text-white outline-none focus:ring-2 focus:ring-amber-400"
                                />

                                <button
                                    type="submit"
                                    className="mt-2 rounded-full bg-primary py-3 font-kumbh font-semibold text-white transition duration-300 hover:drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]"
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
