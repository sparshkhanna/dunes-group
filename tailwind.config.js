/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    dark: '#C78D17', // Dark goldenrod
                    metallic: '#D7AC28', // Gold (metallic)
                },
                purple: {
                    pale: '#EFD9F7', // Pale purple
                    grape: '#8238B3', // Grape
                    indigo: '#3D0066', // Indigo
                },
            },
        },
    },
    plugins: [],
} 