/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
};
