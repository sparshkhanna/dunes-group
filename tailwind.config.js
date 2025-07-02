/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                paragraph: ['Francy', 'serif'],
            },
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
                grape: {
                    light: '#F5E9FF', // Very pale grape (background)
                    DEFAULT: '#A259E6', // Main grape
                    dark: '#8238B3', // Deep grape
                },
                indigo: {
                    light: '#E0E7FF', // Pale indigo
                    DEFAULT: '#6366F1', // Main indigo
                    dark: '#3D0066', // Deep indigo
                },
                background: {
                    DEFAULT: '#FCFCFF', // Appealing white
                },
            },
            backgroundImage: theme => ({
                'gradient-grape-indigo': 'linear-gradient(90deg, #F5E9FF 0%, #A259E6 50%, #6366F1 100%)',
                'gradient-indigo-grape': 'linear-gradient(90deg, #6366F1 0%, #A259E6 100%)',
                'gradient-white-grape': 'linear-gradient(90deg, #FCFCFF 0%, #F5E9FF 100%)',
            }),
        },
    },
    plugins: [],
} 