/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "linear-orange":
                    "linear-gradient(180deg, rgba(255,161,19,1) 21%, rgba(255,161,19,0.79) 51%, rgba(255,137,19,0.63) 100%)",
            },
            colors: {
                primary: "#FFA113",
                canvas: "#FFFCFC",
                ink: "#201d1a",
                muted: "#5f564d",
            },
            fontFamily: {
                baloo: ['"Baloo 2"', "cursive"],
                kumbh: ['"Kumbh Sans"'],
                fredoka: ["'Fredoka'", "cursive"],
            },
            boxShadow: {
                soft: "0 20px 45px rgba(32, 29, 26, 0.12)",
            },
        },
    },
    plugins: [],
};
