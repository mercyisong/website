/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                back: '#1F1600',
                about: '#40310E',
                active: '#FCA800',
                values: '#392900',
            }
        },
    },
    plugins: [],
}
