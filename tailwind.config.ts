/** @type {import('tailwindcss').Config} */

export default{
    content: [
        './packages/common/**/*.{js,ts,jsx,tsx}',
        './apps/booking-app/**/*.{js,ts,jsx,tsx}',
        './apps/landing-page/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
