export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-center justify-center">    
            <div className="relative w-fit mx-auto select-none text-center">
                <div className="relative blur-[4px]">
                    <img
                        src="/assets/icons/bootstrap.svg"
                        alt="bootstrap"
                        className="absolute w-24 h-24 -left-[280px] top-[-50px] rotate-[-19.11deg]"
                    />
                </div>
                <div className="relative blur-[5.3px]">
                    <img
                        src="/assets/icons/css.svg"
                        alt="css"
                        className="absolute w-40 h-40 -right-[280px] top-[-70px] rotate-[16.04deg]"
                    />
                </div>
                <div className="relative blur-sm">
                    <img
                        src="/assets/icons/typescript.svg"
                        alt="css"
                        className="absolute w-24 h-24 -left-[270px] top-[420px] rotate-[27.19deg]"
                    />
                </div>
                <div className="relative">
                    <img
                        src="/assets/color-palette.png"
                        alt="css"
                        className="absolute -right-[220px] top-[200px] rotate-[16.04deg]"
                    />
                </div>

                <h1 className="relative w-[820px] h-[300px] z-20 mx-auto font-baloo font-extrabold leading-none text-primary text-stroke-white drop-shadow-[0_4px_20px_rgba(255,161,19,0.63)]">
                    <span className="absolute left-[0px] top-[0px] text-[300px] rotate-[0.21deg]">P</span>
                    <span className="absolute left-[130px] top-[120px] text-[128px] rotate-[3.17deg]">o</span>
                    <span className="absolute left-[200px] top-[140px] text-[128px] rotate-[4.25deg]">R</span>
                    <span className="absolute left-[230px] -top-[10px] text-[300px] rotate-[2.56deg]">T</span>
                    <span className="absolute left-[345px] top-[130px] text-[128px] rotate-[8.02deg]">o</span>
                    <span className="absolute left-[420px] top-[145px] text-[128px] rotate-[-5.45deg]">f</span>
                    <span className="absolute left-[475px] top-[145px] text-[128px] rotate-[2.43deg]">o</span>
                    <span className="absolute left-[540px] top-[0px] text-[300px] rotate-[-3.84deg]">L</span>
                    <span className="absolute left-[695px] top-[140px] text-[128px] rotate-[2.43deg]">i</span>
                    <span className="absolute left-[735px] top-[145px] text-[128px] rotate-[-5.45deg]">o</span>
                </h1>

                <div className="absolute left-[-290px] bottom-[-10px] rotate-[-3.63deg] z-10 hidden md:block">
                    <div className="absolute inset-0 rounded-xl bg-primary blur-[14px] opacity-60" />
                    <div className="relative flex gap-4 items-center rounded-xl bg-white px-5 py-6 border-2 border-primary shadow-lg">
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                            <img
                                src="/assets/mahiru.svg"
                                alt="avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="font-fredoka pr-11 text-left">
                            <p className="text-2xl font-semibold text-primary leading-tight">
                                Fullstack
                                <br />
                                developer
                            </p>
                            <p className="text-md text-primary mt-1">
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
                            src="/assets/cursor.svg"
                            alt=""
                            className="absolute -bottom-8 -right-8 w-8 h-8"
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center gap-7 font-baloo font-extrabold text-[45px] leading-none text-primary text-stroke-white drop-shadow-[0_4px_20px_rgba(255,161,19,0.63)] mt-2">
                    <div>Habib</div>
                    <div>Shiina</div>
                </div>
            </div>
            
        </section>
    );
}
