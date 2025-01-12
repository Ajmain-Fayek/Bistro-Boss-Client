/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                overlay: "#15151580",
            },
            fontFamily: {
                Cinzel: "Cinzel",
                Inter: "Inter",
            },
        },
    },
    plugins: [require("daisyui")],
};
