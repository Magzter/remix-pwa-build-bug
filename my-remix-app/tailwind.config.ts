import type {Config} from 'tailwindcss'

const {nextui} = require("@nextui-org/react");

export default {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            }
        },
        extend: {},
        // that is animation class
        animation: {
            fadeGreen: 'fadeOutGreen 7s ease-in-out',
            fadeRed: 'fadeOutRed 7s ease-in-out',
        },

        // that is actual animation
        keyframes: theme => ({
            fadeOutGreen: {
                '0%': {
                    color: theme('colors.green.300'),
                    opacity: 1
                },
                '100%': {
                    color: theme('colors.transparent'),
                    opacity: 0
                },
            },
            fadeOutRed: {
                '0%': {
                    color: theme('colors.red.300'),
                    opacity: 1
                },
                '100%': {
                    color: theme('colors.transparent'),
                    opacity: 0
                },
            },
        }),
    },
    darkMode: "class",
    plugins: [nextui()]
} satisfies Config

