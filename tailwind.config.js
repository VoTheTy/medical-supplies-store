/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'SF Pro Display',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                ],
            },
            colors: {
                apple: {
                    gray: '#f5f5f7',
                    dark: '#1d1d1f',
                    blue: '#2997ff',
                    blueHover: '#147ce5',
                    text: '#1d1d1f',
                    textMuted: '#86868b',
                }
            }
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: ["light"], // Force light theme to match Apple aesthetic
    },
}
