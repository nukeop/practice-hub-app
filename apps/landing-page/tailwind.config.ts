/** @type {import('tailwindcss').Config} */
import sharedConfig from '../../tailwind.config';

export default {
    ...sharedConfig,
    content: [
        ...sharedConfig.content,
        './apps/landing-page/**/*.{js,ts,jsx,tsx}'
    ],
};
