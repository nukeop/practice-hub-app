/** @type {import('tailwindcss').Config} */
import sharedConfig from '../../tailwind.config';

export default {
    ...sharedConfig,
    content: [
        ...sharedConfig.content,
        './apps/booking-app/**/*.{js,ts,jsx,tsx}'
    ],
};
